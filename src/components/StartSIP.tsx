import { motion, useInView } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  TrendingUp,
  Calculator,
  Wallet,
  Star,
  IndianRupee,
  PiggyBank,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

const benefits = [
  { icon: Wallet, title: "Start with ₹500", desc: "Minimum investment" },
  { icon: Calculator, title: "Power of Compounding", desc: "Grow wealth over time" },
  { icon: TrendingUp, title: "Rupee Cost Averaging", desc: "Reduce market risk" },
];

const formatCurrency = (amount: number) => {
  if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(2)} Cr`;
  if (amount >= 100000) return `₹${(amount / 100000).toFixed(2)} L`;
  return `₹${amount.toLocaleString("en-IN")}`;
};

export const StartSIP = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // ✅ Tabs on right side
  const [activeTab, setActiveTab] = useState<"sip" | "mf">("sip");

  return (
<section
  id="StartSIP"
  className="section-padding bg-accent/10 relative overflow-hidden"
  ref={ref}
>
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-accent text-primary px-4 py-2 rounded-full text-sm font-bold">
              <Star className="w-4 h-4" />
              Smart Investment Choice
            </div>

            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-tight"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              START A <span className="text-accent">SIP</span> NOW
            </h2>

            <p className="text-lg text-muted-foreground max-w-lg">
              Systematic Investment Plan (SIP) is the smartest way to invest in mutual funds.
              Start small, stay consistent, and watch your wealth grow over time.
            </p>

            <div className="flex flex-wrap gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-primary">{benefit.title}</p>
                    <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#contact">
                <Button size="lg" className="btn-gradient rounded-full px-8 text-lg font-bold group">
                  Start Your SIP Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>

              <button
                onClick={() => setActiveTab("sip")}
                className="hidden"
                aria-hidden="true"
              />
              <a href="#calculators">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 text-lg font-bold border-2 border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Calculate Returns
                </Button>
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE - CALCULATORS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card rounded-3xl p-6 md:p-8 shadow-xl border-2 border-accent/30">
              <h3
                className="text-xl font-black text-primary mb-5 text-center"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                CALCULATORS
              </h3>

              {/* Tab Switcher */}
              <div className="flex justify-center mb-6">
                <div className="inline-flex bg-muted p-1.5 rounded-2xl gap-1">
                  <button
                    onClick={() => setActiveTab("sip")}
                    className={cn(
                      "px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300",
                      activeTab === "sip"
                        ? "bg-secondary text-secondary-foreground shadow-lg"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <TrendingUp className="w-4 h-4 inline-block mr-2" />
                    SIP Calculator
                  </button>

                  <button
                    onClick={() => setActiveTab("mf")}
                    className={cn(
                      "px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300",
                      activeTab === "mf"
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <Calculator className="w-4 h-4 inline-block mr-2" />
                    MF Calculator
                  </button>
                </div>
              </div>

              {/* Calculator Content */}
              {activeTab === "sip" ? <SIPCalculatorMini /> : <MutualFundCalculatorMini />}

              <div className="mt-6">
                <a href="#contact" className="block">
                  <Button className="w-full btn-gradient rounded-full font-bold">
                    Talk to an Advisor
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SIPCalculatorMini = () => {
  const [goalAmount, setGoalAmount] = useState(2000000); // 🎯 Goal
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);

  // 🔢 Calculate SIP required for goal
  const calculatedMonthlySIP = useMemo(() => {
    const r = expectedReturn / 12 / 100;
    const n = timePeriod * 12;

    if (r === 0) return Math.round(goalAmount / n);

    const sip =
      goalAmount /
      (((Math.pow(1 + r, n) - 1) / r) * (1 + r));

    return Math.max(500, Math.round(sip));
  }, [goalAmount, expectedReturn, timePeriod]);

  // Sync SIP with goal-based calculation
  useMemo(() => {
    setMonthlyInvestment(calculatedMonthlySIP);
  }, [calculatedMonthlySIP]);

  const sipDetails = useMemo(() => {
    const P = monthlyInvestment;
    const r = expectedReturn / 12 / 100;
    const n = timePeriod * 12;

    const totalInvested = P * n;

    if (r === 0) {
      return {
        totalInvested,
        futureValue: totalInvested,
        wealthGained: 0,
      };
    }

    const futureValue = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    const wealthGained = futureValue - totalInvested;

    return {
      totalInvested: Math.round(totalInvested),
      futureValue: Math.round(futureValue),
      wealthGained: Math.round(wealthGained),
    };
  }, [monthlyInvestment, expectedReturn, timePeriod]);

  return (
    <div className="space-y-5">
      {/* Result */}
      <div className="bg-secondary/10 rounded-2xl p-5 text-center border border-secondary/20">
        <div className="flex items-center justify-center gap-2 mb-2">
          <TrendingUp className="w-5 h-5 text-secondary" />
          <span className="text-sm font-medium text-muted-foreground">
            Goal Amount
          </span>
        </div>
        <p className="text-3xl md:text-4xl font-black text-secondary flex items-center justify-center gap-1">
          <IndianRupee className="w-7 h-7" />
          {goalAmount.toLocaleString("en-IN")}
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Required SIP:{" "}
          <span className="font-semibold text-secondary">
            {formatCurrency(monthlyInvestment)}
          </span>
        </p>
      </div>

      {/* 🎯 Goal Amount Slider */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium">Goal Amount</label>
          <span className="text-secondary font-bold">
            {formatCurrency(goalAmount)}
          </span>
        </div>
        <Slider
          value={[goalAmount]}
          onValueChange={(v) => setGoalAmount(v[0])}
          min={100000}
          max={50000000}
          step={50000}
        />
      </div>

      {/* Monthly SIP (Auto-calculated) */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium">Monthly SIP</label>
          <span className="text-secondary font-bold">
            {formatCurrency(monthlyInvestment)}
          </span>
        </div>
        <Slider
          value={[monthlyInvestment]}
          onValueChange={(v) => setMonthlyInvestment(v[0])}
          min={500}
          max={200000}
          step={500}
        />
      </div>

      {/* Expected Return */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium">Expected Return</label>
          <span className="text-secondary font-bold">
            {expectedReturn}%
          </span>
        </div>
        <Slider
          value={[expectedReturn]}
          onValueChange={(v) => setExpectedReturn(v[0])}
          min={1}
          max={30}
          step={0.5}
        />
      </div>

      {/* Time Period */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium">Time Period</label>
          <span className="text-secondary font-bold">
            {timePeriod} years
          </span>
        </div>
        <Slider
          value={[timePeriod]}
          onValueChange={(v) => setTimePeriod(v[0])}
          min={1}
          max={40}
          step={1}
        />
      </div>

      <div className="bg-secondary/10 rounded-xl p-4 text-center">
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-secondary">Tip:</span>{" "}
          Setting a clear goal helps you invest with discipline.
        </p>
      </div>
    </div>
  );
};


/* -------------------------- MUTUAL FUND CALC MINI -------------------------- */
const MutualFundCalculatorMini = () => {
  const [goalAmount, setGoalAmount] = useState(3000000); // 🎯 Goal
  const [investment, setInvestment] = useState(100000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);

  // 🔢 Calculate required lump-sum investment for goal
  const requiredInvestment = useMemo(() => {
    const r = expectedReturn / 100;
    const t = timePeriod;

    if (r === 0) return Math.round(goalAmount);

    const required = goalAmount / Math.pow(1 + r, t);
    return Math.max(1000, Math.round(required));
  }, [goalAmount, expectedReturn, timePeriod]);

  // Sync investment with goal calculation
  useMemo(() => {
    setInvestment(requiredInvestment);
  }, [requiredInvestment]);

  const mfDetails = useMemo(() => {
    const P = investment;
    const r = expectedReturn / 100;
    const t = timePeriod;

    const futureValue = P * Math.pow(1 + r, t);
    const gains = futureValue - P;

    return {
      invested: Math.round(P),
      futureValue: Math.round(futureValue),
      gains: Math.round(gains),
    };
  }, [investment, expectedReturn, timePeriod]);

  return (
    <div className="space-y-5">
      {/* Result */}
      <div className="bg-primary/10 rounded-2xl p-5 text-center border border-primary/20">
        <div className="flex items-center justify-center gap-2 mb-2">
          <PiggyBank className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium text-muted-foreground">
            Goal Amount
          </span>
        </div>
        <p className="text-3xl md:text-4xl font-black text-primary flex items-center justify-center gap-1">
          <IndianRupee className="w-7 h-7" />
          {goalAmount.toLocaleString("en-IN")}
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Required Investment:{" "}
          <span className="font-semibold text-primary">
            {formatCurrency(investment)}
          </span>
        </p>
      </div>

      {/* 🎯 Goal Amount */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium">Goal Amount</label>
          <span className="text-primary font-bold">
            {formatCurrency(goalAmount)}
          </span>
        </div>
        <Slider
          value={[goalAmount]}
          onValueChange={(v) => setGoalAmount(v[0])}
          min={100000}
          max={50000000}
          step={50000}
        />
      </div>

      {/* One-time Investment (Auto-calculated) */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium">One-time Investment</label>
          <span className="text-primary font-bold">
            {formatCurrency(investment)}
          </span>
        </div>
        <Slider
          value={[investment]}
          onValueChange={(v) => setInvestment(v[0])}
          min={1000}
          max={5000000}
          step={1000}
        />
      </div>

      {/* Expected Return */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium">Expected Return</label>
          <span className="text-primary font-bold">
            {expectedReturn}%
          </span>
        </div>
        <Slider
          value={[expectedReturn]}
          onValueChange={(v) => setExpectedReturn(v[0])}
          min={1}
          max={30}
          step={0.5}
        />
      </div>

      {/* Time Period */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium">Time Period</label>
          <span className="text-primary font-bold">
            {timePeriod} years
          </span>
        </div>
        <Slider
          value={[timePeriod]}
          onValueChange={(v) => setTimePeriod(v[0])}
          min={1}
          max={40}
          step={1}
        />
      </div>

      <div className="bg-primary/10 rounded-xl p-4 text-center">
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-primary">Tip:</span>{" "}
          Goal-based investing works best with patience and discipline.
        </p>
      </div>
    </div>
  );
};

