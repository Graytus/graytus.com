import React, { useState } from "react";
import { motion } from "framer-motion";
import { COMPANY_INFO } from "../data/siteData";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Website Development",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields (Name, Email, Message).");
      return;
    }

    // Construct formatted inquiry for WhatsApp
    const messageLines = [
      "👋 *New Project Inquiry from Graytus Website*",
      "",
      `👤 *Name:* ${formData.name}`,
      `📧 *Email:* ${formData.email}`,
      `📞 *Phone:* ${formData.phone || "Not provided"}`,
      `🏢 *Company:* ${formData.company || "Not provided"}`,
      `💼 *Service:* ${formData.service}`,
      "",
      `📝 *Project Details:*`,
      formData.message
    ];
    const waText = messageLines.join("\n");
    const waNumber = COMPANY_INFO.whatsapp.replace(/[^0-9]/g, "");
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waText)}`;

    // Open WhatsApp directly
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <div className="row g-5">
      {/* Left: Contact Info & Channels */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="col-12 col-lg-5"
      >
        <div className="pe-lg-4">
          <div className="badge-pill-tag mb-3">GET IN TOUCH</div>
          <h2 className="section-title text-dark">
            Let's Build Something <span className="text-primary-blue">Great Together</span>
          </h2>
          <p className="lead text-secondary mb-4">
            Have a project in mind or need expert software advice? Our engineering strategy team is ready to discuss your requirements.
          </p>

          <div className="d-flex flex-column gap-4 mb-5">
            <div className="d-flex align-items-start gap-3">
              <div className="bg-primary-blue-light text-primary-blue p-3 rounded-3">
                <Mail size={22} />
              </div>
              <div>
                <div className="small text-secondary font-weight-bold">Email Us Directly</div>
                <a href={`mailto:${COMPANY_INFO.email}`} className="h6 font-weight-extrabold text-dark text-decoration-none">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            <div className="d-flex align-items-start gap-3">
              <div className="bg-primary-blue-light text-primary-blue p-3 rounded-3">
                <Phone size={22} />
              </div>
              <div>
                <div className="small text-secondary font-weight-bold">Call Us Anytime</div>
                <a href={`tel:${COMPANY_INFO.phone}`} className="h6 font-weight-extrabold text-dark text-decoration-none">
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>

            <div className="d-flex align-items-start gap-3">
              <div className="bg-primary-blue-light text-primary-blue p-3 rounded-3">
                <MapPin size={22} />
              </div>
              <div>
                <div className="small text-secondary font-weight-bold">Global Headquarters</div>
                <div className="h6 font-weight-bold text-dark mb-0">
                  {COMPANY_INFO.address}
                </div>
              </div>
            </div>

            <div className="d-flex align-items-start gap-3">
              <div className="bg-primary-blue-light text-primary-blue p-3 rounded-3">
                <Clock size={22} />
              </div>
              <div>
                <div className="small text-secondary font-weight-bold">Working Hours</div>
                <div className="h6 font-weight-bold text-dark mb-0">
                  {COMPANY_INFO.workingHours}
                </div>
              </div>
            </div>
          </div>

          {/* Direct WhatsApp Callout */}
          <div className="p-4 bg-success bg-opacity-10 border border-success border-opacity-25 rounded-3 d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-3">
              <MessageCircle size={28} className="text-success" />
              <div>
                <div className="font-weight-bold text-dark">Prefer Quick Chat?</div>
                <div className="small text-secondary">Connect with our team on WhatsApp</div>
              </div>
            </div>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-success px-3 py-2 font-weight-bold"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </motion.div>

      {/* Right: Interactive Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="col-12 col-lg-7"
      >
        <div className="gt-card p-4 p-md-5">
          {submitted ? (
            <div className="text-center py-5">
              <div className="bg-success bg-opacity-10 text-success rounded-circle d-inline-flex p-4 mb-4">
                <CheckCircle2 size={56} />
              </div>
              <h3 className="h3 font-weight-bold text-dark mb-2">Inquiry Submitted Successfully!</h3>
              <p className="text-secondary max-w-md mx-auto mb-4">
                Thank you for reaching out to Graytus Technologies. Our technology architect team will review your project requirements and contact you within 4 business hours.
              </p>
              <button className="btn btn-primary-gt" onClick={() => setSubmitted(false)}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h3 className="h4 font-weight-bold text-dark mb-4">Project Inquiry Form</h3>

              {error && <div className="alert alert-danger py-2 small mb-4">{error}</div>}

              <div className="row g-3">
                <div className="col-12 col-md-6">
                  <label className="form-label font-weight-bold small text-dark">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control form-control-lg bg-light fs-6 gt-form-input"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label font-weight-bold small text-dark">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control form-control-lg bg-light fs-6 gt-form-input"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label font-weight-bold small text-dark">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control form-control-lg bg-light fs-6 gt-form-input"
                    placeholder="Enter phone number"
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label font-weight-bold small text-dark">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="form-control form-control-lg bg-light fs-6 gt-form-input"
                    placeholder="Enter company name"
                  />
                </div>

                <div className="col-12">
                  <label className="form-label font-weight-bold small text-dark">Service Required</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-select form-select-lg bg-light fs-6 gt-form-input"
                  >
                    <option value="Website Development">Website Development</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="Custom Software Development">Software Development</option>
                    <option value="AI & Machine Learning">AI & Machine Learning</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="IT Consulting & Cloud">Cloud & IT Consulting</option>
                  </select>
                </div>

                <div className="col-12">
                  <label className="form-label font-weight-bold small text-dark">Project Details *</label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control bg-light fs-6 gt-form-input"
                    placeholder="Tell us about your project goals, timelines, and technical requirements..."
                    required
                  ></textarea>
                </div>

                <div className="col-12 mt-4">
                  <motion.button
                    type="submit"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.985 }}
                    className="btn btn-primary-gt w-100 py-3 contact-submit-btn d-flex align-items-center justify-content-center gap-2"
                    style={{ fontSize: "1.05rem" }}
                  >
                    <span>Send Inquiry</span>
                    <Send size={18} className="contact-submit-icon" />
                  </motion.button>
                  <div className="small text-muted text-center mt-2">
                    🔒 We respect your privacy. All inquiries are covered by our NDA policy.
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}
