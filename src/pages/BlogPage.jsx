import React from "react";
import SEO from "../components/SEO";
import BlogGrid from "../components/BlogGrid";
import CTASection from "../components/CTASection";

export default function BlogPage() {
  return (
    <>
      <SEO
        title="Blog & Insights | Graytus Technologies"
        description="Read articles, technical guides, and industry news on AI, Web Development, Mobile Apps, and Enterprise Cloud Software by Graytus Technologies."
      />

      <section className="bg-alt-light py-5 border-bottom">
        <div className="container-fluid px-lg-5 text-center">
          <div className="badge-pill-tag mb-3">INSIGHTS & GUIDES</div>
          <h1 className="display-4 font-weight-extrabold text-dark mb-3">
            Technology <span className="text-primary-blue">Blog</span>
          </h1>
          <p className="lead text-secondary mx-auto" style={{ maxWidth: "720px" }}>
            Thought leadership, architectural blueprints, and engineering best practices from our technical strategy team.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-fluid px-lg-5">
          <BlogGrid showFilters={true} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
