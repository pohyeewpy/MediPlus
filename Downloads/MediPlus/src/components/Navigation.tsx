import React from 'react';
import { ChevronDown, Globe, User } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import logo from "@/assets/mediplusLogo.png";
import { Link, NavLink } from 'react-router-dom';

const linkBase = "text-foreground hover:text-primary transition-colors font-medium";
const active = "text-primary";

/* ===== SEA-LION (hardcoded) + translate helpers ===== */
const SEA_LION_ENDPOINT = 'https://api.sea-lion.ai/v1/chat/completions';
const SEA_LION_KEY = 'sk-Y8L5mwaeYGh4PSl2xXDbAA';

// SE Asia + region labels (menu shows labels only)
const LANGS = [
  { label: 'Indonesian', code: 'id' },
  { label: 'Malay', code: 'ms' },
  { label: 'Filipino', code: 'tl' },   // Tagalog
  { label: 'Thai', code: 'th' },
  { label: 'Vietnamese', code: 'vi' },
  { label: 'Burmese', code: 'my' },
  { label: 'Khmer', code: 'km' },
  { label: 'Lao', code: 'lo' },
  { label: 'Tetum', code: 'tet' },
  { label: 'Chinese', code: 'zh' },
  { label: 'Tamil', code: 'ta' },
  { label: 'English', code: 'en' },
];

function collectTextNodes(root: Node): Text[] {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const t = node.textContent?.trim() ?? '';
      if (!t) return NodeFilter.FILTER_REJECT;
      const el = node.parentElement;
      if (!el) return NodeFilter.FILTER_REJECT;
      const tag = el.tagName.toLowerCase();
      if (['script','style','code','pre','noscript'].includes(tag)) return NodeFilter.FILTER_REJECT;
      const cs = window.getComputedStyle(el);
      if (cs.display === 'none' || cs.visibility === 'hidden') return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  } as any);
  const out: Text[] = [];
  for (let n = walker.nextNode() as Text | null; n; n = walker.nextNode() as Text | null) out.push(n);
  return out;
}
function chunk<T>(arr: T[], size: number): T[][] {
  const res: T[][] = [];
  for (let i = 0; i < arr.length; i += size) res.push(arr.slice(i, i + size));
  return res;
}
async function translateStrings(items: string[], target: string, signal?: AbortSignal): Promise<string[]> {
  const system = {
    role: 'system',
    content:
`You translate short UI strings precisely.
- Translate to the target language.
- Keep numbers, punctuation, emojis, and brand names.
- Return ONLY a JSON array of strings, same order/length as input.`,
  };
  const user = { role: 'user', content: JSON.stringify({ target, items }) };
  const res = await fetch(SEA_LION_ENDPOINT, {
    method: 'POST',
    signal,
    headers: {
      accept: 'application/json',
      authorization: `Bearer ${SEA_LION_KEY}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: 'aisingapore/Llama-SEA-LION-v3-70B-IT',
      temperature: 0.1,
      max_completion_tokens: 400,
      messages: [system, user],
    }),
  });
  if (!res.ok) throw new Error(`SEA LION error ${res.status}`);
  const data = await res.json();
  const text = data?.choices?.[0]?.message?.content ?? '[]';
  try {
    const arr = JSON.parse(text);
    return Array.isArray(arr) && arr.length === items.length ? arr : items;
  } catch {
    return items;
  }
}
async function withTimeout<T>(fn: (signal?: AbortSignal) => Promise<T>, ms = 25000): Promise<T> {
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), ms);
  try { return await fn(ctl.signal); }
  finally { clearTimeout(timer); }
}
async function translateUniques(items: string[], target: string, batchSize = 150, concurrency = 4) {
  const batches = chunk(items, batchSize);
  const out: string[] = [];
  for (let i = 0; i < batches.length; i += concurrency) {
    const slice = batches.slice(i, i + concurrency);
    const results = await Promise.all(slice.map(b => withTimeout((signal) => translateStrings(b, target, signal))));
    for (const r of results) out.push(...r);
  }
  return out;
}
async function translatePage(target: string) {
  const roots: Element[] = [
    document.querySelector('nav')!,
    document.querySelector('header')!,
    document.querySelector('main')!,
    document.getElementById('root')!,
    document.body
  ].filter(Boolean) as Element[];
  const nodes = Array.from(new Set(roots.flatMap(r => collectTextNodes(r))));
  if (!nodes.length) return;

  const originals = nodes.map(n => n.textContent || '');
  const indexMap = new Map<string, number[]>();
  originals.forEach((s, i) => {
    const arr = indexMap.get(s) || [];
    arr.push(i);
    indexMap.set(s, arr);
  });
  const unique = Array.from(indexMap.keys());
  const translated = await translateUniques(unique, target, 150, 4);
  unique.forEach((u, j) => {
    const t = translated[j];
    for (const idx of indexMap.get(u)!) nodes[idx].textContent = t;
  });
}
/* ===== end translate helpers ===== */

const Navigation = () => {
  const healthMenuItems = [
    { title: 'MedBot', description: 'AI-powered medical assistance', to: '/medbot' },
    { title: 'Health Overview', description: 'Your complete health dashboard', to: '/HealthOverview' },
    { title: 'Medication', description: 'Manage your medications', to: '/medication' },
    { title: 'Vitals', description: 'Track vital signs', to: '/vitals' },
  ];
  const mentalHealthMenuItems = [
    { title: 'Resources', description: 'Mental health resources', to: '/mental-health/resources' },
    { title: 'Mental Health Overview', description: 'Track your mental wellness', to: '/mental-health' },
    { title: 'Reflection Journal', description: 'Daily reflection and journaling', to: '/journal' },
    { title: 'MindfulBot', description: 'AI mindfulness companion', to: '/mindfulbot' },
  ];

  const handleLanguage = async (code: string) => {
    document.body.style.cursor = 'progress';
    try { await translatePage(code); }
    catch (e) { console.error(e); alert('Translation failed. Please try again.'); }
    finally { document.body.style.cursor = 'default'; }
  };

  // Reusable classes for purple hover / active
  const itemHover =
    "hover:bg-purple-100/70 hover:text-purple-900 " +
    "focus:bg-purple-100/70 focus:text-purple-900 " +
    "data-[highlighted]:bg-purple-100 data-[highlighted]:text-purple-900";

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo → landing */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg overflow-hidden shadow-none ring-0 border-0 focus-visible:outline-none">
              <img src={logo} alt="MediPlus logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-xl font-bold text-primary">MediPlus</span>
          </Link>

          {/* Main Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/home" className={({ isActive }) => [linkBase, isActive ? active : ""].join(" ")}>
              Home
            </NavLink>

            {/* Health Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors font-medium">
                  <span>Health</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              {/* width like your reference */}
              <DropdownMenuContent className="nav-dropdown w-70">
                {healthMenuItems.map((item) => (
                  <DropdownMenuItem key={item.title} asChild>
                    <Link
                      to={item.to}
                      className={`p-3 rounded-md focus:outline-none flex flex-col text-left ${itemHover}`} 
                    >
                      {/* force title line 1, description line 2 */}
                      <div className="font-semibold text-foreground text-base">{item.title}</div>
                      <div className="text-sm text-muted-foreground mt-1 whitespace-normal leading-snug">
                        {item.description}
                      </div>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <NavLink to="/exercise" className={({ isActive }) => [linkBase, isActive ? active : ""].join(" ")}>
              Exercise & Wellness
            </NavLink>

            {/* Mental Health Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors font-medium">
                  <span>Mental Health</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="nav-dropdown w-50">
                {mentalHealthMenuItems.map((item) => (
                  <DropdownMenuItem key={item.title} asChild>
                    <Link
                      to={item.to}
                      className={`p-3 rounded-md focus:outline-none flex flex-col text-left ${itemHover}`}
                    >
                      <div className="font-semibold text-foreground text-base">{item.title}</div>
                      <div className="text-sm text-muted-foreground mt-1 whitespace-normal leading-snug">
                        {item.description}
                      </div>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <NavLink to="/questions" className={({ isActive }) => [linkBase, isActive ? active : ""].join(" ")}>
              Questions for Doctor
            </NavLink>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Languages dropdown (labels only) */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="hidden sm:flex">
                  <Globe className="w-4 h-4 mr-2" />
                  Languages
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="nav-dropdown w-35">
                {LANGS.map((l) => (
                  <DropdownMenuItem
                    key={l.code}
                    className={`py-2 px-3 text-left whitespace-normal break-words leading-snug rounded-md ${itemHover}`}
                    onClick={() => handleLanguage(l.code)}
                  >
                    {l.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* User Profile */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
                  <User className="w-5 h-5" />
                  <span className="hidden sm:block font-medium">Bella Swan</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="nav-dropdown w-38">
                <DropdownMenuItem className={`p-3 rounded-md ${itemHover}`}>Profile Settings</DropdownMenuItem>
                <DropdownMenuItem className={`p-3 rounded-md ${itemHover}`} asChild>
                  <Link to="/home">Health Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className={`p-3 rounded-md ${itemHover}`}>Sign Out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
