import React from "react";
import SEO from "../components/SEO";
import ServiceGrid from "../components/ServiceGrid";
import TechnologySection from "../components/TechnologySection";
import ProcessSection from "../components/ProcessSection";
import CTASection from "../components/CTASection";
import { SERVICES_NAV } from "../data/siteData";

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Services | Graytus Technologies"
        description="Explore enterprise software development, mobile apps, web applications, AI automation, and cloud services by Graytus Technologies."
      />

      {/* Header Banner */}
      <section className="bg-alt-light py-5 border-bottom">
        <div className="container-fluid px-lg-5 text-center">
          <div className="badge-pill-tag mb-3">OUR CAPABILITIES</div>
          <h1 className="display-4 font-weight-extrabold text-dark mb-3">
            Digital Engineering <span className="text-primary-blue">Services</span>
          </h1>
          <p className="lead text-secondary mx-auto" style={{ maxWidth: "750px" }}>
            From high-throughput web portals and iOS/Android mobile applications to custom SaaS platforms and autonomous AI engines — we build technology that scales.
          </p>
        </div>
      </section>

      {/* Main Service Categories */}
      <section className="section-padding bg-white">
        <div className="container-fluid px-lg-5">
          <ServiceGrid services={SERVICES_NAV} />
        </div>
      </section>

      {/* Technology Stack */}
      <TechnologySection />

      {/* Development Process */}
      <ProcessSection />

      {/* CTA Banner */}
      <CTASection />
    </>
  );
}
