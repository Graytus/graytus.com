import React, { useState } from "react";
import portfolioHeroImg from "../assets/portfolio/portfolio.png";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import PortfolioGrid from "../components/PortfolioGrid";
import CTASection from "../components/CTASection";
import { BLOG_POSTS } from "../data/blogPosts";
import {
  ArrowRight,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  Code2,
  Layers,
  Smartphone,
  Database,
  Palette,
  ShieldCheck,
  Cpu,
  Sparkles,
  Compass,
  FileCheck2,
  Rocket,
  Headphones,
  Check,
  TrendingUp,
  Server,
  MonitorSmartphone,
  Workflow
} from "lucide-react";

export default function PortfolioPage() {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const elem = document.getElementById("featured-projects");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 6 Verified Capability Groups for Section 5
  const capabilityGroups = [
    {
      id: "frontend",
      title: "Frontend Development",
      icon: Code2,
      desc: "Responsive, modular user interfaces built with modern component architectures and accessible layouts.",
      techs: ["React.js", "JavaScript (ES6+)", "Bootstrap 5", "HTML5 & CSS3", "Vite", "Responsive Design"]
    },
    {
      id: "backend",
      title: "Backend Development and API Integration",
      icon: Server,
      desc: "High-throughput asynchronous servers, secure RESTful APIs, and scalable microservice architectures.",
      techs: ["Node.js", "Express.js", "Python", "RESTful APIs", "JWT Security", "WebSockets"]
    },
    {
      id: "mobile",
      title: "Mobile App Development",
      icon: Smartphone,
      desc: "Native-grade cross-platform mobile apps for iOS and Android engineered for performance and offline reliability.",
      techs: ["Flutter", "Dart", "Firebase", "SQLite", "Mobile UX", "Push Notifications"]
    },
    {
      id: "database-cloud",
      title: "Database and Cloud Solutions",
      icon: Database,
      desc: "Resilient relational databases, scalable NoSQL document stores, and automated cloud deployments.",
      techs: ["PostgreSQL", "MongoDB", "Redis", "AWS Cloud", "Docker", "Data Integrity"]
    },
    {
      id: "uiux",
      title: "UI/UX Design",
      icon: Palette,
      desc: "Human-centered digital interfaces, structured design systems, and intuitive user journey prototypes.",
      techs: ["Wireframing", "Interactive Prototyping", "Design Systems", "Usability Testing", "Accessibility"]
    },
    {
      id: "qa-devops",
      title: "Testing, Deployment, and Maintenance",
      icon: ShieldCheck,
      desc: "Rigorous quality assurance, performance optimization, secure release pipelines, and proactive support.",
      techs: ["Cross-Browser QA", "Core Web Vitals", "Security Auditing", "SSL Hardening", "Continuous Support"]
    }
  ];

  // 5 Step Development Process for Section 6
  const processSteps = [
    {
      step: "01",
      title: "Discover & Plan",
      desc: "Understand the business objectives, audience, requirements, and project scope.",
      icon: Compass
    },
    {
      step: "02",
      title: "Design & Prototype",
      desc: "Create intuitive interfaces and user journeys based on project needs.",
      icon: Palette
    },
    {
      step: "03",
      title: "Develop & Integrate",
      desc: "Build the required functionality and integrate relevant systems.",
      icon: Code2
    },
    {
      step: "04",
      title: "Test & Optimize",
      desc: "Evaluate functionality, responsiveness, usability, and performance.",
      icon: ShieldCheck
    },
    {
      step: "05",
      title: "Deploy & Support",
      desc: "Launch the solution and provide support according to the agreed service scope.",
      icon: Rocket
    }
  ];

  // Value Pillars for Section 7
  const whyChoosePillars = [
    {
      title: "Business-First Development",
      desc: "We understand your operational goals and engineer digital solutions designed around your workflows, customers, and business model.",
      icon: TrendingUp
    },
    {
      title: "End-to-End Execution",
      desc: "From initial discovery and UI prototyping to full-stack engineering, cloud deployment, and maintenance, everything is handled under one roof.",
      icon: Workflow
    },
    {
      title: "Modern, Scalable Architecture",
      desc: "We build using proven, battle-tested modern technologies like React, Node.js, and Flutter to guarantee long-term stability and easy scaling.",
      icon: Cpu
    },
    {
      title: "Transparent Collaboration",
      desc: "Direct communication, scheduled milestone demos, and clear documentation ensure you are always in complete control of project progress.",
      icon: FileCheck2
    },
    {
      title: "Rigorous Usability & Quality",
      desc: "Every screen is optimized for mobile responsiveness, accessibility, intuitive navigation, and high Core Web Vitals speed scores.",
      icon: MonitorSmartphone
    },
    {
      title: "Ongoing Support & Evolution",
      desc: "Our commitment extends post-launch with proactive maintenance, security patches, and incremental feature updates as your business scales.",
      icon: Headphones
    }
  ];

  const [openFaq, setOpenFaq] = useState(0);

  const portfolioFaqs = [
    {
      q: "How long does a typical project take from concept to deployment?",
      a: "Standard corporate websites usually take 3 to 5 weeks, while comprehensive web applications, mobile apps, or custom ERP systems typically range between 6 to 12 weeks depending on features, integrations, and testing scope."
    },
    {
      q: "Do we own the full source code and intellectual property upon delivery?",
      a: "Yes, 100%. Once project milestones are approved and completed, all source code, design system assets, database schemas, and intellectual property rights are fully transferred to you with zero recurring vendor lock-in."
    },
    {
      q: "Can Graytus build custom workflows not supported by off-the-shelf templates?",
      a: "Yes. Tailored software engineering is our core specialty. We build custom business logic, secure API integrations, role-based workflows, and database models designed specifically around your operational processes."
    },
    {
      q: "How do you handle confidentiality and Non-Disclosure Agreements (NDAs)?",
      a: "We execute strict mutual NDAs before reviewing your project scope, ensuring that your proprietary algorithms, product specifications, and business strategies remain 100% confidential."
    },
    {
      q: "What kind of ongoing maintenance and support do you provide after launch?",
      a: "We offer continuous post-launch SLA support including 24/7 cloud telemetry, automated security patching, performance audits, and scheduled iterative feature releases as your business grows."
    }
  ];

  return (
    <>
      <SEO
        title="Our Portfolio — Digital Solutions That Drive Business Growth | Graytus Technologies"
        description="Explore our portfolio of web development, mobile app development, custom software, SaaS, ERP, eCommerce, and hospitality solutions built by Graytus Technologies."
      />

      {/* =========================================================================
          SECTION 1: PORTFOLIO HERO
          ========================================================================= */}
      <section className="bg-alt-light py-5 border-bottom position-relative overflow-hidden">
        <div className="container-fluid px-lg-5 py-lg-4">
          <div className="row align-items-center g-5">
            {/* Left Column: Heading, Description, Supporting Text, and CTAs */}
            <div className="col-12 col-lg-6">
              <div className="badge-pill-tag mb-3">
                <Sparkles size={14} className="text-primary-blue" />
                <span>OUR WORK / PORTFOLIO</span>
              </div>

              <h1
                className="display-4 font-weight-extrabold text-dark mb-3"
                style={{
                  letterSpacing: "-0.5px",
                  lineHeight: "1.2",
                  fontWeight: 700,
                  fontFamily: "'Plus Jakarta Sans', sans-serif"
                }}
              >
                Our Portfolio — <span className="text-primary-blue">Digital Solutions</span> Built for Business Growth
              </h1>

              <p className="lead text-secondary mb-3" style={{ lineHeight: "1.7", fontSize: "1.15rem" }}>
                Explore the portfolio of Graytus Technologies, showcasing our expertise in website development, mobile app development, custom software development, SaaS applications, ERP systems, eCommerce websites, and hospitality technology solutions.We build modern, responsive, user-friendly, and scalable digital solutions tailored to business needs. 
              </p>

              {/* <p className="text-secondary mb-4" style={{ lineHeight: "1.7", fontSize: "0.98rem" }}>
                From corporate websites and online stores to enterprise software and hospitality technology, our focus is on thoughtful design, functional development, and business-oriented digital experiences.
              </p> */}

              <div className="d-flex flex-wrap gap-3 mb-4">
                <a
                  href="#featured-projects"
                  onClick={scrollToProjects}
                  className="btn-primary-gt shadow-sm"
                  style={{ textDecoration: "none" }}
                >
                  <span>Explore Our Projects</span>
                  <ArrowRight size={18} />
                </a>

                <Link
                  to="/contact"
                  className="btn-outline-gt"
                  style={{ textDecoration: "none" }}
                >
                  <span>Discuss Your Project</span>
                  <ChevronRight size={18} />
                </Link>
              </div>

              {/* Key Trust Highlights */}
              <div className="d-flex flex-wrap gap-4 pt-3 border-top text-secondary small">
                <div className="d-flex align-items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary-blue flex-shrink-0" />
                  <span className="font-weight-semibold">100% Tailored Codebases</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary-blue flex-shrink-0" />
                  <span className="font-weight-semibold">Multi-Industry Experience</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary-blue flex-shrink-0" />
                  <span className="font-weight-semibold">End-to-End Implementation</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Portfolio Image from assets/portfolio (Enlarged & Transparent) */}
            <div className="col-12 col-lg-6 text-center">
              <div className="position-relative mx-auto d-flex align-items-center justify-content-center" style={{ maxWidth: "660px" }}>
                <img
                  src={portfolioHeroImg}
                  alt="Graytus Technologies Portfolio Showcase"
                  className="w-100 h-auto object-fit-contain border-0 shadow-none bg-transparent"
                  style={{ maxHeight: "560px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: PORTFOLIO CATEGORY FILTERS & SECTION 3: FEATURED PROJECTS
          ========================================================================= */}
      <section id="featured-projects" className="section-padding bg-white border-bottom">
        <div className="container-fluid px-lg-5">
          <div className="text-center mb-5">
            <div className="badge-pill-tag mb-3">OUR WORK / PORTFOLIO</div>
            <h2 className="section-title text-dark">
              Featured <span className="text-primary-blue">Projects</span>
            </h2>
            <p className="section-subtitle">
              Discover digital solutions designed around business requirements, usability, and functionality.
            </p>
          </div>

          {/* 3-Column Responsive Grid */}
          <PortfolioGrid showFilters={false} />
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: INDIVIDUAL PROJECT CASE STUDIES CALLOUT & ARCHITECTURAL HIGHLIGHT
          ========================================================================= */}
      <section className="py-5 bg-alt-light border-bottom">
        <div className="container-fluid px-lg-5">
          <div className="p-4 p-md-5 rounded-4 bg-white border border-primary-blue shadow-sm">
            <div className="row align-items-center g-4">
              <div className="col-12 col-lg-8">
                <span className="badge-pill-tag mb-3">STRUCTURED CASE STUDIES</span>
                <h3 className="h3 font-weight-bold text-dark mb-2">
                  Transparent Engineering Documentation for Every Project
                </h3>
                <p className="text-secondary mb-0" style={{ lineHeight: "1.7" }}>
                  Every project in our portfolio includes a dedicated case study page detailing the <strong>project overview</strong>, <strong>client requirements</strong>, <strong>business challenge</strong>, <strong>engineered solution</strong>, <strong>functional features</strong>, and <strong>verified technologies</strong>. Click on any project card above to explore the detailed breakdown.
                </p>
              </div>
              <div className="col-12 col-lg-4 text-lg-end">
                <a 
                  href="#featured-projects" 
                  onClick={scrollToProjects}
                  className="btn btn-outline-gt font-weight-bold"
                >
                  <span>Select a Project to View</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: OUR TECHNOLOGY AND EXPERTISE
          ========================================================================= */}
      <section className="section-padding bg-white border-bottom">
        <div className="container-fluid px-lg-5">
          <div className="text-center mb-5">
            <div className="badge-pill-tag mb-3">CAPABILITIES & STACK</div>
            <h2 className="section-title text-dark">
              Our Technology & <span className="text-primary-blue">Development Expertise</span>
            </h2>
            <p className="section-subtitle">
              At Graytus Technologies, we combine modern development practices, thoughtful design, and business-focused planning to create digital solutions tailored to different industries and requirements.
            </p>
          </div>

          <div className="row g-4">
            {capabilityGroups.map((group) => {
              const IconComp = group.icon;
              return (
                <div key={group.id} className="col-12 col-md-6 col-lg-4">
                  <div className="gt-card h-100 p-4 p-lg-5 d-flex flex-column justify-content-between rounded-4 border shadow-sm">
                    <div>
                      <div className="d-flex align-items-center justify-content-between mb-4">
                        <div 
                          className="d-inline-flex align-items-center justify-content-center rounded-3 bg-primary-blue-light text-primary-blue"
                          style={{ width: "52px", height: "52px" }}
                        >
                          <IconComp size={26} />
                        </div>
                        <span className="badge bg-light text-muted border font-weight-semibold" style={{ fontSize: "0.75rem" }}>
                          Verified Capability
                        </span>
                      </div>

                      <h3 className="h5 font-weight-bold text-dark mb-2" style={{ letterSpacing: "-0.2px" }}>
                        {group.title}
                      </h3>
                      
                      <p className="small text-secondary mb-4" style={{ lineHeight: "1.7" }}>
                        {group.desc}
                      </p>
                    </div>

                    <div>
                      <div className="small font-weight-bold text-muted mb-2 text-uppercase" style={{ fontSize: "0.72rem", letterSpacing: "0.5px" }}>
                        Supported Technologies:
                      </div>
                      <div className="d-flex flex-wrap gap-1">
                        {group.techs.map((t, idx) => (
                          <span 
                            key={idx} 
                            className="badge bg-alt-light text-dark border px-2 py-1 font-weight-medium"
                            style={{ fontSize: "0.76rem" }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: OUR DEVELOPMENT PROCESS (RUNNING ANIMATED CARDS)
          ========================================================================= */}
      <section className="section-padding bg-alt-light border-bottom overflow-hidden position-relative">
        <style>{`
          @keyframes processCardsRun {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .process-cards-marquee-track {
            display: flex;
            gap: 24px;
            width: max-content;
            animation: processCardsRun 28s linear infinite;
          }
          .process-cards-marquee-track:hover {
            animation-play-state: paused;
          }
          .process-running-card {
            width: 320px;
            flex: 0 0 320px;
            background: #ffffff;
            border-radius: 20px;
            border: 1.5px solid #E2E8F0;
            padding: 28px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.04);
            transition: all 0.3s ease;
          }
          .process-running-card:hover {
            transform: translateY(-6px);
            border-color: #0866C6;
            box-shadow: 0 16px 36px rgba(8, 102, 198, 0.12);
          }
        `}</style>
        <div className="container-fluid px-lg-5">
          <div className="text-center mb-5">
            <div className="badge-pill-tag mb-3">HOW WE WORK</div>
            <h2 className="section-title text-dark">
              From Concept <span className="text-primary-blue">to Completion</span>
            </h2>
            <p className="section-subtitle">
              Our continuous, transparent development workflow engineered to turn ideas into scalable digital products.
            </p>
          </div>
        </div>

        {/* Continuous Running Cards Container with Edge Gradients */}
        <div className="position-relative py-3">
          {/* Edge Blur Fades */}
          <div 
            className="position-absolute top-0 bottom-0 start-0 d-none d-md-block" 
            style={{ 
              width: "120px", 
              zIndex: 3, 
              background: "linear-gradient(to right, #F8FAFC, rgba(248, 250, 252, 0))",
              pointerEvents: "none" 
            }} 
          />
          <div 
            className="position-absolute top-0 bottom-0 end-0 d-none d-md-block" 
            style={{ 
              width: "120px", 
              zIndex: 3, 
              background: "linear-gradient(to left, #F8FAFC, rgba(248, 250, 252, 0))",
              pointerEvents: "none" 
            }} 
          />

          {/* Running Track - Duplicated 3 times for seamless infinite run */}
          <div className="process-cards-marquee-track">
            {[...processSteps, ...processSteps, ...processSteps].map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div key={idx} className="process-running-card">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span 
                      className="badge bg-primary-blue text-white px-3 py-2 rounded-pill font-weight-bold"
                      style={{ fontSize: "0.85rem", letterSpacing: "0.5px" }}
                    >
                      Step {step.step}
                    </span>
                    <div 
                      className="d-inline-flex align-items-center justify-content-center rounded-circle bg-light text-primary-blue shadow-sm"
                      style={{ width: "44px", height: "44px" }}
                    >
                      <StepIcon size={22} />
                    </div>
                  </div>

                  <h3 className="h5 font-weight-bold text-dark mb-2" style={{ letterSpacing: "-0.2px" }}>
                    {step.title}
                  </h3>
                  <p className="small text-secondary mb-0" style={{ lineHeight: "1.7" }}>
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-4">
          <span className="small text-muted font-weight-medium">
            💡 Hover over any card to pause the workflow stream
          </span>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: WHY CHOOSE GRAYTUS TECHNOLOGIES?
          ========================================================================= */}
      <section className="section-padding bg-white">
        <div className="container-fluid px-lg-5">
          <div className="text-center mb-5">
            <div className="badge-pill-tag mb-3">THE GRAYTUS ADVANTAGE</div>
            <h2 className="section-title text-dark">
              Technology Solutions Built <span className="text-primary-blue">Around Your Business</span>
            </h2>
            <p className="section-subtitle">
              We focus on understanding business requirements and engineering dependable digital solutions that create measurable value for your operations.
            </p>
          </div>

          {/* Value Proposition Cards */}
          <div className="row g-4 mb-5">
            {whyChoosePillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <div key={idx} className="col-12 col-md-6 col-lg-4">
                  <div className="gt-card p-4 p-lg-5 h-100 rounded-4 border bg-alt-light shadow-sm">
                    <div 
                      className="d-inline-flex align-items-center justify-content-center rounded-3 bg-white text-primary-blue shadow-sm mb-4 border"
                      style={{ width: "48px", height: "48px" }}
                    >
                      <PillarIcon size={24} />
                    </div>
                    <h3 className="h5 font-weight-bold text-dark mb-2">
                      {pillar.title}
                    </h3>
                    <p className="small text-secondary mb-0" style={{ lineHeight: "1.7" }}>
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* =========================================================================
              LATEST ARTICLES SECTION
              ========================================================================= */}
          <div className="my-5 pt-3">
            <div className="d-flex flex-wrap align-items-center justify-content-between mb-4 pb-2 border-bottom">
              <div>
                <div className="badge-pill-tag mb-2">RESOURCES & INSIGHTS</div>
                <h2 className="section-title text-dark mb-0">
                  Latest <span className="text-primary-blue">Articles</span>
                </h2>
              </div>
              <Link to="/blog" className="btn btn-outline-gt btn-sm d-inline-flex align-items-center gap-1 font-weight-bold">
                <span>View All Articles</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="row g-4">
              {BLOG_POSTS.map((article, idx) => (
                <div key={article.slug} className="col-12 col-md-6 col-lg-4">
                  <div className="gt-card h-100 rounded-4 overflow-hidden border bg-white shadow-sm d-flex flex-column hover-lift">
                    <div className="position-relative overflow-hidden" style={{ height: "220px" }}>
                      <img
                        src={article.image}
                        alt={article.alt || article.title}
                        className="w-100 h-100 d-block"
                        style={{ objectFit: "cover" }}
                      />
                      <span
                        className="position-absolute bg-white px-2.5 py-1 rounded-pill small font-weight-bold shadow-sm"
                        style={{ top: "12px", left: "12px", fontSize: "0.75rem", color: "#0057CC" }}
                      >
                        {article.category}
                      </span>
                    </div>
                    <div className="p-4 d-flex flex-column flex-grow-1 justify-content-between">
                      <div>
                        <div className="text-muted small mb-1">{article.date} • {article.readTime}</div>
                        <h3 className="h6 font-weight-bold text-dark mb-2 line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="small text-secondary mb-3 line-clamp-2">
                          {article.description}
                        </p>
                      </div>
                      <div className="pt-2 border-top">
                        <Link to={`/blog/${article.slug}`} className="text-primary-blue font-weight-bold text-decoration-none d-inline-flex align-items-center gap-1 small">
                          <span>Read Article</span>
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* =========================================================================
              FREQUENTLY ASKED QUESTIONS SECTION
              ========================================================================= */}
          <div className="my-5 pt-3">
            <div className="text-center mb-5">
              <div className="badge-pill-tag mb-3">FAQ</div>
              <h2 className="section-title text-dark">
                Frequently Asked <span className="text-primary-blue">Questions</span>
              </h2>
              <p className="section-subtitle">
                Clear answers regarding project timelines, source code ownership, customization capabilities, and ongoing support.
              </p>
            </div>

            <div className="row justify-content-center">
              <div className="col-12 col-lg-9">
                <div className="d-flex flex-column gap-3">
                  {portfolioFaqs.map((faq, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div
                        key={idx}
                        className="bg-alt-light border rounded-4 overflow-hidden transition-all shadow-sm"
                        style={{
                          borderColor: isOpen ? "#0057CC" : "#E2E8F0"
                        }}
                      >
                        <button
                          type="button"
                          className="w-100 p-4 text-start bg-transparent border-0 d-flex align-items-center justify-content-between gap-3 text-dark font-weight-bold"
                          onClick={() => setOpenFaq(isOpen ? null : idx)}
                          style={{
                            fontSize: "1.05rem",
                            cursor: "pointer",
                            color: isOpen ? "#0057CC" : "#0F172A"
                          }}
                        >
                          <span>{faq.q}</span>
                          <ChevronDown
                            size={20}
                            className="flex-shrink-0 text-primary-blue"
                            style={{
                              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                              transition: "transform 0.25s ease"
                            }}
                          />
                        </button>

                        {isOpen && (
                          <div className="px-4 pb-4 pt-1 text-secondary border-top" style={{ lineHeight: "1.7", fontSize: "0.95rem" }}>
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Quote Banner Section directly above Footer */}
      <CTASection />
    </>
  );
}
