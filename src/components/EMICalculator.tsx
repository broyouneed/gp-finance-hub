import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { Calculator, IndianRupee } from "lucide-react";
import { Slider } from "@/components/ui/slider";

export const EMICalculator = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [interestRate, setInterestRate] = useState(10);
  const [tenure, setTenure] = useState(12);

  const emiDetails = useMemo(() => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 12 / 100;
    const months = tenure;
    
    if (monthlyRate === 0) {
      const emi = principal / months;
      return {
        emi: Math.round(emi),
        totalInterest: 0,
        totalPayment: principal,
      };
    }

    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                (Math.pow(1 + monthlyRate, months) - 1);
    const totalPayment = emi * months;
    const totalInterest = totalPayment - principal;

    return {
      emi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalPayment: Math.round(totalPayment),
    };
  }, [loanAmount, interestRate, tenure]);

  const principalPercentage = (loanAmount / emiDetails.totalPayment) * 100;
  const interestPercentage = (emiDetails.totalInterest / emiDetails.totalPayment) * 100;

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)} L`;
    }
    return `₹${amount.toLocaleString('en-IN')}`;
  };

  return (
    <section id="emi-calculator" className="section-padding bg-card" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            ● Financial Tools
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            EMI <span className="gradient-text">Calculator</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Plan your loan repayments with our easy-to-use EMI calculator. 
            Get instant estimates for your monthly payments.
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
                {/* Loan Amount */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium">Loan Amount</label>
                    <span className="text-primary font-bold text-lg">
                      {formatCurrency(loanAmount)}
                    </span>
                  </div>
                  <Slider
                    value={[loanAmount]}
                    onValueChange={(value) => setLoanAmount(value[0])}
                    min={100000}
                    max={50000000}
                    step={100000}
                    className="py-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>₹1 Lakh</span>
                    <span>₹5 Crore</span>
                  </div>
                </div>

                {/* Interest Rate */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium">Interest Rate (p.a.)</label>
                    <span className="text-primary font-bold text-lg">{interestRate}%</span>
                  </div>
                  <Slider
                    value={[interestRate]}
                    onValueChange={(value) => setInterestRate(value[0])}
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

                {/* Loan Tenure */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium">Loan Tenure (Months)</label>
                    <span className="text-primary font-bold text-lg">{tenure} months</span>
                  </div>
                  <Slider
                    value={[tenure]}
                    onValueChange={(value) => setTenure(value[0])}
                    min={6}
                    max={360}
                    step={6}
                    className="py-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>6 months</span>
                    <span>30 years</span>
                  </div>
                </div>
              </div>

              {/* Right - Results */}
              <div className="space-y-6">
                {/* EMI Display */}
                <div className="bg-primary/5 rounded-2xl p-6 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Calculator className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground">Monthly EMI</span>
                  </div>
                  <p className="text-4xl md:text-5xl font-bold text-primary flex items-center justify-center gap-1">
                    <IndianRupee className="w-8 h-8" />
                    {emiDetails.emi.toLocaleString('en-IN')}
                  </p>
                </div>

                {/* Breakdown */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-background rounded-xl">
                    <span className="text-muted-foreground">Principal Amount</span>
                    <span className="font-semibold">{formatCurrency(loanAmount)}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-background rounded-xl">
                    <span className="text-muted-foreground">Total Interest</span>
                    <span className="font-semibold text-accent">{formatCurrency(emiDetails.totalInterest)}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-primary/10 rounded-xl">
                    <span className="font-medium">Total Payment</span>
                    <span className="font-bold text-primary text-lg">{formatCurrency(emiDetails.totalPayment)}</span>
                  </div>
                </div>

                {/* Visual Bar */}
                <div className="space-y-2">
                  <div className="flex h-4 rounded-full overflow-hidden">
                    <div 
                      className="bg-primary transition-all duration-500"
                      style={{ width: `${principalPercentage}%` }}
                    />
                    <div 
                      className="bg-accent transition-all duration-500"
                      style={{ width: `${interestPercentage}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                      <span>Principal ({principalPercentage.toFixed(1)}%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-accent" />
                      <span>Interest ({interestPercentage.toFixed(1)}%)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
