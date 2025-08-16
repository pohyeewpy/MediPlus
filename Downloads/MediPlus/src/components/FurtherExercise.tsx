import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Target, Star } from "lucide-react";
import exerciseHero from "@/assets/exercise-hero.jpg";

const exercisePrograms = [
  {
    id: 1,
    name: "HIIT Cardio Blast",
    description: "High-intensity interval training to boost your metabolism and burn calories effectively.",
    duration: "30 min",
    difficulty: "Advanced",
    participants: "1-15",
    equipment: "Body weight",
    benefits: ["Burns calories", "Improves cardio", "Builds endurance"],
    rating: 4.8
  },
  {
    id: 2,
    name: "Strength Training",
    description: "Build lean muscle mass with progressive resistance training using weights and equipment.",
    duration: "45 min",
    difficulty: "Intermediate",
    participants: "1-10",
    equipment: "Dumbbells, Bands",
    benefits: ["Builds muscle", "Increases strength", "Improves bone density"],
    rating: 4.9
  },
  {
    id: 3,
    name: "Yoga Flow",
    description: "Gentle flowing movements that improve flexibility, balance, and mindful breathing.",
    duration: "60 min",
    difficulty: "Beginner",
    participants: "1-20",
    equipment: "Yoga mat",
    benefits: ["Improves flexibility", "Reduces stress", "Enhances balance"],
    rating: 4.7
  },
  {
    id: 4,
    name: "Pilates Core",
    description: "Focused core strengthening exercises that improve posture and stability.",
    duration: "40 min",
    difficulty: "Intermediate",
    participants: "1-12",
    equipment: "Mat, Props",
    benefits: ["Strengthens core", "Improves posture", "Increases stability"],
    rating: 4.8
  },
  {
    id: 5,
    name: "Dance Fitness",
    description: "Fun, energetic dance routines that make exercise feel like a celebration.",
    duration: "50 min",
    difficulty: "All levels",
    participants: "5-25",
    equipment: "None",
    benefits: ["Burns calories", "Improves coordination", "Boosts mood"],
    rating: 4.9
  },
  {
    id: 6,
    name: "Aqua Fitness",
    description: "Low-impact water-based exercises perfect for joint-friendly workouts.",
    duration: "45 min",
    difficulty: "All levels",
    participants: "5-15",
    equipment: "Pool equipment",
    benefits: ["Low impact", "Full body workout", "Joint friendly"],
    rating: 4.6
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner":
      return "bg-accent text-accent-foreground";
    case "Intermediate":
      return "bg-secondary text-secondary-foreground";
    case "Advanced":
      return "bg-primary text-primary-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const FurtherExercise: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-wellness bg-clip-text text-transparent">
                Exercise Programs
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Discover our comprehensive range of fitness programs designed to help you achieve your health goals. 
                From high-intensity workouts to gentle movements, we have something for everyone.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Start Your Journey
                </Button>
                <Button variant="outline" size="lg">
                  View Schedule
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={exerciseHero} 
                alt="Exercise equipment and wellness studio" 
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-wellness/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Exercise Programs Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Exercise Programs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our diverse selection of fitness programs, each designed by certified trainers 
              to deliver maximum results while keeping you motivated and engaged.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exercisePrograms.map((exercise) => (
              <Card key={exercise.id} className="group hover:shadow-lg transition-all duration-300 border-border/50">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {exercise.name}
                    </CardTitle>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-wellness text-wellness" />
                      <span className="text-sm font-medium">{exercise.rating}</span>
                    </div>
                  </div>
                  <Badge className={getDifficultyColor(exercise.difficulty)} variant="secondary">
                    {exercise.difficulty}
                  </Badge>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exercise.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{exercise.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{exercise.participants}</span>
                    </div>
                    <div className="flex items-center gap-2 col-span-2">
                      <Target className="h-4 w-4 text-primary" />
                      <span>{exercise.equipment}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Key Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exercise.benefits.map((benefit, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full mt-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    Join Program
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Fitness?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of members who have achieved their fitness goals with our expert-led programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-wellness hover:bg-wellness/90">
              Get Started Today
            </Button>
            <Button variant="outline" size="lg">
              Contact a Trainer
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FurtherExercise;