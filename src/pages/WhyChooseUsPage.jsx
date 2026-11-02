import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../components/SEO";
import ServiceGrid from "../components/ServiceGrid";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import ProcessSection from "../components/ProcessSection";
import CTASection from "../components/CTASection";
import {
  SERVICES_NAV,
  INDUSTRIES,
  COMPANY_INFO
} from "../data/siteData";
import whyVideo from "../assets/video/v1.mp4";
import whyImg from "../assets/whchoose/why.png";
import {
  Zap,
  ShieldCheck,
  Lock,
  Users,
  CheckCircle2,
  Clock,
  Headphones,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Activity,
  CreditCard,
  ShoppingBag,
  Building2,
  Truck,
  GraduationCap,
  Film,
  Layers,
  Check,
  X,
  Sparkles,
  Award,
  Code2,
  TrendingUp,
  Cpu,
  Globe,
  ExternalLink,
  HelpCircle,
  Briefcase,
  Rocket,
  Wallet,
  Home,
  Dumbbell,
  Plane
} from "lucide-react";

const INDUSTRY_ICON_MAP = {
  Building2,
  Briefcase,
  Home,
  Activity,
  Dumbbell,
  GraduationCap,
  Globe,
  Plane,
  Film,
  CreditCard,
  ShoppingBag,
  Truck,
  Layers
};

const KEY_BENEFITS = [
  {
    step: "01",
    icon: Rocket,
    title: "01. Agile & Flexible Development",
    desc: "We follow a flexible development approach to adapt to your business needs and turn ideas into digital solutions.",
    tag: "Flexible Approach"
  },
  {
    step: "02",
    icon: Code2,
    title: "02. Modern Technology Solutions",
    desc: "We use suitable modern technologies to build responsive websites, mobile apps, and scalable software tailored to your requirements.",
    tag: "Modern Development"
  },
  {
    step: "03",
    icon: ShieldCheck,
    title: "03. Security-Conscious Development",
    desc: "We follow appropriate coding practices and testing to help build reliable, maintainable, and secure digital products.",
    tag: "Quality-Focused"
  },
  {
    step: "04",
    icon: Users,
    title: "04. Dedicated Team Collaboration",
    desc: "Our team works closely with clients to understand requirements, share progress, and develop solutions aligned with their goals.",
    tag: "Client-Focused"
  },
  {
    step: "05",
    icon: Wallet,
    title: "05. Budget-Friendly Solutions",
    desc: "We help startups and growing businesses find practical digital solutions that fit their requirements and budget.",
    tag: "Value-Driven"
  },
  {
    step: "06",
    icon: TrendingUp,
    title: "06. Built for Future Growth",
    desc: "From websites and mobile apps to SaaS, ERP, eCommerce, and hospitality solutions, we build with future business needs in mind.",
    tag: "Growth-Oriented"
  }
];

const COMPARISON_DATA = [
  {
    feature: "Source Code & IP Ownership",
    graytus: "100% Full Legal Ownership Day 1",
    traditional: "Retained or charged extra exit fee",
    freelancers: "Ambiguous ownership / IP disputes"
  },
  {
    feature: "Team Composition",
    graytus: "Dedicated senior architects & engineers",
    traditional: "Junior devs with high turnover",
    freelancers: "Unvetted individual contractors"
  },
  {
    feature: "Development Velocity",
    graytus: "2-week agile sprints with live demos",
    traditional: "Rigid 6-month waterfall delays",
    freelancers: "Inconsistent timelines & ghosting"
  },
  {
    feature: "Communication & Access",
    graytus: "Direct Slack, Jira & GitHub access",
    traditional: "Filtered through non-technical managers",
    freelancers: "Sporadic or unorganized updates"
  },
  {
    feature: "Architecture & Security",
    graytus: "Cloud-native, OWASP & SOC2 ready",
    traditional: "Bloated legacy monolithic templates",
    freelancers: "Basic security with minimal testing"
  },
  {
    feature: "Post-Launch SLA Support",
    graytus: "24/7 telemetry & guaranteed SLA",
    traditional: "Expensive ad-hoc support billings",
    freelancers: "Unavailable once project ends"
  }
];

const FAQS_LIST = [
  {
    q: "Why should we choose Graytus Technologies over hiring an in-house team?",
    a: "Building an in-house engineering team typically requires 3 to 6 months of recruiting, substantial salary and benefits overhead, and ongoing management complexity. Partnering with Graytus gives you an immediate, battle-tested team of senior engineers, DevOps architects, and UX specialists ready to start on day one at a predictable cost."
  },
  {
    q: "Do we retain 100% legal ownership of the source code and designs?",
    a: "Yes, 100%. Upon delivery and milestone completion, all source code, Figma design files, database architectures, and intellectual property rights are legally transferred to your organization with zero vendor lock-in or recurring proprietary license fees."
  },
  {
    q: "How do you guarantee on-time delivery without compromising code quality?",
    a: "We practice strict Agile methodology with bi-weekly sprint cycles. Every sprint concludes with a live video demonstration of functional features. We utilize automated CI/CD testing, peer code reviews, and end-to-end device audits to ensure zero regressions before release."
  },
  {
    q: "How does day-to-day communication and progress tracking work?",
    a: "Transparency is our core standard. You receive direct access to your dedicated engineering team on Slack, daily asynchronous progress updates, sprint boards in Jira or Trello, and weekly roadmap synchronization calls. No middlemen or bureaucratic barriers."
  },
  {
    q: "What engagement models do you offer (Dedicated Team vs. Fixed Price)?",
    a: "We offer flexible models tailored to your requirements: Dedicated Team / Staff Augmentation for long-term product roadmaps, and Milestone-based Fixed Scope for well-defined MVPs or enterprise platforms with clear deliverables."
  },
  {
    q: "What does your post-launch SLA maintenance and support include?",
    a: "We offer proactive post-launch SLA packages including 24/7 server uptime telemetry, automated cloud backups, security vulnerability patches, framework updates, and rapid bug resolution to ensure your application runs flawlessly."
  }
];

export default function WhyChooseUsPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <SEO
        title="Why Choose Graytus Technologies | Enterprise Digital Engineering"
        description="Discover why leading enterprises and ambitious startups choose Graytus Technologies for custom software, web platforms, mobile apps, and scalable digital solutions."
      />

      {/* =========================================================================
          1. HERO SECTION – Why Choose Graytus Technologies?
         ========================================================================= */}
      <header id="hero-why-choose" className="py-5 border-bottom position-relative overflow-hidden" style={{ backgroundColor: "#FFFFFF" }}>
        {/* Subtle Background Glow */}
        <div
          className="position-absolute top-0 end-0 rounded-circle"
          style={{
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(8, 102, 198, 0.08) 0%, rgba(8, 102, 198, 0) 70%)",
            filter: "blur(60px)",
            pointerEvents: "none"
          }}
        />

        <div className="container-fluid px-lg-5 py-lg-4 position-relative">
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="gt-breadcrumb mb-4">
            <Link to="/" className="text-secondary text-decoration-none">Home</Link>
            <ChevronRight size={14} className="mx-1 text-muted" />
            <span className="text-dark font-weight-bold">Why Choose Us</span>
          </nav>

          <div className="row g-5 align-items-center">
            {/* Left Column: Heading & Value Proposition */}
            <div className="col-12 col-lg-6">
              {/* Trust Badges Pill */}
              <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
                <span className="badge-pill-tag bg-primary-blue-light text-primary-blue d-inline-flex align-items-center gap-1">
                  <Sparkles size={14} />
                  OUR ADVANTAGE
                </span>
                <span className="badge-pill-tag bg-emerald-light text-emerald-dark d-inline-flex align-items-center gap-1">
                  <Clock size={14} />
                  100% On-Time Delivery
                </span>
                <span className="badge-pill-tag bg-purple-light text-purple-dark d-inline-flex align-items-center gap-1">
                  <ShieldCheck size={14} />
                  100% IP Code Ownership
                </span>
              </div>

              <h1 className="display-4 font-weight-extrabold text-dark mb-3" style={{ letterSpacing: "-1.5px", fontWeight: 800 }}>
                Why Choose <span className="text-primary-blue">Graytus Technologies?</span>
              </h1>

              <p className="lead text-secondary mb-4" style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
                We engineer scalable digital solutions that help businesses grow, innovate, and stay competitive. From web and app development to custom software, SaaS, ERP, eCommerce, and hospitality solutions, we deliver technology tailored to your business goals.
              </p>

              {/* Quick Key Trust Metric Points */}
              <div className="row g-3 mb-4">
                <div className="col-12 col-sm-6">
                  <div className="d-flex align-items-start gap-2">
                    <CheckCircle2 size={18} className="text-primary-blue flex-shrink-0 mt-1" />
                    <span className="small text-dark font-weight-semibold">
                      Transparent workflows and regular progress updates.
                    </span>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="d-flex align-items-start gap-2">
                    <CheckCircle2 size={18} className="text-primary-blue flex-shrink-0 mt-1" />
                    <span className="small text-dark font-weight-semibold">
                    Reliable, maintainable, high-quality code.
                    </span>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="d-flex align-items-start gap-2">
                    <CheckCircle2 size={18} className="text-primary-blue flex-shrink-0 mt-1" />
                    <span className="small text-dark font-weight-semibold">
                      Technology designed for future growth.
                    </span>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="d-flex align-items-start gap-2">
                    <CheckCircle2 size={18} className="text-primary-blue flex-shrink-0 mt-1" />
                    <span className="small text-dark font-weight-semibold">
                      Clear communication and customized solutions.
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="d-flex flex-wrap gap-3 pt-2">
                <Link to="/contact" id="btn-hero-quote" className="btn btn-primary-gt px-4 py-3">
                  <span>Get Free Project Estimate</span>
                  <ArrowRight size={18} />
                </Link>
                <a href="#key-benefits" id="btn-hero-explore" className="btn btn-outline-gt px-4 py-3">
                  Explore Our Advantages
                </a>
              </div>
            </div>

            {/* Right Column: Hero Visual Image - Seamless Floating Illustration */}
            <div className="col-12 col-lg-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="d-flex align-items-center justify-content-center p-2"
              >
                <video
                  src={whyVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  ref={(el) => {
                    if (el) {
                      el.muted = true;
                      el.play().catch(() => {});
                    }
                  }}
                  className="w-100 h-auto object-fit-contain border-0 shadow-none"
                  style={{
                    maxHeight: "540px",
                    mixBlendMode: "multiply",
                    backgroundColor: "transparent"
                  }}
                />
              </motion.div>
            </div>
          </div>

          {/* Quick Metrics Trust Strip Below Hero */}
          <div className="mt-5 pt-4 border-top">
            <div className="row g-3 text-center">
              <div className="col-6 col-md-3">
                <div className="p-3 bg-white rounded-3 border shadow-sm">
                  <div className="h3 font-weight-extrabold text-primary-blue mb-1" style={{ fontWeight: 800 }}>
                    3
                  </div>
                  <div className="small text-secondary font-weight-semibold">Projects Delivered</div>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="p-3 bg-white rounded-3 border shadow-sm">
                  <div className="h3 font-weight-extrabold text-emerald-dark mb-1" style={{ fontWeight: 800 }}>
                    99.9%
                  </div>
                  <div className="small text-secondary font-weight-semibold">Uptime Reliability</div>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="p-3 bg-white rounded-3 border shadow-sm">
                  <div className="h3 font-weight-extrabold text-dark mb-1" style={{ fontWeight: 800 }}>
                    3x
                  </div>
                  <div className="small text-secondary font-weight-semibold">Faster Time-to-Market</div>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="p-3 bg-white rounded-3 border shadow-sm">
                  <div className="h3 font-weight-extrabold text-primary-blue mb-1" style={{ fontWeight: 800 }}>
                    100%
                  </div>
                  <div className="small text-secondary font-weight-semibold">Source Code Rights</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* =========================================================================
          2. KEY BENEFITS – 4 to 6 Icon Cards
         ========================================================================= */}
      <section id="key-benefits" className="section-padding bg-white border-bottom">
        <div className="container-fluid px-lg-5">
          <div className="text-center mb-5">
            <div className="badge-pill-tag mb-3">KEY BENEFITS</div>
            <h2 className="section-title text-dark">
              Measurable Advantages That Drive <span className="text-primary-blue">Real Business Growth</span>
            </h2>
            <p className="section-subtitle mx-auto" style={{ maxWidth: "760px" }}>
              We focus on understanding business needs, using suitable technologies, and engineering dependable digital solutions.
            </p>
          </div>

          <div className="row g-4">
            {KEY_BENEFITS.map((benefit, idx) => {
              const IconComp = benefit.icon;
              return (
                <div key={idx} className="col-12 col-md-6 col-lg-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    whileHover={{ y: -6 }}
                    className="gt-card p-4 h-100 d-flex flex-column justify-content-between transition-all"
                    style={{
                      border: "1px solid #E2E8F0",
                      borderRadius: "16px",
                      boxShadow: "0 4px 14px rgba(0, 0, 0, 0.04)"
                    }}
                  >
                    <div>
                      {/* Top Icon Badge & Step */}
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div
                          className="bg-primary-blue-light text-primary-blue p-3 rounded-3 d-inline-flex align-items-center justify-content-center shadow-sm"
                          style={{ width: "52px", height: "52px" }}
                        >
                          <IconComp size={24} />
                        </div>
                        <span className="badge bg-light text-primary-blue border px-3 py-1 rounded-pill small font-weight-bold">
                          {benefit.step}
                        </span>
                      </div>

                      <h3 className="h5 font-weight-bold text-dark mb-2" style={{ fontWeight: 700 }}>
                        {benefit.title}
                      </h3>
                      <p className="text-secondary small mb-0" style={{ lineHeight: "1.65" }}>
                        {benefit.desc}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-top d-flex align-items-center text-primary-blue small font-weight-bold gap-1">
                      <span>{benefit.tag}</span>
                      <Check size={16} />
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. OUR CORE SERVICES
         ========================================================================= */}
      <section id="core-services" className="section-padding bg-alt-light border-bottom">
        <div className="container-fluid px-lg-5">
          <div className="d-flex flex-column flex-lg-row align-items-lg-end justify-content-between mb-5 gap-3">
            <div>
              <div className="badge-pill-tag mb-3">OUR CORE SERVICES</div>
              <h2 className="section-title text-dark mb-2">
                Full-Lifecycle <span className="text-primary-blue">Engineering Capabilities</span>
              </h2>
              <p className="section-subtitle mb-0" style={{ maxWidth: "700px" }}>
                From high-throughput web portals and mobile apps to custom enterprise SaaS platforms and ERP suites.
              </p>
            </div>
            <Link to="/services" className="btn btn-outline-gt px-4 py-2 align-self-start align-self-lg-center">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>

          {/* JPLoft Style 4-Category Services Cards */}
          <ServiceGrid services={SERVICES_NAV} />
        </div>
      </section>

      {/* =========================================================================
          4. WHAT MAKES US DIFFERENT? (Comparison Matrix + Interactive Strengths)
         ========================================================================= */}
      <section id="what-makes-us-different" className="section-padding bg-white border-bottom">
        <div className="container-fluid px-lg-5">
          <div className="text-center mb-5">
            <div className="badge-pill-tag mb-3">THE GRAYTUS ADVANTAGE</div>
            <h2 className="section-title text-dark">
              What Makes Us <span className="text-primary-blue">Different?</span>
            </h2>
            <p className="section-subtitle mx-auto" style={{ maxWidth: "760px" }}>
              See how our engineering-first culture, strict accountability, and transparent communication compare against traditional software agencies and freelance marketplaces.
            </p>
          </div>

          {/* Comparison Matrix Table */}
          <div className="table-responsive rounded-4 border shadow-sm mb-5 bg-white">
            <table className="table table-hover align-middle mb-0" style={{ minWidth: "750px" }}>
              <thead style={{ backgroundColor: "#F1F5F9" }}>
                <tr>
                  <th scope="col" className="p-4 text-dark font-weight-bold" style={{ width: "28%" }}>
                    Key Evaluation Factor
                  </th>
                  <th scope="col" className="p-4 text-primary-blue font-weight-extrabold bg-primary-blue-light" style={{ width: "32%" }}>
                    <div className="d-flex align-items-center gap-2">
                      <Sparkles size={18} />
                      <span>Graytus Technologies</span>
                    </div>
                  </th>
                  <th scope="col" className="p-4 text-secondary font-weight-semibold" style={{ width: "20%" }}>
                    Traditional Agencies
                  </th>
                  <th scope="col" className="p-4 text-secondary font-weight-semibold" style={{ width: "20%" }}>
                    Freelance Platforms
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_DATA.map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 font-weight-bold text-dark">
                      {row.feature}
                    </td>
                    <td className="p-4 bg-primary-blue-light text-dark font-weight-semibold">
                      <div className="d-flex align-items-start gap-2">
                        <CheckCircle2 size={18} className="text-primary-blue flex-shrink-0 mt-1" />
                        <span>{row.graytus}</span>
                      </div>
                    </td>
                    <td className="p-4 text-secondary small">
                      <div className="d-flex align-items-start gap-2">
                        <X size={16} className="text-danger flex-shrink-0 mt-1" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className="p-4 text-secondary small">
                      <div className="d-flex align-items-start gap-2">
                        <X size={16} className="text-danger flex-shrink-0 mt-1" />
                        <span>{row.freelancers}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Interactive 8 Core Differences Component */}
      <WhyChooseUsSection />

      {/* =========================================================================
          5. OUR DEVELOPMENT PROCESS
         ========================================================================= */}
      <div id="development-process">
        <ProcessSection />
      </div>

      {/* =========================================================================
          6. INDUSTRY-SPECIFIC SOLUTIONS
         ========================================================================= */}
      <section id="industry-solutions" className="section-padding bg-white border-top border-bottom">
        <div className="container-fluid px-lg-5">
          <div className="text-center mb-5">
            <div className="badge-pill-tag mb-3">DOMAINS WE SERVE</div>
            <h2 className="section-title text-dark">
              Industry-Specific <span className="text-primary-blue">Digital Solutions</span>
            </h2>
            <p className="section-subtitle mx-auto" style={{ maxWidth: "760px" }}>
              Every industry has distinct regulatory requirements, user behaviors, and data compliance standards. We engineer specialized architectures tailored to your sector.
            </p>
          </div>

          <div className="row g-4">
            {INDUSTRIES.map((ind, idx) => {
              const IconComp = INDUSTRY_ICON_MAP[ind.icon] || Globe;
              return (
                <div key={idx} className="col-12 col-sm-6 col-lg-3">
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                    whileHover={{ y: -5 }}
                    className="gt-card p-4 h-100 d-flex flex-column justify-content-between transition-all"
                    style={{
                      border: "1px solid #E2E8F0",
                      borderRadius: "14px"
                    }}
                  >
                    <div>
                      <div className="bg-primary-blue-light text-primary-blue p-3 rounded-3 d-inline-flex mb-3">
                        <IconComp size={24} />
                      </div>
                      <h3 className="h6 font-weight-bold text-dark mb-2" style={{ fontWeight: 700 }}>
                        {ind.name}
                      </h3>
                      <p className="small text-secondary mb-0" style={{ lineHeight: "1.6" }}>
                        {ind.desc}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-top">
                      <Link to="/contact" className="small text-primary-blue font-weight-bold text-decoration-none d-flex align-items-center gap-1 hover-underline">
                        <span>Consult Specialist</span>
                        <ChevronRight size={14} />
                      </Link>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>



      {/* =========================================================================
          8. FAQS (Frequently Asked Questions)
         ========================================================================= */}
      <section id="faqs-section" className="section-padding bg-white border-bottom">
        <div className="container-fluid px-lg-5">
          <div className="text-center mb-5">
            <div className="badge-pill-tag mb-3">CLEAR ANSWERS</div>
            <h2 className="section-title text-dark">
              Frequently Asked <span className="text-primary-blue">Questions</span>
            </h2>
            <p className="section-subtitle mx-auto" style={{ maxWidth: "720px" }}>
              Got questions before partnering with us? Here are clear, upfront answers regarding our IP rights, delivery schedules, and technical standards.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 col-lg-9 col-xl-8">
              <div className="d-flex flex-column gap-3">
                {FAQS_LIST.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="border rounded-4 transition-all overflow-hidden"
                      style={{
                        borderColor: isOpen ? "#0866C6" : "#E2E8F0",
                        boxShadow: isOpen ? "0 8px 24px rgba(8, 102, 198, 0.08)" : "none"
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-100 p-4 text-start bg-white border-0 d-flex align-items-center justify-content-between gap-3"
                        style={{ cursor: "pointer" }}
                      >
                        <span className="font-weight-bold text-dark h6 mb-0" style={{ fontWeight: 700 }}>
                          {faq.q}
                        </span>
                        <div
                          className={`p-2 rounded-circle flex-shrink-0 transition-all ${
                            isOpen ? "bg-primary-blue text-white" : "bg-light text-secondary"
                          }`}
                        >
                          <ChevronDown
                            size={18}
                            style={{
                              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                              transition: "transform 0.25s ease"
                            }}
                          />
                        </div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                          >
                            <div className="px-4 pb-4 pt-1 text-secondary small border-top" style={{ lineHeight: "1.7", backgroundColor: "#F8FAFC" }}>
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* Still have questions note */}
              <div className="text-center mt-4 pt-3">
                <span className="text-secondary small">Have a specific architectural or security question? </span>
                <Link to="/contact" className="text-primary-blue font-weight-bold text-decoration-none small hover-underline">
                  Talk directly with our solutions architect &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. CONTACT CTA
         ========================================================================= */}
      <div id="contact-cta">
        <CTASection />
      </div>
    </>
  );
}
