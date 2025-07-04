
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Mail, MessageCircle, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-slate-900">AutoGenix</Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-orange-600 transition-colors">Home</Link>
            <Link to="/services" className="text-gray-600 hover:text-orange-600 transition-colors">Services</Link>
            <Link to="/how-it-works" className="text-gray-600 hover:text-orange-600 transition-colors">Process</Link>
            <Link to="/use-cases" className="text-gray-600 hover:text-orange-600 transition-colors">Use Cases</Link>
            <Link to="/contact" className="text-orange-600 font-medium">Contact</Link>
          </div>
          <Button className="bg-orange-600 hover:bg-orange-700 text-white">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-orange-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in">
            <Link to="/" className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              Let's Automate Your Workload
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Reach out for a free automation audit, workflow demo, or just to ask questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900">📬 Contact Form</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="businessType">Business Type</Label>
                      <Input
                        id="businessType"
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleInputChange}
                        placeholder="e.g., Consultant, E-commerce, Agency"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="workflow">What tasks take up most of your time?</Label>
                      <Textarea
                        id="workflow"
                        name="workflow"
                        value={formData.workflow}
                        onChange={handleInputChange}
                        placeholder="Describe your daily workflow or the tasks you'd like to automate..."
                        rows={4}
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-lg py-3">
                      Get My Free Automation Audit
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">📞 Alternate Contact</h2>
                </div>

                <Card className="hover-scale">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <Mail className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">📧 Email</div>
                        <div className="text-gray-600">hello@autogenix.ai</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-scale">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-green-100 rounded-lg">
                        <MessageCircle className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">📱 WhatsApp</div>
                        <div className="text-gray-600">+1 (469) XXX-XXXX</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-scale">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-purple-100 rounded-lg">
                        <Calendar className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">📅 Schedule a Call</div>
                        <Button variant="outline" className="mt-2">
                          Book a 15-minute call via Calendly
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <div className="bg-gradient-to-r from-orange-50 to-purple-50 p-6 rounded-lg">
                  <h3 className="font-bold text-slate-900 mb-4">Why Choose AutoGenix?</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div>✅ 15-minute response time</div>
                    <div>✅ Free automation audit</div>
                    <div>✅ Custom solutions for your business</div>
                    <div>✅ Ongoing support available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
