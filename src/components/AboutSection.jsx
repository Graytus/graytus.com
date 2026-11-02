import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye } from "lucide-react";
import { motion } from "framer-motion";
import aboutImg from "../assets/aboutus/n1.png";

export default function AboutSection({ showCta = true }) {
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-fluid px-lg-5">
        <div className="row align-items-center g-5">
          {/* Left: Team Visual */}
          <div className="col-12 col-lg-6">
            <motion.div
              initial={{ opacity: 0, y: 32, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
              variants={textContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              <motion.div variants={textItemVariants} className="badge-pill-tag mb-3">
                ABOUT GRAYTUS TECHNOLOGIES
              </motion.div>
              <motion.h2 variants={textItemVariants} className="section-title text-dark">
                Technology That Turns <span className="text-primary-blue">Ideas Into Reality</span>
              </motion.h2>

              <motion.p variants={textItemVariants} className="lead text-secondary mb-4">
                Graytus Technologies is a leading software development company delivering innovative digital solutions
                for startups, businesses, and enterprises. We specialize in custom software development, web application
                development, mobile app development, AI solutions, and scalable digital platforms designed to help
                businesses grow and succeed in the digital world.
              </motion.p>

              <motion.div variants={textItemVariants} className="row g-4 mb-4">
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
              </motion.div>

              {showCta && (
                <motion.div variants={textItemVariants}>
                  <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="d-inline-block">
                    <Link to="/about" className="btn btn-primary-gt mt-2">
                      Know More About Us <ArrowRight size={18} />
                    </Link>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
