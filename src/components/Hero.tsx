import { motion } from "framer-motion";
import { ArrowRight, Shield, Users, TrendingUp, Star, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: Shield, text: "Secure & Trusted" },
  { icon: Users, text: "15k+ Clients" },
  { icon: TrendingUp, text: "Best Rates" },
  { icon: Award, text: "30 Years Experience" },
];

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] hero-gradient overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl" />
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
            <div className="inline-flex items-center gap-2 bg-accent/20 text-primary px-4 py-2 rounded-full text-sm font-bold border border-accent/30">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Your Trusted Financial Partner
            </div>

            {/* Large Slogan */}
            <h1 
              className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight text-primary"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Your Financial Journey,{" "}
              <span className="text-accent">Our Expertise</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg font-medium">
              Apply once, get offers from multiple lenders. Get the best interest rates 
              with our hassle-free and speedy loan process. Comprehensive insurance 
              solutions for your business and family.
            </p>

            {/* Star Ratings */}
            <div className="flex items-center gap-3 bg-card shadow-lg px-5 py-3 rounded-full w-fit">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="font-bold text-primary">4.9/5</span>
              <span className="text-muted-foreground">| 500+ Reviews</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="btn-gradient rounded-full px-8 text-lg font-bold group">
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 text-lg font-bold border-2 border-primary hover:bg-primary hover:text-primary-foreground">
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
                  className="flex items-center gap-2 bg-card shadow-[var(--shadow-md)] px-4 py-2 rounded-full border border-border"
                >
                  <feature.icon className="w-5 h-5 text-accent" />
                  <span className="text-sm font-bold text-primary">{feature.text}</span>
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
              <div className="glass-card rounded-3xl p-8 space-y-6 border-2 border-accent/20">
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 rounded-2xl bg-accent/20 flex items-center justify-center border-2 border-accent">
                    <span className="text-4xl font-black text-primary" style={{ fontFamily: 'Poppins, sans-serif' }}>30</span>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Years Of</p>
                    <p className="font-black text-2xl text-primary" style={{ fontFamily: 'Poppins, sans-serif' }}>EXPERIENCE</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary/10 rounded-xl p-4 text-center border border-primary/20">
                    <p className="text-3xl font-black text-primary" style={{ fontFamily: 'Poppins, sans-serif' }}>15K+</p>
                    <p className="text-sm text-muted-foreground font-medium">Happy Clients</p>
                  </div>
                  <div className="bg-accent/15 rounded-xl p-4 text-center border border-accent/30">
                    <p className="text-3xl font-black text-accent" style={{ fontFamily: 'Poppins, sans-serif' }}>99%</p>
                    <p className="text-sm text-muted-foreground font-medium">Success Rate</p>
                  </div>
                </div>

                <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-primary">Loan Approval Rate</span>
                    <span className="text-accent font-black">95%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "95%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-accent rounded-full"
                    />
                  </div>
                </div>

                {/* Star Rating in Card */}
                <div className="flex items-center justify-center gap-2 pt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                  ))}
                  <span className="font-bold text-primary ml-2">Rated 4.9/5</span>
                </div>
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-4 animate-float border-2 border-accent/30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Best Rates</p>
                    <p className="font-black text-xl text-primary" style={{ fontFamily: 'Poppins, sans-serif' }}>From 8.5%</p>
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
