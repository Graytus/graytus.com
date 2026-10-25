import React from "react";
import SEO from "../components/SEO";

export default function TermsPage() {
  return (
    <>
      <SEO title="Terms & Conditions | Graytus Technologies" description="Terms & Conditions for Graytus Technologies." />
      <section className="bg-alt-light py-5 border-bottom">
        <div className="container-fluid px-lg-5 text-center">
          <h1 className="display-5 font-weight-extrabold text-dark">Terms & Conditions</h1>
          <p className="text-secondary">Last updated: October 2026</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-fluid px-lg-5" style={{ maxWidth: "860px" }}>
          <h3 className="font-weight-bold text-dark mb-3">1. Intellectual Property Rights</h3>
          <p className="text-secondary mb-4">
            Upon final payment delivery under a Master Services Agreement (MSA), 100% of custom software source code, assets, and intellectual property developed by Graytus Technologies belong to the client.
          </p>

          <h3 className="font-weight-bold text-dark mb-3">2. Service Level Guarantees</h3>
          <p className="text-secondary mb-4">
            Software development deliverables are governed by explicit Statements of Work (SOW) including milestone timelines, acceptance criteria, and post-launch SLA support warranties.
          </p>
        </div>
      </section>
    </>
  );
}
