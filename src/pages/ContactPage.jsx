import React from "react";
import SEO from "../components/SEO";
import ContactForm from "../components/ContactForm";
import { COMPANY_INFO } from "../data/siteData";
import { Navigation } from "lucide-react";
import contactBannerImg from "../assets/contact/img.png";

export default function ContactPage() {
  const mapQuery = encodeURIComponent(COMPANY_INFO.address);
  const mapEmbedUrl = `https://maps.google.com/maps?q=${mapQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
  const mapDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  return (
    <>
      <SEO
        title="Contact Us | Graytus Technologies"
        description="Get in touch with Graytus Technologies to discuss custom software development, mobile app engineering, or web platform projects."
      />

      {/* ── Hero Banner (Full-Width, 0 Top Gap, 0 Side Gaps) ── */}
      <section className="position-relative w-100 p-0 m-0 overflow-hidden border-bottom">
        <img
          src={contactBannerImg}
          alt="Contact Graytus Technologies"
          className="w-100 d-block"
          style={{
            maxHeight: "560px",
            objectFit: "cover",
            objectPosition: "center"
          }}
        />
      </section>

      {/* ── Contact Form Section ── */}
      <section className="section-padding bg-white">
        <div className="container-fluid px-lg-5">
          <ContactForm />
        </div>
      </section>

      {/* ── Google Maps / Office Location Section ── */}
      <section className="py-5 bg-alt-light border-top">
        <div className="container-fluid px-lg-5">
          <div className="text-center mb-4">
            <div className="badge-pill-tag mb-2">VISIT US</div>
            <h3 className="h3 font-weight-bold text-dark">Our Headquarters Location</h3>
            <p className="text-secondary mx-auto" style={{ maxWidth: "600px" }}>
              {COMPANY_INFO.address}
            </p>
            <a
              href={mapDirectionsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-gt btn-sm d-inline-flex align-items-center gap-2 mt-2"
            >
              <Navigation size={15} />
              <span>Get Directions on Google Maps</span>
            </a>
          </div>

          <div className="rounded-4 overflow-hidden border shadow-sm position-relative" style={{ height: "420px" }}>
            <iframe
              title="Graytus Technologies Office Location"
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
