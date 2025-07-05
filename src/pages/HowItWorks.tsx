
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Phone, Search, Wrench, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      icon: <Phone className="h-8 w-8 text-gray-700" />,
      title: "Free Discovery Call",
      description: "We'll hop on a 15-min call to understand your business and daily tasks."
    },
    {
      number: "2",
      icon: <Search className="h-8 w-8 text-gray-700" />,
      title: "Process Mapping",
      description: "We review your tools (Sheets, Forms, CRM, etc.) and identify where AI or automation can help."
    },
    {
      number: "3",
      icon: <Wrench className="h-8 w-8 text-gray-700" />,
      title: "Build & Deliver",
      description: "We create a fully functional workflow using tools like N8n, GPT, Sheets, and more."
    },
    {
      number: "4",
      icon: <Rocket className="h-8 w-8 text-gray-700" />,
      title: "Launch & Support",
      description: "You approve the flow → we activate it. We also offer optional monthly support."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 via-orange-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              Here's How It Works
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From first chat to full automation — we keep it simple.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">🛠️ Our 4-Step Automation Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven methodology that transforms your manual tasks into intelligent automation workflows.
            </p>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block mb-20">
            <div className="relative">
              {/* Simple Timeline Line */}
              <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-300"></div>
              
              <div className="grid grid-cols-4 gap-8">
                {steps.map((step, index) => (
                  <div key={index} className="relative">
                    {/* Simple Step Circle */}
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center text-gray-700 font-bold text-xl shadow-sm">
                        {step.number}
                      </div>
                    </div>
                    
                    <Card className="text-center hover-scale animate-fade-in shadow-lg border-0 bg-gradient-to-b from-white to-gray-50" style={{ animationDelay: `${index * 0.2}s` }}>
                      <CardHeader className="pb-3">
                        <div className="flex justify-center mb-3">
                          <div className="p-3 rounded-xl bg-gray-100">
                            {step.icon}
                          </div>
                        </div>
                        <CardTitle className="text-lg">{step.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">{step.description}</p>
                      </CardContent>
                    </Card>
                    
                    {/* Arrow between steps */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute -right-4 top-8 text-gray-400">
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
                <Card className="hover-scale animate-fade-in shadow-lg border-0 bg-gradient-to-r from-white to-gray-50" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader className="flex flex-row items-center space-y-0 pb-4">
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-gray-300 text-gray-700 flex items-center justify-center font-bold mr-4">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <div className="p-2 rounded-lg bg-gray-100 mr-3">
                          {React.cloneElement(step.icon, { className: "h-6 w-6 text-gray-700" })}
                        </div>
                        <CardTitle className="text-xl">{step.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{step.description}</p>
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">🔧 Maintenance plans start at just $99/month</h2>
          <p className="text-xl text-gray-600 mb-8">
            Want a one-time build? We do that too.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-4">
              Book a Call
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-orange-400 mb-4">AutoGenix</div>
              <p className="text-gray-400">
                Enterprise-scale AI automation for modern businesses.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/services" className="hover:text-white transition-colors">Workflow Automation</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Data Processing</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">AI Integration</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Enterprise Security</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact</li>
                <li>Support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Documentation</li>
                <li>Case Studies</li>
                <li>Blog</li>
                <li>Community</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <div className="text-sm text-gray-500">
              © 2024 AutoGenix. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HowItWorks;
