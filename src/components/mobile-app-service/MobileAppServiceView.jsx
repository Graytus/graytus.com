import React from "react";
import { Link } from "react-router-dom";
import { 
  Smartphone, 
  Check, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Cloud, 
  ArrowRight, 
  Quote, 
  Star,
  FileText,
  Paperclip,
  Users2,
  Zap,
  Repeat
} from "lucide-react";
import { motion } from "framer-motion";
import "../../styles/mobile-app-service.css";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function MobileAppServiceView() {
  return (
    <div className="mob-service-page">
      {/* ── Top Teaser Banner (Matching reference top edge) ── */}
      <div className="mob-top-banner-outer">
        <motion.div 
          className="mob-top-banner"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <div className="fw-bold" style={{ fontSize: "1.05rem", letterSpacing: "-0.3px" }}>
              Comprehensive Mobile App Development Studio
            </div>
            <div className="small text-white-50 mt-1">
              Client data and app settings are synchronized across multiple platforms & devices.
            </div>
          </div>

          <div className="d-flex align-items-center">
            <div className="mob-top-avatar-stack">
              <img src="/images/about-male-developer-cutout.jpg" alt="Dev" className="mob-top-avatar" />
              <img src="/images/about-female-developer.jpg" alt="Dev" className="mob-top-avatar" />
              <img src="/images/about-male-developer.jpg" alt="Dev" className="mob-top-avatar" />
            </div>
            <span className="mob-top-plus-badge">+9+</span>
            <span className="small fw-bold">Downloads: 5M+ in a year! 🎉</span>
          </div>
        </motion.div>
      </div>

      <div className="mob-main-container">
        {/* ── Section 1: Dashboard, Stats & Feature List ── */}
        <section className="mob-sec1-wrapper">
          <div className="row g-4 g-lg-5 align-items-center">
            {/* Left Column: White Tasks Dashboard Card on Tinted Plate */}
            <div className="col-12 col-lg-5">
              <motion.div className="mob-dashboard-plate" {...fadeUp(0.1)}>
                {/* Soft Tinted Backdrop Plate */}
                <div className="mob-plate-backdrop" />

                {/* Floating Tilted 3D Icon */}
                <div className="mob-tilted-icon">
                  <Layers size={22} />
                </div>

                {/* White Task List Card */}
                <div className="mob-white-task-card">
                  {/* Task Card Header */}
                  <div className="mob-task-header">
                    <h3 className="mob-task-list-title">Tasks List</h3>
                    <button type="button" className="mob-add-task-btn">+ Add Task</button>
                  </div>

                  {/* Task Rows matching reference */}
                  <div className="mob-ref-task-row">
                    <div className="mob-ref-radio">
                      <div className="mob-ref-radio-dot" />
                    </div>
                    <div>
                      <div className="mob-ref-task-text-main">Create Brand Guidelines</div>
                      <div className="mob-ref-task-text-sub">Brand Book Website</div>
                    </div>
                  </div>

                  <div className="mob-ref-task-row">
                    <div className="mob-ref-radio">
                      <div className="mob-ref-radio-dot" />
                    </div>
                    <div>
                      <div className="mob-ref-task-text-main">Create Brand Guidelines</div>
                      <div className="mob-ref-task-text-sub">Brand Book Website</div>
                    </div>
                  </div>

                  <div className="mob-ref-task-row">
                    <div className="mob-ref-radio">
                      <div className="mob-ref-radio-dot" />
                    </div>
                    <div>
                      <div className="mob-ref-task-text-main">Create Brand Guidelines</div>
                      <div className="mob-ref-task-text-sub">Brand Book Website</div>
                    </div>
                  </div>

                  {/* Footer: Mini Audio Bars & Avatar Stack */}
                  <div className="mob-dashboard-footer">
                    <div className="mob-audio-bars">
                      <div className="mob-audio-bar" style={{ height: "40%" }} />
                      <div className="mob-audio-bar" style={{ height: "75%" }} />
                      <div className="mob-audio-bar" style={{ height: "55%" }} />
                      <div className="mob-audio-bar" style={{ height: "100%" }} />
                      <div className="mob-audio-bar" style={{ height: "65%" }} />
                      <div className="mob-audio-bar" style={{ height: "90%" }} />
                      <div className="mob-audio-bar" style={{ height: "50%" }} />
                    </div>

                    <div className="d-flex align-items-center">
                      <div className="mob-top-avatar-stack">
                        <img src="/images/about-female-developer.jpg" alt="Avatar" className="mob-top-avatar" style={{ width: 24, height: 24 }} />
                        <img src="/images/about-male-developer-realistic.jpg" alt="Avatar" className="mob-top-avatar" style={{ width: 24, height: 24 }} />
                        <img src="/images/about-male-developer.jpg" alt="Avatar" className="mob-top-avatar" style={{ width: 24, height: 24 }} />
                      </div>
                      <span className="mob-top-plus-badge" style={{ width: 20, height: 20, fontSize: "0.6rem" }}>+9+</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Middle Column: Two Clean Large Stats */}
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="mob-stats-col">
                <motion.div className="mob-stat-unit" {...fadeUp(0.15)}>
                  <div className="mob-big-number">29M+</div>
                  <p className="mob-stat-sub">satisfied user this time</p>
                </motion.div>

                <motion.div className="mob-stat-unit" {...fadeUp(0.2)}>
                  <div className="mob-big-number">100M+</div>
                  <p className="mob-stat-sub">Total tasks or project completed</p>
                </motion.div>
              </div>
            </div>

            {/* Right Column: 3 Feature Descriptions */}
            <div className="col-12 col-sm-6 col-lg-4">
              <motion.div className="mob-feature-unit" {...fadeUp(0.15)}>
                <h4 className="mob-feature-unit-title">Data Sync and Backup</h4>
                <p className="mob-feature-unit-desc">
                  Client data and app settings are synchronized across multiple devices.
                </p>
              </motion.div>

              <motion.div className="mob-feature-unit" {...fadeUp(0.2)}>
                <h4 className="mob-feature-unit-title">Task Attachments</h4>
                <p className="mob-feature-unit-desc">
                  Users can attach files, documents, or links to tasks, providing additional context or reference material.
                </p>
              </motion.div>

              <motion.div className="mob-feature-unit" {...fadeUp(0.25)}>
                <h4 className="mob-feature-unit-title">Task Collaboration</h4>
                <p className="mob-feature-unit-desc">
                  Users can collaborate with others on tasks, enabling team members to comment.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Section 2: Comprehensive Feature Set ── */}
        <section className="mob-sec2-wrapper">
          <div className="row g-4 g-lg-5 align-items-center">
            {/* Left: Heading & Features */}
            <div className="col-12 col-lg-6">
              <motion.div {...fadeUp(0.1)}>
                <h2 className="mob-ref-title mb-4">
                  Comprehensive <span className="mob-purple-span">Feature Set</span><br />
                  of a Mobile App Development
                </h2>

                {/* Feature 1 */}
                <div className="mob-feature-card-item">
                  <div className="mob-feature-icon-box">
                    <FileText size={18} />
                  </div>
                  <div>
                    <h3 className="mob-feature-unit-title">Data Sync and Backup</h3>
                    <p className="mob-feature-unit-desc">
                      Client data and app settings are synchronized across multiple devices.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="mob-feature-card-item">
                  <div className="mob-feature-icon-box">
                    <Paperclip size={18} />
                  </div>
                  <div>
                    <h3 className="mob-feature-unit-title">Task Attachments</h3>
                    <p className="mob-feature-unit-desc">
                      Users can attach files, documents, or links to tasks, providing additional context or reference material.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="mob-feature-card-item">
                  <div className="mob-feature-icon-box">
                    <Users2 size={18} />
                  </div>
                  <div>
                    <h3 className="mob-feature-unit-title">Task Collaboration & Real-Time Sync</h3>
                    <p className="mob-feature-unit-desc">
                      Users can collaborate in real-time, enabling seamless team communications and push alerts.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Layered UI Cards matching reference */}
            <div className="col-12 col-lg-6">
              <div className="mob-layered-canvas">
                {/* Soft Lavender Back Plate */}
                <div className="mob-canvas-plate-back" />

                {/* Top Floating Pill Card */}
                <motion.div 
                  className="mob-pill-tag-card"
                  initial={{ opacity: 0, y: -16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="badge rounded-circle p-2" style={{ background: "#6C5CE7", color: "#FFFFFF" }}>
                    <Zap size={14} />
                  </div>
                  <div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="small fw-bold text-dark">Grower Tasks</span>
                      <span className="badge rounded-pill" style={{ background: "#FAF9FE", color: "#6C5CE7", fontSize: "0.68rem" }}>
                        App Design
                      </span>
                    </div>
                    <div className="text-muted" style={{ fontSize: "0.68rem" }}>17-18 August, 2026 • 21 minuts ago</div>
                  </div>
                </motion.div>

                {/* Center Overview Card */}
                <motion.div 
                  className="mob-center-overview-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h4 className="h6 fw-bold text-dark mb-2">Project Overview</h4>
                  <p className="small text-muted mb-0" style={{ lineHeight: 1.6 }}>
                    Web app and mobile wireframe sketch completed and sent to client for review.
                  </p>
                </motion.div>

                {/* Bottom Badge Card */}
                <motion.div 
                  className="mob-bottom-badge-card"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div>
                    <div className="text-muted" style={{ fontSize: "0.68rem" }}>Total Working Hours</div>
                    <div className="small fw-bold text-dark">$6,512.00</div>
                  </div>
                  <span className="badge rounded-pill" style={{ background: "#FFE4EE", color: "#FF5B8C", fontSize: "0.7rem", fontWeight: 700 }}>
                    PRO
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 3: Large Purple CTA Banner (HIGH PRIORITY) ── */}
        <section className="mob-sec3-wrapper">
          <motion.div 
            className="mob-banner-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="row align-items-center g-4 g-lg-5">
              {/* Smartphone Mockup Overlapping Top and Bottom Borders */}
              <div className="col-12 col-lg-5">
                <div className="mob-phone-wrapper">
                  <div className="mob-phone-shell">
                    <div className="mob-phone-display">
                      {/* Notch Bar */}
                      <div className="mob-phone-notch-bar" />

                      {/* Card 1: Brand Header */}
                      <div className="mob-phone-badge-card">
                        <div className="d-flex align-items-center gap-2 mb-1">
                          <span className="badge rounded-circle p-1" style={{ background: "#F1EDFE", color: "#6C5CE7" }}>
                            <Sparkles size={12} />
                          </span>
                          <span className="small fw-bold text-dark">Brand New Mobile Design</span>
                        </div>
                      </div>

                      {/* Card 2: Project Overview */}
                      <div className="mob-phone-badge-card">
                        <div className="small fw-bold text-dark mb-1">Project Overview</div>
                        <div className="text-muted" style={{ fontSize: "0.66rem", lineHeight: 1.4 }}>
                          Native iOS & Android app framework with offline data cache.
                        </div>
                      </div>

                      {/* Card 3: Tasks List with Checkboxes */}
                      <div className="mob-phone-badge-card">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <span className="small fw-bold text-dark">Tasks List</span>
                          <span style={{ fontSize: "0.64rem", color: "#6C5CE7", fontWeight: 700 }}>+ Add Task</span>
                        </div>
                        <div className="d-flex align-items-center gap-2 py-1">
                          <div className="mob-ref-radio" style={{ width: 14, height: 14 }}>
                            <div className="mob-ref-radio-dot" style={{ width: 5, height: 5 }} />
                          </div>
                          <span className="text-dark" style={{ fontSize: "0.66rem" }}>Design Mobile App UI</span>
                        </div>
                        <div className="d-flex align-items-center gap-2 py-1">
                          <div className="mob-ref-radio" style={{ width: 14, height: 14 }}>
                            <div className="mob-ref-radio-dot" style={{ width: 5, height: 5 }} />
                          </div>
                          <span className="text-dark" style={{ fontSize: "0.66rem" }}>Integrate Cloud APIs</span>
                        </div>
                      </div>

                      {/* Bottom Phone Action Button */}
                      <div className="mob-phone-bottom-btn">
                        Complete
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Banner Right Content */}
              <div className="col-12 col-lg-7">
                <div className="mob-banner-text-box">
                  <h2 className="mob-banner-title">
                    Ready? Let's Start with <span style={{ fontWeight: 800 }}>Graytus</span><br />
                    and Get <span style={{ fontWeight: 800 }}>Awesome Experience</span>
                  </h2>

                  <p className="mob-banner-desc">
                    Leading app design and mobile engineering studio, dedicated to delivering 
                    transformative digital solutions that empower businesses worldwide.
                  </p>

                  <div>
                    <Link to="/contact" className="mob-btn-coral-pill">
                      Learn More <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── Section 4: Testimonials / Social Proof ── */}
        <section className="mob-sec4-wrapper">
          <div className="row align-items-center g-4 g-lg-5">
            {/* Left: Portrait with Magenta/Purple Squircle */}
            <div className="col-12 col-lg-5 text-center text-lg-start mob-testimonial-portrait-col">
              <motion.div 
                className="mob-portrait-container"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
              >
                {/* Squircle Shape */}
                <div className="mob-squircle-shape" />

                {/* Top Floating Trustpilot Pill */}
                <div className="mob-float-trust-pill">
                  <span className="badge rounded-circle p-1" style={{ background: "#FF5B8C", color: "#FFFFFF" }}>
                    <Star size={10} fill="#FFFFFF" />
                  </span>
                  <span>Trustpilot 4.8 ★</span>
                </div>

                {/* Portrait Photo */}
                <img 
                  src="/images/about-male-developer-realistic.jpg" 
                  alt="Client Review" 
                  className="mob-celebrate-photo"
                  loading="lazy"
                />

                {/* Overlapping Deep Purple Bottom Card */}
                <div className="mob-float-purple-card d-none d-sm-block">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="badge rounded-circle bg-white text-primary p-1" style={{ color: "#6C5CE7 !important" }}>
                      <Star size={12} fill="#6C5CE7" />
                    </span>
                  </div>
                  {/* 3 Task indicator lines */}
                  <div style={{ height: 4, background: "rgba(255,255,255,0.4)", borderRadius: 4, marginBottom: 5 }} />
                  <div style={{ height: 4, background: "rgba(255,255,255,0.4)", borderRadius: 4, width: "70%", marginBottom: 8 }} />
                  {/* Avatar stack */}
                  <div className="mob-top-avatar-stack mt-2">
                    <img src="/images/about-female-developer.jpg" alt="Team" className="mob-top-avatar" style={{ width: 22, height: 22 }} />
                    <img src="/images/about-male-developer-cutout.jpg" alt="Team" className="mob-top-avatar" style={{ width: 22, height: 22 }} />
                    <img src="/images/about-male-developer.jpg" alt="Team" className="mob-top-avatar" style={{ width: 22, height: 22 }} />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Testimonial Quotes & Attribution */}
            <div className="col-12 col-lg-7">
              <motion.div 
                className="ps-lg-4"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.1 }}
              >
                <div className="mob-quote-badge-ref">
                  <Quote size={20} />
                </div>

                <p className="mob-quote-body">
                  "We had an excellent experience working with XYZ Web Design Agency [Graytus Technologies]. 
                  Their team delivered a visually stunning and user-friendly mobile application that exceeded our expectations."
                </p>

                <div className="mob-quote-author-name">Alen Walker, Senior Executive, The Ford</div>

                <div className="d-flex align-items-center gap-2 mt-3 pt-3 border-top" style={{ borderColor: "#EFEAFD" }}>
                  <Star size={15} fill="#10B981" color="#10B981" />
                  <span className="small text-muted fw-bold">Trustpilot</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Section 5: Blog Section ── */}
        <section className="mob-sec5-wrapper">
          <div className="text-center mb-5">
            <motion.h2 className="mob-ref-title" {...fadeUp(0)}>
              Learn More <span style={{ fontWeight: 700 }}>Things about The</span><br />
              Task Management From <span className="mob-purple-span">Our Blog</span>
            </motion.h2>
          </div>

          <div className="row g-4 justify-content-center">
            {/* Blog Card 1 */}
            <div className="col-12 col-md-4">
              <motion.div className="mob-ref-blog-card" {...fadeUp(0.1)}>
                <div className="mob-ref-blog-img-box">
                  <img src="/images/portfolio-health.jpg" alt="App UI" className="mob-ref-blog-img" />
                </div>
                <h3 className="mob-feature-unit-title">React Native vs Flutter Architecture</h3>
                <p className="mob-feature-unit-desc mb-3">
                  Comprehensive benchmark comparison of cross-platform mobile app performance in 2026.
                </p>
                <Link to="/blog" className="small fw-bold text-decoration-none mt-auto" style={{ color: "#6C5CE7" }}>
                  Read Article →
                </Link>
              </motion.div>
            </div>

            {/* Blog Card 2 */}
            <div className="col-12 col-md-4">
              <motion.div className="mob-ref-blog-card" {...fadeUp(0.18)}>
                <div className="mob-ref-blog-img-box">
                  <img src="/images/blog-ai.jpg" alt="App Design" className="mob-ref-blog-img" />
                </div>
                <h3 className="mob-feature-unit-title">Modern Design Systems for Mobile</h3>
                <p className="mob-feature-unit-desc mb-3">
                  Structuring micro-interactions, responsive typography, and design tokens for iOS and Android.
                </p>
                <Link to="/blog" className="small fw-bold text-decoration-none mt-auto" style={{ color: "#6C5CE7" }}>
                  Read Article →
                </Link>
              </motion.div>
            </div>

            {/* Blog Card 3 */}
            <div className="col-12 col-md-4">
              <motion.div className="mob-ref-blog-card" {...fadeUp(0.26)}>
                <div className="mob-ref-blog-img-box">
                  <img src="/images/blog-cloud.jpg" alt="Cloud APIs" className="mob-ref-blog-img" />
                </div>
                <h3 className="mob-feature-unit-title">Zero-Latency WebSockets & Offline Cache</h3>
                <p className="mob-feature-unit-desc mb-3">
                  Building fault-tolerant mobile apps that work seamlessly without an internet connection.
                </p>
                <Link to="/blog" className="small fw-bold text-decoration-none mt-auto" style={{ color: "#6C5CE7" }}>
                  Read Article →
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
