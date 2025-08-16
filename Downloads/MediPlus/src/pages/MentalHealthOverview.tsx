import React from "react";
import { Button } from "@/components/ui/button";
import { Heart, Users, MessageCircle } from "lucide-react";
import mentalHealthIllustration from "@/assets/mental-health-illustration.png";

export default function MentalHealthOverview() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto w-full max-w-7xl px-6 pb-16 pt-4">
        {/* Headline */}
        <h1 className="text-center text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Healing from Within
        </h1>

        {/* 3-column layout */}
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* LEFT column */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left mt-12">
            <p className="max-w-md text-xl font-medium leading-relaxed text-slate-600">
              We believe in the power of inner healing. Our holistic approach
              addresses emotional well-being to create lasting positive change.
            </p>

            <div className="mt-8">
              <Button
                size="lg"
                className="rounded-2xl px-6 py-6 text-base font-semibold shadow-sm"
                style={{
                  background: "linear-gradient(90deg, #7C83FF 0%, #8F8CFF 100%)",
                }}
              >
                Get Started
              </Button>
            </div>

            <div className="mt-8 grid w-full max-w-md grid-cols-2 gap-4 sm:grid-cols-3">
              <StatTile
                icon={<Heart className="h-5 w-5" />}
                top="15+"
                bottom="Healing Programs"
              />
              <StatTile
                icon={<Users className="h-5 w-5" />}
                top="20+"
                bottom="Professionals & Therapists"
              />
              <StatTile
                icon={<MessageCircle className="h-5 w-5" />}
                top="30+"
                bottom="Community Sessions"
              />
            </div>
          </div>

          {/* MIDDLE column: Illustration */}
          <div className="flex items-start justify-center">
            <img
              src={mentalHealthIllustration}
              alt="Illustration of supportive mental health scene"
              className="w-full max-w-[520px] rounded-2xl object-contain"
            />
          </div>

          {/* RIGHT column */}
          <aside className="space-y-6">
            {/* Resources card */}
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-semibold tracking-tight text-slate-900">
                Mental Health Resources
              </h2>
              <blockquote className="mt-3 rounded-2xl bg-slate-50 p-4 text-sm leading-relaxed text-slate-700 ring-1 ring-slate-200">
                Discover over 100 trusted mental health resources, both online and offline, designed to support your well-being. Whether you’re seeking guidance,
                coping strategies, or community support, these carefully selected resources are trusted by many to help you navigate life’s challenges and
                prioritize your mental health.
                <div className="mt-4 text-right text-xs">
                  <a
                    href="/mental-health/resources"
                    className="text-slate-600 underline underline-offset-4"
                  >
                    Discover resources &gt;&gt;
                  </a>
                </div>
              </blockquote>
            </section>

            {/* Mindful bot card */}
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">Mindful bot</h2>
              <p className="mt-2 text-sm text-slate-600">
                Chat privately with our CBT-inspired bot to track moods, journal, and get gentle nudges.
              </p>
              <Button
                className="mt-4 w-full rounded-2xl py-6 font-medium shadow-sm"
                style={{
                  background: "linear-gradient(90deg, #7C83FF 0%, #8F8CFF 100%)",
                }}
              >
                Open Chat
              </Button>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}

/** Stat tile component */
function StatTile({
  icon,
  top,
  bottom,
}: {
  icon: React.ReactNode;
  top: string;
  bottom: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
        {icon}
      </div>
      <div>
        <div className="text-base font-semibold text-slate-900">{top}</div>
        <div className="text-xs text-slate-500">{bottom}</div>
      </div>
    </div>
  );
}
