"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Bot, 
  Zap, 
  Brain,
  ArrowRight,
  MessageSquare,
  FileText,
  BarChart3,
  Settings,
  Shield
} from "lucide-react";
import { Link } from "react-router-dom";

export const ServicesSection = () => {
  const services = [
    {
      icon: Bot,
      title: "AI-Powered Customer Support",
      description: "Automate customer inquiries with intelligent chatbots that understand context and provide accurate responses 24/7.",
      features: [
        "Natural language processing",
        "Multi-language support",
        "Integration with CRM systems",
        "Real-time analytics dashboard"
      ],
      benefits: [
        "Reduce support costs by 60%",
        "Improve response time to under 30 seconds",
        "Handle 10x more inquiries simultaneously",
        "24/7 customer support availability"
      ],
      solution: "Our AI chatbots understand customer intent and provide accurate, helpful responses while seamlessly escalating complex issues to human agents when needed."
    },
    {
      icon: FileText,
      title: "Document Processing Automation",
      description: "Extract, process, and analyze data from documents automatically using advanced OCR and AI technology.",
      features: [
        "Intelligent data extraction",
        "Multi-format document support",
        "Automated data validation",
        "Seamless system integration"
      ],
      benefits: [
        "Process documents 10x faster",
        "Reduce manual data entry errors by 95%",
        "Save 40+ hours per week on paperwork",
        "Improve data accuracy and compliance"
      ],
      solution: "Transform unstructured documents into structured data automatically, eliminating manual processing and reducing errors while improving compliance."
    },
    {
      icon: BarChart3,
      title: "Business Intelligence & Analytics",
      description: "Transform raw data into actionable insights with automated reporting and predictive analytics.",
      features: [
        "Real-time data visualization",
        "Predictive analytics models",
        "Automated report generation",
        "Custom dashboard creation"
      ],
      benefits: [
        "Make data-driven decisions faster",
        "Identify trends and opportunities",
        "Reduce reporting time by 80%",
        "Improve forecasting accuracy"
      ],
      solution: "Turn your business data into strategic insights with automated analytics that help you make better decisions and identify growth opportunities."
    }
  ];

  return (
    <section className="py-20 bg-background">
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
            <Zap className="w-4 h-4" />
            Our Services
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6"
          >
            Comprehensive AI Automation Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            From customer support to data analysis, we provide end-to-end automation solutions that transform how your business operates.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-2 bg-card shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8">
                  <div className="bg-primary/10 text-primary p-3 rounded-xl w-fit mb-6">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <h4 className="font-semibold text-foreground">Key Features:</h4>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <h4 className="font-semibold text-foreground">Business Benefits:</h4>
                    <div className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-xl p-4">
                    <h4 className="font-semibold text-foreground mb-2">Our Solution:</h4>
                    <p className="text-sm text-muted-foreground">
                      {service.solution}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-muted/30 border-2 border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              Explore All Our Services
            </h3>
            <p className="text-muted-foreground mb-6">
              We offer a comprehensive suite of AI automation solutions tailored to your specific business needs.
            </p>
            <Link to="/services">
              <button className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl font-semibold shadow-card hover:shadow-elegant transition-all duration-300">
                View All Services
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 