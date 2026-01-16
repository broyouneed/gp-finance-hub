import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { CheckCircle, Award, Users, Star } from "lucide-react";

const features = [
  "Large number of loan products",
  "Experienced & qualified team",
  "Competitive interest rates",
  "Custom insurance plans for every need",
];

const values = [
  {
    icon: Award,
    title: "Knowledgeable",
    description: "We have deep expertise in our industry and always provide fact-based advice.",
  },
  {
    icon: Users,
    title: "Trustworthy",
    description: "We keep our promises and deliver exactly what we commit to.",
  },
  {
    icon: Star,
    title: "Excellence",
    description: "We aim for the highest standards in all that we do.",
  },
];

const Counter = ({ end, suffix = "" }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = end / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-card" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                ● About GP Financial Services
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 leading-tight">
                Best Loan & Insurance Solutions For Your{" "}
                <span className="gradient-text">Financial Security</span>
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              At GP Financial Services, we understand that realities can sometimes be harsher 
              than what we hope and desire for. You need funds to realize all your dreams – 
              Home loans for all, Loans against Property for all, Personal loans for 
              Professional and Salaried people, Unsecured Business Loan for Business person.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              We also offer tailored insurance plans to protect what matters most.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Founder Info */}
            <div className="flex items-center gap-4 pt-4 border-t border-border">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
                PG
              </div>
              <div>
                <p className="font-bold text-lg">Paresh Gupta</p>
                <p className="text-muted-foreground text-sm">CEO & Founder</p>
              </div>
            </div>
          </motion.div>

          {/* Right Stats & Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Stats Card */}
            <div className="glass-card rounded-2xl p-8">
              <div className="text-center mb-6">
                <p className="text-5xl font-bold text-primary">
                  <Counter end={15} suffix="k+" />
                </p>
                <p className="text-muted-foreground mt-2">Satisfied Clients</p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="text-center p-4 rounded-xl bg-background/50 hover:bg-background transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/20 transition-colors">
                      <value.icon className="w-6 h-6 text-accent" />
                    </div>
                    <p className="font-semibold text-sm">{value.title}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Values Description */}
            <div className="space-y-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">{value.title}</p>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
