"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  Quote,
  CheckCircle,
  ArrowRight,
  Zap,
  Target,
  Award
} from "lucide-react";

export const ResultsProofSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Operations Director",
      company: "TechFlow Solutions",
      avatar: "SC",
      rating: 5,
      quote: "QuoraFlo automated 70% of our manual processes. We're now focusing on growth instead of admin work. The ROI was immediate and substantial.",
      results: ["40 hours saved weekly", "3x productivity increase", "Deployed in 3 weeks"]
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      company: "ScaleUp Ventures",
      avatar: "MR",
      rating: 5,
      quote: "The AI integration exceeded our expectations. Our team productivity increased 3x in just 3 months. The implementation was seamless.",
      results: ["$50K monthly savings", "2x faster decision making", "Zero downtime deployment"]
    },
    {
      name: "Lisa Thompson",
      role: "CEO",
      company: "Growth Dynamics",
      avatar: "LT",
      rating: 5,
      quote: "Finally, automation that actually works with our existing tools. Game changer for our business operations and bottom line.",
      results: ["60% cost reduction", "4x efficiency gains", "Full team adoption"]
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "95% Success Rate",
      description: "Client satisfaction and project success"
    },
    {
      icon: Target,
      title: "2-4 Week Deployment",
      description: "Average time from start to go-live"
    },
    {
      icon: Zap,
      title: "24/7 Support",
      description: "Round-the-clock technical assistance"
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
            <Star className="w-4 h-4" />
            Real Results
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6"
          >
            Proven Results from Real Clients
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            See how we've helped hundreds of businesses achieve unprecedented efficiency and growth through AI automation.
          </motion.p>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-bold text-foreground mb-4">
              What Our Clients Say
            </h3>
            <p className="text-lg text-muted-foreground">
              Real feedback from businesses that have transformed their operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 bg-card shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <div className="mb-6">
                      <Quote className="w-8 h-8 text-primary/30 mb-3" />
                      <p className="text-muted-foreground leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                    </div>

                    {/* Results */}
                    <div className="space-y-2 mb-6">
                      {testimonial.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{result}</span>
                        </div>
                      ))}
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-sm font-semibold text-primary">
                          {testimonial.avatar}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role} at {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12 mb-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-bold text-foreground mb-4">
              Why Choose QuoraFlo
            </h3>
            <p className="text-lg text-muted-foreground">
              Our commitment to excellence and proven track record
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-primary/10 text-primary p-4 rounded-2xl w-fit mx-auto mb-4">
                  <achievement.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">
                  {achievement.title}
                </h4>
                <p className="text-muted-foreground">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-display font-bold text-foreground mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have already automated their operations and achieved remarkable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Your Free Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 