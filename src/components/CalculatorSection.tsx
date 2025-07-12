"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, TrendingUp, Clock, DollarSign, Rocket, Calendar } from "lucide-react";

export const CalculatorSection = () => {
  const [employees, setEmployees] = useState([50]);
  const [hourlyWage, setHourlyWage] = useState(25);
  const [weeklyHours, setWeeklyHours] = useState([10]);
  const [automationPercent, setAutomationPercent] = useState([60]);

  const calculateSavings = () => {
    const totalWeeklyHours = employees[0] * weeklyHours[0];
    const hoursAutomated = totalWeeklyHours * (automationPercent[0] / 100);
    const weeklySavings = hoursAutomated * hourlyWage;
    const monthlySavings = weeklySavings * 4.33;
    const annualSavings = weeklySavings * 52;

    return {
      weeklyHours: hoursAutomated,
      weeklySavings,
      monthlySavings,
      annualSavings,
    };
  };

  const savings = calculateSavings();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatHours = (hours: number) => {
    return Math.round(hours * 10) / 10;
  };

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <Calculator className="w-4 h-4" />
            ROI Calculator
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4"
          >
            Calculate Your Potential Savings
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            See how much time and money your organization could save with AI automation
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Calculator Input Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <Card className="border-2 bg-card h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                  <Calculator className="w-6 h-6 text-primary" />
                  Input Your Data
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Number of Employees */}
                <div className="space-y-3">
                  <Label className="text-base font-medium text-foreground">
                    Number of Employees: {employees[0]}
                  </Label>
                  <Slider
                    value={employees}
                    onValueChange={setEmployees}
                    max={500}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>1</span>
                    <span>500</span>
                  </div>
                </div>

                {/* Hourly Wage */}
                <div className="space-y-3">
                  <Label className="text-base font-medium text-foreground">
                    Average Hourly Wage
                  </Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      type="number"
                      value={hourlyWage}
                      onChange={(e) => setHourlyWage(Number(e.target.value))}
                      min={10}
                      max={100}
                      className="pl-10"
                      placeholder="25"
                    />
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>$10 - $100 per hour</span>
                  </div>
                </div>

                {/* Weekly Hours */}
                <div className="space-y-3">
                  <Label className="text-base font-medium text-foreground">
                    Hours on Repetitive Tasks (per week, per employee): {weeklyHours[0]}
                  </Label>
                  <Slider
                    value={weeklyHours}
                    onValueChange={setWeeklyHours}
                    max={40}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>1 hour</span>
                    <span>40 hours</span>
                  </div>
                </div>

                {/* Automation Percentage */}
                <div className="space-y-3">
                  <Label className="text-base font-medium text-foreground">
                    Automation Achievable: {automationPercent[0]}%
                  </Label>
                  <Slider
                    value={automationPercent}
                    onValueChange={setAutomationPercent}
                    max={90}
                    min={20}
                    step={5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>20%</span>
                    <span>90%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6 h-full flex flex-col"
          >
            <Card className="border-2 border-primary/20 bg-card flex-1">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  Your Potential Savings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 flex-1">
                {/* Weekly Hours Saved */}
                <div className="text-center p-6 bg-background rounded-lg border">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground mb-1">Weekly Hours Saved</p>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={savings.weeklyHours}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="text-3xl font-bold text-primary"
                    >
                      {formatHours(savings.weeklyHours)} hrs
                    </motion.p>
                  </AnimatePresence>
                </div>

                {/* Weekly Savings */}
                <div className="text-center p-6 bg-background rounded-lg border">
                  <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground mb-1">Weekly Cost Savings</p>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={savings.weeklySavings}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="text-3xl font-bold text-primary"
                    >
                      {formatCurrency(savings.weeklySavings)}
                    </motion.p>
                  </AnimatePresence>
                </div>

                {/* Monthly Savings */}
                <div className="text-center p-6 bg-background rounded-lg border">
                  <p className="text-sm text-muted-foreground mb-1">Monthly Cost Savings</p>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={savings.monthlySavings}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="text-3xl font-bold text-primary"
                    >
                      {formatCurrency(savings.monthlySavings)}
                    </motion.p>
                  </AnimatePresence>
                </div>

                {/* Annual Savings */}
                <div className="text-center p-8 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="text-base text-muted-foreground mb-2 font-medium">Annual Cost Savings</p>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={savings.annualSavings}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.1 }}
                      transition={{ duration: 0.4, type: "spring" }}
                      className="text-4xl md:text-5xl font-bold text-primary"
                    >
                      {formatCurrency(savings.annualSavings)}
                    </motion.p>
                  </AnimatePresence>
                  <p className="text-sm text-primary/80 mt-2 font-medium">
                    Projected annual savings
                  </p>
                </div>
              </CardContent>
            </Card>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Button 
                size="lg" 
                className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-card hover:shadow-elegant transition-all duration-300"
              >
                Get Your Custom Assessment
              </Button>
              <p className="text-sm text-muted-foreground text-center mt-3">
                Schedule a free consultation to validate these projections
              </p>
            </motion.div>
          </motion.div>
        </div>
        
        {/* CTA Section Below Calculator */}
        <div className="mt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12 shadow-card"
          >
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Rocket className="w-4 h-4" />
                  Ready to Transform?
                </div>
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Ready to <span className="text-primary">10x Your Efficiency?</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of businesses that have transformed their operations with our AI automation platform. Start your journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4 rounded-xl font-semibold shadow-card hover:shadow-elegant hover-lift"
                >
                  <Rocket className="mr-3 h-5 w-5" />
                  Start Free Trial
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="text-lg px-8 py-4 rounded-xl font-semibold border-primary/30 hover:bg-primary/10"
                >
                  <Calendar className="mr-3 h-5 w-5" />
                  Book Consultation
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                No credit card required • Setup in under 10 minutes • Cancel anytime
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};