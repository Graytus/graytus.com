import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import CTASection from "../components/CTASection";
import InternshipApplyModal from "../components/InternshipApplyModal";
import { COMPANY_INFO } from "../data/siteData";
import {
  Briefcase,
  GraduationCap,
  Users,
  Award,
  Clock,
  MapPin,
  Code2,
  Smartphone,
  Palette,
  Megaphone,
  Server,
  TestTube2,
  ChevronRight,
  CheckCircle2,
  Send,
  FileText,
  UserCheck,
  Rocket,
  Star,
  Laptop,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import internshipBannerImg from "../assets/internship/img1.png";

/* ── Animation Helpers ── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] },
});

/* ── Internship Programs Data ── */
const INTERNSHIP_PROGRAMS = [
  {
    title: "Full Stack Development Intern",
    icon: Code2,
    duration: "1 – 3 Months",
    mode: "Remote / Hybrid",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Bootstrap 5"],
    description:
      "Build production-grade web and mobile applications alongside senior engineers. Work on real client projects using modern component architectures, APIs, and clean code practices.",
  },
  {
    title: "Software Testing / QA Intern",
    icon: TestTube2,
    duration: "1 – 3 Months",
    mode: "Remote / Hybrid",
    skills: ["Manual Testing", "Test Cases", "Selenium", "API Testing (Postman)", "Bug Tracking"],
    description:
      "Ensure software reliability through structured manual and automated QA methodologies. Master test planning, defect tracking, test execution, and CI/CD quality gates.",
  },
  {
    title: "UI/UX Design Intern",
    icon: Palette,
    duration: "1 – 3 Months",
    mode: "Remote / Hybrid",
    skills: ["Figma", "Wireframing", "Interactive Prototyping", "Design Systems", "User Journeys"],
    description:
      "Create human-centered user interfaces and responsive web/mobile flows. Translate business requirements into intuitive design tokens, micro-interactions, and design systems.",
  },
];

/* ── Why Intern Data ── */
const WHY_INTERN = [
  {
    icon: Briefcase,
    title: "Real-World Projects",
    description:
      "Work on live client projects — not dummy assignments. Build portfolio-worthy work that demonstrates real engineering capabilities.",
  },
  {
    icon: Users,
    title: "1-on-1 Mentorship",
    description:
      "Get paired with a senior engineer who guides you through code reviews, architecture decisions, and professional growth.",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description:
      "Work remotely or in hybrid mode with flexible hours. We value output over hours, giving you the freedom to learn at your own pace.",
  },
  {
    icon: Award,
    title: "Certificate & Recommendation",
    description:
      "Receive an official internship certificate and a personalized letter of recommendation upon successful completion.",
  },
];

/* ── Process Steps Data ── */
const PROCESS_STEPS = [
  {
    icon: Send,
    title: "Apply Online",
    description: "Submit your application through our contact form or email with your resume and area of interest.",
  },
  {
    icon: FileText,
    title: "Screening & Interview",
    description: "Our team reviews your application and conducts a brief technical or portfolio interview.",
  },
  {
    icon: UserCheck,
    title: "Onboarding & Orientation",
    description: "Get introduced to the team, tools, workflows, and your assigned project scope.",
  },
  {
    icon: Rocket,
    title: "Project & Mentoring",
    description: "Work on real projects with weekly mentor check-ins, code reviews, and learning milestones.",
  },
  {
    icon: Star,
    title: "Evaluation & Certification",
    description: "Complete your project deliverables, receive feedback, and earn your internship certificate.",
  },
];

/* ── Eligibility Criteria Data ── */
const ELIGIBILITY_CRITERIA = [
  {
    icon: GraduationCap,
    badge: "Degrees & Streams",
    title: "Eligible Qualifications",
    detail: "B.E / B.Tech (CSE, IT, ECE, EEE, AI/DS), BCA, MCA, B.Sc & M.Sc (Computer Science / IT) or Polytechnic Diploma students."
  },
  {
    icon: Clock,
    badge: "Batch & Year",
    title: "Academic Stage",
    detail: "Open to Pre-Final Year, Final-Year students as well as recent fresh graduates seeking practical industry exposure."
  },
  {
    icon: Code2,
    badge: "Prerequisites",
    title: "Basic Coding Knowledge",
    detail: "Fundamental understanding of programming logic, web or mobile concepts. No advanced work experience required."
  },
  {
    icon: Rocket,
    badge: "Attitude",
    title: "Learning Drive & Passion",
    detail: "High curiosity, consistency, and a proactive mindset to learn modern production tech stacks and clean code practices."
  },
  {
    icon: Users,
    badge: "Soft Skills",
    title: "Collaboration & Teamwork",
    detail: "Good written and verbal communication for participating in daily standups, code reviews, and mentor discussions."
  },
  {
    icon: Laptop,
    badge: "Workspace",
    title: "Laptop & Stable Internet",
    detail: "A functional laptop or computer with reliable internet connectivity for remote collaboration and hands-on project work."
  }
];

/* ════════════════════════════════════════════════════════════════════
   INTERNSHIP PAGE COMPONENT
   ════════════════════════════════════════════════════════════════════ */
export default function InternshipPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState("Full Stack Development");

  const openApplyModal = (prog = "Full Stack Development") => {
    setSelectedProgram(prog);
    setIsModalOpen(true);
  };

  return (
    <>
      <SEO
        title="Internship Program"
        description="Join Graytus Technologies internship program. Gain real-world experience in web development, mobile apps, UI/UX design, digital marketing, and cloud engineering."
      />

      {/* ── Hero Section (Full width, no top or side gaps) ── */}
      <section className="position-relative bg-white p-0 m-0 overflow-hidden">
        <style>{`
          .internship-hero-banner {
            width: 100%;
            margin: 0;
            border-radius: 0;
            background: linear-gradient(135deg, #07152B 0%, #0A1E3F 45%, #051226 100%);
            padding: 64px 0 200px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            position: relative;
            overflow: hidden;
            box-shadow: 0 20px 50px rgba(7, 21, 43, 0.15);
          }
          @media (max-width: 991px) {
            .internship-hero-banner {
              padding: 48px 0 160px 0;
            }
          }
          @media (max-width: 767px) {
            .internship-hero-banner {
              padding: 36px 0 60px 0;
            }
          }

          .internship-cards-wrap {
            position: relative;
            z-index: 5;
            margin-top: -125px;
            padding-bottom: 50px;
          }
          @media (max-width: 991px) {
            .internship-cards-wrap {
              margin-top: -105px;
              padding-bottom: 40px;
            }
          }
          @media (max-width: 767px) {
            .internship-cards-wrap {
              margin-top: 24px;
              padding-bottom: 24px;
            }
          }

          .internship-card-item {
            background: #FFFFFF !important;
            border-radius: 22px !important;
            border: 1.5px solid #E2E8F0 !important;
            box-shadow: 0 16px 36px rgba(0, 0, 0, 0.08) !important;
            padding: 48px 24px 32px !important;
            text-align: center !important;
            position: relative !important;
            overflow: visible !important;
            height: 100% !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: space-between !important;
            transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease !important;
          }
          .internship-card-item:hover {
            transform: translateY(-8px) !important;
            box-shadow: 0 24px 50px rgba(8, 102, 198, 0.16) !important;
            border-color: #0866C6 !important;
          }

          .internship-card-floating-icon {
            position: absolute;
            top: -28px;
            left: 50%;
            transform: translateX(-50%);
            width: 56px;
            height: 56px;
            border-radius: 50%;
            background: linear-gradient(135deg, #0866C6 0%, #0284C7 100%);
            border: 4px solid #FFFFFF;
            color: #FFFFFF;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 8px 20px rgba(8, 102, 198, 0.38), 0 0 0 1px rgba(8, 102, 198, 0.15);
            z-index: 10;
          }
        `}</style>

        {/* 100% Edge-to-Edge Full-Width Dark Banner (0 top gap, 0 side gap) */}
        <div className="internship-hero-banner">
          {/* Background Faint Watermark Text */}
          <div
            className="position-absolute"
            style={{
              top: "20px",
              left: "48%",
              transform: "translateX(-40%)",
              fontSize: "clamp(5rem, 11vw, 9rem)",
              fontWeight: 900,
              color: "rgba(255, 255, 255, 0.03)",
              letterSpacing: "4px",
              textTransform: "lowercase",
              pointerEvents: "none",
              userSelect: "none",
              lineHeight: 1,
              zIndex: 1
            }}
          >
            internship
          </div>

          {/* Glowing Flowing Wave Lines */}
          <svg
            className="position-absolute start-0 top-0 w-100 h-100"
            viewBox="0 0 1200 450"
            preserveAspectRatio="none"
            fill="none"
            style={{ pointerEvents: "none", zIndex: 1, opacity: 0.65 }}
          >
            <path
              d="M -50 260 C 220 180, 420 340, 720 260 C 980 190, 1120 280, 1280 220"
              stroke="#0284C7"
              strokeWidth="1.8"
              strokeOpacity="0.45"
            />
            <path
              d="M -50 300 C 260 210, 460 360, 760 280 C 1020 210, 1160 310, 1280 250"
              stroke="#0866C6"
              strokeWidth="1.4"
              strokeOpacity="0.35"
            />
            <path
              d="M -50 220 C 190 280, 430 190, 690 240 C 940 290, 1110 200, 1280 230"
              stroke="#38BDF8"
              strokeWidth="1"
              strokeOpacity="0.25"
            />
          </svg>

          {/* Banner Inner Content (Contained to align with Navbar) */}
          <div className="container-fluid px-4 px-lg-5 position-relative" style={{ zIndex: 2 }}>
            <div className="row align-items-center g-4">
              {/* Left: Badge, Heading & Subtitle */}
              <div className="col-12 col-lg-8">
                <div
                  className="d-inline-flex align-items-center gap-2 mb-3 px-3 py-1 rounded-pill"
                  style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(255, 255, 255, 0.14)",
                    backdropFilter: "blur(6px)"
                  }}
                >
                  <span
                    className="rounded-circle"
                    style={{
                      width: "8px",
                      height: "8px",
                      backgroundColor: "#38BDF8",
                      boxShadow: "0 0 8px #38BDF8"
                    }}
                  />
                  <span
                    className="font-weight-bold text-uppercase"
                    style={{ fontSize: "0.75rem", letterSpacing: "1.2px", color: "#E2E8F0" }}
                  >
                    INTERNSHIP PROGRAM
                  </span>
                </div>

                <h1
                  className="font-weight-extrabold text-white mb-3"
                  style={{
                    fontSize: "clamp(2.3rem, 4.2vw, 3.5rem)",
                    lineHeight: 1.15,
                    letterSpacing: "-0.5px"
                  }}
                >
                  Start your tech <br />
                  career at <span style={{ color: "#38BDF8" }}>Graytus</span>
                </h1>

                <p
                  className="mb-0"
                  style={{
                    color: "#94A3B8",
                    maxWidth: "540px",
                    fontSize: "1rem",
                    lineHeight: 1.65
                  }}
                >
                  Learn by building. Work with mentors on real product tasks across full stack development, software testing, and UI/UX design.
                </p>
              </div>

              {/* Right: Apply Now Button */}
              <div className="col-12 col-lg-4 text-lg-end">
                <button
                  type="button"
                  onClick={() => openApplyModal("Full Stack Development")}
                  className="btn px-4 py-3 font-weight-bold d-inline-flex align-items-center gap-2 shadow-lg transition-all hover-lift"
                  style={{
                    backgroundColor: "#0866C6",
                    color: "#FFFFFF",
                    borderRadius: "10px",
                    fontSize: "0.96rem",
                    border: "none",
                    cursor: "pointer"
                  }}
                >
                  <span>Apply Now</span>
                  <span style={{ fontSize: "1.1rem" }}>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Overlapping Floating Cards for the 3 Provided Internships (Contained) */}
        <div className="internship-cards-wrap container-fluid px-4 px-lg-5">
          <div className="row g-4 justify-content-center">
            {/* Card 1: Full Stack Development */}
            <div className="col-12 col-md-4">
              <div className="internship-card-item">
                {/* Floating Circular Icon */}
                <div className="internship-card-floating-icon">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>

                <div>
                  <h3
                    className="font-weight-bold text-dark mb-2"
                    style={{ fontSize: "1.2rem", fontWeight: 800, letterSpacing: "-0.2px" }}
                  >
                    Full Stack Development
                  </h3>

                  <p
                    className="text-secondary small mb-4"
                    style={{ lineHeight: 1.65, minHeight: "64px", fontSize: "0.88rem" }}
                  >
                    Build web and mobile apps, integrate databases, APIs and ship real production features with mentors.
                  </p>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() => openApplyModal("Full Stack Development")}
                    className="btn font-weight-bold text-white px-4 py-2"
                    style={{
                      backgroundColor: "#0866C6",
                      borderRadius: "8px",
                      fontSize: "0.82rem",
                      letterSpacing: "0.5px",
                      border: "none",
                      cursor: "pointer"
                    }}
                  >
                    APPLY →
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: Software Testing */}
            <div className="col-12 col-md-4">
              <div className="internship-card-item">
                {/* Floating Circular Icon */}
                <div className="internship-card-floating-icon">
                  <CheckCircle2 size={24} strokeWidth={2.4} />
                </div>

                <div>
                  <h3
                    className="font-weight-bold text-dark mb-2"
                    style={{ fontSize: "1.2rem", fontWeight: 800, letterSpacing: "-0.2px" }}
                  >
                    Software Testing
                  </h3>

                  <p
                    className="text-secondary small mb-4"
                    style={{ lineHeight: 1.65, minHeight: "64px", fontSize: "0.88rem" }}
                  >
                    Execute manual & automated testing, identify bugs, and verify production quality pipelines.
                  </p>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() => openApplyModal("Software Testing")}
                    className="btn font-weight-bold text-white px-4 py-2"
                    style={{
                      backgroundColor: "#0866C6",
                      borderRadius: "8px",
                      fontSize: "0.82rem",
                      letterSpacing: "0.5px",
                      border: "none",
                      cursor: "pointer"
                    }}
                  >
                    APPLY →
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3: UI/UX Designing */}
            <div className="col-12 col-md-4">
              <div className="internship-card-item">
                {/* Floating Circular Icon */}
                <div className="internship-card-floating-icon">
                  <Palette size={22} strokeWidth={2.4} />
                </div>

                <div>
                  <h3
                    className="font-weight-bold text-dark mb-2"
                    style={{ fontSize: "1.2rem", fontWeight: 800, letterSpacing: "-0.2px" }}
                  >
                    UI/UX Designing
                  </h3>

                  <p
                    className="text-secondary small mb-4"
                    style={{ lineHeight: 1.65, minHeight: "64px", fontSize: "0.88rem" }}
                  >
                    Design flows, wireframes and visual systems, then test them with real users.
                  </p>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() => openApplyModal("UI/UX Designing")}
                    className="btn font-weight-bold text-white px-4 py-2"
                    style={{
                      backgroundColor: "#0866C6",
                      borderRadius: "8px",
                      fontSize: "0.82rem",
                      letterSpacing: "0.5px",
                      border: "none",
                      cursor: "pointer"
                    }}
                  >
                    APPLY →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Intern at Graytus ── */}
      <section className="section-padding">
        <div className="container-fluid px-lg-5">
          <div className="text-center mb-5">
            <div className="badge-pill-tag mb-3">WHY INTERN WITH US</div>
            <h2 className="section-title text-dark">
              More Than Just an <span className="text-primary-blue">Internship</span>
            </h2>
            <p className="section-subtitle">
              We invest in your growth with mentorship, real projects, and professional development
              that sets you apart from the crowd.
            </p>
          </div>

          <div className="row g-4">
            {WHY_INTERN.map((item, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-3">
                <motion.div {...fadeUp(i * 0.1)} className="gt-card p-4 text-center h-100">
                  <div className="bg-primary-blue-light text-primary-blue p-3 rounded-circle d-inline-flex mb-3">
                    <item.icon size={32} />
                  </div>
                  <h3 className="h5 font-weight-bold text-dark mb-2">{item.title}</h3>
                  <p className="small text-secondary mb-0">{item.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Available Programs ── */}
      <section className="section-padding bg-alt-light">
        <div className="container-fluid px-lg-5">
          <div className="text-center mb-5">
            <div className="badge-pill-tag mb-3">OPEN POSITIONS</div>
            <h2 className="section-title text-dark">
              Internship <span className="text-primary-blue">Programs</span>
            </h2>
            <p className="section-subtitle">
              Choose the domain that excites you. Each program is designed to give you practical,
              industry-ready skills.
            </p>
          </div>

          <div className="row g-4">
            {INTERNSHIP_PROGRAMS.map((prog, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-4">
                <motion.div {...fadeUp(i * 0.08)} className="gt-card p-4 h-100 d-flex flex-column">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="bg-primary-blue-light text-primary-blue p-3 rounded-circle d-inline-flex flex-shrink-0">
                      <prog.icon size={24} />
                    </div>
                    <h3 className="h5 font-weight-bold text-dark mb-0">{prog.title}</h3>
                  </div>

                  <p className="small text-secondary mb-3" style={{ lineHeight: 1.7 }}>
                    {prog.description}
                  </p>

                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {prog.skills.map((skill, si) => (
                      <span
                        key={si}
                        className="badge rounded-pill"
                        style={{
                          backgroundColor: "var(--color-primary-blue-light)",
                          color: "var(--color-primary-blue)",
                          fontWeight: 500,
                          fontSize: "0.72rem",
                          padding: "5px 12px",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-3 border-top d-flex flex-wrap gap-3 small text-secondary">
                    <span className="d-flex align-items-center gap-1">
                      <Clock size={14} className="text-primary-blue" /> {prog.duration}
                    </span>
                    <span className="d-flex align-items-center gap-1">
                      <MapPin size={14} className="text-primary-blue" /> {prog.mode}
                    </span>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works / Process ── */}
      <section className="section-padding">
        <div className="container-fluid px-lg-5">
          <div className="text-center mb-5">
            <div className="badge-pill-tag mb-3">HOW IT WORKS</div>
            <h2 className="section-title text-dark">
              Your Journey from <span className="text-primary-blue">Application to Certification</span>
            </h2>
            <p className="section-subtitle">
              A structured, transparent process designed to make your internship experience smooth
              and rewarding.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8">
              {PROCESS_STEPS.map((step, i) => (
                <motion.div
                  key={i}
                  {...fadeUp(i * 0.1)}
                  className="d-flex gap-3 gap-md-4 mb-4 pb-4"
                  style={{ borderBottom: i < PROCESS_STEPS.length - 1 ? "1px solid var(--color-border)" : "none" }}
                >
                  {/* Step Number */}
                  <div
                    className="d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle font-weight-extrabold"
                    style={{
                      width: 52,
                      height: 52,
                      backgroundColor: "var(--color-primary-blue)",
                      color: "#FFFFFF",
                      fontSize: "1.1rem",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <h3 className="h5 font-weight-bold text-dark mb-1">{step.title}</h3>
                    <p className="small text-secondary mb-0" style={{ lineHeight: 1.7 }}>
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Eligibility Section ── */}
      <section className="section-padding bg-alt-light border-top border-bottom">
        <div className="container-fluid px-lg-5">
          <div className="row g-5 align-items-center">
            {/* Left Column: Heading & Value Proposition */}
            <div className="col-12 col-lg-5">
              <motion.div {...fadeUp()}>
                <div className="badge-pill-tag mb-3">ELIGIBILITY CRITERIA</div>
                <h2 className="section-title text-dark">
                  Who Can <span className="text-primary-blue">Apply?</span>
                </h2>
                <p className="section-subtitle ms-0 mb-4" style={{ fontSize: "1.05rem", lineHeight: 1.75 }}>
                  We welcome ambitious students and fresh graduates who want to bridge the gap between college theory and enterprise software engineering.
                </p>

                {/* Key Highlights Checkmarks */}
                <div className="d-flex flex-column gap-3 mb-4">
                  {[
                    "Zero prior professional experience required",
                    "Flexible 100% Remote or Hybrid offline options",
                    "College NOC, bonafide & final project report support",
                    "Officially verified Certificate & Letter of Recommendation"
                  ].map((pt, i) => (
                    <div key={i} className="d-flex align-items-center gap-3">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                        style={{
                          width: "28px",
                          height: "28px",
                          backgroundColor: "#EBF4FC",
                          color: "#0866C6"
                        }}
                      >
                        <CheckCircle2 size={16} />
                      </div>
                      <span className="small text-dark font-weight-medium" style={{ fontSize: "0.95rem" }}>
                        {pt}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => openApplyModal()}
                  className="btn btn-primary-gt px-4 py-3 d-inline-flex align-items-center gap-2"
                  style={{
                    backgroundColor: "#0866C6",
                    borderColor: "#0866C6",
                    fontWeight: 600,
                    cursor: "pointer"
                  }}
                >
                  <span>Apply for Internship</span>
                  <ChevronRight size={18} />
                </button>
              </motion.div>
            </div>

            {/* Right Column: 6 Structured Eligibility Cards */}
            <div className="col-12 col-lg-7">
              <div className="row g-3">
                {ELIGIBILITY_CRITERIA.map((crit, i) => {
                  const IconComp = crit.icon;
                  return (
                    <div key={i} className="col-12 col-sm-6">
                      <motion.div
                        {...fadeUp(i * 0.05)}
                        className="gt-card p-4 h-100 bg-white rounded-4 border shadow-sm transition-all hover-lift"
                        style={{
                          borderColor: "#E5E7EB",
                          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
                        }}
                      >
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <div
                            className="rounded-3 d-flex align-items-center justify-content-center"
                            style={{
                              width: "44px",
                              height: "44px",
                              backgroundColor: "#EBF4FC",
                              color: "#0866C6"
                            }}
                          >
                            <IconComp size={22} />
                          </div>
                          <span
                            className="badge px-2.5 py-1 rounded-pill"
                            style={{
                              backgroundColor: "rgba(8, 102, 198, 0.08)",
                              color: "#0866C6",
                              fontSize: "0.75rem",
                              fontWeight: 600
                            }}
                          >
                            {crit.badge}
                          </span>
                        </div>

                        <h3 className="h6 font-weight-bold text-dark mb-2" style={{ fontWeight: 700, fontSize: "1rem" }}>
                          {crit.title}
                        </h3>
                        <p className="small text-secondary mb-0" style={{ lineHeight: 1.65, fontSize: "0.88rem" }}>
                          {crit.detail}
                        </p>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Apply Now Section ── */}
      <section id="apply-now" className="section-padding">
        <div className="container-fluid px-lg-5">
          <motion.div
            {...fadeUp()}
            className="position-relative overflow-hidden rounded-5 p-4 p-md-5 text-center text-white mx-auto"
            style={{
              maxWidth: "900px",
              background: "linear-gradient(135deg, #0866C6 0%, #0652A0 50%, #0A1128 100%)",
            }}
          >
            <div className="position-relative" style={{ zIndex: 2 }}>
              <GraduationCap size={48} className="mb-3 opacity-75" />
              <h2 className="display-6 font-weight-extrabold text-white mb-3">
                Ready to Start Your Journey?
              </h2>
              <p className="lead opacity-90 mb-4 mx-auto" style={{ maxWidth: "560px" }}>
                Send us your resume and area of interest. We'll get back to you within 48 hours.
              </p>
              <div className="d-flex flex-wrap align-items-center justify-content-center gap-3">
                <button
                  type="button"
                  onClick={() => openApplyModal()}
                  className="btn rounded-pill px-4 py-3 font-weight-bold shadow-lg hover-lift d-inline-flex align-items-center gap-2"
                  style={{
                    backgroundColor: "#FFFFFF",
                    color: "var(--color-primary-blue)",
                    border: "none",
                    cursor: "pointer"
                  }}
                >
                  <span>Apply Now</span>
                  <ChevronRight size={16} />
                </button>
                <a
                  href={`mailto:${COMPANY_INFO.email}?subject=Internship Application — Graytus Technologies`}
                  className="btn rounded-pill px-4 py-3 font-weight-bold hover-lift"
                  style={{
                    backgroundColor: "transparent",
                    color: "#FFFFFF",
                    border: "2px solid rgba(255,255,255,0.4)",
                  }}
                >
                  Email Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Internship Application Form Modal ── */}
      <InternshipApplyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialProgram={selectedProgram}
      />

      {/* ── CTA Banner ── */}
      <CTASection
        title="Have Questions About Our Internship?"
        subtitle="Reach out to our team and we'll help you find the right program for your career goals."
        buttonText="Contact Us"
      />
    </>
  );
}

