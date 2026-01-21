import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Download, Smartphone } from "lucide-react";
import eliteWealthQR from "@/assets/elite-wealth-qr.svg";

interface Partner {
  name: string;
  url: string;
}

interface ServiceCategory {
  title: string;
  subtitle?: string;
  partners: Partner[];
  color: string;
}

const serviceCategories: ServiceCategory[] = [
  {
    title: "Mutual Fund",
    subtitle: "All Mutual Funds",
    partners: [
      { name: "HDFC Mutual Fund", url: "https://www.hdfcfund.com" },
      { name: "SBI Mutual Fund", url: "https://www.sbimf.com" },
      { name: "ICICI Prudential", url: "https://www.icicipruamc.com" },
      { name: "Axis Mutual Fund", url: "https://www.axismf.com" },
      { name: "Nippon India", url: "https://mf.nipponindiaim.com" },
    ],
    color: "primary",
  },
  {
    title: "Insurance",
    subtitle: "Life & Non Life, Mediclaim & General",
    partners: [
      { name: "LIC", url: "https://www.licindia.in" },
      { name: "HDFC Life", url: "https://www.hdfclife.com" },
      { name: "ICICI Prudential Life", url: "https://www.iciciprulife.com" },
      { name: "Star Health", url: "https://www.starhealth.in" },
      { name: "Bajaj Allianz", url: "https://www.bajajallianz.com" },
    ],
    color: "secondary",
  },
  {
    title: "Fixed Deposits",
    subtitle: "Shriram, Bajaj Finserv & NBFCs",
    partners: [
      { name: "Shriram Finance", url: "https://www.shriramfinance.in" },
      { name: "Bajaj Finserv", url: "https://www.bajajfinserv.in" },
      { name: "Mahindra Finance", url: "https://www.mahindrafinance.com" },
      { name: "HDFC Ltd", url: "https://www.hdfc.com" },
    ],
    color: "accent",
  },
  {
    title: "Depository Services",
    subtitle: "Demat & Trading Accounts",
    partners: [
      { name: "CDSL", url: "https://www.cdslindia.com" },
      { name: "StockHolding", url: "https://www.stockholding.com" },
      { name: "Kotak Securities", url: "https://www.kotaksecurities.com" },
      { name: "Aditya Birla Money", url: "https://www.adityabirlacapital.com" },
    ],
    color: "primary",
  },
  {
    title: "Home Loan",
    subtitle: "Best Rates from Top Lenders",
    partners: [
      { name: "LIC Housing Finance", url: "https://www.lichousing.com" },
      { name: "Bajaj Housing Finance", url: "https://www.bajajhousingfinance.in" },
      { name: "HDFC Home Loans", url: "https://www.hdfc.com" },
      { name: "SBI Home Loans", url: "https://homeloans.sbi" },
    ],
    color: "secondary",
  },
  {
    title: "PAN Card Services",
    subtitle: "New PAN, Correction & Linking",
    partners: [
      { name: "NSDL PAN", url: "https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html" },
      { name: "UTIITSL PAN", url: "https://www.pan.utiitsl.com" },
    ],
    color: "accent",
  },
];

const getColorClasses = (color: string) => {
  const colors: Record<string, { bg: string; text: string; border: string }> = {
    primary: {
      bg: "bg-primary/10",
      text: "text-primary",
      border: "border-primary/30",
    },
    secondary: {
      bg: "bg-secondary/10",
      text: "text-secondary",
      border: "border-secondary/30",
    },
    accent: {
      bg: "bg-accent/10",
      text: "text-accent",
      border: "border-accent/30",
    },
  };
  return colors[color] || colors.primary;
};

export const ServicePartners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="service-partners" className="section-padding bg-muted/30" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            ● Our Service Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Trusted Partners for{" "}
            <span className="gradient-text">Complete Financial Solutions</span>
          </h2>
          <p className="text-muted-foreground">
            Click on any partner to visit their official website and explore their offerings.
          </p>
        </motion.div>

        {/* Service Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {serviceCategories.map((category, index) => {
            const colorClasses = getColorClasses(category.color);
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6"
              >
                <h3 className={`font-bold text-lg mb-1 ${colorClasses.text}`}>
                  {category.title}
                </h3>
                {category.subtitle && (
                  <p className="text-sm text-muted-foreground mb-4">
                    {category.subtitle}
                  </p>
                )}
                <div className="flex flex-wrap gap-2">
                  {category.partners.map((partner) => (
                    <a
                      key={partner.name}
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium ${colorClasses.bg} ${colorClasses.text} hover:opacity-80 transition-all hover:scale-105 border ${colorClasses.border}`}
                    >
                      {partner.name}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Elite Wealth App Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass-card rounded-3xl p-8 md:p-12 text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex-1 text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
                <Smartphone className="w-5 h-5" />
                <span className="font-semibold text-sm">Mobile App</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Download <span className="gradient-text">Elite Wealth App</span>
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Manage your investments, track mutual funds, and access all financial services 
                on the go. Scan the QR code to download now!
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href="https://play.google.com/store/apps/details?id=com.elitewealth.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity"
                >
                  <Download className="w-5 h-5" />
                  Google Play
                </a>
                <a
                  href="https://apps.apple.com/app/elite-wealth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity"
                >
                  <Download className="w-5 h-5" />
                  App Store
                </a>
              </div>
            </div>
            
            {/* QR Code */}
            <div className="flex-shrink-0">
              <div className="bg-white p-4 rounded-2xl shadow-lg">
                <img
                  src={eliteWealthQR}
                  alt="Download Elite Wealth App QR Code"
                  className="w-44 h-44"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-3 text-center">
                Scan to Download
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
