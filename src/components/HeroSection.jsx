import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { COMPANY_INFO } from "../data/siteData";

// Dynamic rotating services for letter flip animation
const ROTATING_SERVICES = [
  "Website Development",
  "App Development",
  "Software Development"
];

// Clean Tech SVG Icons for Floating Hero Badges
function FigmaIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z" fill="#FF7262"/>
      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
      <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#1ABCFE"/>
      <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
      <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
    </svg>
  );
}

function ReactIcon() {
  return (
    <svg width="24" height="24" viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
      <g stroke="#61DAFB" strokeWidth="1.2" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  );
}

function NodeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M128 0L16 64.8v129.6L128 256l112-64.8V64.8L128 0z" fill="#5FA04E"/>
      <path d="M128 0v128l112 63.2V64.8L128 0z" fill="#417E38"/>
      <path d="M128 128L16 64.8v129.6L128 256V128z" fill="#68A063"/>
    </svg>
  );
}

export default function HeroSection() {
  const [serviceIdx, setServiceIdx] = useState(0);

  // Switch rotating service every 2.6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setServiceIdx((prev) => (prev + 1) % ROTATING_SERVICES.length);
    }, 2600);
    return () => clearInterval(timer);
  }, []);

  const currentService = ROTATING_SERVICES[serviceIdx];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.04 * i }
    })
  };

  const letterVariants = {
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { type: "spring", damping: 12, stiffness: 150 }
    },
    hidden: { opacity: 0, y: 32, rotateX: -90 }
  };

  return (
    <section
      className="position-relative overflow-hidden py-4 py-lg-5"
      style={{
        background: "linear-gradient(180deg, #F4F8FF 0%, #EBF3FE 100%)",
        minHeight: "88vh",
        display: "flex",
        alignItems: "center"
      }}
    >
      <div className="container-fluid px-lg-5 position-relative z-1">
        <div className="row align-items-center g-4">
          <div className="col-12 col-lg-6 col-xl-6">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="d-flex align-items-center gap-2 mb-3">
                <span className="font-weight-extrabold small tracking-widest text-uppercase" style={{ color: "#0362C3", letterSpacing: "2.5px", fontSize: "18px", fontWeight: "700" }}>
                  GRAYTUS TECHNOLOGIES
                </span>
              </div>

              <h1 className="display-4 font-weight-extrabold text-dark mb-4" style={{ fontSize: "clamp(2.5rem, 4.5vw, 3.6rem)", lineHeight: "1.18", letterSpacing: "-1.2px", fontWeight: 800, perspective: "1000px" }}>
                <motion.span variants={containerVariants} initial="hidden" animate="visible" className="d-block">
                  {"Innovate. Build. Grow.".split("").map((char, i) => (
                    <motion.span key={i} variants={letterVariants} className="d-inline-block" style={{ whiteSpace: char === " " ? "pre" : "normal" }}>
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.span>
                <span className="d-block mt-2" style={{ color: "#0362C3", minHeight: "1.25em" }}>
                  <AnimatePresence mode="wait">
                    <motion.span key={currentService} initial={{ opacity: 0, y: 25, rotateX: 90 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} exit={{ opacity: 0, y: -25, rotateX: -90 }} transition={{ duration: 0.4, ease: "easeOut" }} className="d-inline-block">
                      {currentService.split("").map((char, charIdx) => (
                        <motion.span key={charIdx} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, delay: charIdx * 0.025 }} className="d-inline-block" style={{ whiteSpace: char === " " ? "pre" : "normal" }}>
                          {char === " " ? "\u00A0" : char}
                        </motion.span>
                      ))}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </h1>

              <p className="lead mb-4" style={{ fontSize: "1.1rem", lineHeight: "1.65", maxWidth: "580px", color: "#000000", fontWeight: "500" }}>
                At GRAYTUS TECHNOLOGIES, we turn your ideas into innovative, scalable, and user-friendly digital solutions. From modern websites and mobile applications to custom software and cutting-edge technologies, we help businesses build a stronger digital future.
              </p>

              <div className="d-flex flex-wrap align-items-center gap-3 mb-5">
                <Link to="/contact" id="hero-start-project-btn" className="btn hero-btn-primary">
                  <span>Start Your Project</span>
                  <ArrowRight size={18} />
                </Link>
                <Link to="/services" id="hero-explore-services-btn" className="btn hero-btn-explore">
                  <span className="hero-play-icon-wrap"><Play size={12} fill="currentColor" className="ms-1" /></span>
                  <span>Explore Our Services</span>
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="col-12 col-lg-6 col-xl-6 text-center text-lg-end">
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="position-relative d-inline-block w-100">
              <img src="/images/hero-custom-home.png" alt="Graytus Technologies Building Digital Solutions Forward" className="w-100 h-auto object-fit-contain border-0 shadow-none bg-transparent" style={{ maxHeight: "680px" }} />
              <div className="position-absolute d-flex flex-column z-3" style={{ top: "39%", left: "1.8%", gap: "9px" }}>
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0 }} className="bg-white d-flex align-items-center justify-content-center" style={{ width: "44px", height: "44px", borderRadius: "12px", boxShadow: "0 8px 20px rgba(0, 0, 0, 0.12)", border: "1px solid rgba(0, 0, 0, 0.08)" }}><ReactIcon /></motion.div>
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="bg-white d-flex align-items-center justify-content-center" style={{ width: "44px", height: "44px", borderRadius: "12px", boxShadow: "0 8px 20px rgba(0, 0, 0, 0.12)", border: "1px solid rgba(0, 0, 0, 0.08)" }}><FigmaIcon /></motion.div>
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 1.0 }} className="bg-white d-flex align-items-center justify-content-center" style={{ width: "44px", height: "44px", borderRadius: "12px", boxShadow: "0 8px 20px rgba(0, 0, 0, 0.12)", border: "1px solid rgba(0, 0, 0, 0.08)" }}><NodeIcon /></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
