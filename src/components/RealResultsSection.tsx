"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, Star, ShoppingCart, Megaphone, Cog } from "lucide-react";

const testimonials = [
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    industry: "E-commerce",
    category: "Retail Technology",
    quote: "QuoraFlo's automation solution transformed our customer support. The AI chatbot handles 80% of inquiries automatically, allowing our team to focus on complex issues. The implementation was smooth and the results were immediate.",
    clientName: "Sarah Chen",
    clientTitle: "Operations Manager",
    clientCompany: "TechFlow Retail"
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    industry: "Marketing Agency", 
    category: "Digital Marketing",
    quote: "The document processing automation has saved us countless hours. What used to take days now happens in minutes. The accuracy is incredible and it integrates seamlessly with our existing systems.",
    clientName: "Michael Rodriguez",
    clientTitle: "Founder",
    clientCompany: "Growth Marketing Pro"
  },
  {
    icon: <Cog className="w-6 h-6" />,
    industry: "Manufacturing",
    category: "Industrial Automation", 
    quote: "We were skeptical about AI automation, but QuoraFlo proved us wrong. Their solution streamlined our inventory management and quality control processes. The ROI was clear within the first month.",
    clientName: "Jennifer Park",
    clientTitle: "Director of Operations",
    clientCompany: "Precision Manufacturing Co."
  }
];

export const RealResultsSection = () => {
  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <Quote className="w-4 h-4" />
            Client Testimonials
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Hear from businesses that have transformed their operations with our AI automation solutions
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-2 border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                        {testimonial.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{testimonial.industry}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {testimonial.category}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <blockquote className="text-sm text-muted-foreground leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="pt-4 border-t border-border/30">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-sm font-semibold text-primary">
                          {testimonial.clientName.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {testimonial.clientName}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.clientTitle} at {testimonial.clientCompany}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-background border-2 border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how our AI automation solutions can transform your business operations and deliver real results.
            </p>
            <button className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl font-semibold shadow-card hover:shadow-elegant transition-all duration-300">
              Start Your Transformation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};