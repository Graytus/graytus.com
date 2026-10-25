import React, { useState } from "react";
import { TECHNOLOGIES_STACK } from "../data/siteData";
import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function TechnologySection() {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  const currentStack = TECHNOLOGIES_STACK.find(t => t.category === activeCategory) || TECHNOLOGIES_STACK[0];

  return (
    <section className="section-padding bg-alt-light">
      <div className="container-fluid px-lg-5">
        <div className="text-center mb-5">
          <div className="badge-pill-tag mb-3">TECH STACK</div>
          <h2 className="section-title text-dark">
            Modern Technologies We <span className="text-primary-blue">Master</span>
          </h2>
          <p className="section-subtitle">
            We build resilience into every system by using proven, battle-tested modern technology frameworks.
          </p>
        </div>

        {/* Filter Tab Pills */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {TECHNOLOGIES_STACK.map((group, idx) => (
            <button
              key={idx}
              className={`tech-pill ${activeCategory === group.category ? "active" : ""}`}
              onClick={() => setActiveCategory(group.category)}
            >
              {group.category}
            </button>
          ))}
        </div>

        {/* Grid Cards for Active Tech Category */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="row g-4 justify-content-center"
          >
            {currentStack.items.map((tech, idx) => (
              <div key={idx} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="gt-card p-4 h-100 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="badge bg-primary-blue-light text-primary-blue px-2 py-1 rounded small font-weight-bold">
                        {tech.level}
                      </div>
                      <Check size={18} className="text-primary-blue" />
                    </div>
                    <h3 className="h5 font-weight-bold text-dark mb-1">{tech.name}</h3>
                    <p className="small text-secondary mb-0">{tech.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
