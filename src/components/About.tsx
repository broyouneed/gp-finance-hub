import {
  FiCheckCircle,
  FiShield,
  FiTrendingUp,
  FiUser,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";



/* ---------- Components ---------- */

function ServiceCard({ icon, title, text }) {
  return (
    <div className="
     bg-white rounded-xl
        p-5 md:p-6
        shadow-sm
        w-full min-h-[140px]
        flex gap-4
      ">
      {/* Icon */}
      <div className="w-10 h-10
          flex items-center justify-center
          rounded-lg
          bg-teal-50 text-teal-600
          text-base
          flex-shrink-0">
        {icon}
      </div>

      {/* Content */}
      <div>
        <h3 className="text-base md:text-lg
            font-semibold
            text-slate-900
            leading-snug">
          {title}
        </h3>
        <p className="text-sm md:text-base
            text-slate-600
            mt-2
            leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
}


function Feature({ text }) {
  return (
    <div className="flex items-center gap-3">
      <FiCheckCircle className="text-teal-600 text-lg" />
      <span>{text}</span>
    </div>
  );
}

function StatMotion({ value, label }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.4 }}
      className="text-center"
    >
      <h3 className="text-lg md:text-xl font-bold text-slate-900">
        {value}
      </h3>
      <p className="text-xs md:text-sm text-slate-600 mt-1">
        {label}
      </p>
    </motion.div>
  );
}


function Trust({ title, text }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <h4 className="text-sm md:text-base font-semibold text-slate-900">
        {title}
      </h4>
      <p className="ext-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
        {text}
      </p>
    </div>
  );
}

export const About = () => {
  const navigate = useNavigate();
  return(
    <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* HEADER */}
        <div className="max-w-4xl">
          <p className="text-sm font-semibold tracking-widest text-teal-600 mb-3">
            ● WHO WE ARE
          </p>
          <h1 className="text-lg md:text-4xl font-bold text-slate-900 leading-tight">
            Smart Financial <span className="text-teal-600">Support</span> That
            Moves You Forward
          </h1>
          <p className="mt-6 text-slate-600 text-lg">
            We help individuals and businesses make confident financial decisions
            with fast approvals, transparent guidance, and long-term support.
          </p>
        </div>

        {/* SERVICES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-5">
          <ServiceCard
            icon={<FiShield />}
            title="Comprehensive Financial Solutions"
            text="Empowering individuals and businesses with flexible, personalized
            financial solutions tailored to your unique needs."
          />
          <ServiceCard
            icon={<FiCheckCircle />}
            title="Complete Insurance Coverage"
            text="Protect your income, assets, and future with insurance plans
            tailored to your lifestyle and business needs."
          />
          <ServiceCard
            icon={<FiUser />}
            title="Expert Financial Guidance"
            text="Get clear, honest advice from experienced professionals who
            prioritize your financial growth."
          />
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-6 px-5">
          <Feature text="Fast approval process" />
          <Feature text="Transparent interest rates" />
          <Feature text="Dedicated relationship managers" />
          <Feature text="Secure & confidential" />
          <Feature text="Support for salaried & self-employed" />
          <Feature text="Long-term financial planning" />
        </div>

          <div className="backdrop-blur rounded-2xl p-6 shadow max-w-7xl mx-auto">

            <div className="grid md:grid-cols-5 gap-6 items-start">

              {/* ================= LEFT SIDE (BIG) ================= */}
              <div className="md:col-span-3 space-y-4">

                {/* STATS PILL */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.15,
                      },
                    },
                  }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-6 
                            bg-white rounded-xl px-6 py-4 items-center"
                >
                  <StatMotion value="20,000+" label="Clients Supported" />
                  <StatMotion value="10+" label="Years of Experience" />
                  <StatMotion value="50+" label="Financial Partners" />
                  <StatMotion value="99%" label="Client Satisfaction" />
                </motion.div>

                {/* CTA */}
                <div className="bg-gradient-to-r from-teal-600 to-cyan-600 
                                text-white rounded-xl p-5 flex flex-col gap-3">
                  <div>
                    <h2 className="text-lg md:text-xl font-semibold leading-snug">
                      Let’s Build Your Financial Confidence
                    </h2>
                    <p className="text-sm md:text-base text-teal-100 leading-relaxed mt-1">
                      Connect with our team today and take the next step toward smarter
                      financial planning.
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <a href="#ContactForm">
                      <button className="bg-white text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                      Apply Now →
                    </button>
                    </a>
                    <a href="tel:+917012565990">
                      <button className="bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Talk to an Expert →
                      </button>
                    </a>
                  </div>
                </div>

              </div>

              {/* ================= RIGHT SIDE (SMALL) ================= */}
              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3">

                <Trust
                  title="Reliability"
                  text="We deliver exactly what we commit — no hidden terms."
                />
                <Trust
                  title="Speed"
                  text="Quick processing without unnecessary delays."
                />
                <Trust
                  title="Support"
                  text="End-to-end assistance from application to approval."
                />
                <Trust
                  title="Support"
                  text="End-to-end assistance from application to approval."
                />

              </div>
            </div>
          </div>
        </div> 
    </section>
  );

}