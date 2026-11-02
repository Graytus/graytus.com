import React from "react";
import { WHY_CHOOSE_US } from "../data/siteData";
import {
  Layers,
  TrendingUp,
  Zap,
  Code2,
  UserCheck,
  ShieldCheck,
  Building2,
  Headphones,
  Target
} from "lucide-react";
import { motion } from "framer-motion";

const ICON_MAP = {
  Layers,
  TrendingUp,
  Zap,
  Code2,
  UserCheck,
  ShieldCheck,
  Building2,
  Headphones,
  Target
};

export default function WhyChooseUsSection() {
  return (
    <section className="section-padding py-5 border-top border-bottom bg-alt-light" style={{ borderColor: "#E2E8F0" }}>
      <div className="container-fluid px-lg-5 py-4">

        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="badge-pill-tag mb-3">OUR CORE DIFFERENCE</div>
          <h2 className="display-5 font-weight-extrabold text-dark mb-2" style={{ fontWeight: 800 }}>
            Why Choose <span className="text-primary-blue">Graytus Technologies?</span>
          </h2>
          <p className="text-secondary lead mb-0 mx-auto" style={{ maxWidth: "740px", fontSize: "1.05rem" }}>
            We blend enterprise-grade software engineering with creative visual execution to build high-impact digital solutions for ambitious organizations.
          </p>
        </div>

        {/* 8-Card Responsive Normal Grid (4 Columns x 2 Rows) */}
        <div className="row g-4">
          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComp = ICON_MAP[item.icon] || Target;

            return (
              <div key={item.id} className="col-12 col-md-6 col-lg-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  whileHover={{ y: -6, borderColor: "#0866C6", boxShadow: "0 14px 30px rgba(8, 102, 198, 0.12)" }}
                  className="bg-white rounded-4 p-4 h-100 d-flex flex-column justify-content-between border shadow-sm transition-all"
                  style={{
                    borderColor: "#E2E8F0",
                    minHeight: "260px"
                  }}
                >
                  <div>
                    {/* Top row: Icon and ID Badge */}
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div
                        className="rounded-3 d-flex align-items-center justify-content-center bg-primary-blue-light text-primary-blue"
                        style={{ width: "46px", height: "46px" }}
                      >
                        <IconComp size={22} />
                      </div>
                      <span
                        className="badge bg-light text-secondary font-weight-bold border px-2.5 py-1"
                        style={{ fontSize: "0.78rem" }}
                      >
                        {item.id}
                      </span>
                    </div>

                    {/* Card Title */}
                    <h3 className="h6 font-weight-bold text-dark mb-2" style={{ fontWeight: 700, fontSize: "1.05rem" }}>
                      {item.title}
                    </h3>

                    {/* Card Description */}
                    <p className="small text-secondary mb-0" style={{ lineHeight: "1.6", fontSize: "0.88rem" }}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
