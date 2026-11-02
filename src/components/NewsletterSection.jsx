import React, { useState } from "react";

export default function NewsletterSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | success

  const validate = () => {
    const next = {};
    if (!name.trim()) next.name = "Name is required.";
    if (!email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // Store subscription locally (no backend available in this project).
    const subscriptions = JSON.parse(localStorage.getItem("graytus_newsletter") || "[]");
    subscriptions.push({ name: name.trim(), email: email.trim(), date: new Date().toISOString() });
    localStorage.setItem("graytus_newsletter", JSON.stringify(subscriptions));
    setStatus("success");
    setName("");
    setEmail("");
  };

  return (
    <section className="position-relative overflow-hidden py-5" style={{ background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)" }}>
      <div className="container-fluid px-lg-5 position-relative">
        <div className="row align-items-center g-4">
          <div className="col-12 col-lg-6 text-white">
            <h2 className="fw-bold mb-3" style={{ fontSize: "2rem" }}>Subscribe Now to Get Our Latest Digital Insights</h2>
            <p className="mb-0 opacity-90">Stay updated with the latest technology trends, development tips and digital innovations.</p>
          </div>
          <div className="col-12 col-lg-6">
            <form onSubmit={handleSubmit} noValidate className="bg-white rounded-4 p-4 shadow-lg">
              <div className="mb-3">
                <input
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
              <button type="submit" className="btn btn-primary-gt w-100">Subscribe</button>
              {status === "success" && (
                <div className="alert alert-success mt-3 mb-0">Thank you for subscribing! Your details have been saved.</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
