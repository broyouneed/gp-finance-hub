import { motion } from "framer-motion";

const partners = [
  { name: "UTI Mutual Fund", logo: "https://www.utimf.com/images/uti-logo.png", url: "https://www.utimf.com/" },
  { name: "HDFC Mutual Fund", logo: "https://www.hdfcfund.com/content/dam/abc/india/assets/images/HDFC-Logo.svg", url: "https://www.hdfcfund.com/" },
  { name: "ICICI Prudential", logo: "https://www.icicipruamc.com/images/ICICI-Prudential-logo.svg", url: "https://www.icicipruamc.com/" },
  { name: "Bandhan Mutual Fund", logo: "https://www.bandhanmutual.com/assets/images/logo.svg", url: "https://www.bandhanmutual.com/" },
  { name: "Aditya Birla Sun Life", logo: "https://mutualfund.adityabirlacapital.com/content/dam/abc-foundation/images/ABSLMFLogo.svg", url: "https://mutualfund.adityabirlacapital.com/" },
  { name: "Nippon India", logo: "https://mf.nipponindiaim.com/Content/images/niim-mf-logo.svg", url: "https://mf.nipponindiaim.com/" },
];

export const Partners = () => {
  return (
    <section className="py-16 bg-card overflow-hidden border-y border-border">
      <div className="container-custom mb-10">
        <h2 
          className="text-center text-2xl md:text-3xl font-black text-primary mb-2"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          OUR TRUSTED PARTNERS
        </h2>
        <p className="text-center text-muted-foreground">
          We collaborate with India's leading mutual fund companies
        </p>
      </div>

      {/* Partner Logos Grid */}
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <motion.a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-24 px-4 flex flex-col items-center justify-center bg-background rounded-xl border-2 border-border hover:border-accent hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-12 flex items-center justify-center mb-2">
                  <div 
                    className="w-full h-full bg-contain bg-center bg-no-repeat opacity-80 group-hover:opacity-100 transition-opacity"
                    style={{ 
                      backgroundImage: `url(${partner.logo})`,
                    }}
                  />
                </div>
                <span className="text-xs font-bold text-primary text-center leading-tight">
                  {partner.name}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Scrolling Text */}
      <div className="mt-10 relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-card to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-card to-transparent z-10" />

        <motion.div
          className="flex gap-12 items-center whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {[...Array(4)].map((_, i) => (
            <span 
              key={i}
              className="text-6xl font-black text-primary/5 uppercase"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              UTI • HDFC • ICICI • BANDHAN • ADITYA BIRLA • NIPPON •
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
