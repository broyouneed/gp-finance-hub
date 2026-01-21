import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Shield, Clock, Target, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Target,
    title: "Define Your Goals",
    description: "Identify whether you're investing for retirement, education, or wealth creation.",
  },
  {
    icon: Clock,
    title: "Check Your Time Horizon",
    description: "Short-term goals need stable funds, while long-term can afford equity exposure.",
  },
  {
    icon: Shield,
    title: "Assess Your Risk Tolerance",
    description: "Conservative investors should prefer debt funds; aggressive can choose equity.",
  },
  {
    icon: TrendingUp,
    title: "Analyze Fund Performance",
    description: "Look at 3-5 year returns, not just recent performance. Check consistency.",
  },
];

const tips = [
  "Compare expense ratios - lower is better",
  "Check fund manager's track record",
  "Look for funds with consistent returns",
  "Diversify across fund categories",
  "Start with SIP for disciplined investing",
];

export const MutualFundGuide = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="mutual-fund-guide" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-bold text-sm uppercase tracking-wider">
            ★ Expert Guide
          </span>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-black mt-3 text-primary"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            HOW TO SELECT{" "}
            <span className="text-accent">TOP MUTUAL FUNDS</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Follow these proven steps to choose the best mutual funds for your portfolio
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex gap-4 bg-card rounded-2xl p-6 border-2 border-border hover:border-accent transition-colors group"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                  <step.icon className="w-7 h-7 text-accent group-hover:text-primary" />
                </div>
                <div>
                  <h3 
                    className="font-bold text-lg text-primary mb-1"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tips Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-primary rounded-3xl p-8 text-primary-foreground"
          >
            <h3 
              className="text-2xl font-black mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              PRO TIPS FOR SUCCESS
            </h3>
            <ul className="space-y-4">
              {tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-primary-foreground/90">{tip}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-primary-foreground/20">
              <p className="text-sm text-primary-foreground/80 mb-4">
                Need personalized guidance? Our experts can help you build the perfect portfolio.
              </p>
              <a href="#contact">
                <Button className="bg-accent text-primary font-bold hover:bg-accent/90 rounded-full px-6">
                  Get Expert Advice
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
