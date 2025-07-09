
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Zap, Target, CheckCircle, Star, Mail, Phone, Calendar, Users, TrendingUp, Shield, Workflow, Database, Bot } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ServiceCard } from "@/components/ServiceCard";
import { CountUpStats } from "@/components/CountUpStats";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const Index = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Curved Background */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-orange-50 to-purple-50"></div>
        <div className="absolute top-0 right-0 w-2/3 h-full">
          <div className="absolute inset-0 bg-gradient-to-l from-orange-400 via-orange-300 to-transparent opacity-20 transform skew-y-12 origin-top-right"></div>
        </div>
        
        <div className="relative container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 border-orange-200 animate-fade-in">
                The Autonomous Enterprise Is Here
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight animate-slide-up">
                Transform Your Business.
                <span className="text-orange-600 block">Automate Everything.</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg animate-fade-in" style={{ animationDelay: '0.3s' }}>
                Discover how intelligent automation can help your business achieve digital transformation at enterprise scale with AI-powered workflows.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <Button 
                  size="lg" 
                  onClick={scrollToContact}
                  className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-4 pulse-glow"
                >
                  Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="text-lg px-8 py-4 border-slate-300 hover:bg-slate-50"
                >
                  Watch Demo
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 hover-scale">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">Process Automation</div>
                    <div className="text-green-600 text-sm font-medium flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      Active
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 animate-slide-in" style={{ animationDelay: '0.6s' }}>
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Database className="h-4 w-4 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">Data Processing</div>
                        <div className="text-xs text-gray-500">1,247 records processed</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 animate-slide-in" style={{ animationDelay: '0.7s' }}>
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <Workflow className="h-4 w-4 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">Email Automation</div>
                        <div className="text-xs text-gray-500">342 emails sent</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 animate-slide-in" style={{ animationDelay: '0.8s' }}>
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Bot className="h-4 w-4 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">AI Analysis</div>
                        <div className="text-xs text-gray-500">89% accuracy rate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Count-up Animation */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4 animate-fade-in">
              Decimals slices. Transform your business.
            </h2>
          </div>
          <CountUpStats />
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-slate-900 mb-8 animate-fade-in">
            Trusted by top analysts, loved by customers.
          </h2>
          <div className="flex justify-center items-center space-x-8 opacity-60 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-lg font-semibold text-gray-600">Gartner</div>
            <div className="text-lg font-semibold text-gray-600">Forrester</div>
            <div className="text-lg font-semibold text-gray-600">IDC</div>
            <div className="text-lg font-semibold text-gray-600">G2</div>
            <div className="text-lg font-semibold text-gray-600">TrustRadius</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 animate-fade-in">
              Not all AI agents are created equal.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Our automation solutions are built for enterprise scale with AI-powered intelligence that learns and adapts to your business processes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-slide-in" style={{ animationDelay: '0.3s' }}>
              <ServiceCard
                icon={<Zap className="h-8 w-8 text-orange-600" />}
                title="Intelligent Workflows"
                description="AI-powered automation that adapts to your business processes and learns from your data patterns."
                features={["Smart data processing", "Predictive automation", "Self-optimizing workflows"]}
              />
            </div>
            <div className="animate-slide-in" style={{ animationDelay: '0.4s' }}>
              <ServiceCard
                icon={<Shield className="h-8 w-8 text-blue-600" />}
                title="Enterprise Security"
                description="Bank-level security with end-to-end encryption and compliance with industry standards."
                features={["SOC 2 compliant", "GDPR ready", "Enterprise SSO"]}
              />
            </div>
            <div className="animate-slide-in" style={{ animationDelay: '0.5s' }}>
              <ServiceCard
                icon={<TrendingUp className="h-8 w-8 text-green-600" />}
                title="Scalable Solutions"
                description="From startup to enterprise, our solutions scale with your business growth and complexity."
                features={["Unlimited workflows", "API integrations", "Custom solutions"]}
              />
            </div>
          </div>
          
          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Automation Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 animate-fade-in">
              Agentic process automation you can trust every time, everywhere.
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Our AI agents work 24/7 to automate your most complex business processes with precision and reliability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover-scale animate-slide-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl font-bold text-orange-400 mb-4">300%</div>
              <div className="text-lg font-semibold mb-2">Productivity Increase</div>
              <div className="text-purple-200">Average across all implementations</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover-scale animate-slide-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl font-bold text-green-400 mb-4">99.9%</div>
              <div className="text-lg font-semibold mb-2">Uptime Guarantee</div>
              <div className="text-purple-200">Enterprise-grade reliability</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover-scale animate-slide-in" style={{ animationDelay: '0.5s' }}>
              <div className="text-3xl font-bold text-blue-400 mb-4">24/7</div>
              <div className="text-lg font-semibold mb-2">Support Available</div>
              <div className="text-purple-200">Always here when you need us</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-slate-900 mb-8">
                When the world's leading companies need 
                <span className="text-orange-600"> smarter automation</span>, they turn to us.
              </h2>
              <div className="space-y-6">
                {[
                  "Reduce operational costs by up to 70%",
                  "Eliminate human error with 99.9% accuracy",
                  "Scale operations without increasing headcount",
                  "Get real-time insights and analytics",
                  "Ensure 24/7 business continuity",
                  "Achieve ROI within 3 months"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-4 animate-slide-in" style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-orange-600" />
                    </div>
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Card className="p-8 shadow-2xl border border-gray-100 hover-scale">
                <CardContent className="space-y-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900 mb-4">
                      For breakout performance, there's only one agentic process automation platform.
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="text-orange-600 font-bold text-lg mb-2">Before</div>
                      <div className="text-sm text-gray-600 space-y-2">
                        <div className="bg-red-50 p-2 rounded">40h/week manual work</div>
                        <div className="bg-red-50 p-2 rounded">High error rates</div>
                        <div className="bg-red-50 p-2 rounded">Delayed responses</div>
                        <div className="bg-red-50 p-2 rounded">Limited scalability</div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-green-600 font-bold text-lg mb-2">After</div>
                      <div className="text-sm text-gray-600 space-y-2">
                        <div className="bg-green-50 p-2 rounded">5h/week oversight</div>
                        <div className="bg-green-50 p-2 rounded">99.9% accuracy</div>
                        <div className="bg-green-50 p-2 rounded">Instant responses</div>
                        <div className="bg-green-50 p-2 rounded">Unlimited growth</div>
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
      <section id="testimonials" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 animate-fade-in">
              What Our Clients Say
            </h2>
            <div className="flex justify-center items-center space-x-2 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
              <span className="text-lg font-semibold text-gray-700 ml-2">4.9/5 Average Rating</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="animate-slide-in" style={{ animationDelay: '0.3s' }}>
              <TestimonialCard
                name="Sarah Johnson"
                company="TechStart Inc."
                text="AutoGenix transformed our operations completely. We now process 10x more data with half the team. The AI-powered workflows are incredibly intelligent."
                rating={5}
              />
            </div>
            <div className="animate-slide-in" style={{ animationDelay: '0.4s' }}>
              <TestimonialCard
                name="Mike Chen"
                company="Growth Marketing Co."
                text="The level of automation they achieved for our client reporting is phenomenal. What used to take days now happens in minutes with better accuracy."
                rating={5}
              />
            </div>
            <div className="animate-slide-in" style={{ animationDelay: '0.5s' }}>
              <TestimonialCard
                name="Emily Rodriguez"
                company="Enterprise Solutions Ltd."
                text="Their enterprise-grade security and scalability gave us confidence to automate our most critical processes. ROI was achieved in just 2 months."
                rating={5}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">
            What's next in agentic automation.
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-orange-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Join thousands of businesses that have already transformed their operations with intelligent automation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover-scale animate-slide-in" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-xl font-bold mb-4">Enterprise AI</h3>
              <p className="text-orange-100">Advanced AI agents that learn and adapt to your business processes automatically.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover-scale animate-slide-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl font-bold mb-4">Intelligent Integration</h3>
              <p className="text-orange-100">Seamlessly connect all your tools and platforms with smart automation workflows.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover-scale animate-slide-in" style={{ animationDelay: '0.5s' }}>
              <h3 className="text-xl font-bold mb-4">Predictive Analytics</h3>
              <p className="text-orange-100">Get insights before problems occur with AI-powered predictive automation.</p>
            </div>
          </div>
          
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-12 py-4 pulse-glow animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            Start Your Transformation <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-900 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-8">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-slate-300 mb-12">
                Get a free consultation and discover how we can help you achieve enterprise-scale automation with AI-powered workflows.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center space-x-4 animate-slide-in" style={{ animationDelay: '0.2s' }}>
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Email Us</div>
                    <div className="text-slate-300">hello@autogenix.ai</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 animate-slide-in" style={{ animationDelay: '0.3s' }}>
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Call Us</div>
                    <div className="text-slate-300">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 animate-slide-in" style={{ animationDelay: '0.4s' }}>
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Book a Meeting</div>
                    <div className="text-slate-300">Free 30-minute consultation</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <ContactForm />
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

export default Index;
