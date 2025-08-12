
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Phone, Search, Wrench, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      icon: <Phone className="h-8 w-8 text-white" />,
      title: "Free Discovery Call",
      description: "We'll hop on a 15-min call to understand your business and daily tasks.",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      number: "2",
      icon: <Search className="h-8 w-8 text-white" />,
      title: "Process Mapping",
      description: "We review your tools (Sheets, Forms, CRM, etc.) and identify where AI or automation can help.",
      gradient: "from-green-500 to-teal-600"
    },
    {
      number: "3",
      icon: <Wrench className="h-8 w-8 text-white" />,
      title: "Build & Deliver",
      description: "We create a fully functional workflow using tools like N8n, GPT, Sheets, and more.",
      gradient: "from-orange-500 to-red-600"
    },
    {
      number: "4",
      icon: <Rocket className="h-8 w-8 text-white" />,
      title: "Launch & Support",
      description: "You approve the flow → we activate it. We also offer optional monthly support.",
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="bg-primary/10 border-primary/20 text-primary font-semibold px-4 py-2 mb-4">Process</Badge>
            <h1 className="text-5xl font-display font-bold text-foreground mb-4">Here's How It Works</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">From first chat to full automation — we keep it simple.</p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our 4-Step Automation Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">A proven methodology that transforms your manual tasks into intelligent automation workflows.</p>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block mb-20">
            <div className="relative">
              {/* Timeline Line with Gradient */}
              <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-primary rounded-full opacity-60"></div>
              
              <div className="grid grid-cols-4 gap-8">
                {steps.map((step, index) => (
                  <div key={index} className="relative">
                    {/* Simple Step Circle - White with Gray Border */}
                    <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl shadow-card relative z-10">
                        {step.number}
                      </div>
                    </div>
                    
                    <Card className={`text-center hover-scale animate-fade-in bg-card border-border shadow-card transform transition-all duration-300`} style={{ animationDelay: `${index * 0.2}s` }}>
                      <CardHeader className="pb-3">
                        <div className="flex justify-center mb-3">
                          <div className="p-3 rounded-xl bg-primary/10">
                            {React.cloneElement(step.icon as any, { className: 'h-6 w-6 text-primary' })}
                          </div>
                        </div>
                        <CardTitle className="text-lg text-foreground">{step.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </CardContent>
                    </Card>
                    
                    {/* Arrow between steps */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute -right-4 top-8 text-white z-20">
                        <ArrowRight className="h-6 w-6" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Steps */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className={`hover-scale animate-fade-in bg-card border-border shadow-card transform transition-all duration-300`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader className="flex flex-row items-center space-y-0 pb-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mr-4">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <div className="p-2 rounded-lg bg-primary/10 mr-3">
                          {React.cloneElement(step.icon as any, { className: "h-6 w-6 text-primary" })}
                        </div>
                        <CardTitle className="text-xl text-foreground">{step.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
                
                {/* Mobile Arrow */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-4">
                    <div className="text-gray-400">
                      <ArrowRight className="h-6 w-6 rotate-90" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Maintenance plans start at just $99/month</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Want a one-time build? We do that too.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4">
              Book a Call
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
