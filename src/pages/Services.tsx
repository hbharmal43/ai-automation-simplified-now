import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, FileSpreadsheet, Bot, Repeat, Package, Mail, BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const Services = () => {
  const services = [
    {
      icon: <FileSpreadsheet className="h-8 w-8 text-primary" />,
      title: "Form Intake → Sheet",
      description: "Automatically sync customer or lead form responses to a Google Sheet, Airtable, or Notion.",
    },
    {
      icon: <Bot className="h-8 w-8 text-primary" />,
      title: "AI Report Summaries",
      description: "Summarize long documents, meeting notes, or feedback into clear, actionable reports using GPT.",
    },
    {
      icon: <Repeat className="h-8 w-8 text-primary" />,
      title: "Content Repurposing",
      description: "Turn blog posts, client notes, or social comments into usable content across platforms.",
    },
    {
      icon: <Package className="h-8 w-8 text-primary" />,
      title: "Order Tracking Notifications",
      description: "Track purchases and update customers with automated emails or WhatsApp messages.",
    },
    {
      icon: <Mail className="h-8 w-8 text-primary" />,
      title: "CRM + Email Setup",
      description: "New lead? Automatically add them to your CRM and send a welcome sequence.",
    },
    {
      icon: <BarChart className="h-8 w-8 text-primary" />,
      title: "Dashboards & Metrics",
      description: "Get a real-time overview of your key metrics in a visual dashboard — no manual entry needed.",
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="bg-primary/10 border-primary/20 text-primary font-semibold px-4 py-2 mb-4">Services</Badge>
            <h1 className="text-5xl font-display font-bold text-foreground mb-4">Automation Services That Save You Hours</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">We eliminate manual work with AI-powered workflows tailored to your operations.</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Workflow Automations We Offer</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our proven automation templates or let us build something custom for your unique workflow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale bg-card border-border shadow-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="text-center pb-6">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-primary/10 rounded-2xl">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-foreground mb-4">{service.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Get This Automation
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Automation CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Don't see your workflow listed?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            We build custom automations. Let's talk about your specific process.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4">
              Get a Free Audit
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
