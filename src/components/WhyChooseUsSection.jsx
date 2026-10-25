import React, { useState } from "react";
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
  Target,
  ChevronRight,
  CheckCircle2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [activeTab, setActiveTab] = useState(0); // 0: items 0-3, 1: items 4-7
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const currentItems = activeTab === 0 ? WHY_CHOOSE_US.slice(0, 4) : WHY_CHOOSE_US.slice(4, 8);
  const selectedItem = WHY_CHOOSE_US[activeItemIndex] || WHY_CHOOSE_US[0];

  return (
    <section className="section-padding py-5 border-top border-bottom overflow-hidden" style={{ backgroundColor: "#F8FAFC", borderColor: "#E2E8F0" }}>
      <div className="container-fluid px-lg-5 py-3">

        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="badge-pill-tag mb-3">OUR CORE DIFFERENCE</div>
          <h2 className="display-5 font-weight-extrabold text-dark mb-2" style={{ fontWeight: 800 }}>
            Why Choose <span className="text-primary-blue">Graytus Technologies?</span>
          </h2>
          <p className="text-secondary lead mb-4 mx-auto" style={{ maxWidth: "720px", fontSize: "1.05rem" }}>
            We blend enterprise-grade software engineering with creative visual execution to build high-impact digital solutions for ambitious organizations.
          </p>

          {/* Group Tab Switcher */}
          <div className="d-inline-flex bg-white p-1 rounded-pill border shadow-sm gap-1">
            <button
              type="button"
              onClick={() => { setActiveTab(0); setActiveItemIndex(0); }}
              className={`btn btn-sm rounded-pill px-4 py-2 font-weight-bold transition-all ${activeTab === 0 ? "btn-primary-blue text-white shadow-sm" : "btn-light text-secondary"}`}
              style={{ fontSize: "0.85rem" }}
            >
              01 - 04 Core Strengths
            </button>
            <button
              type="button"
              onClick={() => { setActiveTab(1); setActiveItemIndex(4); }}
              className={`btn btn-sm rounded-pill px-4 py-2 font-weight-bold transition-all ${activeTab === 1 ? "btn-primary-blue text-white shadow-sm" : "btn-light text-secondary"}`}
              style={{ fontSize: "0.85rem" }}
            >
              05 - 08 Quality & Support
            </button>
          </div>
        </div>

        {/* 2-Column Responsive Layout: Central Circle Badge + Feature Cards List */}
        <div className="row g-4 align-items-center justify-content-center">

          {/* Left Column: Interactive Central Badge Circle */}
          <div className="col-12 col-lg-5 col-xl-4 d-flex justify-content-center">
            <div className="position-relative d-flex align-items-center justify-content-center" style={{ width: "320px", height: "320px" }}>
              
              {/* Outer Dashed Arc Ring */}
              <div
                className="position-absolute top-0 start-0 w-100 h-100 rounded-circle"
                style={{
                  border: "2px dashed #0362C3",
                  opacity: 0.35,
                  transform: "scale(1.08)"
                }}
              />

              {/* Central White Badge */}
              <div
                className="w-100 h-100 rounded-circle bg-white shadow-lg d-flex flex-column align-items-center justify-content-center text-center p-4 position-relative z-2"
                style={{
                  border: "3px solid #E2E8F0",
                  boxShadow: "0 20px 50px rgba(3, 98, 195, 0.12)"
                }}
              >
                <div className="badge bg-primary-blue-light text-primary-blue mb-2 px-3 py-1 rounded-pill font-weight-bold" style={{ fontSize: "0.75rem" }}>
                  {selectedItem.id} OF 08
                </div>

                <h3 className="h4 font-weight-extrabold text-dark mb-2 px-2" style={{ fontWeight: 800, lineHeight: "1.2" }}>
                  WHY CHOOSE <br />
                  <span className="text-primary-blue">GRAYTUS</span>
                </h3>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={selectedItem.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="small text-secondary mb-0 px-2"
                    style={{ fontSize: "0.82rem", lineHeight: "1.45" }}
                  >
                    {selectedItem.desc}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Interactive Node Dots along right arc edge */}
              {currentItems.map((item, idx) => {
                const globalIdx = activeTab === 0 ? idx : idx + 4;
                const isSelected = activeItemIndex === globalIdx;

                // Position node dots on right side arc
                const angles = [-45, -15, 15, 45];
                const rad = (angles[idx] * Math.PI) / 180;
                const r = 160;
                const nodeX = 160 + Math.cos(rad) * r - 12;
                const nodeY = 160 + Math.sin(rad) * r - 12;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveItemIndex(globalIdx)}
                    className="position-absolute border-0 rounded-circle transition-all cursor-pointer z-3"
                    style={{
                      left: `${nodeX}px`,
                      top: `${nodeY}px`,
                      width: isSelected ? "24px" : "16px",
                      height: isSelected ? "24px" : "16px",
                      backgroundColor: isSelected ? "#0362C3" : "#94A3B8",
                      boxShadow: isSelected ? "0 0 14px rgba(3, 98, 195, 0.6)" : "none",
                      transform: isSelected ? "scale(1.2)" : "scale(1)",
                      outline: "none"
                    }}
                    title={item.title}
                  />
                );
              })}
            </div>
          </div>

          {/* Right Column: Feature Cards Directly Connected to Central Hub */}
          <div className="col-12 col-lg-7 col-xl-7">
            <div className="d-flex flex-column gap-3">
              {currentItems.map((item, idx) => {
                const globalIdx = activeTab === 0 ? idx : idx + 4;
                const IconComp = ICON_MAP[item.icon] || Target;
                const isSelected = activeItemIndex === globalIdx;

                // Subtle arc indentation offset to form smooth curve
                const indentOffsets = ["0px", "16px", "16px", "0px"];
                const offset = indentOffsets[idx];

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    onClick={() => setActiveItemIndex(globalIdx)}
                    onMouseEnter={() => setActiveItemIndex(globalIdx)}
                    className="cursor-pointer"
                    style={{
                      marginLeft: offset,
                      transition: "all 0.3s ease"
                    }}
                  >
                    <div
                      className="p-3 px-4 rounded-4 transition-all duration-300 d-flex align-items-center gap-3 bg-white"
                      style={{
                        border: isSelected ? "2px solid #0362C3" : "1px solid #E2E8F0",
                        boxShadow: isSelected
                          ? "0 14px 30px rgba(3, 98, 195, 0.16)"
                          : "0 4px 14px rgba(0, 0, 0, 0.03)",
                        transform: isSelected ? "translateX(8px)" : "translateX(0)"
                      }}
                    >
                      {/* Step Number Badge */}
                      <div
                        className={`rounded-circle d-flex align-items-center justify-content-center font-weight-extrabold flex-shrink-0 transition-all ${
                          isSelected ? "bg-primary-blue text-white shadow-sm" : "bg-light text-primary-blue"
                        }`}
                        style={{ width: "42px", height: "42px", fontSize: "0.88rem" }}
                      >
                        <IconComp size={20} />
                      </div>

                      {/* Card Content */}
                      <div className="flex-grow-1">
                        <div className="d-flex align-items-center justify-content-between mb-1">
                          <h4
                            className="h6 font-weight-bold text-uppercase mb-0"
                            style={{
                              color: isSelected ? "#0362C3" : "#0F172A",
                              fontWeight: 700,
                              letterSpacing: "0.3px"
                            }}
                          >
                            {item.title}
                          </h4>
                          <span
                            className="badge font-weight-bold"
                            style={{
                              backgroundColor: isSelected ? "#E0F2FE" : "#F1F5F9",
                              color: isSelected ? "#0362C3" : "#64748B",
                              fontSize: "0.75rem"
                            }}
                          >
                            {item.id}
                          </span>
                        </div>

                        <p className="small text-secondary mb-0" style={{ lineHeight: "1.45", fontSize: "0.85rem" }}>
                          {item.desc}
                        </p>
                      </div>

                      {/* Chevron Indicator */}
                      <div className="ps-2">
                        <ChevronRight
                          size={18}
                          className="transition-all"
                          style={{
                            color: isSelected ? "#0362C3" : "#CBD5E1",
                            transform: isSelected ? "translateX(3px)" : "translateX(0)"
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}




