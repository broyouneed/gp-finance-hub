import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Cooper Kristin",
    role: "Manager, Airlines",
    content: "How responsive and helpful are your customer service representatives? Do customers feel that their questions and concerns are being addressed in a timely and effective manner. Amazing experience!",
    rating: 5,
  },
  {
    name: "Ronald Richards",
    role: "Green Tech",
    content: "A good review should be structured in a clear and organized way, with an introduction that sets the context and explains the purpose of the review, a detailed analysis of the product's features and performance.",
    rating: 5,
  },
  {
    name: "Louise Linton",
    role: "Manager, Airlines",
    content: "A good design review should be well-organized and structured, with a clear introduction that explains the purpose of the review and sets the context for the evaluation. Highly recommended!",
    rating: 5,
  },
  {
    name: "Boris Elbert",
    role: "Green Tech",
    content: "A high-quality review should also be engaging and easy to read, using language that is clear and accessible to the intended audience. The reviewer should provide specific examples and details to support their analysis.",
    rating: 5,
  },
];

export const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding hero-gradient" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              ● Real Client Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
              Customer <span className="gradient-text">Feedback</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              99.9% Customer Satisfaction based on 950+ Reviews and 56,530 Objective Resource
            </p>

            {/* Navigation */}
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full w-12 h-12 border-2 hover:bg-primary hover:text-primary-foreground"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full w-12 h-12 border-2 hover:bg-primary hover:text-primary-foreground"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Dots */}
            <div className="flex gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeIndex ? "bg-accent w-8" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Right - Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card rounded-3xl p-8 relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                <Quote className="w-8 h-8 text-accent" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-lg leading-relaxed mb-8">
                  "{testimonials[activeIndex].content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-xl font-bold text-primary">
                    {testimonials[activeIndex].name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold">{testimonials[activeIndex].name}</p>
                    <p className="text-muted-foreground text-sm">
                      {testimonials[activeIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Background decoration */}
            <div className="absolute -z-10 -bottom-8 -right-8 w-full h-full bg-accent/5 rounded-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
