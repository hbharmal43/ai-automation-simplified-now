
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Zap, Target, CheckCircle, Star, Mail, Phone, Calendar, Users, TrendingUp, Shield, Workflow, Database, Bot, Sparkles, Rocket, Activity } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ServiceCard } from "@/components/ServiceCard";
import { CountUpStats } from "@/components/CountUpStats";
import { CalculatorSection } from "@/components/CalculatorSection";
import { RealResultsSection } from "@/components/RealResultsSection";
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

      {/* Hero Section with Amazing Animations */}
      <section className="relative pt-20 pb-20 overflow-hidden min-h-screen flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Subtle background image */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{ 
              backgroundImage: `url(${heroAbstractBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
          
          {/* Floating geometric shapes */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
              animate={{
                y: [0, -20, 0],
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute top-40 right-20 w-32 h-32 bg-secondary/10 rounded-full blur-xl"
              animate={{
                y: [0, 30, 0],
                scale: [1, 0.8, 1],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            <motion.div
              className="absolute bottom-20 left-1/4 w-16 h-16 bg-primary/15 rounded-full blur-lg"
              animate={{
                x: [0, 20, 0],
                y: [0, -15, 0],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
          </div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="h-full w-full" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
        </div>
        
        <div className="relative container mx-auto px-6 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Badge className="bg-primary/10 border-primary/20 text-primary font-semibold px-6 py-3 text-sm">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                  </motion.div>
                  The Future of Business is Here
                </Badge>
              </motion.div>
              
              <motion.h1 
                className="text-5xl lg:text-7xl font-display font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.span 
                  className="text-primary inline-block"
                  animate={{ 
                    textShadow: [
                      "0 0 0px hsl(var(--primary))",
                      "0 0 10px hsl(var(--primary) / 0.3)",
                      "0 0 0px hsl(var(--primary))"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Transform
                </motion.span>{" "}
                <span className="text-foreground">Your Business</span>
                <br />
                <span className="text-foreground">with </span>
                <motion.span 
                  className="text-primary inline-block"
                  animate={{ 
                    scale: [1, 1.02, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  AI Automation
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-muted-foreground leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Revolutionize your operations with intelligent automation that scales. From simple workflows to complex AI-driven processes, we help businesses achieve unprecedented efficiency and growth.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    onClick={scrollToContact}
                    className="bg-primary text-primary-foreground text-lg px-10 py-6 rounded-2xl font-semibold shadow-card hover:shadow-elegant group relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-primary-foreground/10"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    <span className="relative flex items-center">
                      Start Your Transformation 
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Rocket className="ml-3 h-5 w-5" />
                      </motion.div>
                    </span>
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="text-lg px-10 py-6 rounded-2xl font-semibold bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Activity className="mr-3 h-5 w-5" />
                    </motion.div>
                    Watch Live Demo
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative lg:pl-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Main hero image with floating effect */}
              <motion.div 
                className="relative group"
                animate={{ 
                  y: [0, -10, 0] 
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <motion.img 
                  src={heroBusinessTeam} 
                  alt="Professional team working with AI automation" 
                  className="relative rounded-3xl shadow-card w-full"
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: 5,
                    rotateX: 5
                  }}
                  transition={{ duration: 0.4 }}
                  style={{ transformStyle: "preserve-3d" }}
                />
                
                {/* Floating automation card with enhanced animations */}
                <motion.div 
                  className="absolute -bottom-8 -left-8 bg-card/95 backdrop-blur-lg border border-border/30 rounded-2xl p-6 shadow-elegant"
                  initial={{ opacity: 0, y: 50, rotateX: -10 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    rotateX: 0,
                  }}
                  transition={{ duration: 0.8, delay: 1 }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateX: 5,
                    rotateY: -5
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium text-card-foreground">Live Automation</div>
                      <div className="flex items-center text-emerald-500 text-sm font-medium">
                        <motion.div 
                          className="w-2 h-2 bg-emerald-500 rounded-full mr-2"
                          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        Running
                      </div>
                    </div>
                    <div className="space-y-3">
                      <motion.div 
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.3, duration: 0.5 }}
                      >
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                          <Database className="h-4 w-4 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-card-foreground">Data Sync</div>
                          <motion.div 
                            className="text-xs text-muted-foreground"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            2,847 records synced
                          </motion.div>
                        </div>
                      </motion.div>
                      <motion.div 
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                      >
                        <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                          <Workflow className="h-4 w-4 text-secondary-foreground" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-card-foreground">AI Processing</div>
                          <div className="text-xs text-muted-foreground">94% efficiency gained</div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Success metrics card with 3D effect */}
                <motion.div 
                  className="absolute -top-6 -right-6 bg-card/95 backdrop-blur-lg border border-border/30 rounded-xl p-4 shadow-elegant"
                  initial={{ opacity: 0, scale: 0, rotateX: -10 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    rotateX: 0,
                  }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  whileHover={{ 
                    scale: 1.1,
                    rotateX: -5,
                    rotateY: 5
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="flex items-center space-x-3">
                    <motion.div 
                      className="w-10 h-10 bg-primary rounded-full flex items-center justify-center"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                      <TrendingUp className="h-5 w-5 text-primary-foreground" />
                    </motion.div>
                    <div>
                      <motion.div 
                        className="text-lg font-bold text-card-foreground"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      >
                        +340%
                      </motion.div>
                      <div className="text-xs text-muted-foreground">ROI Increase</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section with Visual Enhancement */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={statsVisualization} 
            alt="Analytics visualization" 
            className="w-full h-full object-cover opacity-5"
          />
          <div className="absolute inset-0 bg-background/95"></div>
        </div>
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="bg-secondary/10 border-secondary/20 text-secondary font-semibold px-4 py-2 mb-6 animate-fade-in">
              <Target className="w-4 h-4 mr-2" />
              Proven Results
            </Badge>
            <h2 className="text-4xl font-display font-bold text-foreground mb-6 animate-slide-up">
              Transforming Businesses <span className="text-secondary">Across Industries</span>
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
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-display font-semibold text-foreground mb-6 animate-fade-in">
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
      <section id="services" className="py-16 px-6 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-primary/10 border-primary/20 text-primary font-semibold px-4 py-2 mb-6 animate-fade-in">
              <Zap className="w-4 h-4 mr-2" />
              AI-Powered Solutions
            </Badge>
            <h2 className="text-4xl font-display font-bold text-foreground mb-6 animate-slide-up">
              Not all AI automation
              <span className="text-primary block">is created equal</span>
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
      <section className="py-16 bg-muted/20 relative overflow-hidden">
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="bg-primary/10 border-primary/20 text-primary font-semibold px-4 py-2 mb-6 animate-fade-in">
              <Bot className="w-4 h-4 mr-2" />
              AI-Powered Reliability
            </Badge>
            <h2 className="text-4xl font-display font-bold mb-6 animate-slide-up text-foreground">
              Agentic automation you can 
              <span className="text-primary block">trust everywhere, every time</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Our AI agents work 24/7 to automate your most complex business processes with precision and reliability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-card/70 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover-lift animate-slide-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold text-primary mb-4">300%</div>
              <div className="text-lg font-semibold mb-2 text-card-foreground">Productivity Increase</div>
              <div className="text-muted-foreground">Average across all implementations</div>
            </div>
            <div className="bg-card/70 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover-lift animate-slide-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl font-bold text-primary mb-4">99.9%</div>
              <div className="text-lg font-semibold mb-2 text-card-foreground">Uptime Guarantee</div>
              <div className="text-muted-foreground">Enterprise-grade reliability</div>
            </div>
            <div className="bg-card/70 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover-lift animate-slide-in" style={{ animationDelay: '0.5s' }}>
              <div className="text-4xl font-bold text-primary mb-4">24/7</div>
              <div className="text-lg font-semibold mb-2 text-card-foreground">Support Available</div>
              <div className="text-muted-foreground">Always here when you need us</div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <CalculatorSection />

      {/* Real Results Section */}
      <RealResultsSection />

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
