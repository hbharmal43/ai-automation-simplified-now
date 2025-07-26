"use client";

import { motion } from 'framer-motion';
import { Search, Lightbulb, Cog, GraduationCap } from 'lucide-react';

export const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: "Discovery & Analysis",
      description: "We analyze your current workflows to identify automation opportunities and understand your specific business challenges.",
      icon: Search
    },
    {
      number: 2,
      title: "Custom AI Solution Design",
      description: "We design automation tailored to your business needs, creating a comprehensive strategy for maximum efficiency.",
      icon: Lightbulb
    },
    {
      number: 3,
      title: "Implementation & Testing",
      description: "We implement and thoroughly test the solution to ensure seamless integration with your existing systems.",
      icon: Cog
    },
    {
      number: 4,
      title: "Training & Optimization",
      description: "We train your team and optimize performance to ensure you get the maximum value from your AI automation.",
      icon: GraduationCap
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const stepVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const lineVariants = {
    hidden: {
      scaleX: 0
    },
    visible: {
      scaleX: 1
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Our Proven Implementation Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From discovery to deployment, we follow a structured approach to ensure your AI automation journey is successful
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-4 gap-8 relative">
              {/* Connection Lines */}
              {[1, 2, 3].map((index) => (
                <motion.div
                  key={`line-${index}`}
                  variants={lineVariants}
                  className="absolute top-12 bg-primary h-0.5 origin-left"
                  style={{
                    left: `${(100 / 4) * index - 4}%`,
                    width: `${100 / 4 - 4}%`,
                    transform: 'translateX(2rem)'
                  }}
                />
              ))}

              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={step.number}
                    variants={stepVariants}
                    className="relative"
                  >
                    <div className="bg-card border-2 border-border rounded-xl p-8 shadow-card hover:shadow-elegant transition-shadow duration-300 h-full">
                      {/* Step Number Circle */}
                      <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl shadow-card">
                          {step.number}
                        </div>
                      </div>

                      {/* Icon */}
                      <div className="flex justify-center mb-4">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-center leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isLast = index === steps.length - 1;

              return (
                <motion.div
                  key={step.number}
                  variants={stepVariants}
                  className="relative"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex flex-col items-center flex-shrink-0">
                      {/* Step Number Circle */}
                      <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-card z-10">
                        {step.number}
                      </div>
                      
                      {/* Vertical Line */}
                      {!isLast && (
                        <motion.div
                          variants={lineVariants}
                          className="w-0.5 h-16 bg-primary mt-4 origin-top"
                        />
                      )}
                    </div>

                    <div className="bg-card border-2 border-border rounded-xl p-6 shadow-card flex-1">
                      {/* Icon */}
                      <div className="mb-4">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              Ready to Start Your AI Automation Journey?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how our proven process can transform your business operations and drive efficiency gains.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl font-semibold shadow-card hover:shadow-elegant transition-all duration-300 inline-flex items-center gap-2">
              Schedule a Discovery Call
              <Search className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 