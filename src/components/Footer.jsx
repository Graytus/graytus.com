import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { COMPANY_INFO } from "../data/siteData";
import { Mail, Phone, MapPin } from "lucide-react";

const ICON_SIZE = 28;

// Social Media Badges matching the user reference design
const SOCIAL_ITEMS = [
  {
    name: "Instagram",
    url: COMPANY_INFO.socials.instagram || "https://www.instagram.com/graytustechnologies/",
    icon: (
      <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="footer-ig-grad" cx="30%" cy="107%" r="120%" fx="30%" fy="107%">
            <stop offset="0%" stopColor="#fdf497" />
            <stop offset="10%" stopColor="#fdf497" />
            <stop offset="45%" stopColor="#fd5949" />
            <stop offset="65%" stopColor="#d6249f" />
            <stop offset="90%" stopColor="#285AEB" />
          </radialGradient>
        </defs>
        <circle cx="24" cy="24" r="24" fill="url(#footer-ig-grad)" />
        <rect x="13" y="13" width="22" height="22" rx="6" stroke="#ffffff" strokeWidth="2.3" fill="none" />
        <circle cx="24" cy="24" r="5.2" stroke="#ffffff" strokeWidth="2.3" fill="none" />
        <circle cx="30.5" cy="17.5" r="1.4" fill="#ffffff" />
      </svg>
    )
  },
  {
    name: "LinkedIn",
    url: COMPANY_INFO.socials.linkedin || "https://www.linkedin.com/feed/",
    icon: (
      <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="24" fill="#0A66C2" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.2 15.8C18.2 17.1 17.2 18.1 15.8 18.1C14.4 18.1 13.4 17.1 13.4 15.8C13.4 14.5 14.4 13.5 15.8 13.5C17.2 13.5 18.2 14.5 18.2 15.8ZM13.7 20.2H17.9V34.5H13.7V20.2ZM24.6 20.2H20.4V34.5H24.6V27.1C24.6 23 29.7 22.6 29.7 27.1V34.5H33.9V25.6C33.9 18.7 26.1 18.9 24.6 22.3V20.2Z"
          fill="#ffffff"
        />
      </svg>
    )
  },
  {
    name: "WhatsApp",
    url: COMPANY_INFO.socials.whatsapp || "https://wa.me/917358677780",
    icon: (
      <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="24" fill="#25D366" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 11.5C17.1 11.5 11.5 17.1 11.5 24C11.5 26.4 12.2 28.7 13.5 30.6L12 36.5L18.1 34.9C19.9 35.9 21.9 36.5 24 36.5C30.9 36.5 36.5 30.9 36.5 24C36.5 17.1 30.9 11.5 24 11.5Z"
          stroke="#ffffff"
          strokeWidth="2.3"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M29.2 27.5C28.8 28.3 27.7 29 26.8 29.2C26.2 29.3 25.4 29.4 22.7 28.3C19.3 26.9 17.1 23.4 16.9 23.2C16.8 23 15.5 21.3 15.5 19.6C15.5 17.9 16.4 17 16.7 16.7C17 16.4 17.5 16.3 17.9 16.3C18 16.3 18.2 16.3 18.3 16.3C18.6 16.3 18.8 16.4 19 16.9C19.3 17.5 19.9 19.1 20 19.3C20.1 19.5 20.2 19.7 20.1 19.9C20 20.1 19.9 20.2 19.7 20.4C19.5 20.6 19.4 20.8 19.2 21C19 21.2 18.9 21.4 19.1 21.7C19.3 22 20 23.1 21 24C22.3 25.1 23.3 25.5 23.7 25.6C24 25.7 24.2 25.7 24.4 25.5C24.6 25.2 25.2 24.4 25.4 24.1C25.6 23.8 25.8 23.8 26.1 23.9C26.4 24 28 24.8 28.3 24.9C28.6 25.1 28.8 25.2 28.9 25.3C29 25.5 29 26.1 28.7 26.9L29.2 27.5Z"
          fill="#ffffff"
        />
      </svg>
    )
  }
];

export default function Footer() {
  return (
    <footer className="py-4 border-top" style={{ backgroundColor: "#f8fafc", borderColor: "#e2e8f0" }}>
      <div className="container-fluid px-lg-5">
        <div className="row g-4 pb-3">
          {/* Column 1: Brand Logo & Overview */}
          <div className="col-12 col-lg-4">
            <div className="mb-2">
              <Logo variant="dark" height={44} />
            </div>
            <p className="small mb-0" style={{ color: "#475569", lineHeight: "1.6", maxWidth: "340px", fontSize: "0.85rem" }}>
              {COMPANY_INFO.description}
            </p>
          </div>

          {/* Column 2: Company Links (Matches Navbar Exactly) */}
          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="font-weight-extrabold text-uppercase tracking-wider small mb-2" style={{ color: "#0f172a", letterSpacing: "0.5px", fontSize: "0.8rem" }}>
              Company
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-1 mb-0 small" style={{ fontSize: "0.85rem" }}>
              <li>
                <Link to="/" className="text-decoration-none hover-blue" style={{ color: "#475569" }}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-decoration-none hover-blue" style={{ color: "#475569" }}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/why-choose-us" className="text-decoration-none hover-blue" style={{ color: "#475569" }}>
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-decoration-none hover-blue" style={{ color: "#475569" }}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-decoration-none hover-blue" style={{ color: "#475569" }}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/internship" className="text-decoration-none hover-blue" style={{ color: "#475569" }}>
                  Internship
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-decoration-none hover-blue" style={{ color: "#475569" }}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Services */}
          <div className="col-6 col-md-3 col-lg-3">
            <h6 className="font-weight-extrabold text-uppercase tracking-wider small mb-2" style={{ color: "#0f172a", letterSpacing: "0.5px", fontSize: "0.8rem" }}>
              Core Services
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-1 mb-0 small" style={{ fontSize: "0.85rem" }}>
              <li>
                <Link to="/services/website-development" className="text-decoration-none hover-blue" style={{ color: "#475569" }}>
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services/mobile-apps" className="text-decoration-none hover-blue" style={{ color: "#475569" }}>
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link to="/services/software-development" className="text-decoration-none hover-blue" style={{ color: "#475569" }}>
                  Custom Software (ERP/CRM)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div className="col-12 col-md-6 col-lg-3">
            <h6 className="font-weight-extrabold text-uppercase tracking-wider small mb-2" style={{ color: "#0f172a", letterSpacing: "0.5px", fontSize: "0.8rem" }}>
              Contact
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0 small" style={{ fontSize: "0.85rem" }}>
              <li className="d-flex align-items-start gap-2" style={{ color: "#475569" }}>
                <MapPin size={15} className="text-primary-blue flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="d-flex align-items-center gap-2" style={{ color: "#475569" }}>
                <Mail size={15} className="text-primary-blue flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-decoration-none hover-blue" style={{ color: "#475569" }}>
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="d-flex align-items-center gap-2" style={{ color: "#475569" }}>
                <Phone size={15} className="text-primary-blue flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`} className="text-decoration-none hover-blue" style={{ color: "#475569" }}>
                  {COMPANY_INFO.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Centered Social Media Section (Compact & Sleek) */}
        <div className="py-2.5 border-bottom text-center" style={{ borderColor: "#e2e8f0" }}>
          <div className="d-flex align-items-center justify-content-center gap-3 gap-md-4 flex-wrap">
            {SOCIAL_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="footer-social-link"
                title={`Follow us on ${item.name}`}
              >
                <div className="footer-social-icon-wrapper">
                  {item.icon}
                </div>
                <span className="footer-social-label">
                  {item.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-2.5 d-flex flex-column flex-md-row align-items-center justify-content-between gap-2 small" style={{ color: "#64748b", fontSize: "0.8rem" }}>
          <div>
            © {new Date().getFullYear()} Graytus Technologies. All Rights Reserved.
          </div>
          <div className="d-flex align-items-center gap-3">
            <Link to="/privacy-policy" className="text-decoration-none hover-blue" style={{ color: "#64748b" }}>
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-decoration-none hover-blue" style={{ color: "#64748b" }}>
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
