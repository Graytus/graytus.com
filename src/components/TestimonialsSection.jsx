import React from "react";
import { TESTIMONIALS, CLIENT_LOGOS } from "../data/siteData";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-alt-light">
      <div className="container-fluid px-lg-5">
        {/* Client Logos / Trust Bar */}
        <div className="mb-5 pb-5 border-bottom">
          <p className="text-center font-weight-bold text-uppercase tracking-wider text-secondary small mb-4">
            Trusted By Growing Enterprises & Ambitious Brands
          </p>
          <div className="row g-4 align-items-center justify-content-center text-center">
            {CLIENT_LOGOS.map((client, idx) => (
              <div key={idx} className="col-6 col-sm-4 col-md-2">
                <div className="p-3 bg-white rounded-3 border shadow-sm text-dark font-weight-extrabold small tracking-widest opacity-75">
                  {client.logo}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Title */}
        <div className="text-center mb-5">
          <div className="badge-pill-tag mb-3">CLIENT REVIEWS</div>
          <h2 className="section-title text-dark">
            What Our Partners <span className="text-primary-blue">Say About Us</span>
          </h2>
          <p className="section-subtitle">
            Read how Graytus Technologies helps client teams deliver software projects on time and at scale.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="row g-4">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="col-12 col-md-4"
            >
              <div className="gt-card p-4 h-100 d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex gap-1 text-warning">
                      {[...Array(item.rating)].map((_, rIdx) => (
                        <Star key={rIdx} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <Quote size={28} className="text-primary-blue opacity-25" />
                  </div>
                  <p className="text-dark small mb-4" style={{ fontStyle: "italic", lineHeight: "1.6" }}>
                    "{item.review}"
                  </p>
                </div>

                <div className="d-flex align-items-center gap-3 pt-3 border-top">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="rounded-circle object-fit-cover"
                    style={{ width: "48px", height: "48px" }}
                  />
                  <div>
                    <h6 className="font-weight-bold text-dark mb-0">{item.name}</h6>
                    <div className="small text-secondary">{item.role}</div>
                    <div className="small text-primary-blue font-weight-semibold">{item.company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
