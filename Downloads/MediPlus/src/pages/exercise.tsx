import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, Heart, Leaf, Star, ArrowRight, Calendar, Users } from "lucide-react";
import React, { useMemo, useState } from "react";
import FurtherExercise from "@/components/FurtherExercise";
import Wellness from "@/components/Wellness";

const ExercisePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-wellness bg-clip-text text-transparent">
                Sea Wellness Connect
              </h1>
              <div className="hidden md:flex space-x-6">
                <a href="#exercise" className="text-foreground hover:text-primary transition-colors">Exercise</a>
                <a href="#wellness" className="text-foreground hover:text-primary transition-colors">Wellness</a>
                <a href="#programs" className="text-foreground hover:text-primary transition-colors">Programs</a>
                <a href="#community" className="text-foreground hover:text-primary transition-colors">Community</a>
              </div>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-background via-muted/30 to-accent/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <Badge className="bg-secondary text-secondary-foreground px-4 py-2" variant="secondary">
              🌊 Welcome to Sea Wellness Connect
            </Badge>
            
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary via-wellness to-secondary bg-clip-text text-transparent">
                Transform Your
              </span>
              <br />
              <span className="text-foreground">Body & Mind</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover the perfect balance of fitness and wellness with our comprehensive programs designed 
              to nurture your body, mind, and spirit through expert-guided experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Explore Programs
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center space-y-2">
                <Activity className="h-12 w-12 text-primary mx-auto" />
                <h3 className="text-xl font-semibold">Expert-Led Fitness</h3>
                <p className="text-muted-foreground">Professional trainers guide every workout</p>
              </div>
              <div className="text-center space-y-2">
                <Heart className="h-12 w-12 text-wellness mx-auto" />
                <h3 className="text-xl font-semibold">Mindful Wellness</h3>
                <p className="text-muted-foreground">Meditation and stress relief programs</p>
              </div>
              <div className="text-center space-y-2">
                <Users className="h-12 w-12 text-secondary-foreground mx-auto" />
                <h3 className="text-xl font-semibold">Community Support</h3>
                <p className="text-muted-foreground">Connect with like-minded individuals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section id="programs" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Featured Programs</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our most popular fitness and wellness programs, 
              carefully crafted to help you achieve your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Exercise Card */}
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-primary/10 to-wellness/10 p-8">
                <CardHeader className="p-0 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Activity className="h-8 w-8 text-primary" />
                    <Badge className="bg-primary text-primary-foreground">EXERCISE</Badge>
                  </div>
                  <CardTitle className="text-3xl mb-4">Fitness Programs</CardTitle>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    From high-intensity workouts to gentle yoga flows, our exercise programs 
                    are designed to challenge and inspire you at every fitness level.
                  </p>
                </CardHeader>
                
                <CardContent className="p-0">
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <Star className="h-5 w-5 text-wellness" />
                      <span>6 specialized exercise programs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-wellness" />
                      <span>Flexible scheduling options</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-wellness" />
                      <span>Group and individual sessions</span>
                    </div>
                  </div>
                  
                  <a href="#exercise">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-3">
                      Explore Exercise Programs
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </CardContent>
              </div>
            </Card>

            {/* Wellness Card */}
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-secondary/10 to-accent/10 p-8">
                <CardHeader className="p-0 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Leaf className="h-8 w-8 text-secondary-foreground" />
                    <Badge className="bg-secondary text-secondary-foreground">WELLNESS</Badge>
                  </div>
                  <CardTitle className="text-3xl mb-4">Wellness & Meditation</CardTitle>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Nurture your mental and spiritual well-being with our comprehensive 
                    meditation and wellness programs designed for inner peace.
                  </p>
                </CardHeader>
                
                <CardContent className="p-0">
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <Star className="h-5 w-5 text-wellness" />
                      <span>6 guided wellness programs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-wellness" />
                      <span>Daily meditation sessions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Heart className="h-5 w-5 text-wellness" />
                      <span>Stress relief & mindfulness</span>
                    </div>
                  </div>
                  
                  <a href="#wellness">
                    <Button className="w-full bg-secondary hover:bg-secondary/90 text-lg py-3">
                      Discover Wellness Programs
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Exercise Section */}
      <section id="exercise" className="scroll-mt-24">
        <FurtherExercise />
      </section>
      {/* Wellness Section */}
      <section id="wellness">
        <Wellness />
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 px-6 bg-gradient-to-r from-muted/30 to-accent/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Wellness Community</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Connect with thousands of members who are transforming their lives through 
            fitness and wellness. Share your journey, find motivation, and grow together.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
              <div className="text-muted-foreground">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-wellness mb-2">50+</div>
              <div className="text-muted-foreground">Expert Instructors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary-foreground mb-2">12</div>
              <div className="text-muted-foreground">Program Categories</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-wellness hover:bg-wellness/90 text-lg px-8">
              Join Community
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border/50 py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-wellness bg-clip-text text-transparent">
              Sea Wellness Connect
            </h3>
            <p className="text-muted-foreground mb-6">
              Transform your body and mind with our comprehensive wellness programs.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ExercisePage;