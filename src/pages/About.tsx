import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Users, 
  Award, 
  Target, 
  Zap, 
  Shield,
  TrendingUp,
  Clock,
  Star,
  ArrowRight,
  Bot,
  Brain,
  Code,
  Rocket,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const About = () => {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Happy Clients",
      description: "Businesses transformed"
    },
    {
      icon: Award,
      value: "95%",
      label: "Success Rate",
      description: "Project completion rate"
    },
    {
      icon: Clock,
      value: "5+",
      label: "Years Experience",
      description: "AI automation expertise"
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Client Rating",
      description: "Average satisfaction score"
    }
  ];

  const team = [
    {
      name: "AI & Machine Learning",
      description: "Expert data scientists and ML engineers",
      icon: Brain,
      expertise: ["Natural Language Processing", "Computer Vision", "Predictive Analytics", "Neural Networks"]
    },
    {
      name: "Automation Engineering",
      description: "Specialized workflow automation experts",
      icon: Code,
      expertise: ["RPA Development", "API Integration", "Process Optimization", "System Architecture"]
    },
    {
      name: "Business Consulting",
      description: "Industry veterans with deep business acumen",
      icon: Target,
      expertise: ["Process Analysis", "ROI Optimization", "Change Management", "Strategic Planning"]
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "Enterprise-grade security with SOC 2 compliance and end-to-end encryption"
    },
    {
      icon: TrendingUp,
      title: "Results Driven",
      description: "We measure success by your business outcomes, not just technical implementation"
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "Long-term relationships built on trust, transparency, and mutual success"
    },
    {
      icon: Zap,
      title: "Innovation Focused",
      description: "Cutting-edge AI technology combined with proven business methodologies"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-muted/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Bot className="w-4 h-4" />
              About QuoraFlo
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6"
            >
              Pioneering AI Automation for Modern Business
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
            >
              We're a team of AI experts, automation specialists, and business consultants who believe that every business deserves access to enterprise-grade automation technology.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 bg-card shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 text-primary p-3 rounded-xl w-fit mx-auto mb-4">
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-lg font-semibold text-foreground mb-2">
                      {stat.label}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.description}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-display font-bold text-foreground mb-6">
                Our Mission
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To democratize AI automation for businesses of all sizes, enabling them to focus on growth and innovation rather than repetitive tasks. We believe that every organization, regardless of size, should have access to the same powerful automation technology that Fortune 500 companies use.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Democratizing enterprise-grade AI automation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Focusing on business outcomes, not just technology</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Building long-term partnerships with clients</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Driving innovation in automation technology</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-2 bg-card shadow-card">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-3">Our Story</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Founded in 2019, QuoraFlo emerged from a simple observation: while large corporations had access to sophisticated automation tools, small and medium businesses were left behind. We set out to change that by making enterprise-grade AI automation accessible to businesses of all sizes.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-3">Our Approach</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        We combine cutting-edge AI technology with deep business understanding to create automation solutions that actually work in the real world. Our methodology focuses on measurable business outcomes, not just technical implementation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Expertise */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-display font-bold text-foreground mb-4">
                Expert Team, Proven Results
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our multidisciplinary team brings together the best in AI, automation, and business consulting.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-2 bg-card shadow-card hover:shadow-elegant transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="bg-primary/10 text-primary p-3 rounded-xl w-fit mb-4">
                        <member.icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-xl font-semibold text-foreground mb-3">
                        {member.name}
                      </h4>
                      <p className="text-muted-foreground mb-4">
                        {member.description}
                      </p>
                      <div className="space-y-2">
                        {member.expertise.map((skill, skillIndex) => (
                          <div key={skillIndex} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-display font-bold text-foreground mb-4">
                Our Core Values
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do and every solution we build.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-background rounded-2xl p-6 border border-border/50">
                    <div className="bg-primary/10 text-primary p-3 rounded-xl w-fit mx-auto mb-4">
                      <value.icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-3">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-background border-2 border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                Ready to Work with Our Expert Team?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how our proven expertise can transform your business operations and drive real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <button className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl font-semibold shadow-card hover:shadow-elegant transition-all duration-300">
                    Schedule Consultation
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <Link to="/services">
                  <button className="inline-flex items-center justify-center gap-2 border-2 border-primary/30 hover:bg-primary/10 text-foreground px-8 py-3 rounded-xl font-semibold transition-all duration-300">
                    View Our Services
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 