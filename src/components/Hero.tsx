import { motion } from "framer-motion";
import { ArrowRight, Shield, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: Shield, text: "Secure & Trusted" },
  { icon: Users, text: "15k+ Clients" },
  { icon: TrendingUp, text: "Best Rates" },
];

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] hero-gradient overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Your Trusted Financial Partner
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your One-Stop{" "}
              <span className="gradient-text">Business Loan</span> &{" "}
              <span className="gradient-accent-text">Insurance</span> Platform
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              Apply once, get offers from multiple lenders. Get the best interest rates 
              with our hassle-free and speedy loan process. Comprehensive insurance 
              solutions for your business and family.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="btn-gradient rounded-full px-8 group">
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 border-2 hover:bg-primary hover:text-primary-foreground">
                Learn More
              </Button>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-4 pt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2 bg-card shadow-[var(--shadow-sm)] px-4 py-2 rounded-full"
                >
                  <feature.icon className="w-5 h-5 text-secondary" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hero Image/Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="glass-card rounded-3xl p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary">25</span>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Years</p>
                    <p className="font-semibold text-lg">Of Experience</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary/5 rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold text-primary">15K+</p>
                    <p className="text-sm text-muted-foreground">Happy Clients</p>
                  </div>
                  <div className="bg-secondary/10 rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold text-secondary">99%</p>
                    <p className="text-sm text-muted-foreground">Success Rate</p>
                  </div>
                </div>

                <div className="bg-accent/10 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Loan Approval Rate</span>
                    <span className="text-accent font-bold">95%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "95%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-accent rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-4 animate-float"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Best Rates</p>
                    <p className="font-bold text-lg">From 8.5%</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
