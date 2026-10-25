import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import MegaMenu from "./MegaMenu";
import { SERVICES_NAV, COMPANY_INFO } from "../data/siteData";
import { ChevronDown, Menu, X, ArrowRight, PhoneCall } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDesktopServicesOpen(true);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setDesktopServicesOpen(false);
    }, 200);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer and desktop menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setDesktopServicesOpen(false);
  }, [location]);

  return (
    <nav className={`gt-navbar ${scrolled ? "shadow-sm py-2" : "py-3"}`}>
      <div className="container-fluid px-lg-5 d-flex align-items-center justify-content-between">
        {/* Brand Logo */}
        <Logo height={88} />

        {/* Desktop Navigation Links */}
        <div className="d-none d-xl-flex align-items-center gap-1">
          <NavLink to="/" className={({ isActive }) => `gt-nav-link ${isActive ? "active" : ""}`}>
            About Us
          </NavLink>

          {/* Mega Menu Dropdown Trigger */}
          <div
            className="mega-menu-trigger"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              className={`gt-nav-link border-0 bg-transparent ${location.pathname.startsWith('/services') || desktopServicesOpen ? "active" : ""}`}
              onClick={() => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
                setDesktopServicesOpen(!desktopServicesOpen);
              }}
              style={{ cursor: "pointer" }}
            >
              Services <ChevronDown size={14} style={{ transform: desktopServicesOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "0.2s" }} />
            </button>
            <MegaMenu
              show={desktopServicesOpen}
              onClose={() => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
                setDesktopServicesOpen(false);
              }}
            />
          </div>

          <NavLink to="/why-choose-us" className={({ isActive }) => `gt-nav-link ${isActive ? "active" : ""}`}>
            Why Choose Us
          </NavLink>

          <NavLink to="/portfolio" className={({ isActive }) => `gt-nav-link ${isActive ? "active" : ""}`}>
            Portfolio
          </NavLink>

          <NavLink to="/blog" className={({ isActive }) => `gt-nav-link ${isActive ? "active" : ""}`}>
            Blog
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) => `gt-nav-link ${isActive ? "active" : ""}`}>
            Contact Us
          </NavLink>
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="d-flex align-items-center gap-3">
          <Link to="/contact" className="btn btn-primary-gt d-none d-sm-inline-flex">
            Start Your Project <ArrowRight size={16} />
          </Link>

          {/* Hamburger Menu Toggle */}
          <button
            className="btn p-2 border-0 text-dark d-xl-none"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="mobile-nav-drawer d-xl-none">
          <div className="d-flex align-items-center justify-content-between mb-4 pb-3 border-bottom">
            <Logo height={48} />
            <button className="btn btn-sm text-dark p-1" onClick={() => setMobileOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <div className="d-flex flex-column gap-2">
            <NavLink to="/" className="gt-nav-link w-100 justify-content-between" onClick={() => setMobileOpen(false)}>
              About Us
            </NavLink>

            {/* Mobile Expandable Accordion for Services */}
            <div>
              <button
                className="gt-nav-link w-100 justify-content-between bg-transparent border-0 text-start"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                <span>Services</span>
                <ChevronDown size={16} style={{ transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "0.2s" }} />
              </button>

              {mobileServicesOpen && (
                <div className="ps-3 py-2 my-1 bg-light rounded-3 d-flex flex-column gap-2">
                  <Link to="/services" className="fw-bold text-primary-blue text-decoration-none py-1" onClick={() => setMobileOpen(false)}>
                    → All Services Overview
                  </Link>

                  {SERVICES_NAV.map((cat, idx) => (
                    <div key={idx} className="mb-2">
                      <div className="fw-bold text-dark small text-uppercase mb-1">{cat.category}</div>
                      {cat.items.map((item, iIdx) => (
                        <Link
                          key={iIdx}
                          to={item.path}
                          className="d-block py-1 ps-2 small text-secondary text-decoration-none"
                          onClick={() => setMobileOpen(false)}
                        >
                          • {item.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/why-choose-us" className="gt-nav-link w-100 justify-content-between" onClick={() => setMobileOpen(false)}>
              Why Choose Us
            </NavLink>

            <NavLink to="/portfolio" className="gt-nav-link w-100 justify-content-between" onClick={() => setMobileOpen(false)}>
              Portfolio
            </NavLink>

            <NavLink to="/blog" className="gt-nav-link w-100 justify-content-between" onClick={() => setMobileOpen(false)}>
              Blog
            </NavLink>

            <NavLink to="/contact" className="gt-nav-link w-100 justify-content-between" onClick={() => setMobileOpen(false)}>
              Contact Us
            </NavLink>

            <div className="mt-4 pt-3 border-top d-flex flex-column gap-3">
              <Link to="/contact" className="btn btn-primary-gt w-100 justify-content-center" onClick={() => setMobileOpen(false)}>
                Start Your Project <ArrowRight size={16} />
              </Link>
              <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`} className="d-flex align-items-center justify-content-center gap-2 text-dark font-weight-bold text-decoration-none py-2">
                <PhoneCall size={16} className="text-primary-blue" /> {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
