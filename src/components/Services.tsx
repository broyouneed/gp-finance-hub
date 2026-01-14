import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Building2, 
  Stethoscope, 
  Home, 
  Landmark, 
  RefreshCw, 
  Shield,
  Phone,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Building2,
    title: "Business Loan",
    description: "Secured and unsecured term loan and overdraft facility for your business growth.",
    color: "primary",
  },
  {
    icon: Stethoscope,
    title: "Professional Loan",
    description: "Specialized loans for Doctors, CAs, Architects and other professionals.",
    color: "secondary",
  },
  {
    icon: Home,
    title: "Home Loan",
    description: "Home loan for purchase of new home or balance transfer of existing home loan to better ROI.",
    color: "accent",
  },
  {
    icon: Landmark,
    title: "Loan Against Property",
    description: "Term loan or overdraft against property with competitive rates.",
    color: "primary",
  },
  {
    icon: RefreshCw,
    title: "Debt Consolidation",
    description: "Restructuring of existing loans to reduce your financial burden.",
    color: "secondary",
  },
  {
    icon: Shield,
    title: "Insurance",
    description: "Comprehensive protection plans for your assets, business, and loved ones.",
    color: "accent",
  },
];

const getColorClasses = (color: string) => {
  const colors: Record<string, { bg: string; icon: string; hover: string }> = {
    primary: {
      bg: "bg-primary/10",
      icon: "text-primary",
      hover: "group-hover:bg-primary group-hover:text-primary-foreground",
    },
    secondary: {
      bg: "bg-secondary/10",
      icon: "text-secondary",
      hover: "group-hover:bg-secondary group-hover:text-secondary-foreground",
    },
    accent: {
      bg: "bg-accent/10",
      icon: "text-accent",
      hover: "group-hover:bg-accent group-hover:text-accent-foreground",
    },
  };
  return colors[color] || colors.primary;
};

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding hero-gradient" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            ● What We're Offering
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Smart Loan & Insurance Solutions for{" "}
            <span className="gradient-text">Every Stage of Life</span>
          </h2>
          <p className="text-muted-foreground">
            Whether you're planning to buy your dream home, grow your business, or secure 
            your family's future — we've got you covered.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const colorClasses = getColorClasses(service.color);
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group glass-card rounded-2xl p-6 hover:shadow-[var(--shadow-lg)] transition-all duration-300 cursor-pointer"
              >
                <div className={`w-14 h-14 rounded-xl ${colorClasses.bg} ${colorClasses.hover} flex items-center justify-center mb-4 transition-all duration-300`}>
                  <service.icon className={`w-7 h-7 ${colorClasses.icon} group-hover:text-inherit transition-colors`} />
                </div>
                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-4">Call For More Info</p>
          <a href="tel:+918460775757">
            <Button size="lg" className="btn-primary-gradient rounded-full px-8">
              <Phone className="w-5 h-5 mr-2" />
              +91 8460775757
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
