import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowLeft, FileSpreadsheet, Bot, Repeat, Package, Mail, BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const Services = () => {
  const services = [
    {
      icon: <FileSpreadsheet className="h-12 w-12 text-green-600" />,
      title: "Form Intake → Sheet",
      description: "Automatically sync customer or lead form responses to a Google Sheet, Airtable, or Notion.",
      useCase: "Great for: Coaches, realtors, freelancers",
      example: "Typeform → Google Sheets → Email notification"
    },
    {
      icon: <Bot className="h-12 w-12 text-blue-600" />,
      title: "AI Report Summaries",
      description: "Summarize long documents, meeting notes, or feedback into clear, actionable reports using GPT.",
      useCase: "Great for: Marketing teams, HR, project managers",
      example: "Google Sheet → GPT summary → Weekly digest email"
    },
    {
      icon: <Repeat className="h-12 w-12 text-purple-600" />,
      title: "Content Repurposing",
      description: "Turn blog posts, client notes, or social comments into usable content across platforms.",
      useCase: "Great for: Personal brands, agencies, creators",
      example: "Notion blog → GPT → LinkedIn & Instagram captions"
    },
    {
      icon: <Package className="h-12 w-12 text-orange-600" />,
      title: "Order Tracking Notifications",
      description: "Track purchases and update customers with automated emails or WhatsApp messages.",
      useCase: "Great for: E-commerce or local services",
      example: "Shopify order → Custom status tracker → Customer email alert"
    },
    {
      icon: <Mail className="h-12 w-12 text-red-600" />,
      title: "CRM + Email Setup",
      description: "New lead? Automatically add them to your CRM and send a welcome sequence.",
      useCase: "Great for: Consultants, agencies",
      example: "Google Form → Notion CRM → Email series via Gmail"
    },
    {
      icon: <BarChart className="h-12 w-12 text-indigo-600" />,
      title: "Dashboards & Metrics",
      description: "Get a real-time overview of your key metrics in a visual dashboard — no manual entry needed.",
      useCase: "Great for: Founders, business owners",
      example: "Sheet → VO.dev dashboard + GPT summary"
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
              Automation Services That Save You Hours
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help small businesses, creators, and teams eliminate manual tasks using AI-powered workflows tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">💡 Workflow Automations We Offer</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale bg-white shadow-lg border border-gray-100 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gray-50 rounded-2xl">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-slate-900 mb-3">{service.title}</CardTitle>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-sm font-medium text-green-900 mb-1">✅ {service.useCase}</div>
                    <div className="text-xs text-green-700">✅ Example: {service.example}</div>
                  </div>
                  
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    Get This Automation
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Automation CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">💬 Don't see your workflow listed?</h2>
          <p className="text-xl text-gray-600 mb-8">
            We build custom automations. Let's talk about your specific process.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-4">
              Get a Free Audit
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
