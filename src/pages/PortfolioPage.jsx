import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import PortfolioGrid from "../components/PortfolioGrid";
import {
  ArrowRight,
  ChevronRight,
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
            <div className="col-12 col-lg-7">
              <div className="badge-pill-tag mb-3">
                <Sparkles size={14} className="text-primary-blue" />
                <span>OUR WORK / PORTFOLIO</span>
              </div>

              <h1 className="display-4 font-weight-extrabold text-dark mb-3" style={{ letterSpacing: "-0.5px", lineHeight: "1.2" }}>
                Our Portfolio — <span className="text-primary-blue">Digital Solutions</span> That Drive Business Growth
              </h1>

              <p className="lead text-secondary mb-3" style={{ lineHeight: "1.7", fontSize: "1.15rem" }}>
                Explore our portfolio of web development, mobile app development, custom software, SaaS, ERP, eCommerce, and hospitality solutions. At Graytus Technologies, we create user-friendly digital experiences and scalable technology solutions tailored to business needs.
              </p>

              <p className="text-secondary mb-4" style={{ lineHeight: "1.7", fontSize: "0.98rem" }}>
                From corporate websites and online stores to enterprise software and hospitality technology, our focus is on thoughtful design, functional development, and business-oriented digital experiences.
              </p>

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

            {/* Right Column: High-Quality Multi-Mockup Composition */}
            <div className="col-12 col-lg-5">
              <div className="position-relative mx-auto" style={{ maxWidth: "520px" }}>
                {/* Main Desktop Web Card */}
                <div className="bg-white rounded-4 shadow-lg border p-2 overflow-hidden position-relative">
                  <div className="d-flex align-items-center gap-1 px-2 py-1 mb-1 bg-light rounded-2 border-bottom">
                    <span className="rounded-circle bg-danger opacity-75" style={{ width: "8px", height: "8px" }}></span>
                    <span className="rounded-circle bg-warning opacity-75" style={{ width: "8px", height: "8px" }}></span>
                    <span className="rounded-circle bg-success opacity-75" style={{ width: "8px", height: "8px" }}></span>
                    <span className="small text-muted ms-2" style={{ fontSize: "0.7rem" }}>graytustechnologies.com/solutions</span>
                  </div>
                  <img
                    src="/images/projects/web.png"
                    alt="Corporate Web & Software Solutions"
                    className="w-100 rounded-3 object-fit-cover shadow-sm"
                    style={{ height: "230px", objectPosition: "top" }}
                  />
                </div>

                {/* Overlapping Mobile App Mockup Card */}
                <div 
                  className="bg-white rounded-4 shadow-lg border p-2 position-absolute"
                  style={{
                    width: "180px",
                    bottom: "-25px",
                    left: "-20px",
                    zIndex: 3
                  }}
                >
                  <div className="d-flex align-items-center justify-content-between px-2 py-1 mb-1 bg-light rounded-2">
                    <span className="badge bg-primary-blue text-white" style={{ fontSize: "0.6rem" }}>Mobile UI</span>
                    <Smartphone size={12} className="text-primary-blue" />
                  </div>
                  <img
                    src="/images/projects/mba.png"
                    alt="Mobile App Development"
                    className="w-100 rounded-3 object-fit-cover shadow-sm"
                    style={{ height: "135px", objectPosition: "top" }}
                  />
                </div>

                {/* Overlapping SaaS Dashboard Card */}
                <div 
                  className="bg-white rounded-4 shadow-lg border p-2 position-absolute"
                  style={{
                    width: "210px",
                    top: "-20px",
                    right: "-15px",
                    zIndex: 2
                  }}
                >
                  <div className="d-flex align-items-center justify-content-between px-2 py-1 mb-1 bg-light rounded-2">
                    <span className="badge bg-dark text-white" style={{ fontSize: "0.6rem" }}>SaaS & ERP</span>
                    <Cpu size={12} className="text-primary-blue" />
                  </div>
                  <img
                    src="/images/projects/saas.png"
                    alt="SaaS Platform Development"
                    className="w-100 rounded-3 object-fit-cover shadow-sm"
                    style={{ height: "115px", objectPosition: "top" }}
                  />
                </div>
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

          {/* Interactive Category Filter Tabs and 3-Column Responsive Grid */}
          <PortfolioGrid showFilters={true} />
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
          SECTION 6: OUR DEVELOPMENT PROCESS
          ========================================================================= */}
      <section className="section-padding bg-alt-light border-bottom">
        <div className="container-fluid px-lg-5">
          <div className="text-center mb-5">
            <div className="badge-pill-tag mb-3">HOW WE WORK</div>
            <h2 className="section-title text-dark">
              From Concept <span className="text-primary-blue">to Completion</span>
            </h2>
            <p className="section-subtitle">
              Our development process focuses on understanding business needs, planning effective solutions, and delivering reliable digital experiences.
            </p>
          </div>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-5 g-4 justify-content-center">
            {processSteps.map((step) => {
              const StepIcon = step.icon;
              return (
                <div key={step.step} className="col">
                  {/* Process Card */}
                  <div className="gt-card p-4 h-100 bg-white rounded-4 border shadow-sm position-relative">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <span 
                        className="badge bg-primary-blue text-white px-3 py-2 rounded-pill font-weight-bold"
                        style={{ fontSize: "0.85rem", letterSpacing: "0.5px" }}
                      >
                        {step.step}
                      </span>
                      <div 
                        className="d-inline-flex align-items-center justify-content-center rounded-circle bg-light text-primary-blue"
                        style={{ width: "40px", height: "40px" }}
                      >
                        <StepIcon size={20} />
                      </div>
                    </div>

                    <h3 className="h5 font-weight-bold text-dark mb-2" style={{ letterSpacing: "-0.2px" }}>
                      {step.title}
                    </h3>
                    <p className="small text-secondary mb-0" style={{ lineHeight: "1.7" }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
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

          {/* High-Converting Final Conversion CTA Banner */}
          <div 
            className="p-5 rounded-4 text-center text-white position-relative overflow-hidden shadow-lg"
            style={{ 
              background: "linear-gradient(135deg, #024DA1 0%, #0362C3 100%)",
              border: "1px solid rgba(255, 255, 255, 0.15)"
            }}
          >
            <div className="position-relative" style={{ zIndex: 2 }}>
              <span className="badge bg-white text-primary-blue px-3 py-2 rounded-pill font-weight-bold mb-3 d-inline-block shadow-sm">
                START YOUR PROJECT
              </span>
              <h2 className="display-6 font-weight-extrabold text-white mb-3" style={{ letterSpacing: "-0.5px" }}>
                Ready to Discuss Your Next Technology Project?
              </h2>
              <p className="lead text-white-50 mx-auto mb-4" style={{ maxWidth: "680px", lineHeight: "1.7" }}>
                Whether you need a custom corporate website, mobile app, SaaS platform, or enterprise business software, our engineering team is here to assist.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <Link
                  to="/contact"
                  className="btn bg-white text-primary-blue px-4 py-3 rounded-3 font-weight-bold shadow-sm d-inline-flex align-items-center gap-2 hover-lift"
                  style={{ fontSize: "1rem", transition: "all 0.25s ease" }}
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/services"
                  className="btn btn-outline-light px-4 py-3 rounded-3 font-weight-bold d-inline-flex align-items-center gap-2"
                  style={{ fontSize: "1rem" }}
                >
                  <span>Explore Our Services</span>
                  <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
