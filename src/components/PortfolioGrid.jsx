import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PORTFOLIO_PROJECTS } from "../data/siteData";
import { ArrowRight, Layers, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const PORTFOLIO_CATEGORIES = [
  "All Projects",
  "Web Development",
  "App Development",
  "Software Development",
  "SaaS",
  "ERP",
  "eCommerce",
  "Hospitality"
];

export default function PortfolioGrid({ limit = null, showFilters = true, initialCategory = "All Projects" }) {
  const [filter, setFilter] = useState(initialCategory);

  const filteredProjects = PORTFOLIO_PROJECTS.filter(p => {
    if (filter === "All Projects" || filter === "All") return true;
    return p.category === filter;
  });

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <div id="portfolio-grid-container">
      {/* Category Filter Buttons */}
      {showFilters && (
        <div 
          className="d-flex flex-wrap justify-content-center gap-2 mb-5"
          role="tablist"
          aria-label="Portfolio Category Filters"
        >
          {PORTFOLIO_CATEGORIES.map((cat, idx) => {
            const isActive = filter === cat || (cat === "All Projects" && filter === "All");
            return (
              <button
                key={idx}
                role="tab"
                aria-selected={isActive}
                tabIndex={0}
                className={`tech-pill ${isActive ? "active" : ""}`}
                style={{
                  outline: "none",
                  cursor: "pointer",
                  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)"
                }}
                onClick={() => setFilter(cat)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setFilter(cat);
                  }
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      )}

      {/* Project Cards Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="row g-4"
        >
          {displayedProjects.length === 0 ? (
            <div className="col-12 text-center py-5">
              <div className="p-5 bg-light rounded-4 border">
                <Layers size={40} className="text-secondary mb-3" />
                <h3 className="h5 font-weight-bold text-dark mb-2">No Projects Found</h3>
                <p className="text-secondary mb-3">No matching projects in the selected category.</p>
                <button
                  className="btn btn-outline-gt btn-sm"
                  onClick={() => setFilter("All Projects")}
                >
                  View All Projects
                </button>
              </div>
            </div>
          ) : (
            displayedProjects.map((project) => {
              const serviceUrl = project.servicePath || (
                project.category?.includes("Web") ? "/services/website-development" :
                project.category?.includes("App") ? "/services/mobile-app-development" :
                project.category?.includes("Software") ? "/services/custom-software-development" :
                project.category?.includes("SaaS") ? "/services/saas-development" :
                project.category?.includes("ERP") ? "/services/erp-development" :
                project.category?.includes("Commerce") ? "/services/ecommerce-website" :
                project.category?.includes("Hospitality") ? "/services/property-management-system" :
                "/services"
              );

              return (
                <div
                  key={project.id}
                  className="col-12 col-md-6 col-lg-4"
                >
                  <div className="gt-card p-0 overflow-hidden h-100 d-flex flex-column justify-content-between border rounded-4 shadow-sm">
                    {/* Project Screenshot / Thumbnail */}
                    <div 
                      className="position-relative overflow-hidden bg-light" 
                      style={{ height: "230px" }}
                    >
                      <Link to={serviceUrl} className="d-block w-100 h-100">
                        <img
                          src={project.image}
                          alt={`${project.title} - ${project.category}`}
                          loading="lazy"
                          className="w-100 h-100 object-fit-cover"
                          style={{ 
                            transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                            objectPosition: project.imagePosition || "center",
                            cursor: "pointer"
                          }}
                          onMouseOver={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
                          onMouseOut={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                        />
                      </Link>
                      
                      {/* Category Label */}
                      <div className="position-absolute top-0 start-0 m-3">
                        <Link 
                          to={serviceUrl} 
                          className="badge bg-primary-blue text-white px-3 py-2 rounded-pill font-weight-bold shadow-sm text-decoration-none" 
                          style={{ fontSize: "0.78rem" }}
                        >
                          {project.categoryTag || project.category}
                        </Link>
                      </div>

                      {/* Transparent/Verified Demo Badge */}
                      <div className="position-absolute top-0 end-0 m-3">
                        <span className="badge bg-white text-dark border px-2 py-1 rounded-pill small font-weight-semibold shadow-sm d-inline-flex align-items-center gap-1" style={{ fontSize: "0.72rem" }}>
                          <Sparkles size={11} className="text-primary-blue" />
                          <span>{project.badge || "Concept Project"}</span>
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-4 d-flex flex-column justify-content-between flex-grow-1">
                      <div>
                        <div className="small font-weight-bold text-muted mb-1 text-uppercase" style={{ letterSpacing: "0.5px", fontSize: "0.75rem" }}>
                          {project.category}
                        </div>
                        <h3 className="h5 font-weight-bold text-dark mb-2" style={{ letterSpacing: "-0.2px" }}>
                          <Link to={serviceUrl} className="text-dark text-decoration-none hover-primary">
                            {project.title}
                          </Link>
                        </h3>
                        <p className="small text-secondary mb-3" style={{ lineHeight: "1.6" }}>
                          {project.description}
                        </p>

                        {/* Technology Badges */}
                        <div className="d-flex flex-wrap gap-1 mb-4">
                          {project.technologies?.slice(0, 4).map((tech, tIdx) => (
                            <span 
                              key={tIdx} 
                              className="badge bg-light text-dark border px-2 py-1 font-weight-normal"
                              style={{ fontSize: "0.75rem" }}
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies?.length > 4 && (
                            <span 
                              className="badge bg-light text-secondary border px-2 py-1 font-weight-normal"
                              style={{ fontSize: "0.75rem" }}
                            >
                              +{project.technologies.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Card CTA Link */}
                      <div>
                        <Link 
                          to={serviceUrl} 
                          className="btn btn-outline-gt w-100 justify-content-between text-dark font-weight-bold hover-lift"
                          style={{ padding: "10px 18px", fontSize: "0.9rem" }}
                        >
                          <span>View Case Study</span>
                          <ArrowRight size={16} className="text-primary-blue" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

