import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send } from "lucide-react";

const services = [
  "Unsecured Business Loan",
  "Home Loan",
  "Loan Against Property",
  "Professional Loan",
  "Insurance",
];

export const ContactForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("Unsecured Business Loan");

  return (
    <section id="contact" className="section-padding hero-gradient" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <span className="text-accent font-semibold">Get a quote</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Quick Loan & Insurance Quote Form
            </h2>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {services.map((service) => (
              <button
                key={service}
                onClick={() => setActiveTab(service)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === service
                    ? "bg-primary text-primary-foreground"
                    : "bg-card hover:bg-muted"
                }`}
              >
                {service}
              </button>
            ))}
          </div>

          {/* Form */}
          <div className="glass-card rounded-3xl p-8 md:p-10">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name *</label>
                  <Input
                    placeholder="Enter your first name"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <Input
                    placeholder="Enter your last name"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Contact Details *</label>
                  <Input
                    placeholder="Enter your phone number"
                    type="tel"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email *</label>
                  <Input
                    placeholder="Enter your email"
                    type="email"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Service *</label>
                  <Select defaultValue={activeTab}>
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Loan Amount *</label>
                  <Input
                    placeholder="Enter loan amount"
                    type="text"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Your Message *</label>
                <Textarea
                  placeholder="Tell us more about your requirements..."
                  rows={4}
                  className="bg-background border-border focus:border-primary resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="btn-gradient rounded-full w-full md:w-auto px-10">
                Submit Request
                <Send className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
