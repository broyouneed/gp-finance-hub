import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I start a business with GP Financial Services?",
    answer: "Start with a clear plan, register your business, and secure the funding you need through our flexible loan products. Our team will guide you through every step of the process.",
  },
  {
    question: "What is business capital management?",
    answer: "It's the synergy between smart financing and sustainable growth. We help you align capital with long-term strategy to ensure your business thrives.",
  },
  {
    question: "What are the benefits of co-working spaces for startups?",
    answer: "Co-working reduces overhead, fosters collaboration, and offers networking opportunities vital to early-stage ventures. Many of our clients have found success in these environments.",
  },
  {
    question: "How can I speed up my loan application process?",
    answer: "Leverage our pre-built templates and document checklist to cut processing time in half. Focus on having all required documents ready before applying.",
  },
];

export const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="section-padding bg-card" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              ● FAQs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
              Offering great loan{" "}
              <span className="gradient-text">solutions for you</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              We understand that navigating financial options can be complex. 
              Here are answers to some of the most common questions we receive.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                  <span className="text-secondary text-sm">✓</span>
                </div>
                <span className="text-sm">Expert financial guidance</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                  <span className="text-secondary text-sm">✓</span>
                </div>
                <span className="text-sm">Transparent process</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-background rounded-xl border border-border px-6 data-[state=open]:shadow-[var(--shadow-md)] transition-shadow"
                >
                  <AccordionTrigger className="hover:no-underline py-5 text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
