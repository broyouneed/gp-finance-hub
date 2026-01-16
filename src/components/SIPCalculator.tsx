import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { TrendingUp, IndianRupee, PiggyBank } from "lucide-react";
import { Slider } from "@/components/ui/slider";

export const SIPCalculator = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);

  const sipDetails = useMemo(() => {
    const P = monthlyInvestment;
    const r = expectedReturn / 12 / 100;
    const n = timePeriod * 12;
    
    const totalInvested = P * n;
    const futureValue = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    const wealthGained = futureValue - totalInvested;

    return {
      totalInvested: Math.round(totalInvested),
      futureValue: Math.round(futureValue),
      wealthGained: Math.round(wealthGained),
    };
  }, [monthlyInvestment, expectedReturn, timePeriod]);

  const investedPercentage = (sipDetails.totalInvested / sipDetails.futureValue) * 100;
  const returnsPercentage = (sipDetails.wealthGained / sipDetails.futureValue) * 100;

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)} L`;
    }
    return `₹${amount.toLocaleString('en-IN')}`;
  };

  return (
    <section id="sip-calculator" className="section-padding hero-gradient" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            ● Investment Planning
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            SIP <span className="gradient-text">Calculator</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Calculate your potential returns from Systematic Investment Plans. 
            Start small, grow big with the power of compounding.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="glass-card rounded-3xl p-8 md:p-10">
            <div className="grid lg:grid-cols-2 gap-10">
              {/* Left - Sliders */}
              <div className="space-y-8">
                {/* Monthly Investment */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium">Monthly Investment</label>
                    <span className="text-primary font-bold text-lg">
                      {formatCurrency(monthlyInvestment)}
                    </span>
                  </div>
                  <Slider
                    value={[monthlyInvestment]}
                    onValueChange={(value) => setMonthlyInvestment(value[0])}
                    min={500}
                    max={200000}
                    step={500}
                    className="py-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>₹500</span>
                    <span>₹2 Lakh</span>
                  </div>
                </div>

                {/* Expected Return */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium">Expected Return (p.a.)</label>
                    <span className="text-primary font-bold text-lg">{expectedReturn}%</span>
                  </div>
                  <Slider
                    value={[expectedReturn]}
                    onValueChange={(value) => setExpectedReturn(value[0])}
                    min={1}
                    max={30}
                    step={0.5}
                    className="py-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>1%</span>
                    <span>30%</span>
                  </div>
                </div>

                {/* Time Period */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium">Time Period</label>
                    <span className="text-primary font-bold text-lg">{timePeriod} years</span>
                  </div>
                  <Slider
                    value={[timePeriod]}
                    onValueChange={(value) => setTimePeriod(value[0])}
                    min={1}
                    max={40}
                    step={1}
                    className="py-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>1 year</span>
                    <span>40 years</span>
                  </div>
                </div>
              </div>

              {/* Right - Results */}
              <div className="space-y-6">
                {/* Future Value Display */}
                <div className="bg-accent/10 rounded-2xl p-6 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-accent" />
                    <span className="text-sm font-medium text-muted-foreground">Future Value</span>
                  </div>
                  <p className="text-4xl md:text-5xl font-bold text-accent flex items-center justify-center gap-1">
                    <IndianRupee className="w-8 h-8" />
                    {sipDetails.futureValue.toLocaleString('en-IN')}
                  </p>
                </div>

                {/* Breakdown */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-background rounded-xl">
                    <div className="flex items-center gap-2">
                      <PiggyBank className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">Total Invested</span>
                    </div>
                    <span className="font-semibold">{formatCurrency(sipDetails.totalInvested)}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-background rounded-xl">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-secondary" />
                      <span className="text-muted-foreground">Wealth Gained</span>
                    </div>
                    <span className="font-semibold text-secondary">{formatCurrency(sipDetails.wealthGained)}</span>
                  </div>
                </div>

                {/* Visual Bar */}
                <div className="space-y-2">
                  <div className="flex h-4 rounded-full overflow-hidden">
                    <div 
                      className="bg-primary transition-all duration-500"
                      style={{ width: `${investedPercentage}%` }}
                    />
                    <div 
                      className="bg-secondary transition-all duration-500"
                      style={{ width: `${returnsPercentage}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                      <span>Invested ({investedPercentage.toFixed(1)}%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-secondary" />
                      <span>Returns ({returnsPercentage.toFixed(1)}%)</span>
                    </div>
                  </div>
                </div>

                {/* Tip */}
                <div className="bg-secondary/10 rounded-xl p-4 text-center">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-secondary">Pro Tip:</span> Starting early and staying invested 
                    can significantly multiply your wealth through compounding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
