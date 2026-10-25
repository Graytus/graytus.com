import React from "react";
import SEO from "../components/SEO";
import ContactForm from "../components/ContactForm";
import { COMPANY_INFO } from "../data/siteData";

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Us | Graytus Technologies"
        description="Get in touch with Graytus Technologies to discuss custom software development, mobile app engineering, or web platform projects."
      />

      <section className="bg-alt-light py-5 border-bottom">
        <div className="container-fluid px-lg-5 text-center">
          <div className="badge-pill-tag mb-3">GET IN TOUCH</div>
          <h1 className="display-4 font-weight-extrabold text-dark mb-3">
            Contact <span className="text-primary-blue">Graytus Technologies</span>
          </h1>
          <p className="lead text-secondary mx-auto" style={{ maxWidth: "720px" }}>
            Ready to turn your vision into an enterprise-grade digital solution? Send us an inquiry or reach out to our team directly.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-fluid px-lg-5">
          <ContactForm />
        </div>
      </section>

      {/* Google Maps / Office Location Section */}
      <section className="py-5 bg-alt-light border-top">
        <div className="container-fluid px-lg-5">
          <div className="text-center mb-4">
            <h3 className="h4 font-weight-bold text-dark">Our Headquarters Location</h3>
            <p className="small text-secondary">{COMPANY_INFO.address}</p>
          </div>
          <div className="rounded-4 overflow-hidden border shadow-sm bg-dark text-white d-flex align-items-center justify-content-center" style={{ height: "360px", background: "linear-gradient(135deg, #111418 0%, #1E232A 100%)" }}>
            <div className="text-center p-4">
              <div className="badge bg-primary-blue text-white px-3 py-2 rounded-pill font-weight-bold mb-3">
                📍 HEADQUARTERS
              </div>
              <h4 className="font-weight-bold text-white mb-2">Graytus Technologies</h4>
              <p className="text-white-50 small mb-0">{COMPANY_INFO.address}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
