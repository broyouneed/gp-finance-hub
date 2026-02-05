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
    question: "What financial services does GP Financial Services offer?",
    answer:
      "GP Financial Services provides comprehensive financial solutions including insurance planning, personal and business finance management, funding support, and long-term financial strategy tailored to individual and business needs.",
  },
  {
    question: "How do you help clients plan their finances effectively?",
    answer:
      "We take a holistic approach by understanding your income, goals, liabilities, and future plans. Our experts then create a structured financial roadmap designed for stability, growth, and peace of mind.",
  },
  {
    question: "Do you offer financial solutions for both individuals and businesses?",
    answer:
      "Yes. We work with salaried professionals, self-employed individuals, entrepreneurs, and businesses, offering customized financial guidance and solutions suited to every stage of life and growth.",
  },
  {
    question: "How does GP Financial Services ensure transparency and trust?",
    answer:
      "Transparency is central to our process. We clearly explain every option, cost, and benefit upfront, ensuring you can make informed financial decisions with complete confidence.",
  },
  {
    question: "Can GP Financial Services help with long-term financial security?",
    answer:
      "Absolutely. From risk protection and wealth planning to business sustainability strategies, we focus on building long-term financial security aligned with your future goals.",
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
