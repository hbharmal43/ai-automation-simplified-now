"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, TrendingUp, Clock, DollarSign, Users, Target, Zap, ArrowRight } from "lucide-react";

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

  const sliderConfig = {
    employees: { min: 1, max: 500, step: 1 },
    weeklyHours: { min: 1, max: 40, step: 1 },
    automationPercent: { min: 20, max: 90, step: 5 },
  };

  return (
    <div className="grid lg:grid-cols-5 gap-8">
      {/* Compact Input Section */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="lg:col-span-2"
      >
        <Card className="h-full bg-card border-2 shadow-card">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl text-foreground flex items-center gap-2">
              <Calculator className="w-5 h-5 text-primary" />
              Input Parameters
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Employees */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  Employees
                </Label>
                <span className="text-lg font-semibold text-primary">{employees[0]}</span>
              </div>
              <Slider
                value={employees}
                onValueChange={setEmployees}
                max={sliderConfig.employees.max}
                min={sliderConfig.employees.min}
                step={sliderConfig.employees.step}
                className="w-full"
              />
            </div>

            {/* Hourly Wage */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-foreground flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-primary" />
                Hourly Wage
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
            </div>

            {/* Weekly Hours */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  Weekly Hours
                </Label>
                <span className="text-lg font-semibold text-primary">{weeklyHours[0]}h</span>
              </div>
              <Slider
                value={weeklyHours}
                onValueChange={setWeeklyHours}
                max={sliderConfig.weeklyHours.max}
                min={sliderConfig.weeklyHours.min}
                step={sliderConfig.weeklyHours.step}
                className="w-full"
              />
            </div>

            {/* Automation Percentage */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Target className="w-4 h-4 text-primary" />
                  Automation Rate
                </Label>
                <span className="text-lg font-semibold text-primary">{automationPercent[0]}%</span>
              </div>
              <Slider
                value={automationPercent}
                onValueChange={setAutomationPercent}
                max={sliderConfig.automationPercent.max}
                min={sliderConfig.automationPercent.min}
                step={sliderConfig.automationPercent.step}
                className="w-full"
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Results Section */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="lg:col-span-3"
      >
        <Card className="h-full bg-primary/5 border-2 border-primary/20 shadow-card">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl text-foreground flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Your Potential Savings
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Savings Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* Weekly Hours */}
              <div className="bg-background rounded-lg p-4 border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">Weekly Hours</span>
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={savings.weeklyHours}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl font-bold text-primary"
                  >
                    {formatHours(savings.weeklyHours)}
                  </motion.div>
                </AnimatePresence>
                <span className="text-sm text-muted-foreground">hours saved</span>
              </div>

              {/* Weekly Savings */}
              <div className="bg-background rounded-lg p-4 border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">Weekly Savings</span>
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={savings.weeklySavings}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl font-bold text-primary"
                  >
                    {formatCurrency(savings.weeklySavings)}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Monthly Savings */}
              <div className="bg-background rounded-lg p-4 border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">Monthly</span>
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={savings.monthlySavings}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl font-bold text-primary"
                  >
                    {formatCurrency(savings.monthlySavings)}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Annual Highlight */}
              <div className="bg-primary text-primary-foreground rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4" />
                  <span className="text-sm font-medium">Annual Savings</span>
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={savings.annualSavings}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                    className="text-3xl font-bold"
                  >
                    {formatCurrency(savings.annualSavings)}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* CTA Section */}
            <div className="space-y-3">
              <Button 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 shadow-card hover:shadow-elegant transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Your Custom Assessment
                <ArrowRight className="w-4 h-4" />
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                Schedule a free consultation to validate these projections
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};