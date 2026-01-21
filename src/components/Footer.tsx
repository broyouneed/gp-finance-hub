import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const mainLinks = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT US", href: "#about" },
  { name: "SERVICES", href: "#services" },
  { name: "CONTACT US", href: "#contact" },
];

const serviceLinks = [
  "Insurance",
  "Investment",
  "Unsecured Business Loan",
  "Unsecured Overdraft Facility",
  "Cash Credit Facility",
  "Equipment and Machinery Loan",
  "Loan Against Property",
  "Home Loan",
  "Loans for Professionals",
  "Business Loan Balance Transfer",
  "Syndicated Business Loans",
];

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Instagram, href: "#" },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <img src="/logo.png" alt="GP Finserve Logo" className="h-16 w-auto bg-white rounded-lg p-2" />
              <span 
                className="text-2xl font-black text-primary-foreground"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                GP FINSERVE
              </span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Empowering your future with tailored loan & insurance solutions — 
              trusted by thousands to turn financial goals into reality.
            </p>
            <div>
              <p className="text-sm font-semibold mb-3">Follow Us:</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Main Pages */}
          <div>
            <h4 className="font-bold text-lg mb-6">Main Pages</h4>
            <ul className="space-y-3">
              {mainLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Official Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-primary-foreground/80 text-sm">
                No. 12/177/18, First Floor, Chembukkavu Shopping Complex, Thrissur, Kerala - 680020
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-primary-foreground/80">Mon – Sat: 09:30 AM – 05:00 PM</p>
                  <p className="text-primary-foreground/60">Sun: Closed</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+918460775757" className="text-sm hover:text-accent transition-colors">
                  +91 7012565990
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:support@gpfinservices.com" className="text-sm hover:text-accent transition-colors">
                  gpfinserve1@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Explore Services</h4>
            <ul className="space-y-2">
              {serviceLinks.slice(0, 8).map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10 py-6">
        <div className="container-custom text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} GP Finserve. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
