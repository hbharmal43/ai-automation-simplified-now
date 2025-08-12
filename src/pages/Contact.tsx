import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Mail, MessageCircle, Calendar } from "lucide-react";
import Header from "@/components/Header";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessType: "",
    workflow: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="bg-primary/10 border-primary/20 text-primary font-semibold px-4 py-2 mb-4">Contact</Badge>
            <h1 className="text-5xl font-display font-bold text-foreground mb-4">Let's Automate Your Workload</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Reach out for a free automation audit, workflow demo, or just to ask questions.</p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Get Your Free Automation Audit</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Tell us about your current workflow and we'll show you exactly how automation can save you hours every week.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <Card className="bg-card border-border shadow-card">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl text-foreground">Contact Form</CardTitle>
                  <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours.</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-foreground">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="mt-1"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-foreground">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="mt-1"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="businessType" className="text-sm font-medium text-foreground">Business Type</Label>
                      <Input
                        id="businessType"
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleInputChange}
                        placeholder="e.g., Consultant, E-commerce, Agency"
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="workflow" className="text-sm font-medium text-foreground">What tasks take up most of your time?</Label>
                      <Textarea
                        id="workflow"
                        name="workflow"
                        value={formData.workflow}
                        onChange={handleInputChange}
                        placeholder="Describe your daily workflow or the tasks you'd like to automate..."
                        rows={4}
                        className="mt-1"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-3">
                      Get My Free Automation Audit
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Card className="bg-card border-border shadow-card h-full">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-foreground">Other Ways to Reach Us</CardTitle>
                  <p className="text-muted-foreground">Prefer a different communication method? We're available through multiple channels.</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg border border-border bg-background/40 p-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Email</div>
                        <div className="text-muted-foreground">hello@autogenix.ai</div>
                        <div className="text-sm text-muted-foreground">Response within 2 hours</div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-border bg-background/40 p-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <MessageCircle className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">WhatsApp</div>
                        <div className="text-muted-foreground">+1 (469) XXX-XXXX</div>
                        <div className="text-sm text-muted-foreground">Instant replies during business hours</div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-border bg-background/40 p-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-foreground">Schedule a Call</div>
                        <div className="text-muted-foreground mb-2">Book a 15-minute discovery call</div>
                        <Button variant="outline" className="w-full">Book via Calendly</Button>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-border bg-background/40 p-4">
                    <h4 className="font-semibold text-foreground mb-2">Why Choose Quoraflo?</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center"><div className="w-2 h-2 bg-primary rounded-full mr-3"></div><span>15-minute response time</span></div>
                      <div className="flex items-center"><div className="w-2 h-2 bg-primary rounded-full mr-3"></div><span>Free automation audit</span></div>
                      <div className="flex items-center"><div className="w-2 h-2 bg-primary rounded-full mr-3"></div><span>Custom solutions for your business</span></div>
                      <div className="flex items-center"><div className="w-2 h-2 bg-primary rounded-full mr-3"></div><span>Ongoing support available</span></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Footer removed for consistent site-wide layout */}
    </div>
  );
};

export default Contact;
