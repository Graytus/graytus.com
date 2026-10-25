import React from "react";
import SEO from "../components/SEO";
import AboutSection from "../components/AboutSection";
import StatsSection from "../components/StatsSection";
import ProcessSection from "../components/ProcessSection";
import CTASection from "../components/CTASection";
import { Shield, Zap, Target, Users, Award, Heart, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Us | Graytus Technologies"
        description="Learn about Graytus Technologies - a premier software development and digital solutions company engineering web, mobile, and AI applications."
      />

      {/* Page Header Banner */}
      <section className="bg-alt-light py-5 border-bottom">
        <div className="container-fluid px-lg-5 text-center">
          <div className="badge-pill-tag mb-3">WHO WE ARE</div>
          <h1 className="display-4 font-weight-extrabold text-dark mb-3">
            About <span className="text-primary-blue">Graytus Technologies</span>
          </h1>
          <p className="lead text-secondary mx-auto" style={{ maxWidth: "720px" }}>
            We are a full-service enterprise software development agency dedicated to building high-performance web applications, mobile apps, and intelligent digital systems.
          </p>
        </div>
      </section>

      {/* Main About Component */}
      <AboutSection showCta={false} />

      {/* Values & Engineering Culture */}
      <section className="section-padding bg-alt-light">
        <div className="container-fluid px-lg-5">
          <div className="text-center mb-5">
            <div className="badge-pill-tag mb-3">OUR FOUNDATION</div>
            <h2 className="section-title text-dark">
              Core Engineering <span className="text-primary-blue">Values</span>
            </h2>
            <p className="section-subtitle">
              Our principles define how we collaborate with clients and write code every day.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="gt-card p-4 text-center h-100">
                <div className="bg-primary-blue-light text-primary-blue p-3 rounded-circle d-inline-flex mb-3">
                  <Shield size={32} />
                </div>
                <h3 className="h5 font-weight-bold text-dark mb-2">Uncompromising Quality</h3>
                <p className="small text-secondary mb-0">
                  Every line of code undergoes strict peer review, automated testing, and security checks before reaching production.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="gt-card p-4 text-center h-100">
                <div className="bg-primary-blue-light text-primary-blue p-3 rounded-circle d-inline-flex mb-3">
                  <Target size={32} />
                </div>
                <h3 className="h5 font-weight-bold text-dark mb-2">Transparency & Ethics</h3>
                <p className="small text-secondary mb-0">
                  Direct Slack / Jira access, weekly sprint demos, and zero hidden costs ensure complete client alignment.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="gt-card p-4 text-center h-100">
                <div className="bg-primary-blue-light text-primary-blue p-3 rounded-circle d-inline-flex mb-3">
                  <Zap size={32} />
                </div>
                <h3 className="h5 font-weight-bold text-dark mb-2">Scalable Speed</h3>
                <p className="small text-secondary mb-0">
                  Agile methodologies allowing fast iteration and rapid product deployment without sacrificing architectural stability.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="gt-card p-4 text-center h-100">
                <div className="bg-primary-blue-light text-primary-blue p-3 rounded-circle d-inline-flex mb-3">
                  <Users size={32} />
                </div>
                <h3 className="h5 font-weight-bold text-dark mb-2">Client Partnership</h3>
                <p className="small text-secondary mb-0">
                  We operate as an extended internal technology division focused on long-term client revenue growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* CTA Banner */}
      <CTASection
        title="Ready to Partner with Graytus Technologies?"
        subtitle="Let's turn your vision into an enterprise-grade digital solution."
      />
    </>
  );
}
