"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle, 
  Users, 
  Award, 
  Clock, 
  Star,
  ArrowRight,
  Bot
} from "lucide-react";
import { Link } from "react-router-dom";

export const AboutSection = () => {
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

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Bot className="w-4 h-4" />
            About QuoraFlo
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6"
          >
            Trusted by 500+ Businesses
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            We're a team of AI experts, automation specialists, and business consultants who believe that every business deserves access to enterprise-grade automation technology.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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

        {/* Brief Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-background border-2 border-primary/20 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              Our Mission
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              To democratize AI automation for businesses of all sizes, enabling them to focus on growth and innovation rather than repetitive tasks. We combine cutting-edge AI technology with deep business understanding to create automation solutions that actually work in the real world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/about">
                <button className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl font-semibold shadow-card hover:shadow-elegant transition-all duration-300">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link to="/contact">
                <button className="inline-flex items-center justify-center gap-2 border-2 border-primary/30 hover:bg-primary/10 text-foreground px-8 py-3 rounded-xl font-semibold transition-all duration-300">
                  Get Started Today
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 