import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

export const GoogleMap = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-accent font-bold text-sm uppercase tracking-wider">
            ★ Visit Us
          </span>
          <h2
            className="text-3xl md:text-4xl font-black mt-3 text-primary"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            OUR LOCATION
          </h2>
          <p className="text-muted-foreground mt-3">
            Visit our office for personalized financial consultation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info – from BOTTOM */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.35, ease: [0.25, 1, 0.3, 1] }}
            className="bg-primary rounded-2xl p-8 text-primary-foreground"
          >
            <h3
              className="text-xl font-bold mb-6"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              CONTACT INFO
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Address</p>
                  <p className="text-primary-foreground/80 text-sm">
                    No. 12/177/18, First Floor, Chembukkavu Shopping Complex,
                    Thrissur, Kerala - 680020
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Office Hours</p>
                  <p className="text-primary-foreground/80 text-sm">
                    Mon – Sat: 9:30 AM – 5:00 PM
                  </p>
                  <p className="text-primary-foreground/60 text-sm">
                    Sunday: Closed
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Phone</p>
                  <a
                    href="tel:+917012565990"
                    className="text-primary-foreground/80 text-sm hover:text-accent transition-colors"
                  >
                    +91 7012565990
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <a
                    href="mailto:gpfinserve1@gmail.com"
                    className="text-primary-foreground/80 text-sm hover:text-accent transition-colors"
                  >
                    gpfinserve1@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Chembukkavu+Shopping+Complex+Thrissur"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-8"
            >
              <Button className="w-full bg-accent text-primary font-bold hover:bg-accent/90 rounded-full">
                <Navigation className="w-4 h-4 mr-2" />
                Get Directions
              </Button>
            </a>
          </motion.div>

          {/* Map – from RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.9,
              delay: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-2 rounded-2xl overflow-hidden shadow-lg border-2 border-border h-[400px] lg:h-auto"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d291.12972244089474!2d76.21926853673698!3d10.532927474837988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ee53dcc5bf4b%3A0x35aa9cca67f01daa!2sChembukkavu%20Shopping%20Complex!5e1!3m2!1sen!2sin!4v1768984562578!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="GP Finserve Office Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
