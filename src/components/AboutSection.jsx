import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye } from "lucide-react";
import { motion } from "framer-motion";
import aboutImg from "../assets/aboutus/n1.png";

export default function AboutSection({ showCta = true }) {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-fluid px-lg-5">
        <div className="row align-items-center g-5">
          {/* Left: Team Visual */}
          <div className="col-12 col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="position-relative h-100 d-flex align-items-center justify-content-center"
            >
              <img
                src={aboutImg}
                alt="About Graytus Technologies - Enterprise Digital & Software Solutions"
                className="img-fluid w-100"
                style={{
                  maxHeight: "560px",
                  objectFit: "contain",
                  display: "block"
                }}
              />
            </motion.div>
          </div>

          {/* Right: About Content */}
          <div className="col-12 col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="badge-pill-tag mb-3">ABOUT GRAYTUS TECHNOLOGIES</div>
              <h2 className="section-title text-dark">
                Technology That Turns <span className="text-primary-blue">Ideas Into Reality</span>
              </h2>

              <p className="lead text-secondary mb-4">
                Graytus Technologies is a leading software development company delivering innovative digital solutions
                for startups, businesses, and enterprises. We specialize in custom software development, web application
                development, mobile app development, AI solutions, and scalable digital platforms designed to help
                businesses grow and succeed in the digital world.
              </p>

              <div className="row g-4 mb-4">
                {/* Our Mission */}
                <div className="col-12 col-sm-6">
                  <div className="h-100">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="bg-primary-blue-light rounded-3 text-primary-blue d-inline-flex align-items-center justify-content-center flex-shrink-0"
                        style={{ width: "38px", height: "38px", cursor: "pointer" }}
                      >
                        <Target size={20} />
                      </motion.div>
                      <h6 className="font-weight-bold text-dark mb-0 fs-6" style={{ fontWeight: 700 }}>
                        Our Mission
                      </h6>
                    </div>
                    <p className="small text-secondary mb-0" style={{ lineHeight: "1.6" }}>
                      To empower businesses with reliable, scalable, and high-performance software solutions that
                      simplify operations, improve customer experiences, and drive measurable business growth.
                    </p>
                  </div>
                </div>

                {/* Our Vision */}
                <div className="col-12 col-sm-6">
                  <div className="h-100">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="bg-primary-blue-light rounded-3 text-primary-blue d-inline-flex align-items-center justify-content-center flex-shrink-0"
                        style={{ width: "38px", height: "38px", cursor: "pointer" }}
                      >
                        <Eye size={20} />
                      </motion.div>
                      <h6 className="font-weight-bold text-dark mb-0 fs-6" style={{ fontWeight: 700 }}>
                        Our Vision
                      </h6>
                    </div>
                    <p className="small text-secondary mb-0" style={{ lineHeight: "1.6" }}>
                      To become a trusted technology and software development partner for businesses worldwide by
                      delivering innovative solutions, quality engineering, and long-term digital transformation.
                    </p>
                  </div>
                </div>
              </div>

              {showCta && (
                <Link to="/about" className="btn btn-primary-gt mt-2">
                  Know More About Us <ArrowRight size={18} />
                </Link>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
