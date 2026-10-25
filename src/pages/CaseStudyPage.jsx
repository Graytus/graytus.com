import React from "react";
import { useParams, Link } from "react-router-dom";
import SEO from "../components/SEO";
import { PORTFOLIO_PROJECTS } from "../data/siteData";
import { ArrowLeft, CheckCircle2, ChevronRight, Cpu, Layers, Sparkles, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export default function CaseStudyPage() {
  const { projectId } = useParams();

  const project = PORTFOLIO_PROJECTS.find(p => p.id === projectId) || PORTFOLIO_PROJECTS[0];

  return (
    <>
      <SEO
        title={`${project.title} | Portfolio Case Study | Graytus Technologies`}
        description={project.description || `${project.title} case study by Graytus Technologies`}
      />

      {/* Header Banner */}
      <section className="bg-alt-light py-5 border-bottom">
        <div className="container-fluid px-lg-5">
          {/* Breadcrumb Navigation */}
          <div className="d-flex align-items-center gap-2 mb-4 text-secondary small flex-wrap">
            <Link to="/" className="text-secondary hover-primary">Home</Link>
            <ChevronRight size={14} className="text-muted" />
            <Link to="/portfolio" className="text-secondary hover-primary">Portfolio</Link>
            <ChevronRight size={14} className="text-muted" />
            <span className="text-dark font-weight-bold">{project.title}</span>
          </div>

          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-7">
              <div className="d-flex align-items-center gap-2 mb-3 flex-wrap">
                <span className="badge bg-primary-blue text-white px-3 py-2 rounded-pill font-weight-bold shadow-sm" style={{ fontSize: "0.82rem" }}>
                  {project.categoryTag || project.category}
                </span>
                <span className="badge bg-white text-dark border px-3 py-2 rounded-pill font-weight-semibold shadow-sm d-inline-flex align-items-center gap-1" style={{ fontSize: "0.78rem" }}>
                  <Sparkles size={13} className="text-primary-blue" />
                  <span>{project.badge || "Concept Project"}</span>
                </span>
              </div>

              <h1 className="display-4 font-weight-extrabold text-dark mb-3" style={{ letterSpacing: "-0.5px" }}>
                {project.title}
              </h1>
              
              <p className="lead text-secondary mb-4" style={{ lineHeight: "1.7" }}>
                {project.description}
              </p>

              <div className="d-flex align-items-center gap-4 border-top pt-3 flex-wrap">
                <div>
                  <div className="small text-muted font-weight-bold text-uppercase" style={{ fontSize: "0.75rem", letterSpacing: "0.5px" }}>CATEGORY</div>
                  <div className="font-weight-bold text-dark">{project.category}</div>
                </div>
                <div>
                  <div className="small text-muted font-weight-bold text-uppercase" style={{ fontSize: "0.75rem", letterSpacing: "0.5px" }}>SPECIFICATION TYPE</div>
                  <div className="font-weight-bold text-primary-blue">{project.badge || "Concept Architecture"}</div>
                </div>
                <div>
                  <div className="small text-muted font-weight-bold text-uppercase" style={{ fontSize: "0.75rem", letterSpacing: "0.5px" }}>DELIVERY SCOPE</div>
                  <div className="font-weight-bold text-dark">End-to-End Implementation</div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-5">
              <div className="rounded-4 overflow-hidden shadow-lg border border-white border-4 bg-white">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-100 h-auto object-fit-cover"
                  style={{ maxHeight: "420px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview & Client Requirements */}
      <section className="section-padding bg-white border-bottom">
        <div className="container-fluid px-lg-5">
          <div className="row g-5">
            <div className="col-12 col-lg-6">
              <div className="p-4 p-md-5 rounded-4 bg-alt-light border h-100">
                <div className="badge-pill-tag mb-3">OVERVIEW</div>
                <h2 className="h3 font-weight-bold text-dark mb-3">Project Overview</h2>
                <p className="text-secondary mb-0" style={{ lineHeight: "1.8", fontSize: "1.05rem" }}>
                  {project.overview || project.description}
                </p>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="p-4 p-md-5 rounded-4 bg-white border border-primary-blue h-100 shadow-sm">
                <div className="badge-pill-tag mb-3">REQUIREMENTS</div>
                <h2 className="h3 font-weight-bold text-dark mb-3">Client & Functional Requirements</h2>
                <p className="text-secondary mb-0" style={{ lineHeight: "1.8", fontSize: "1.05rem" }}>
                  {project.clientRequirements || "Custom requirements centered around business workflows, responsive cross-device usability, performance optimization, and scalable backend infrastructure."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Challenge & Our Solution */}
      <section className="section-padding bg-alt-light border-bottom">
        <div className="container-fluid px-lg-5">
          <div className="text-center mb-5">
            <div className="badge-pill-tag mb-3">ANALYSIS & STRATEGY</div>
            <h2 className="section-title text-dark">
              Problem Statement & <span className="text-primary-blue">Engineering Solution</span>
            </h2>
            <p className="section-subtitle">
              How we approach operational bottlenecks with structured technology design.
            </p>
          </div>

          <div className="row g-5">
            <div className="col-12 col-lg-6">
              <div className="gt-card p-4 p-md-5 bg-white h-100">
                <div className="badge-pill-tag mb-3" style={{ background: "#FEE2E2", color: "#DC2626", borderColor: "rgba(220, 38, 38, 0.2)" }}>
                  THE CHALLENGE
                </div>
                <h3 className="h4 font-weight-bold text-dark mb-3">Business & Technical Friction</h3>
                <p className="text-secondary mb-0" style={{ lineHeight: "1.8" }}>
                  {project.challenge}
                </p>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="gt-card p-4 p-md-5 bg-white border-primary-blue h-100">
                <div className="badge-pill-tag mb-3">
                  OUR SOLUTION
                </div>
                <h3 className="h4 font-weight-bold text-dark mb-3">Engineered Solution</h3>
                <p className="text-secondary mb-0" style={{ lineHeight: "1.8" }}>
                  {project.solution}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features & Tech Stack */}
      <section className="section-padding bg-white border-bottom">
        <div className="container-fluid px-lg-5">
          <div className="row g-5 align-items-center">
            <div className="col-12 col-lg-6">
              <div className="badge-pill-tag mb-3">SPECIFICATIONS</div>
              <h2 className="section-title text-dark mb-4">
                Key Functional <span className="text-primary-blue">Features</span>
              </h2>
              <ul className="list-unstyled mb-0 d-flex flex-column gap-3">
                {project.features?.map((feat, idx) => (
                  <li key={idx} className="p-3 bg-alt-light rounded-3 border font-weight-semibold text-dark d-flex align-items-center gap-3">
                    <CheckCircle2 size={20} className="text-primary-blue flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-12 col-lg-6">
              <div className="p-4 p-md-5 rounded-4 bg-dark-charcoal text-white shadow-lg">
                <div className="badge-pill-tag dark mb-3">TECHNOLOGIES USED</div>
                <h3 className="h3 font-weight-bold text-white mb-3">Verified Technology Stack</h3>
                <p className="text-white-50 mb-4 small" style={{ lineHeight: "1.7" }}>
                  Technologies verified and supported by Graytus Technologies for optimal performance, stability, and security.
                </p>

                <div className="d-flex flex-wrap gap-2 mb-4">
                  {project.technologies?.map((t, idx) => (
                    <span key={idx} className="badge bg-primary-blue text-white px-3 py-2 rounded-pill font-weight-bold" style={{ fontSize: "0.85rem" }}>
                      {t}
                    </span>
                  ))}
                </div>

                {project.relatedServices && project.relatedServices.length > 0 && (
                  <div className="border-top border-secondary border-opacity-25 pt-4">
                    <div className="small text-white-50 font-weight-bold mb-2 text-uppercase" style={{ letterSpacing: "0.5px" }}>RELATED SERVICES:</div>
                    <div className="d-flex flex-wrap gap-2">
                      {project.relatedServices.map((svc, idx) => (
                        <Link 
                          key={idx} 
                          to={project.servicePath || "/services"} 
                          className="badge bg-white text-dark px-3 py-2 rounded-pill font-weight-semibold text-decoration-none hover-primary"
                          style={{ fontSize: "0.8rem" }}
                        >
                          {svc}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA: Have a Similar Project in Mind? */}
      <section className="section-padding bg-alt-light text-center">
        <div className="container-fluid px-lg-5">
          <div className="p-5 rounded-4 bg-white border border-primary-blue shadow-md mx-auto" style={{ maxWidth: "900px" }}>
            <span className="badge-pill-tag mb-3">LET'S COLLABORATE</span>
            <h2 className="display-6 font-weight-extrabold text-dark mb-3">
              Have a Similar Project in Mind?
            </h2>
            <p className="lead text-secondary mb-4 mx-auto" style={{ maxWidth: "620px" }}>
              Whether you are planning a corporate website, mobile app, SaaS platform, or custom enterprise software, Graytus Technologies is ready to build it.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Link to="/contact" className="btn-primary-gt">
                <span>Discuss Your Project</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/portfolio" className="btn-outline-gt">
                <ArrowLeft size={18} />
                <span>Explore All Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

