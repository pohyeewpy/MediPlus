import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Heart, Brain, Leaf, Star, Play } from "lucide-react";
import meditationHero from "@/assets/meditation-hero.jpg";

const wellnessPrograms = [
  {
    id: 1,
    name: "Mindful Meditation",
    description: "Guided meditation sessions to reduce stress, improve focus, and cultivate inner peace through mindfulness practices.",
    duration: "20 min",
    type: "Meditation",
    level: "All levels",
    benefits: ["Reduces stress", "Improves focus", "Enhances well-being"],
    sessions: 12,
    rating: 4.9
  },
  {
    id: 2,
    name: "Breathing Techniques",
    description: "Learn powerful breathing methods to manage anxiety, increase energy, and promote relaxation.",
    duration: "15 min",
    type: "Breathwork",
    level: "Beginner",
    benefits: ["Manages anxiety", "Increases energy", "Promotes relaxation"],
    sessions: 8,
    rating: 4.8
  },
  {
    id: 3,
    name: "Body Scan Relaxation",
    description: "Progressive muscle relaxation and body awareness techniques for deep physical and mental restoration.",
    duration: "30 min",
    type: "Relaxation",
    level: "All levels",
    benefits: ["Deep relaxation", "Body awareness", "Better sleep"],
    sessions: 10,
    rating: 4.7
  },
  {
    id: 4,
    name: "Stress Relief Therapy",
    description: "Comprehensive stress management program combining meditation, movement, and cognitive techniques.",
    duration: "45 min",
    type: "Therapy",
    level: "Intermediate",
    benefits: ["Stress management", "Emotional balance", "Resilience building"],
    sessions: 15,
    rating: 4.9
  },
  {
    id: 5,
    name: "Nature Connection",
    description: "Outdoor mindfulness practices that connect you with nature for grounding and spiritual renewal.",
    duration: "60 min",
    type: "Outdoor",
    level: "All levels",
    benefits: ["Nature connection", "Grounding", "Spiritual renewal"],
    sessions: 6,
    rating: 4.8
  },
  {
    id: 6,
    name: "Sleep Meditation",
    description: "Gentle guided meditations and relaxation techniques designed to improve sleep quality and duration.",
    duration: "25 min",
    type: "Sleep",
    level: "Beginner",
    benefits: ["Better sleep", "Deep rest", "Sleep hygiene"],
    sessions: 14,
    rating: 4.9
  }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "Meditation":
      return "bg-primary text-primary-foreground";
    case "Breathwork":
      return "bg-secondary text-secondary-foreground";
    case "Relaxation":
      return "bg-accent text-accent-foreground";
    case "Therapy":
      return "bg-wellness text-wellness-foreground";
    case "Outdoor":
      return "bg-muted text-muted-foreground";
    case "Sleep":
      return "bg-primary/80 text-primary-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const Wellness = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Wellness & Meditation
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Nurture your mind, body, and spirit with our comprehensive wellness programs. 
                Find inner peace, reduce stress, and cultivate lasting well-being through expert-guided practices.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Begin Your Journey
                </Button>
                <Button variant="outline" size="lg">
                  Explore Programs
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={meditationHero} 
                alt="Peaceful meditation and wellness setting" 
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Wellness Programs Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Wellness Programs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover transformative wellness practices designed to restore balance, reduce stress, 
              and enhance your overall quality of life through mindful techniques.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wellnessPrograms.map((program) => (
              <Card key={program.id} className="group hover:shadow-lg transition-all duration-300 border-border/50">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {program.name}
                    </CardTitle>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-wellness text-wellness" />
                      <span className="text-sm font-medium">{program.rating}</span>
                    </div>
                  </div>
                  <Badge className={getTypeColor(program.type)} variant="secondary">
                    {program.type}
                  </Badge>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {program.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Play className="h-4 w-4 text-primary" />
                      <span>{program.sessions} sessions</span>
                    </div>
                    <div className="flex items-center gap-2 col-span-2">
                      <Brain className="h-4 w-4 text-primary" />
                      <span>{program.level}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Wellness Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.benefits.map((benefit, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full mt-4 bg-accent hover:bg-accent/90 text-accent-foreground">
                    Start Program
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness Benefits Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Wellness Programs?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the life-changing benefits of our scientifically-backed wellness practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-lg bg-card border border-border/50">
              <Heart className="h-12 w-12 text-wellness mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Stress Reduction</h3>
              <p className="text-sm text-muted-foreground">Lower cortisol levels and find calm in daily life</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-card border border-border/50">
              <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Mental Clarity</h3>
              <p className="text-sm text-muted-foreground">Improve focus and cognitive function</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-card border border-border/50">
              <Leaf className="h-12 w-12 text-accent-foreground mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Better Sleep</h3>
              <p className="text-sm text-muted-foreground">Enhance sleep quality and restoration</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-card border border-border/50">
              <Star className="h-12 w-12 text-secondary-foreground mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Overall Well-being</h3>
              <p className="text-sm text-muted-foreground">Achieve balance and life satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Wellness Journey Today</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Take the first step towards a more balanced, peaceful, and fulfilling life with our guided wellness programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              Free Trial Session
            </Button>
            <Button variant="outline" size="lg">
              Speak with a Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wellness;