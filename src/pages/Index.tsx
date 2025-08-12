
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Zap, Target, CheckCircle, Star, Mail, Phone, Calendar, Users, TrendingUp, Shield, ShieldCheck, Workflow, Database, Bot, Sparkles, Rocket, Activity, Brain, BarChart3, Settings, Play, ChevronRight, MessageCircle, Calculator, Lock, FileCheck, Globe, KeyRound, Server } from "lucide-react";
import Typewriter from "typewriter-effect";
import { ContactForm } from "@/components/ContactForm";
import { CalculatorSection } from "@/components/CalculatorSection";
import { RealResultsSection } from "@/components/RealResultsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import heroBusinessTeam from "@/assets/hero-business-team.jpg";
import heroAbstractBg from "@/assets/hero-abstract-bg.jpg";
import statsVisualization from "@/assets/stats-visualization.jpg";

const Index = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* 1. HERO SECTION - Who We Are */}
      <section className="relative pt-20 pb-20 overflow-hidden min-h-screen flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-10 md:opacity-5"
            style={{ 
              backgroundImage: `url(${heroAbstractBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>

          {/* Subtle purple/blue radial glows for smaller screens */}
          <div
            className="absolute inset-0 pointer-events-none opacity-80 md:opacity-50 mix-blend-screen"
            style={{
              background:
                'radial-gradient(1000px 500px at 15% 25%, hsl(var(--secondary) / 0.18), transparent 60%), radial-gradient(900px 450px at 85% 30%, hsl(var(--primary) / 0.14), transparent 60%)'
            }}
          />
          
          {/* Floating geometric shapes */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-20 left-10 w-28 h-28 md:w-20 md:h-20 bg-primary/20 md:bg-primary/10 rounded-full blur-xl"
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
              className="absolute top-40 right-20 w-36 h-36 md:w-32 md:h-32 bg-secondary/25 md:bg-secondary/10 rounded-full blur-xl"
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
              className="absolute bottom-20 left-1/4 w-24 h-24 md:w-16 md:h-16 bg-primary/25 md:bg-primary/15 rounded-full blur-lg"
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
          <div className="absolute inset-0 opacity-[0.06] md:opacity-[0.03]">
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
                  AI-Powered Business Automation
                </Badge>
              </motion.div>
              
              <motion.h1 
                className="text-5xl lg:text-7xl font-display font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="text-foreground">AI Automation for </span>
                <div className="text-primary">
                  <Typewriter
                    options={{
                      strings: ['Back-Office Operations', 'Customer Support', 'Finance Workflows', 'Sales Ops'],
                      autoStart: true,
                      loop: true,
                      delay: 100,
                      deleteSpeed: 50,
                      cursor: '_'
                    }}
                  />
                </div>
              </motion.h1>
              
              <motion.h2 
                className="text-3xl lg:text-4xl font-semibold text-muted-foreground leading-snug"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Cut manual work by 40–60% in 90 days — securely and at scale
              </motion.h2>
              
              <motion.p 
                className="text-xl text-muted-foreground leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Design, deploy, and maintain enterprise-grade AI workflows across your stack. SSO & RBAC, audit logs, and data residency built-in.
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
                    className="bg-primary text-primary-foreground text-lg px-8 py-5 rounded-xl font-semibold shadow-card hover:shadow-elegant"
                  >
                    <span className="relative flex items-center">
                      Book a Strategy Call
                      <Rocket className="ml-3 h-5 w-5" />
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
                    onClick={scrollToCalculator}
                    className="text-lg px-8 py-5 rounded-xl font-medium bg-card/60 backdrop-blur-sm border-border/60 hover:bg-card/80"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <BarChart3 className="mr-3 h-5 w-5" />
                    </motion.div>
                    See Your ROI in 30s
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
                <Card className="relative bg-card/50 md:bg-card/70 backdrop-blur-sm border-border/50 shadow-2xl">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Brain className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">AI-Powered Automation</h3>
                          <p className="text-sm text-muted-foreground">GPT, Computer Vision, NLP</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-secondary/10 rounded-lg">
                          <Settings className="h-6 w-6 text-secondary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Custom Workflows</h3>
                          <p className="text-sm text-muted-foreground">Tailored to your business</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-green-500/10 rounded-lg">
                          <Zap className="h-6 w-6 text-green-500" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Rapid Deployment</h3>
                          <p className="text-sm text-muted-foreground">Quick time-to-value</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      

      {/* 2. PROBLEM STATEMENT - Why We Exist */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-primary/10 border-primary/20 text-primary font-semibold px-4 py-2 mb-6">
              <Target className="w-4 h-4 mr-2" />
              The Real Problem
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Your Team is Stuck Doing Low-Value Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Manual processes are killing your productivity and preventing your business from scaling efficiently. 
              Every hour spent on repetitive tasks is an hour not spent on growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-primary/20">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Clock className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-primary">Time-Consuming Manual Tasks</h3>
                    <p className="text-muted-foreground mb-6">
                      Your team wastes 40+ hours per week on data entry, admin work, and repetitive processes that could be automated.
                    </p>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center justify-between">
                        <span>Data Entry</span>
                        <span className="text-primary font-semibold">15h/week</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Report Generation</span>
                        <span className="text-primary font-semibold">8h/week</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Email Processing</span>
                        <span className="text-primary font-semibold">12h/week</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-primary/20">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Workflow className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-primary">Fragmented Workflows</h3>
                    <p className="text-muted-foreground mb-6">
                      Multiple apps and tools create bottlenecks and reduce productivity across your organization.
                    </p>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center justify-between">
                        <span>Context Switching</span>
                        <span className="text-primary font-semibold">-40%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Data Sync Issues</span>
                        <span className="text-primary font-semibold">-25%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Process Delays</span>
                        <span className="text-primary font-semibold">-60%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-primary/20">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-primary">Scaling Requires More People</h3>
                    <p className="text-muted-foreground mb-6">
                      Growth means adding headcount instead of improving efficiency and productivity.
                    </p>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center justify-between">
                        <span>New Hires Needed</span>
                        <span className="text-primary font-semibold">+3/month</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Training Time</span>
                        <span className="text-primary font-semibold">+2 weeks</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Management Overhead</span>
                        <span className="text-primary font-semibold">+50%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Impact Statement */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
              <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">The Cost of Inaction</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Every month you delay automation, you're losing <span className="font-bold text-primary">$15,000+ in productivity</span> and 
                  <span className="font-bold text-primary"> 160+ hours of strategic work</span> that could be driving your business forward.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">$15K</div>
                    <div className="text-sm text-muted-foreground">Monthly productivity loss</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">160h</div>
                    <div className="text-sm text-muted-foreground">Hours wasted per month</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">-40%</div>
                    <div className="text-sm text-muted-foreground">Team efficiency</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* 3. SOLUTION OVERVIEW - What We Do */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-primary/10 border-primary/20 text-primary font-semibold px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              The Solution
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Turnkey AI Solutions, No Technical Team Needed
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Custom workflows tailored to your business that work with your existing tools and scale with your growth. 
              We handle the complexity, you get the results.
            </p>
          </motion.div>

          {/* Main Solution Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Brain className="h-7 w-7 text-primary" />
                    </div>
                    <span className="text-2xl">AI-First Automation Design</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 text-lg">
                    We integrate GPT, computer vision, and NLP with your existing business tools to create intelligent workflows that learn and adapt.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">Natural Language Processing</div>
                        <div className="text-sm text-muted-foreground">Understand and process emails, documents, and conversations</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">Computer Vision</div>
                        <div className="text-sm text-muted-foreground">Extract data from images, PDFs, and scanned documents</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">GPT-Powered Decisions</div>
                        <div className="text-sm text-muted-foreground">Intelligent decision making based on your business rules</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-secondary/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <Settings className="h-7 w-7 text-secondary" />
                    </div>
                    <span className="text-2xl">Custom Workflows Tailored to Your Business</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 text-lg">
                    Every automation is customized to match your specific workflows and business processes. No one-size-fits-all solutions.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                      </div>
                      <div>
                        <div className="font-semibold">Industry-Specific Solutions</div>
                        <div className="text-sm text-muted-foreground">Built for your industry's unique challenges and requirements</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                      </div>
                      <div>
                        <div className="font-semibold">Seamless Integration</div>
                        <div className="text-sm text-muted-foreground">Works with your existing tools and platforms</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                      </div>
                      <div>
                        <div className="font-semibold">Scalable Architecture</div>
                        <div className="text-sm text-muted-foreground">Grows with your business, no rework needed</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Additional Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary">Rapid Deployment</h3>
                  <p className="text-muted-foreground mb-4">
                    Get your first automation running in weeks, not months. Pilot projects with quick wins.
                  </p>
                  <div className="text-2xl font-bold text-primary">2-4 weeks</div>
                  <div className="text-sm text-muted-foreground">to first automation</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary">Enterprise Security</h3>
                  <p className="text-muted-foreground mb-4">
                    Bank-level security with end-to-end encryption and compliance with industry standards.
                  </p>
                  <div className="text-2xl font-bold text-primary">99.9%</div>
                  <div className="text-sm text-muted-foreground">uptime guarantee</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary">Ongoing Support</h3>
                  <p className="text-muted-foreground mb-4">
                    We adapt your automations as your business evolves. Long-term partnership approach.
                  </p>
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">support available</div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Transformation Statement */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">The Transformation</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  From <span className="font-bold text-primary">40+ hours of manual work</span> to 
                  <span className="font-bold text-primary"> 5 hours of oversight</span>. 
                  From <span className="font-bold text-primary">fragmented processes</span> to 
                  <span className="font-bold text-primary"> seamless automation</span>.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">-85%</div>
                    <div className="text-sm text-muted-foreground">Time reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">+300%</div>
                    <div className="text-sm text-muted-foreground">Productivity increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">$50K+</div>
                    <div className="text-sm text-muted-foreground">Annual savings</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* 4. ROI CALCULATOR - Interactive Engagement */}
      <section id="calculator" className="relative py-20 bg-background">
        {/* subtle light band for contrast on dark pages */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(1200px 600px at 50% 25%, rgba(255,255,255,0.08), transparent 60%)'
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0))'
            }}
          />
        </div>
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-primary/10 border-primary/20 text-primary font-semibold px-4 py-2 mb-6">
              <BarChart3 className="w-4 h-4 mr-2" />
              ROI Calculator
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Calculate Your Potential Savings
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See ROI in 30 seconds. Get your custom automation plan and discover how much time and money you could save.
            </p>
          </motion.div>

          {/* Full-Width Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-xl border-primary/20">
              <CardContent className="p-8">
                <CalculatorSection />
              </CardContent>
            </Card>
          </motion.div>

          {/* Benefits & Social Proof - Below Calculator */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">What You'll Discover</h3>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div>• Exact Time Savings</div>
                      <div>• Financial Impact</div>
                      <div>• Custom Automation Plan</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Average Client Results</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Hours saved/week:</span>
                        <span className="font-bold text-primary">40h</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Monthly savings:</span>
                        <span className="font-bold text-primary">$15K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Productivity boost:</span>
                        <span className="font-bold text-primary">3x</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Time to deploy:</span>
                        <span className="font-bold text-primary">2-4w</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ArrowRight className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Ready to See Your Numbers?</h3>
                  <p className="text-muted-foreground mb-4">
                    Get your free automation audit and detailed ROI analysis.
                  </p>
                  <Button 
                    size="lg" 
                    onClick={scrollToContact}
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    Get My Free Audit
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS - Process */}
      <HowItWorksSection />

      {/* 6. RESULTS & PROOF - Social Proof (keep one concise section) */}
      <RealResultsSection />

      {/* ENTERPRISE GUARDRAILS */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-primary/10 border-primary/20 text-primary font-semibold px-4 py-2 mb-6">
              Enterprise-grade
            </Badge>
            <h2 className="text-4xl font-bold mb-3">Security, Compliance, and Scale</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Designed for mid–large organizations operating in regulated environments.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Lock, title: 'SSO & RBAC', desc: 'SAML/SSO, granular role-based access controls, and audit trails.' },
              { icon: FileCheck, title: 'Compliance', desc: 'SOC 2 readiness, data retention policies, configurable PII redaction.' },
              { icon: Server, title: 'Scalable Architecture', desc: 'Horizontal scaling, retries, observability, and SLAs.' }
            ].map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="h-full border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{title}</h3>
                      <p className="text-muted-foreground text-sm">{desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-secondary/10 border-secondary/20 text-secondary font-semibold px-4 py-2 mb-6">
              Integrations
            </Badge>
            <h2 className="text-4xl font-bold mb-3">Plug Into Your Stack</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">We orchestrate across CRM, ERP, data warehouses, and communication tools.</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {[ 'Salesforce', 'HubSpot', 'Slack', 'Gmail', 'Notion', 'Airtable', 'Snowflake', 'BigQuery', 'Stripe', 'Zendesk', 'Jira', 'QuickBooks' ].map((tool) => (
              <div key={tool} className="text-center py-3 px-4 rounded-lg bg-card/60 border border-border/50 text-foreground/80">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Removed Services and About from homepage for focus */}

      {/* 9. CONTACT & NEXT STEPS - Conversion */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Start Your Automation Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get your free automation audit and discover how much time and money you could save.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">What You'll Get</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Free automation audit of your current processes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Custom ROI calculation for your business</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Detailed automation roadmap</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>15-minute consultation call</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Ready to Transform?</h3>
                <p className="text-muted-foreground mb-6">
                  Join hundreds of businesses that have already automated their workflows with QuoraFlo.
                </p>
                <Button size="lg" className="w-full" onClick={scrollToContact}>
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
