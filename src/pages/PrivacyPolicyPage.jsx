import React from "react";
import SEO from "../components/SEO";

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEO title="Privacy Policy | Graytus Technologies" description="Privacy Policy for Graytus Technologies." />
      <section className="bg-alt-light py-5 border-bottom">
        <div className="container-fluid px-lg-5 text-center">
          <h1 className="display-5 font-weight-extrabold text-dark">Privacy Policy</h1>
          <p className="text-secondary">Last updated: October 2026</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-fluid px-lg-5" style={{ maxWidth: "860px" }}>
          <h3 className="font-weight-bold text-dark mb-3">1. Information Collection</h3>
          <p className="text-secondary mb-4">
            Graytus Technologies collects business contact information provided via our project inquiry form strictly for the purpose of communicating about software development proposals.
          </p>

          <h3 className="font-weight-bold text-dark mb-3">2. Non-Disclosure & Confidentiality</h3>
          <p className="text-secondary mb-4">
            We operate under strict confidentiality agreements (NDAs). Your project ideas, proprietary code, and technical data are protected and will never be disclosed to third parties.
          </p>

          <h3 className="font-weight-bold text-dark mb-3">3. Data Protection Standards</h3>
          <p className="text-secondary mb-4">
            We employ modern encryption protocols (TLS 1.3) and secure cloud infrastructure to ensure data privacy and OWASP compliance.
          </p>
        </div>
      </section>
    </>
  );
}
