import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageCircle, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
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
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 via-orange-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in">
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
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">📬 Get Your Free Automation Audit</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tell us about your current workflow and we'll show you exactly how automation can save you hours every week.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <Card className="shadow-xl">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl text-slate-900">📝 Contact Form</CardTitle>
                  <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700">Name</Label>
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
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
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
                      <Label htmlFor="businessType" className="text-sm font-medium text-gray-700">Business Type</Label>
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
                      <Label htmlFor="workflow" className="text-sm font-medium text-gray-700">What tasks take up most of your time?</Label>
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
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">📞 Other Ways to Reach Us</h3>
                  <p className="text-gray-600 mb-6">
                    Prefer a different communication method? We're available through multiple channels.
                  </p>
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
                        <div className="text-sm text-gray-500">Response within 2 hours</div>
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
                        <div className="text-sm text-gray-500">Instant replies during business hours</div>
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
                      <div className="flex-1">
                        <div className="font-medium text-slate-900">📅 Schedule a Call</div>
                        <div className="text-gray-600 mb-2">Book a 15-minute discovery call</div>
                        <Button variant="outline" className="w-full">
                          Book via Calendly
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <div className="bg-gradient-to-r from-orange-50 to-purple-50 p-6 rounded-lg">
                  <h4 className="font-bold text-slate-900 mb-4">Why Choose AutoGenix?</h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span>15-minute response time</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span>Free automation audit</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span>Custom solutions for your business</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span>Ongoing support available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

export default Contact;
