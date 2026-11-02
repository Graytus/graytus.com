import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import MegaMenu from "./MegaMenu";
import { SERVICES_NAV, COMPANY_INFO } from "../data/siteData";
import { ChevronDown, Menu, X, ArrowRight, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDesktopServicesOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav className={`gt-navbar${scrolled ? " scrolled" : ""}${scrolled ? " py-2" : " py-3"}`}>
      <div className="container-fluid px-4 px-lg-5 d-flex align-items-center justify-content-between">

        {/* Brand Logo */}
        <Logo height={96} />

        {/* Desktop Navigation */}
        <div className="d-none d-xl-flex align-items-center gap-1">
          <NavLink to="/" className={({ isActive }) => `gt-nav-link${isActive ? " active" : ""}`}>
            About Us
          </NavLink>

          {/* Services Mega Menu */}
          <div
            className="mega-menu-trigger"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              className={`gt-nav-link border-0 bg-transparent${location.pathname.startsWith("/services") || desktopServicesOpen ? " active" : ""}`}
              onClick={() => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
                setDesktopServicesOpen(!desktopServicesOpen);
              }}
              style={{ cursor: "pointer" }}
            >
              Services
              <motion.span
                animate={{ rotate: desktopServicesOpen ? 180 : 0 }}
                transition={{ duration: 0.22, ease: "easeInOut" }}
                className="d-inline-flex"
              >
                <ChevronDown size={14} />
              </motion.span>
            </button>
            <MegaMenu
              show={desktopServicesOpen}
              onClose={() => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
                setDesktopServicesOpen(false);
              }}
            />
          </div>

          <NavLink to="/why-choose-us" className={({ isActive }) => `gt-nav-link${isActive ? " active" : ""}`}>
            Why Choose Us
          </NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => `gt-nav-link${isActive ? " active" : ""}`}>
            Portfolio
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => `gt-nav-link${isActive ? " active" : ""}`}>
            Blog
          </NavLink>
          <NavLink to="/internship" className={({ isActive }) => `gt-nav-link${isActive ? " active" : ""}`}>
            Internship
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `gt-nav-link${isActive ? " active" : ""}`}>
            Contact Us
          </NavLink>
        </div>

        {/* CTA + Hamburger */}
        <div className="d-flex align-items-center gap-3">
          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="d-none d-sm-block"
          >
            <Link to="/contact" className="btn btn-primary-gt">
              Start Your Project <ArrowRight size={16} />
            </Link>
          </motion.div>

          <button
            className="btn p-2 border-0 text-dark d-xl-none"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(16,24,40,0.45)",
                zIndex: 1099,
                backdropFilter: "blur(2px)",
              }}
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 340, damping: 38 }}
              className="mobile-nav-drawer d-xl-none"
            >
              <div className="d-flex align-items-center justify-content-between mb-4 pb-3 border-bottom">
                <Logo height={64} />
                <button className="btn btn-sm text-dark p-1" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                  <X size={22} />
                </button>
              </div>

              <div className="d-flex flex-column gap-1">
                <NavLink to="/" className="gt-nav-link w-100 justify-content-between" onClick={() => setMobileOpen(false)}>
                  About Us
                </NavLink>

                {/* Accordion Services */}
                <div>
                  <button
                    className="gt-nav-link w-100 justify-content-between bg-transparent border-0 text-start"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  >
                    <span>Services</span>
                    <motion.span
                      animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                      transition={{ duration: 0.22 }}
                      className="d-inline-flex"
                    >
                      <ChevronDown size={16} />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="ps-3 py-2 my-1 rounded-3 d-flex flex-column gap-2" style={{ background: "#F8FAFC" }}>
                          <Link to="/services" className="fw-bold text-decoration-none py-1" style={{ color: "#2563EB" }} onClick={() => setMobileOpen(false)}>
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
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <NavLink to="/why-choose-us" className="gt-nav-link w-100 justify-content-between" onClick={() => setMobileOpen(false)}>Why Choose Us</NavLink>
                <NavLink to="/portfolio" className="gt-nav-link w-100 justify-content-between" onClick={() => setMobileOpen(false)}>Portfolio</NavLink>
                <NavLink to="/blog" className="gt-nav-link w-100 justify-content-between" onClick={() => setMobileOpen(false)}>Blog</NavLink>
                <NavLink to="/internship" className="gt-nav-link w-100 justify-content-between" onClick={() => setMobileOpen(false)}>Internship</NavLink>
                <NavLink to="/contact" className="gt-nav-link w-100 justify-content-between" onClick={() => setMobileOpen(false)}>Contact Us</NavLink>

                <div className="mt-4 pt-3 border-top d-flex flex-column gap-3">
                  <Link to="/contact" className="btn btn-primary-gt w-100 justify-content-center" onClick={() => setMobileOpen(false)}>
                    Start Your Project <ArrowRight size={16} />
                  </Link>
                  <a
                    href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, "")}`}
                    className="d-flex align-items-center justify-content-center gap-2 text-dark fw-bold text-decoration-none py-2"
                  >
                    <PhoneCall size={16} style={{ color: "#2563EB" }} />
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
