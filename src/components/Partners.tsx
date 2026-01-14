import { motion } from "framer-motion";

const partners = [
  "HDFC", "ICICI", "SBI", "Axis", "Kotak", "Yes Bank",
  "IndusInd", "Federal", "IDFC", "Bajaj", "Tata Capital",
  "L&T Finance", "Piramal", "Cholamandalam", "Mahindra", "Hero FinCorp",
  "Fullerton", "IIFL",
];

export const Partners = () => {
  return (
    <section className="py-12 bg-background overflow-hidden">
      <div className="container-custom mb-8">
        <p className="text-center text-muted-foreground font-medium">
          Our Trusted Partners
        </p>
      </div>

      {/* Scrolling Logos */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

        <motion.div
          className="flex gap-12 items-center"
          animate={{ x: [0, -1920] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner}-${index}`}
              className="flex-shrink-0 h-16 px-6 flex items-center justify-center bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-colors"
            >
              <span className="text-lg font-semibold text-muted-foreground whitespace-nowrap">
                {partner}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
