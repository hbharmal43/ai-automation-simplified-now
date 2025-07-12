"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Megaphone, Cog, Target } from "lucide-react";

const results = [
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    industry: "E-commerce",
    category: "Retail Technology",
    metrics: [
      { label: "Cost Reduction", value: "40%", color: "text-emerald-500" },
      { label: "Automated Support", value: "24", color: "text-emerald-500" }
    ],
    description: "Implemented intelligent chatbot system with automated order tracking, returns processing, and product recommendations",
    clientInfo: "Large online retailer serving 100k+ customers monthly"
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    industry: "Marketing Agency", 
    category: "Digital Marketing",
    metrics: [
      { label: "Faster Qualification", value: "60%", color: "text-emerald-500" },
      { label: "Qualified Leads", value: "+300%", color: "text-emerald-500" }
    ],
    description: "Deployed AI-powered lead scoring and automated nurture campaigns with dynamic content personalization",
    clientInfo: "Mid-size agency managing campaigns for 50+ B2B clients"
  },
  {
    icon: <Cog className="w-6 h-6" />,
    industry: "Manufacturing",
    category: "Industrial Automation", 
    metrics: [
      { label: "Time Savings", value: "75%", color: "text-emerald-500" },
      { label: "Data Accuracy", value: "99%", color: "text-emerald-500" }
    ],
    description: "Automated inventory management and quality control processes with real-time monitoring and alerts",
    clientInfo: "Mid-scale manufacturer with 200+ SKUs and complex supply chain"
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
            <Target className="w-4 h-4" />
            Case Studies
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4"
          >
            Real Results for Real Businesses
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            See how our automation solutions have transformed operations and delivered measurable ROI across different industries
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {results.map((result, index) => (
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
                        {result.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{result.industry}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {result.category}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {result.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className={`text-3xl font-bold ${metric.color} mb-1`}>
                          {metric.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {result.description}
                    </p>
                    <div className="pt-4 border-t border-border/30">
                      <p className="text-xs text-muted-foreground italic">
                        {result.clientInfo}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};