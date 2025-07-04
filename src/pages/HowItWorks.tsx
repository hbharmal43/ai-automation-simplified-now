import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ArrowLeft, Phone, Search, Wrench, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      icon: <Phone className="h-8 w-8 text-orange-600" />,
      title: "Free Discovery Call",
      description: "We'll hop on a 15-min call to understand your business and daily tasks."
    },
    {
      number: "2",
      icon: <Search className="h-8 w-8 text-blue-600" />,
      title: "Process Mapping",
      description: "We review your tools (Sheets, Forms, CRM, etc.) and identify where AI or automation can help."
    },
    {
      number: "3",
      icon: <Wrench className="h-8 w-8 text-purple-600" />,
      title: "Build & Deliver",
      description: "We create a fully functional workflow using tools like N8n, GPT, Sheets, and more."
    },
    {
      number: "4",
      icon: <Rocket className="h-8 w-8 text-green-600" />,
      title: "Launch & Support",
      description: "You approve the flow → we activate it. We also offer optional monthly support."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-orange-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in">
            <Link to="/" className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
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
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">🛠️ Our 4-Step Automation Process</h2>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block mb-20">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2"></div>
              <div className="absolute top-1/2 left-0 h-1 bg-orange-600 transform -translate-y-1/2 w-1/4"></div>
              
              <div className="grid grid-cols-4 gap-8">
                {steps.map((step, index) => (
                  <div key={index} className="relative">
                    {/* Step Circle */}
                    <div className="flex justify-center mb-6">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl ${
                        index === 0 ? 'bg-orange-600' : 'bg-gray-300'
                      }`}>
                        {step.number}
                      </div>
                    </div>
                    
                    <Card className="text-center hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                      <CardHeader className="pb-3">
                        <div className="flex justify-center mb-3">
                          {step.icon}
                        </div>
                        <CardTitle className="text-lg">{step.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Steps */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <Card key={index} className="hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="flex flex-row items-center space-y-0 pb-4">
                  <div className="w-12 h-12 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold mr-4">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      {step.icon}
                      <CardTitle className="text-xl ml-3">{step.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
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
    </div>
  );
};

export default HowItWorks;
