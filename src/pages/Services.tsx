import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, FileSpreadsheet, Bot, Repeat, Package, Mail, BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const Services = () => {
  const services = [
    {
      icon: <FileSpreadsheet className="h-12 w-12 text-green-600" />,
      title: "Form Intake → Sheet",
      description: "Automatically sync customer or lead form responses to a Google Sheet, Airtable, or Notion.",
    },
    {
      icon: <Bot className="h-12 w-12 text-blue-600" />,
      title: "AI Report Summaries",
      description: "Summarize long documents, meeting notes, or feedback into clear, actionable reports using GPT.",
    },
    {
      icon: <Repeat className="h-12 w-12 text-purple-600" />,
      title: "Content Repurposing",
      description: "Turn blog posts, client notes, or social comments into usable content across platforms.",
    },
    {
      icon: <Package className="h-12 w-12 text-orange-600" />,
      title: "Order Tracking Notifications",
      description: "Track purchases and update customers with automated emails or WhatsApp messages.",
    },
    {
      icon: <Mail className="h-12 w-12 text-red-600" />,
      title: "CRM + Email Setup",
      description: "New lead? Automatically add them to your CRM and send a welcome sequence.",
    },
    {
      icon: <BarChart className="h-12 w-12 text-indigo-600" />,
      title: "Dashboards & Metrics",
      description: "Get a real-time overview of your key metrics in a visual dashboard — no manual entry needed.",
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
              Automation Services That Save You Hours
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help small businesses, creators, and teams eliminate manual tasks using AI-powered workflows tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">💡 Workflow Automations We Offer</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our proven automation templates or let us build something custom for your unique workflow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale bg-white shadow-lg border border-gray-100 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="text-center pb-6">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gray-50 rounded-2xl">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-slate-900 mb-4">{service.title}</CardTitle>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
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

export default Services;
