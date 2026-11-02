import React from "react";
import SEO from "../components/SEO";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServiceGrid from "../components/ServiceGrid";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import ProcessSection from "../components/ProcessSection";
import TechnologySection from "../components/TechnologySection";
import CTASection from "../components/CTASection";
import { SERVICES_NAV } from "../data/siteData";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <SEO
        title="Graytus Technologies | Software Development & Digital Solutions Company"
        description="Graytus Technologies designs and develops high-performance websites, mobile applications, custom software, and intelligent AI solutions for global enterprises."
      />

      {/* Hero Section */}
      <HeroSection />

      {/* About Overview */}
      <AboutSection showCta={true} />

      {/* Services Grid Section */}
      <section className="section-padding bg-alt-light">
        <div className="container-fluid px-lg-5">
          <div className="mb-5 text-center">
            <div className="badge-pill-tag mb-3">OUR CORE SERVICES</div>
            <h2 className="display-5 font-weight-extrabold text-dark mb-2" style={{ fontWeight: 800 }}>
              End-to-End Services for <span className="text-primary-blue">Digital Transformation</span>
            </h2>
            <p className="text-secondary lead mb-0 mx-auto" style={{ maxWidth: "780px" }}>
              We engineer enterprise AI, SaaS platforms, custom software, and high-performance mobile apps built for digital scale.
            </p>
          </div>

          <ServiceGrid services={SERVICES_NAV} />

          <div className="text-center mt-5">
            <Link to="/services" className="btn btn-outline-gt px-4 py-3">
              View All Services & Architecture <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUsSection />

      {/* Technology Stack Section */}
      <TechnologySection />

      {/* Process Section (How We Work) */}
      <ProcessSection />

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
