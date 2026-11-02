import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { COMPANY_INFO } from "../data/siteData";
import {
  X,
  Send,
  CheckCircle2,
  User,
  Mail,
  Phone,
  GraduationCap,
  Briefcase,
  Calendar,
  Link as LinkIcon,
  MessageSquare,
  Sparkles,
  ArrowRight
} from "lucide-react";

export default function InternshipApplyModal({ isOpen, onClose, initialProgram = "Full Stack Development" }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    degreeYear: "",
    program: initialProgram,
    mode: "Remote",
    duration: "3 Months",
    portfolioLink: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Sync initial program when prop changes
  useEffect(() => {
    if (initialProgram) {
      setFormData((prev) => ({ ...prev, program: initialProgram }));
    }
  }, [initialProgram]);

  // Lock body scroll when modal is active & listen to Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.college.trim()) {
      setError("Please fill in all required fields (Full Name, Email, Phone, College).");
      return;
    }

    // Construct formatted application for WhatsApp
    const messageLines = [
      "🎓 *New Internship Application — Graytus Technologies*",
      "",
      `👤 *Candidate:* ${formData.fullName.trim()}`,
      `📧 *Email:* ${formData.email.trim()}`,
      `📞 *Phone / WhatsApp:* ${formData.phone.trim()}`,
      `🏛️ *College / University:* ${formData.college.trim()}`,
      `📚 *Degree & Year:* ${formData.degreeYear.trim() || "Not specified"}`,
      `💼 *Role / Domain:* ${formData.program}`,
      `📍 *Preferred Mode:* ${formData.mode}`,
      `⏱️ *Duration:* ${formData.duration}`,
      `🔗 *Resume / Portfolio Link:* ${formData.portfolioLink.trim() || "Will share via chat"}`,
      "",
      `💬 *Candidate Note:*`,
      formData.message.trim() || "Looking forward to learning with Graytus Technologies mentors."
    ];

    const waText = messageLines.join("\n");
    const waNumber = COMPANY_INFO.whatsapp.replace(/[^0-9]/g, "");
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waText)}`;

    // Open WhatsApp
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setError("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="internship-modal-backdrop"
          onClick={handleResetAndClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="internship-modal-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="internship-modal-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              className="p-4 p-md-4 border-bottom d-flex align-items-center justify-content-between position-relative"
              style={{
                background: "linear-gradient(135deg, #0A192F 0%, #0866C6 100%)",
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                color: "#FFFFFF"
              }}
            >
              <div>
                <div className="d-inline-flex align-items-center gap-1.5 small text-white-50 font-weight-bold mb-1">
                  <Sparkles size={13} className="text-info" />
                  GRAYTUS TECHNOLOGIES • TIRUVANNAMALAI
                </div>
                <h2 id="internship-modal-title" className="h4 font-weight-bold text-white mb-0">
                  Internship Application
                </h2>
                <p className="small text-white-50 mb-0 mt-1">
                  Fast-track your tech career with real product engineering & mentorship.
                </p>
              </div>

              <button
                type="button"
                onClick={handleResetAndClose}
                className="btn btn-sm text-white rounded-circle p-2 d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  border: "none",
                  width: "36px",
                  height: "36px",
                  cursor: "pointer"
                }}
                aria-label="Close application form"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body: Either Form or Success Confirmation */}
            <div className="p-4 p-md-4">
              {submitted ? (
                /* Success Confirmation State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-4 px-2"
                >
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "72px",
                      height: "72px",
                      backgroundColor: "#ECFDF5",
                      color: "#10B981"
                    }}
                  >
                    <CheckCircle2 size={42} />
                  </div>

                  <h3 className="h4 font-weight-bold text-dark mb-2">Application Submitted!</h3>
                  <p className="text-secondary mx-auto mb-4" style={{ maxWidth: "480px", lineHeight: "1.65" }}>
                    Thank you, <strong>{formData.fullName}</strong>. Your application for{" "}
                    <strong>{formData.program}</strong> ({formData.mode} • {formData.duration}) has been forwarded to our HR & Engineering mentor team.
                  </p>

                  <div
                    className="p-3 mb-4 rounded-3 text-start mx-auto"
                    style={{
                      maxWidth: "480px",
                      backgroundColor: "#F8FAFC",
                      border: "1px solid #E2E8F0",
                      fontSize: "0.88rem"
                    }}
                  >
                    <div className="mb-1"><strong>Selected Domain:</strong> {formData.program}</div>
                    <div className="mb-1"><strong>Phone / WhatsApp:</strong> {formData.phone}</div>
                    <div className="mb-1"><strong>Email:</strong> {formData.email}</div>
                    <div><strong>Institution:</strong> {formData.college}</div>
                  </div>

                  <p className="small text-muted mb-4">
                    Our team typically reviews applications and contacts shortlisted candidates within <strong>24–48 hours</strong>.
                  </p>

                  <div className="d-flex flex-wrap align-items-center justify-content-center gap-3">
                    <button
                      type="button"
                      onClick={handleResetAndClose}
                      className="btn btn-primary-gt px-4 py-2 font-weight-bold"
                    >
                      Done / Close
                    </button>
                    <a
                      href={`mailto:${COMPANY_INFO.email}?subject=Internship Application Resume — ${encodeURIComponent(formData.fullName)}`}
                      className="btn btn-outline-gt px-4 py-2 font-weight-bold"
                    >
                      Email Resume as PDF
                    </a>
                  </div>
                </motion.div>
              ) : (
                /* Application Form */
                <form onSubmit={handleSubmit}>
                  {error && (
                    <div className="alert alert-danger py-2 px-3 small rounded-3 mb-3" role="alert">
                      {error}
                    </div>
                  )}

                  <div className="row g-3">
                    {/* Full Name */}
                    <div className="col-12 col-md-6">
                      <label htmlFor="modal-fullName" className="internship-form-label">
                        Full Name <span className="text-danger">*</span>
                      </label>
                      <div className="position-relative">
                        <input
                          id="modal-fullName"
                          type="text"
                          name="fullName"
                          className="internship-form-input"
                          placeholder="e.g. Kirubakaran V"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="col-12 col-md-6">
                      <label htmlFor="modal-email" className="internship-form-label">
                        Email Address <span className="text-danger">*</span>
                      </label>
                      <input
                        id="modal-email"
                        type="email"
                        name="email"
                        className="internship-form-input"
                        placeholder="e.g. name@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Phone / WhatsApp */}
                    <div className="col-12 col-md-6">
                      <label htmlFor="modal-phone" className="internship-form-label">
                        Phone / WhatsApp Number <span className="text-danger">*</span>
                      </label>
                      <input
                        id="modal-phone"
                        type="tel"
                        name="phone"
                        className="internship-form-input"
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* College / University */}
                    <div className="col-12 col-md-6">
                      <label htmlFor="modal-college" className="internship-form-label">
                        College / University <span className="text-danger">*</span>
                      </label>
                      <input
                        id="modal-college"
                        type="text"
                        name="college"
                        className="internship-form-input"
                        placeholder="e.g. Anna University / Local College"
                        value={formData.college}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Degree & Year */}
                    <div className="col-12 col-md-6">
                      <label htmlFor="modal-degreeYear" className="internship-form-label">
                        Degree & Year of Study
                      </label>
                      <input
                        id="modal-degreeYear"
                        type="text"
                        name="degreeYear"
                        className="internship-form-input"
                        placeholder="e.g. B.Tech IT — 3rd Year / Fresh Graduate"
                        value={formData.degreeYear}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Internship Program / Domain */}
                    <div className="col-12 col-md-6">
                      <label htmlFor="modal-program" className="internship-form-label">
                        Internship Domain <span className="text-danger">*</span>
                      </label>
                      <select
                        id="modal-program"
                        name="program"
                        className="internship-form-input"
                        value={formData.program}
                        onChange={handleChange}
                        required
                      >
                        <option value="Full Stack Development">Full Stack Development</option>
                        <option value="Software Testing">Software Testing / QA</option>
                        <option value="UI/UX Designing">UI/UX Designing</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="Cloud & Backend Development">Cloud & Backend Development</option>
                        <option value="Other / Open Tech Internship">Other / Open Tech Internship</option>
                      </select>
                    </div>

                    {/* Preferred Mode */}
                    <div className="col-12 col-md-6">
                      <label htmlFor="modal-mode" className="internship-form-label">
                        Preferred Working Mode
                      </label>
                      <select
                        id="modal-mode"
                        name="mode"
                        className="internship-form-input"
                        value={formData.mode}
                        onChange={handleChange}
                      >
                        <option value="Remote">100% Remote (Online)</option>
                        <option value="Hybrid">Hybrid (Remote + Periodic Office)</option>
                        <option value="In-Office">In-Office (Tiruvannamalai)</option>
                      </select>
                    </div>

                    {/* Duration */}
                    <div className="col-12 col-md-6">
                      <label htmlFor="modal-duration" className="internship-form-label">
                        Preferred Duration
                      </label>
                      <select
                        id="modal-duration"
                        name="duration"
                        className="internship-form-input"
                        value={formData.duration}
                        onChange={handleChange}
                      >
                        <option value="1 Month">1 Month</option>
                        <option value="2 Months">2 Months</option>
                        <option value="3 Months">3 Months (Recommended)</option>
                        <option value="6 Months">6 Months</option>
                      </select>
                    </div>

                    {/* Portfolio / Resume Link */}
                    <div className="col-12">
                      <label htmlFor="modal-portfolioLink" className="internship-form-label">
                        Resume / Portfolio / GitHub / LinkedIn Link
                      </label>
                      <input
                        id="modal-portfolioLink"
                        type="url"
                        name="portfolioLink"
                        className="internship-form-input"
                        placeholder="e.g. Google Drive link, GitHub profile, or LinkedIn URL"
                        value={formData.portfolioLink}
                        onChange={handleChange}
                      />
                      <span className="small text-muted" style={{ fontSize: "0.78rem" }}>
                        Tip: If sharing a Google Drive resume link, ensure view permissions are set to "Anyone with the link".
                      </span>
                    </div>

                    {/* Candidate Message / Notes */}
                    <div className="col-12">
                      <label htmlFor="modal-message" className="internship-form-label">
                        Why are you interested in this internship? (Optional)
                      </label>
                      <textarea
                        id="modal-message"
                        name="message"
                        rows="2"
                        className="internship-form-input"
                        placeholder="Tell us briefly about your technical interests or projects you've worked on..."
                        value={formData.message}
                        onChange={handleChange}
                        style={{ resize: "vertical" }}
                      />
                    </div>
                  </div>

                  {/* Submission Action */}
                  <div className="mt-4 pt-3 border-top d-flex flex-wrap align-items-center justify-content-between gap-3">
                    <span className="small text-muted">
                      🔒 Your details are kept confidential.
                    </span>

                    <div className="d-flex align-items-center gap-2">
                      <button
                        type="button"
                        onClick={handleResetAndClose}
                        className="btn btn-sm btn-light border px-3 py-2 font-weight-semibold"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary-gt d-inline-flex align-items-center gap-2 px-4 py-2 font-weight-bold"
                      >
                        <span>Submit Application</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
