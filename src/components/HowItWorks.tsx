import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Search, CheckCircle, Banknote } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Submit Application",
    description: "Start your loan journey by filling out our quick and easy online application form.",
  },
  {
    icon: Search,
    number: "02",
    title: "Document Verification",
    description: "Our team reviews your documents to verify identity, income, and eligibility.",
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Get Approval",
    description: "After verification, we process your application and share your approved loan offer.",
  },
  {
    icon: Banknote,
    number: "04",
    title: "Disbursement",
    description: "Once accepted, the loan amount is credited directly to your bank account.",
  },
];

export const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="section-padding bg-card" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            ● How it works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            The <span className="gradient-text">Loan Journey</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Card */}
                <div className="relative z-10 bg-background rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-[var(--shadow-md)] transition-all duration-300 group">
                  {/* Number Badge */}
                  <div className="absolute -top-4 left-6 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mt-4 mb-4 group-hover:bg-accent/20 transition-colors">
                    <step.icon className="w-8 h-8 text-accent" />
                  </div>

                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Dot */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 bg-primary rounded-full z-20 -translate-y-1/2 flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary-foreground rounded-full" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
