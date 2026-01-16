import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { TrendingUp, TrendingDown, Star, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const mutualFunds = [
  { name: "Quant Small Cap Fund", category: "Small Cap", returns1Y: 45.2, returns3Y: 38.5, returns5Y: 32.1, rating: 5, aum: "8,500 Cr" },
  { name: "Nippon India Small Cap Fund", category: "Small Cap", returns1Y: 42.8, returns3Y: 35.2, returns5Y: 28.9, rating: 5, aum: "34,200 Cr" },
  { name: "Parag Parikh Flexi Cap Fund", category: "Flexi Cap", returns1Y: 28.4, returns3Y: 22.1, returns5Y: 19.8, rating: 5, aum: "52,000 Cr" },
  { name: "HDFC Mid-Cap Opportunities Fund", category: "Mid Cap", returns1Y: 38.6, returns3Y: 28.4, returns5Y: 22.3, rating: 4, aum: "45,800 Cr" },
  { name: "Axis Bluechip Fund", category: "Large Cap", returns1Y: 18.2, returns3Y: 14.5, returns5Y: 15.2, rating: 4, aum: "32,100 Cr" },
  { name: "Mirae Asset Large Cap Fund", category: "Large Cap", returns1Y: 22.4, returns3Y: 16.8, returns5Y: 16.1, rating: 5, aum: "38,500 Cr" },
  { name: "SBI Contra Fund", category: "Contra", returns1Y: 35.2, returns3Y: 30.1, returns5Y: 25.4, rating: 4, aum: "18,200 Cr" },
  { name: "Kotak Emerging Equity Fund", category: "Mid Cap", returns1Y: 36.8, returns3Y: 26.5, returns5Y: 21.8, rating: 5, aum: "28,900 Cr" },
  { name: "ICICI Pru Value Discovery Fund", category: "Value", returns1Y: 32.1, returns3Y: 25.8, returns5Y: 20.5, rating: 4, aum: "35,600 Cr" },
  { name: "Tata Digital India Fund", category: "Sectoral", returns1Y: 25.6, returns3Y: 18.9, returns5Y: 22.4, rating: 4, aum: "8,900 Cr" },
];

const topSIPs = [
  { name: "SBI Small Cap Fund", category: "Small Cap", minSIP: 500, returns1Y: 40.5, returns3Y: 32.8, rating: 5 },
  { name: "Canara Robeco Bluechip Equity Fund", category: "Large Cap", minSIP: 1000, returns1Y: 20.1, returns3Y: 15.6, rating: 4 },
  { name: "UTI Nifty Index Fund", category: "Index", minSIP: 500, returns1Y: 18.5, returns3Y: 14.2, rating: 4 },
  { name: "PPFAS Flexi Cap Fund", category: "Flexi Cap", minSIP: 1000, returns1Y: 28.4, returns3Y: 22.1, rating: 5 },
  { name: "Axis Midcap Fund", category: "Mid Cap", minSIP: 500, returns1Y: 32.6, returns3Y: 24.5, rating: 5 },
  { name: "HDFC Balanced Advantage Fund", category: "Hybrid", minSIP: 500, returns1Y: 22.8, returns3Y: 18.2, rating: 4 },
  { name: "Motilal Oswal Midcap Fund", category: "Mid Cap", minSIP: 500, returns1Y: 38.2, returns3Y: 28.6, rating: 5 },
  { name: "DSP Tax Saver Fund", category: "ELSS", minSIP: 500, returns1Y: 26.4, returns3Y: 20.1, rating: 4 },
  { name: "Franklin India Focused Equity Fund", category: "Focused", minSIP: 500, returns1Y: 24.8, returns3Y: 18.5, rating: 4 },
  { name: "ICICI Pru Equity & Debt Fund", category: "Hybrid", minSIP: 1000, returns1Y: 25.2, returns3Y: 19.8, rating: 5 },
];

export const TopFunds = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<"mutual-funds" | "sips">("mutual-funds");

  return (
    <section id="top-funds" className="section-padding hero-gradient" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            ● Top Performers
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Top 10 <span className="gradient-text">Mutual Funds & SIPs</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Explore the best-performing mutual funds and SIP options to grow your wealth.
            Data based on historical performance.
          </p>

          {/* Tab Switcher */}
          <div className="flex justify-center mt-8">
            <div className="inline-flex bg-muted p-1.5 rounded-2xl gap-1">
              <button
                onClick={() => setActiveTab("mutual-funds")}
                className={cn(
                  "px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300",
                  activeTab === "mutual-funds"
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Top Mutual Funds
              </button>
              <button
                onClick={() => setActiveTab("sips")}
                className={cn(
                  "px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300",
                  activeTab === "sips"
                    ? "bg-secondary text-secondary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Top SIPs
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {activeTab === "mutual-funds" ? (
            <MutualFundsTable />
          ) : (
            <SIPsTable />
          )}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-xs text-muted-foreground mt-6"
        >
          * Past performance is not indicative of future returns. Data is for illustrative purposes only.
        </motion.p>
      </div>
    </section>
  );
};

const MutualFundsTable = () => {
  return (
    <div className="glass-card rounded-3xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border/50">
              <th className="text-left p-4 md:p-6 font-semibold text-sm text-muted-foreground">#</th>
              <th className="text-left p-4 md:p-6 font-semibold text-sm text-muted-foreground">Fund Name</th>
              <th className="text-left p-4 md:p-6 font-semibold text-sm text-muted-foreground hidden md:table-cell">Category</th>
              <th className="text-right p-4 md:p-6 font-semibold text-sm text-muted-foreground">1Y Returns</th>
              <th className="text-right p-4 md:p-6 font-semibold text-sm text-muted-foreground hidden sm:table-cell">3Y Returns</th>
              <th className="text-right p-4 md:p-6 font-semibold text-sm text-muted-foreground hidden lg:table-cell">5Y Returns</th>
              <th className="text-center p-4 md:p-6 font-semibold text-sm text-muted-foreground hidden md:table-cell">Rating</th>
              <th className="text-right p-4 md:p-6 font-semibold text-sm text-muted-foreground hidden lg:table-cell">AUM</th>
            </tr>
          </thead>
          <tbody>
            {mutualFunds.map((fund, index) => (
              <motion.tr
                key={fund.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="border-b border-border/30 hover:bg-muted/30 transition-colors cursor-pointer group"
              >
                <td className="p-4 md:p-6 font-medium text-muted-foreground">{index + 1}</td>
                <td className="p-4 md:p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                      {fund.name.split(' ').map(w => w[0]).slice(0, 2).join('')}
                    </div>
                    <div>
                      <p className="font-semibold text-sm md:text-base group-hover:text-primary transition-colors">
                        {fund.name}
                      </p>
                      <p className="text-xs text-muted-foreground md:hidden">{fund.category}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4 md:p-6 hidden md:table-cell">
                  <span className="px-3 py-1 rounded-full bg-muted text-xs font-medium">
                    {fund.category}
                  </span>
                </td>
                <td className="p-4 md:p-6 text-right">
                  <div className="flex items-center justify-end gap-1">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="font-bold text-green-500">{fund.returns1Y}%</span>
                  </div>
                </td>
                <td className="p-4 md:p-6 text-right hidden sm:table-cell">
                  <span className="font-semibold text-secondary">{fund.returns3Y}%</span>
                </td>
                <td className="p-4 md:p-6 text-right hidden lg:table-cell">
                  <span className="font-medium">{fund.returns5Y}%</span>
                </td>
                <td className="p-4 md:p-6 hidden md:table-cell">
                  <div className="flex justify-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "w-4 h-4",
                          i < fund.rating ? "fill-yellow-400 text-yellow-400" : "text-muted"
                        )}
                      />
                    ))}
                  </div>
                </td>
                <td className="p-4 md:p-6 text-right hidden lg:table-cell">
                  <span className="text-muted-foreground">₹{fund.aum}</span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const SIPsTable = () => {
  return (
    <div className="glass-card rounded-3xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border/50">
              <th className="text-left p-4 md:p-6 font-semibold text-sm text-muted-foreground">#</th>
              <th className="text-left p-4 md:p-6 font-semibold text-sm text-muted-foreground">Fund Name</th>
              <th className="text-left p-4 md:p-6 font-semibold text-sm text-muted-foreground hidden md:table-cell">Category</th>
              <th className="text-right p-4 md:p-6 font-semibold text-sm text-muted-foreground">Min SIP</th>
              <th className="text-right p-4 md:p-6 font-semibold text-sm text-muted-foreground">1Y Returns</th>
              <th className="text-right p-4 md:p-6 font-semibold text-sm text-muted-foreground hidden sm:table-cell">3Y Returns</th>
              <th className="text-center p-4 md:p-6 font-semibold text-sm text-muted-foreground hidden md:table-cell">Rating</th>
            </tr>
          </thead>
          <tbody>
            {topSIPs.map((sip, index) => (
              <motion.tr
                key={sip.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="border-b border-border/30 hover:bg-muted/30 transition-colors cursor-pointer group"
              >
                <td className="p-4 md:p-6 font-medium text-muted-foreground">{index + 1}</td>
                <td className="p-4 md:p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary font-bold text-sm">
                      {sip.name.split(' ').map(w => w[0]).slice(0, 2).join('')}
                    </div>
                    <div>
                      <p className="font-semibold text-sm md:text-base group-hover:text-secondary transition-colors">
                        {sip.name}
                      </p>
                      <p className="text-xs text-muted-foreground md:hidden">{sip.category}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4 md:p-6 hidden md:table-cell">
                  <span className="px-3 py-1 rounded-full bg-muted text-xs font-medium">
                    {sip.category}
                  </span>
                </td>
                <td className="p-4 md:p-6 text-right">
                  <span className="font-semibold text-primary">₹{sip.minSIP}</span>
                </td>
                <td className="p-4 md:p-6 text-right">
                  <div className="flex items-center justify-end gap-1">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="font-bold text-green-500">{sip.returns1Y}%</span>
                  </div>
                </td>
                <td className="p-4 md:p-6 text-right hidden sm:table-cell">
                  <span className="font-semibold text-secondary">{sip.returns3Y}%</span>
                </td>
                <td className="p-4 md:p-6 hidden md:table-cell">
                  <div className="flex justify-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "w-4 h-4",
                          i < sip.rating ? "fill-yellow-400 text-yellow-400" : "text-muted"
                        )}
                      />
                    ))}
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
