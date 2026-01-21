import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, TrendingUp, Calculator, Wallet, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  { icon: Wallet, title: "Start with ₹500", desc: "Minimum investment" },
  { icon: Calculator, title: "Power of Compounding", desc: "Grow wealth over time" },
  { icon: TrendingUp, title: "Rupee Cost Averaging", desc: "Reduce market risk" },
];

export const StartSIP = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-accent/10 relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
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
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              START A{" "}
              <span className="text-accent">SIP</span>{" "}
              NOW
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
              <a href="#emi-calculator">
                <Button size="lg" variant="outline" className="rounded-full px-8 text-lg font-bold border-2 border-primary hover:bg-primary hover:text-primary-foreground">
                  Calculate Returns
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-card rounded-3xl p-8 shadow-xl border-2 border-accent/30">
              <h3 
                className="text-xl font-black text-primary mb-6 text-center"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                SIP CALCULATOR PREVIEW
              </h3>
              
              <div className="space-y-6">
                <div className="bg-primary/5 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-muted-foreground">Monthly Investment</span>
                    <span className="font-bold text-primary">₹10,000</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full">
                    <div className="h-full w-1/2 bg-primary rounded-full" />
                  </div>
                </div>

                <div className="bg-primary/5 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-muted-foreground">Time Period</span>
                    <span className="font-bold text-primary">10 Years</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full">
                    <div className="h-full w-2/3 bg-accent rounded-full" />
                  </div>
                </div>

                <div className="bg-accent/20 rounded-xl p-6 text-center border-2 border-accent">
                  <p className="text-sm text-muted-foreground mb-1">Expected Returns (12% p.a.)</p>
                  <p 
                    className="text-4xl font-black text-primary"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    ₹23.23 Lakhs
                  </p>
                  <p className="text-sm text-accent font-bold mt-1">
                    Investment: ₹12L | Gains: ₹11.23L
                  </p>
                </div>
              </div>

              <a href="#emi-calculator" className="block mt-6">
                <Button className="w-full btn-gradient rounded-full font-bold">
                  Try Full Calculator
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
