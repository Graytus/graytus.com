import React from "react";
import SEO from "../components/SEO";
import AboutSection from "../components/AboutSection";
import StatsSection from "../components/StatsSection";
import ProcessSection from "../components/ProcessSection";
import CTASection from "../components/CTASection";
import { Shield, Zap, Target, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Us | Graytus Technologies"
        description="Learn about Graytus Technologies - a premier software development and digital solutions company engineering web, mobile, and AI applications."
      />

      {/* Page Header Banner / Hero Section with custom background color */}
      <section
        className="position-relative overflow-hidden w-100 m-0"
        style={{
          background: "radial-gradient(ellipse at 85% 40%, rgba(4, 87, 215, 0.5) 0%, transparent 60%), radial-gradient(ellipse at 65% 80%, rgba(3, 74, 191, 0.4) 0%, transparent 55%), linear-gradient(105deg, #001854 0%, #002b82 40%, #034abf 75%, #0457d7 100%)",
          minHeight: "440px",
          display: "flex",
          alignItems: "center",
          padding: "85px 0 95px 0",
        }}
      >
        <div className="container-fluid px-4 px-lg-5 position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center">
            {/* Left Column: Heading & Info */}
            <div className="col-12 col-lg-7 text-center text-lg-start">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div
                  className="badge-pill-tag mb-3"
                  style={{
                    backgroundColor: "rgba(8, 102, 198, 0.25)",
                    color: "#60A5FA",
                    border: "1px solid rgba(96, 165, 250, 0.35)",
                    fontWeight: 600,
                    backdropFilter: "blur(6px)",
                  }}
                >
                  WHO WE ARE
                </div>
                <h1
                  className="display-4 font-weight-extrabold mb-3 text-white"
                  style={{
                    fontWeight: 700,
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}
                >
                  About <span style={{ color: "#60A5FA" }}>Graytus Technologies</span>
                </h1>
                <p
                  className="lead mx-auto mx-lg-0 mb-0"
                  style={{
                    maxWidth: "680px",
                    color: "#E2E8F0",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "1.65",
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}
                >
                  We are a full-service enterprise software development agency dedicated to building high-performance web applications, mobile apps, and intelligent digital systems.
                </p>
              </motion.div>
            </div>

            {/* Right Column: Kept clear so the glowing hexagon artwork is showcased cleanly */}
            <div className="col-12 col-lg-5 d-none d-lg-block" style={{ minHeight: "260px" }}>
            </div>
          </div>
        </div>
      </section>

      {/* Main About Component */}
      <AboutSection showCta={false} />

      {/* Values & Engineering Culture */}
      <section className="section-padding bg-alt-light">
        <div className="container-fluid px-lg-5">
          <div className="text-center mb-5">
            <div className="badge-pill-tag mb-3">OUR FOUNDATION</div>
            <h2 className="section-title text-dark">
              Core Engineering <span className="text-primary-blue">Values</span>
            </h2>
            <p className="section-subtitle">
              Our principles define how we collaborate with clients and write code every day.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-3">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0, ease: [0.16, 1, 0.3, 1] }}
                className="gt-card p-4 text-center h-100"
              >
                <div className="bg-primary-blue-light text-primary-blue p-3 rounded-circle d-inline-flex mb-3">
                  <Shield size={32} />
                </div>
                <h3 className="h5 font-weight-bold text-dark mb-2">Uncompromising Quality</h3>
                <p className="small text-secondary mb-0">
                  Every line of code undergoes strict peer review, automated testing, and security checks before reaching production.
                </p>
              </motion.div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="gt-card p-4 text-center h-100"
              >
                <div className="bg-primary-blue-light text-primary-blue p-3 rounded-circle d-inline-flex mb-3">
                  <Target size={32} />
                </div>
                <h3 className="h5 font-weight-bold text-dark mb-2">Transparency & Ethics</h3>
                <p className="small text-secondary mb-0">
                  Direct Slack / Jira access, weekly sprint demos, and zero hidden costs ensure complete client alignment.
                </p>
              </motion.div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="gt-card p-4 text-center h-100"
              >
                <div className="bg-primary-blue-light text-primary-blue p-3 rounded-circle d-inline-flex mb-3">
                  <Zap size={32} />
                </div>
                <h3 className="h5 font-weight-bold text-dark mb-2">Scalable Speed</h3>
                <p className="small text-secondary mb-0">
                  Agile methodologies allowing fast iteration and rapid product deployment without sacrificing architectural stability.
                </p>
              </motion.div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="gt-card p-4 text-center h-100"
              >
                <div className="bg-primary-blue-light text-primary-blue p-3 rounded-circle d-inline-flex mb-3">
                  <Users size={32} />
                </div>
                <h3 className="h5 font-weight-bold text-dark mb-2">Client Partnership</h3>
                <p className="small text-secondary mb-0">
                  We operate as an extended internal technology division focused on long-term client revenue growth.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* CTA Banner */}
      <CTASection
        title="Ready to Partner with Graytus Technologies?"
        subtitle="Let's turn your vision into an enterprise-grade digital solution."
      />
    </>
  );
}
