
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Zap, Target, CheckCircle, Star, Mail, Phone, Calendar } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ServiceCard } from "@/components/ServiceCard";

const Index = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-900">AutomateFlow</div>
          <Button onClick={scrollToContact} className="bg-blue-600 hover:bg-blue-700">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-100">
            Save 10+ Hours Per Week
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Automate Your Business,
            <span className="text-blue-600 block">Reclaim Your Time</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            We help entrepreneurs save hours daily by automating repetitive tasks using cutting-edge AI tools like N8n, Google Sheets, and GPT. Focus on growing your business while we handle the rest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3 hover-scale"
            >
              Start Saving Time Today <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-3 hover-scale"
            >
              View Our Work <Target className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Hours Saved Monthly</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Businesses Automated</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Automation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From data processing to customer communication, we automate the tasks that consume your valuable time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Zap className="h-8 w-8 text-blue-600" />}
              title="Workflow Automation"
              description="Streamline repetitive processes with N8n workflows that connect your favorite tools and eliminate manual work."
              features={["Data synchronization", "Email automation", "Task scheduling"]}
            />
            <ServiceCard
              icon={<Target className="h-8 w-8 text-green-600" />}
              title="Smart Data Processing"
              description="Transform your Google Sheets into powerful automation engines that handle calculations, reporting, and analysis."
              features={["Automated reporting", "Data validation", "Real-time updates"]}
            />
            <ServiceCard
              icon={<Clock className="h-8 w-8 text-purple-600" />}
              title="AI-Powered Solutions"
              description="Leverage GPT and AI tools to automate content creation, customer support, and decision-making processes."
              features={["Content generation", "Smart responses", "Predictive analysis"]}
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose AutomateFlow?
              </h2>
              <div className="space-y-4">
                {[
                  "Save 10+ hours per week on repetitive tasks",
                  "Reduce human error with automated processes",
                  "Scale your business without hiring more staff",
                  "Get detailed analytics and reporting",
                  "24/7 automated workflows that never sleep",
                  "Custom solutions tailored to your business"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button 
                className="mt-8 bg-green-600 hover:bg-green-700 hover-scale" 
                size="lg"
                onClick={scrollToContact}
              >
                Start Your Automation Journey
              </Button>
            </div>
            <div className="relative">
              <Card className="p-8 shadow-2xl hover-scale">
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">Before vs After</div>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-red-500 font-semibold mb-2">Before</div>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div>40 hours/week on manual tasks</div>
                        <div>Frequent errors</div>
                        <div>Delayed responses</div>
                        <div>No scalability</div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-green-500 font-semibold mb-2">After</div>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div>5 hours/week oversight</div>
                        <div>99% accuracy</div>
                        <div>Instant responses</div>
                        <div>Unlimited growth</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <div className="flex justify-center items-center space-x-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
              <span className="text-lg font-semibold text-gray-700 ml-2">4.9/5 Average Rating</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah Johnson"
              company="E-commerce Startup"
              text="AutomateFlow saved us 15 hours per week on inventory management. Our Google Sheets now automatically update stock levels and send reorder alerts. Game changer!"
              rating={5}
            />
            <TestimonialCard
              name="Mike Chen"
              company="Marketing Agency"
              text="The N8n workflows they built for our client reporting are incredible. What used to take a full day now happens automatically every morning."
              rating={5}
            />
            <TestimonialCard
              name="Emily Rodriguez"
              company="Consulting Firm"
              text="Their GPT integration for client proposals has improved our win rate by 40%. The AI helps us create personalized, compelling proposals in minutes."
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Powered by Industry-Leading Tools
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            We use the best automation platforms to deliver exceptional results
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="p-6 bg-gray-50 rounded-lg hover-scale">
              <div className="text-2xl font-bold text-blue-600 mb-2">N8n</div>
              <div className="text-sm text-gray-600">Workflow Automation</div>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg hover-scale">
              <div className="text-2xl font-bold text-green-600 mb-2">Google Sheets</div>
              <div className="text-sm text-gray-600">Data Processing</div>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg hover-scale">
              <div className="text-2xl font-bold text-purple-600 mb-2">GPT</div>
              <div className="text-sm text-gray-600">AI Intelligence</div>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg hover-scale">
              <div className="text-2xl font-bold text-orange-600 mb-2">Zapier</div>
              <div className="text-sm text-gray-600">App Integration</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Ready to Automate Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get a free consultation and discover how we can save you 10+ hours per week with custom automation solutions.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-blue-400" />
                  <div>
                    <div className="font-semibold">Email Us</div>
                    <div className="text-gray-300">hello@automateflow.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-green-400" />
                  <div>
                    <div className="font-semibold">Call Us</div>
                    <div className="text-gray-300">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Calendar className="h-6 w-6 text-purple-400" />
                  <div>
                    <div className="font-semibold">Book a Meeting</div>
                    <div className="text-gray-300">Free 30-minute consultation</div>
                  </div>
                </div>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black text-white text-center">
        <div className="container mx-auto">
          <div className="text-2xl font-bold text-blue-400 mb-4">AutomateFlow</div>
          <p className="text-gray-400 mb-4">
            Helping entrepreneurs save time through intelligent automation
          </p>
          <div className="text-sm text-gray-500">
            © 2024 AutomateFlow. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
