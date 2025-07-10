
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Zap, Target, CheckCircle, Star, Mail, Phone, Calendar, Users, TrendingUp, Shield, Workflow, Database, Bot, Sparkles, Rocket, Activity } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ServiceCard } from "@/components/ServiceCard";
import { CountUpStats } from "@/components/CountUpStats";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import heroBusinessTeam from "@/assets/hero-business-team.jpg";
import heroAbstractBg from "@/assets/hero-abstract-bg.jpg";
import statsVisualization from "@/assets/stats-visualization.jpg";

const Index = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section with Modern Design */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        {/* Background with beautiful gradients and patterns */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
          <div 
            className="absolute inset-0 opacity-30"
            style={{ 
              backgroundImage: `url(${heroAbstractBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90"></div>
        </div>
        
        <div className="relative container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            <div className="space-y-8 z-10">
              <Badge className="bg-primary-light border-primary/20 text-primary font-semibold px-4 py-2 animate-fade-in shimmer">
                <Sparkles className="w-4 h-4 mr-2" />
                The Future of Business is Here
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight animate-slide-up">
                <span className="text-gradient">Transform</span> Your Business
                <span className="text-foreground block">with </span>
                <span className="text-gradient">AI Automation</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
                Revolutionize your operations with intelligent automation that scales. From simple workflows to complex AI-driven processes, we help businesses achieve unprecedented efficiency and growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <Button 
                  size="lg" 
                  onClick={scrollToContact}
                  className="bg-gradient-primary text-primary-foreground text-lg px-10 py-6 rounded-xl font-semibold shadow-elegant hover:shadow-glow hover-lift shimmer group"
                >
                  Start Your Transformation 
                  <Rocket className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="text-lg px-10 py-6 rounded-xl font-semibold glass hover:bg-primary/5 border-primary/20"
                >
                  <Activity className="mr-3 h-5 w-5" />
                  Watch Live Demo
                </Button>
              </div>
              
              {/* Trust indicators */}
              <div className="flex items-center space-x-8 pt-8 animate-fade-in" style={{ animationDelay: '0.7s' }}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-in lg:pl-8" style={{ animationDelay: '0.4s' }}>
              {/* Main hero image */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>
                <img 
                  src={heroBusinessTeam} 
                  alt="Professional team working with AI automation" 
                  className="relative rounded-3xl shadow-elegant hover:shadow-glow transition-all duration-700 hover-lift w-full"
                />
                
                {/* Floating automation card */}
                <div className="absolute -bottom-8 -left-8 bg-card glass border-primary/20 rounded-2xl p-6 shadow-elegant animate-float">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium text-card-foreground">Live Automation</div>
                      <div className="flex items-center text-emerald-500 text-sm font-medium">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse-glow"></div>
                        Running
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                          <Database className="h-4 w-4 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-card-foreground">Data Sync</div>
                          <div className="text-xs text-muted-foreground">2,847 records synced</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-secondary rounded-lg flex items-center justify-center">
                          <Workflow className="h-4 w-4 text-secondary-foreground" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-card-foreground">AI Processing</div>
                          <div className="text-xs text-muted-foreground">94% efficiency gained</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Success metrics card */}
                <div className="absolute -top-6 -right-6 bg-card glass border-primary/20 rounded-xl p-4 shadow-elegant animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-card-foreground">+340%</div>
                      <div className="text-xs text-muted-foreground">ROI Increase</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Visual Enhancement */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={statsVisualization} 
            alt="Analytics visualization" 
            className="w-full h-full object-cover opacity-5"
          />
          <div className="absolute inset-0 bg-gradient-light"></div>
        </div>
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-secondary-light border-secondary/20 text-secondary font-semibold px-4 py-2 mb-6 animate-fade-in">
              <Target className="w-4 h-4 mr-2" />
              Proven Results
            </Badge>
            <h2 className="text-4xl font-display font-bold text-foreground mb-6 animate-slide-up">
              Transforming Businesses 
              <span className="text-gradient block">Across Industries</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Join hundreds of companies that have revolutionized their operations with our automation solutions
            </p>
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <CountUpStats />
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-display font-semibold text-foreground mb-8 animate-fade-in">
            Trusted by industry leaders, loved by customers.
          </h2>
          <div className="flex justify-center items-center space-x-12 opacity-60 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-lg font-semibold text-muted-foreground hover:text-primary transition-colors hover-scale">Gartner</div>
            <div className="text-lg font-semibold text-muted-foreground hover:text-primary transition-colors hover-scale">Forrester</div>
            <div className="text-lg font-semibold text-muted-foreground hover:text-primary transition-colors hover-scale">IDC</div>
            <div className="text-lg font-semibold text-muted-foreground hover:text-primary transition-colors hover-scale">G2</div>
            <div className="text-lg font-semibold text-muted-foreground hover:text-primary transition-colors hover-scale">TrustRadius</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-primary-light border-primary/20 text-primary font-semibold px-4 py-2 mb-6 animate-fade-in">
              <Zap className="w-4 h-4 mr-2" />
              AI-Powered Solutions
            </Badge>
            <h2 className="text-4xl font-display font-bold text-foreground mb-6 animate-slide-up">
              Not all AI automation
              <span className="text-gradient block">is created equal</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Our enterprise-grade automation solutions are built with AI-powered intelligence that learns, adapts, and scales with your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-slide-in" style={{ animationDelay: '0.3s' }}>
              <ServiceCard
                icon={<Zap className="h-8 w-8 text-primary" />}
                title="Intelligent Workflows"
                description="AI-powered automation that adapts to your business processes and learns from your data patterns."
                features={["Smart data processing", "Predictive automation", "Self-optimizing workflows"]}
              />
            </div>
            <div className="animate-slide-in" style={{ animationDelay: '0.4s' }}>
              <ServiceCard
                icon={<Shield className="h-8 w-8 text-secondary" />}
                title="Enterprise Security"
                description="Bank-level security with end-to-end encryption and compliance with industry standards."
                features={["SOC 2 compliant", "GDPR ready", "Enterprise SSO"]}
              />
            </div>
            <div className="animate-slide-in" style={{ animationDelay: '0.5s' }}>
              <ServiceCard
                icon={<TrendingUp className="h-8 w-8 text-emerald-500" />}
                title="Scalable Solutions"
                description="From startup to enterprise, our solutions scale with your business growth and complexity."
                features={["Unlimited workflows", "API integrations", "Custom solutions"]}
              />
            </div>
          </div>
          
          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 font-semibold px-8 py-3 hover-glow">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Automation Section */}
      <section className="py-20 bg-gradient-dark text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-secondary opacity-10"></div>
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-primary-light border-primary/20 text-primary font-semibold px-4 py-2 mb-6 animate-fade-in">
              <Bot className="w-4 h-4 mr-2" />
              AI-Powered Reliability
            </Badge>
            <h2 className="text-4xl font-display font-bold mb-6 animate-slide-up">
              Agentic automation you can 
              <span className="text-gradient block">trust everywhere, every time</span>
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Our AI agents work 24/7 to automate your most complex business processes with precision and reliability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="glass rounded-2xl p-8 hover-lift animate-slide-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold text-gradient mb-4 animate-pulse-glow">300%</div>
              <div className="text-lg font-semibold mb-2 text-primary-foreground">Productivity Increase</div>
              <div className="text-primary-foreground/70">Average across all implementations</div>
            </div>
            <div className="glass rounded-2xl p-8 hover-lift animate-slide-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl font-bold text-gradient mb-4 animate-pulse-glow">99.9%</div>
              <div className="text-lg font-semibold mb-2 text-primary-foreground">Uptime Guarantee</div>
              <div className="text-primary-foreground/70">Enterprise-grade reliability</div>
            </div>
            <div className="glass rounded-2xl p-8 hover-lift animate-slide-in" style={{ animationDelay: '0.5s' }}>
              <div className="text-4xl font-bold text-gradient mb-4 animate-pulse-glow">24/7</div>
              <div className="text-lg font-semibold mb-2 text-primary-foreground">Support Available</div>
              <div className="text-primary-foreground/70">Always here when you need us</div>
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
      <section className="py-20 px-6 bg-gradient-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-secondary opacity-20"></div>
        <div className="relative container mx-auto text-center">
          <Badge className="bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground font-semibold px-4 py-2 mb-6 animate-fade-in shimmer">
            <Sparkles className="w-4 h-4 mr-2" />
            The Future is Now
          </Badge>
          <h2 className="text-4xl font-display font-bold mb-6 animate-slide-up">
            What's next in 
            <span className="block text-primary-foreground/90">agentic automation</span>
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-primary-foreground/80 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Join thousands of businesses that have already transformed their operations with intelligent automation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="glass rounded-xl p-6 hover-lift animate-slide-in" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-xl font-bold mb-4 text-primary-foreground">Enterprise AI</h3>
              <p className="text-primary-foreground/80">Advanced AI agents that learn and adapt to your business processes automatically.</p>
            </div>
            <div className="glass rounded-xl p-6 hover-lift animate-slide-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl font-bold mb-4 text-primary-foreground">Intelligent Integration</h3>
              <p className="text-primary-foreground/80">Seamlessly connect all your tools and platforms with smart automation workflows.</p>
            </div>
            <div className="glass rounded-xl p-6 hover-lift animate-slide-in" style={{ animationDelay: '0.5s' }}>
              <h3 className="text-xl font-bold mb-4 text-primary-foreground">Predictive Analytics</h3>
              <p className="text-primary-foreground/80">Get insights before problems occur with AI-powered predictive automation.</p>
            </div>
          </div>
          
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="bg-background text-foreground hover:bg-background/90 text-lg px-12 py-6 rounded-xl font-semibold shadow-elegant hover:shadow-glow hover-lift shimmer group animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            Start Your Transformation 
            <Rocket className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
      <footer className="py-12 px-6 bg-gradient-dark text-primary-foreground">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-display font-bold text-gradient mb-4">Quoraflo</div>
              <p className="text-primary-foreground/80">
                Enterprise-scale AI automation for modern businesses.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-primary-foreground">Solutions</h4>
              <ul className="space-y-2 text-primary-foreground/70">
                <li><Link to="/services" className="hover:text-primary-foreground transition-colors hover-scale">Workflow Automation</Link></li>
                <li><Link to="/services" className="hover:text-primary-foreground transition-colors hover-scale">Data Processing</Link></li>
                <li><Link to="/services" className="hover:text-primary-foreground transition-colors hover-scale">AI Integration</Link></li>
                <li><Link to="/services" className="hover:text-primary-foreground transition-colors hover-scale">Enterprise Security</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-primary-foreground">Company</h4>
              <ul className="space-y-2 text-primary-foreground/70">
                <li className="hover:text-primary-foreground transition-colors hover-scale cursor-pointer">About Us</li>
                <li className="hover:text-primary-foreground transition-colors hover-scale cursor-pointer">Careers</li>
                <li className="hover:text-primary-foreground transition-colors hover-scale cursor-pointer">Contact</li>
                <li className="hover:text-primary-foreground transition-colors hover-scale cursor-pointer">Support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-primary-foreground">Resources</h4>
              <ul className="space-y-2 text-primary-foreground/70">
                <li className="hover:text-primary-foreground transition-colors hover-scale cursor-pointer">Documentation</li>
                <li className="hover:text-primary-foreground transition-colors hover-scale cursor-pointer">Case Studies</li>
                <li className="hover:text-primary-foreground transition-colors hover-scale cursor-pointer">Blog</li>
                <li className="hover:text-primary-foreground transition-colors hover-scale cursor-pointer">Community</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center">
            <div className="text-sm text-primary-foreground/60">
              © 2024 Quoraflo. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
