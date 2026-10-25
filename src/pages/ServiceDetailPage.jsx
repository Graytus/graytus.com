import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import SEO from "../components/SEO";
import CTASection from "../components/CTASection";
import ContactForm from "../components/ContactForm";
import ProcessSection from "../components/ProcessSection";
import WaterFillLayer from "../components/WaterFillLayer";
import { ALL_SERVICES_DETAILS, SERVICES_NAV, INDUSTRIES } from "../data/siteData";
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  ChevronRight, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  Star, 
  Clock, 
  Award, 
  Activity, 
  CreditCard, 
  ShoppingBag, 
  Building2, 
  Home, 
  Truck, 
  GraduationCap, 
  Film,
  Send,
  Check
} from "lucide-react";
import { motion } from "framer-motion";
import webImg from "../assets/services/web.png";
import dynamicImg from "../assets/services/dynamic.png";
import ecommerceImg from "../assets/services/ecommerce.png";
import mbaImg from "../assets/services/mba.png";
import softwareImg from "../assets/services/a.png";
import cadImg from "../assets/services/cad.png";
import saasImg from "../assets/services/saas.png";
import erpImg from "../assets/services/erp.png";
import otaImg from "../assets/services/ota.svg";

const INDUSTRY_ICON_MAP = {
  Activity: Activity,
  CreditCard: CreditCard,
  ShoppingBag: ShoppingBag,
  Building2: Building2,
  Home: Home,
  Truck: Truck,
  GraduationCap: GraduationCap,
  Film: Film
};

function formatSlugTitle(slug) {
  if (!slug) return "Service Details";
  return slug
    .split("-")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function ServiceDetailPage() {
  const { serviceSlug } = useParams();
  const [openFaq, setOpenFaq] = useState(0);
  const [methodologyInView, setMethodologyInView] = useState(false);
  const methodologyRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setMethodologyInView(true);
          }
        });
      },
      { threshold: 0.15 }
    );

    const currentRef = methodologyRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  // Pre-configured detailed data or smart dynamic fallback
  const detailedData = ALL_SERVICES_DETAILS[serviceSlug] || 
    (serviceSlug === "custom-software-development" ? ALL_SERVICES_DETAILS["software-development"] : null);

  const serviceTitle = detailedData?.title || `${formatSlugTitle(serviceSlug)} Services`;
  const categoryName = detailedData?.category || formatSlugTitle(serviceSlug);
  const heroSubtitle = detailedData?.subtitle || `High-performance ${formatSlugTitle(serviceSlug)} engineered for scale, security, and business growth.`;
  const heroImage = detailedData?.heroImage || "/images/hero-dashboard.jpg";
  const intro = detailedData?.intro || `At Graytus Technologies, we deliver bespoke ${formatSlugTitle(serviceSlug)} solutions tailored to your enterprise goals. Our team combines clean architecture, OWASP security compliance, and fluid UI/UX design.`;
  
  const whyChoose = detailedData?.whyChoose || [
    "Sub-second load speeds and 60 FPS fluid touch response",
    "Scalable microservices architecture built for high concurrency",
    "100% IP rights code ownership with zero recurring vendor lock-in",
    "Dedicated Agile scrum team with daily standups and weekly demos"
  ];
  
  const technologies = detailedData?.technologies || ["React", "JavaScript", "Bootstrap 5", "Node.js", "Python", "AWS", "PostgreSQL", "Docker"];
  
  const whatWeOffer = detailedData?.whatWeOffer || [
    { title: `Custom ${formatSlugTitle(serviceSlug)}`, desc: `Bespoke digital solutions tailored specifically to your company's operational requirements.` },
    { title: "Enterprise Systems Integration", desc: "Seamless API connections with your existing enterprise CRMs, ERPs, and databases." },
    { title: "Cloud Infrastructure & DevOps", desc: "Zero-downtime automated deployment pipelines hosted on AWS or Microsoft Azure." },
    { title: "24/7 SLA Maintenance & Support", desc: "Continuous monitoring, security patches, and roadmap feature upgrades." }
  ];
  
  const processSteps = detailedData?.process || [
    { step: "01", title: "Discovery & Blueprint", desc: "Deep dive into project scope, user stories, database schemas, and technical specs." },
    { step: "02", title: "UI/UX & Prototyping", desc: "Interactive Figma wireframes and clickable design token prototypes." },
    { step: "03", title: "Agile Development", desc: "Sprint-based coding utilizing clean modular React, Node, or Flutter architecture." },
    { step: "04", title: "QA & Device Lab Audit", desc: "Automated end-to-end testing across 50+ real physical mobile and browser viewports." },
    { step: "05", title: "Launch & Cloud Release", desc: "Zero-downtime release to production with SSL, CDN, and monitoring setup." },
    { step: "06", title: "Post-Launch Growth", desc: "Proactive 24/7 server SLA monitoring and continuous version optimization." }
  ];
  
  const benefits = detailedData?.benefits || [
    "3x Faster Time to Market using modular component architecture",
    "99.99% Guaranteed uptime reliability and crash monitoring",
    "Strict NDA protection and complete source code ownership"
  ];

  const faqs = detailedData?.faqs || [
    { q: `How long does a typical ${formatSlugTitle(serviceSlug)} project take?`, a: "Standard enterprise projects typically take 4 to 8 weeks depending on technical scope and custom feature requirements." },
    { q: "Who owns the final source code and intellectual property?", a: "You retain 100% full legal ownership of all source code, IP rights, and design assets upon project delivery." },
    { q: "Do you provide post-launch SLA maintenance and updates?", a: "Yes, we offer ongoing 24/7 SLA support packages including feature upgrades, security patches, and cloud monitoring." }
  ];

  // Find category sub-services for quick tab pills
  const currentCategoryObj = SERVICES_NAV.find(c => c.slug === serviceSlug || c.category === categoryName) || SERVICES_NAV[0];
  const relatedSubServices = currentCategoryObj?.items || [];

  const isWebDevelopment = 
    serviceSlug === "website-development" || 
    serviceSlug === "web-development" ||
    serviceSlug === "static-website" ||
    serviceSlug === "dynamic-website" ||
    serviceSlug === "ecommerce-website" ||
    serviceSlug === "ecommerce-development" ||
    serviceSlug === "custom-web-applications" ||
    serviceSlug === "reactjs-development" ||
    serviceSlug === "nodejs-development" ||
    serviceSlug === "full-stack-development" ||
    categoryName === "Website Development" ||
    serviceSlug?.includes("web");

  const isOta = serviceSlug === "ota-listing-management" || serviceSlug?.includes("ota");
  const isPropertyManagement = serviceSlug === "property-management-system" || serviceSlug?.includes("property-management");

  return (
    <>
      <SEO title={serviceTitle} description={heroSubtitle} />

      {/* 1. JPLoft Style Hero Section with Ratings & Lead Form */}
      <section className="bg-alt-light py-5 border-bottom position-relative overflow-hidden">
        <div className="container-fluid px-lg-5">
          {/* Breadcrumb */}
          <div className="gt-breadcrumb mb-4">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <Link to="/services">Services</Link>
            <ChevronRight size={14} />
            <span className="text-dark font-weight-bold">{categoryName}</span>
          </div>

          <div className="row g-5 align-items-center">
            {/* Left Hero Details */}
            <div className={isOta ? "col-12 col-lg-6" : "col-12 col-lg-7"}>
              {/* Trust Badges */}
              <div className="d-flex flex-wrap align-items-center gap-3 mb-3">
                {/* <div className="badge-pill-tag bg-primary-blue-light text-primary-blue d-inline-flex align-items-center gap-1">
                  <Star size={14} className="fill-current text-primary-blue" />
                  <span>4.9/5 Rating (700+ Projects)</span>
                </div> */}
                <div className="badge-pill-tag bg-emerald-light text-emerald-dark d-inline-flex align-items-center gap-1">
                  <Clock size={14} />
                  <span>100% On-Time Delivery</span>
                </div>
                {/* <div className="badge-pill-tag bg-purple-light text-purple-dark d-inline-flex align-items-center gap-1">
                  <Award size={14} />
                  <span>Certified Engineers</span>
                </div> */}
              </div>

              <h1 className="display-4 font-weight-extrabold text-dark mb-3" style={{ letterSpacing: "-1.5px", fontWeight: 800 }}>
                {serviceTitle}
              </h1>

              {detailedData?.tagline && (
                <div className="h5 fw-bold text-primary-blue mb-3" style={{ letterSpacing: "-0.2px" }}>
                  {detailedData.tagline}
                </div>
              )}

              <p className="lead text-secondary mb-4" style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
                {heroSubtitle}
              </p>

              {/* Bullet Key Takeaways / Key Features */}
              <div className="mb-4">
                {detailedData?.featuresHeading && (
                  <div className="fw-bold text-dark mb-2 text-uppercase tracking-wider" style={{ fontSize: "0.85rem", letterSpacing: "0.5px" }}>
                    {detailedData.featuresHeading}
                  </div>
                )}
                <div className="row g-2">
                  {whyChoose.map((item, idx) => (
                    <div key={idx} className="col-12 col-sm-6">
                      <div className="d-flex align-items-start gap-2 small text-dark font-weight-semibold">
                        <CheckCircle2 size={16} className="text-primary-blue flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hero Action Buttons */}
              <div className="d-flex flex-wrap gap-3 pt-2">
                <Link to="/contact" className="btn btn-primary-gt px-4 py-3">
                  Get Free Project Quote <ArrowRight size={18} />
                </Link>
                <a href="#process-steps" className="btn btn-outline-gt px-4 py-3">
                  Explore Solutions
                </a>
              </div>
            </div>

            {/* Right Hero: Visual Image for all services */}
            <div className={isOta ? "col-12 col-lg-6" : "col-12 col-lg-5"}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="d-flex align-items-center justify-content-center p-2"
              >
                <img
                  src={
                    isOta
                      ? otaImg
                      : serviceSlug === "dynamic-website"
                      ? dynamicImg
                      : serviceSlug === "ecommerce-website"
                      ? ecommerceImg
                      : (serviceSlug === "mobile-app-development" || categoryName === "Mobile App Development")
                      ? mbaImg
                      : serviceSlug === "saas-development"
                      ? saasImg
                      : serviceSlug === "erp-development"
                      ? erpImg
                      : (serviceSlug === "custom-software-development" || serviceSlug === "software-development" || categoryName === "Software Development" || categoryName === "Software Solutions")
                      ? cadImg
                      : isWebDevelopment
                      ? webImg
                      : detailedData?.heroImage || webImg
                  }
                  alt={serviceTitle}
                  className="img-fluid w-100 rounded-4"
                  style={{
                    maxHeight: isOta ? "560px" : "480px",
                    maxWidth: isOta ? "560px" : "100%",
                    objectFit: "contain",
                    display: "block",
                    filter: "drop-shadow(0 15px 30px rgba(3, 98, 195, 0.15))"
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sub-Services Fast Link Navigation Pills */}
      {relatedSubServices.length > 0 && (
        <section className="bg-white py-3 border-bottom shadow-sm sticky-top" style={{ top: "70px", zIndex: 1020 }}>
          <div className="container-fluid px-lg-5">
            <div className="d-flex align-items-center gap-2 overflow-auto py-1 text-nowrap">
              <span className="small font-weight-bold text-uppercase tracking-wider text-secondary me-2">
                Explore Services:
              </span>
              {relatedSubServices.map((sub, idx) => (
                <Link
                  key={idx}
                  to={sub.path}
                  className={`btn btn-sm rounded-pill px-3 py-1 text-decoration-none font-weight-semibold transition-all ${
                    sub.path === `/services/${serviceSlug}`
                      ? "btn-primary-gt shadow-sm"
                      : "btn-light border text-dark hover-blue"
                  }`}
                  style={{ fontSize: "0.85rem" }}
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. Development Process Timeline (01 to 06) */}
      <section id="process-steps" ref={methodologyRef} className="section-padding bg-white position-relative">
        <div className="container-fluid px-lg-5">
          <div className="text-center mb-5">
            <div className="badge-pill-tag mb-3">
              {isOta ? "ONBOARDING PROCESS" : isPropertyManagement ? "MANAGEMENT WORKFLOW" : "METHODOLOGY"}
            </div>
            <h2 className="section-title text-dark">
              {isOta ? (
                <>How Our OTA Listing <span className="text-primary-blue">Process Works</span></>
              ) : isPropertyManagement ? (
                <>How Our Property Management <span className="text-primary-blue">Process Works</span></>
              ) : (
                <>Our Proven <span className="text-primary-blue">Development Process</span></>
              )}
            </h2>
            <p className="section-subtitle">
              {isOta 
                ? "Get Your Property Listed with Graytus Technologies!" 
                : isPropertyManagement
                ? "A streamlined approach to handling bookings, rates, availability, and owner updates."
                : "A transparent, sprint-driven workflow from initial blueprinting to 24/7 SLA maintenance."}
            </p>
          </div>

          <div className="row g-4">
            {processSteps.map((step, idx) => (
              <div key={idx} className="col-12 col-sm-6 col-lg-4">
                <div
                  className={`timeline-step water-fill-card h-100 p-4 border rounded-4 bg-alt-light position-relative ${
                    methodologyInView ? "is-filled" : ""
                  }`}
                  style={{ minHeight: "190px" }}
                >
                  {/* Slow Water Fill Layer */}
                  <WaterFillLayer isFilled={methodologyInView} delay={idx * 0.25} />

                  <div className="timeline-number display-4 font-weight-extrabold text-primary-blue opacity-50 mb-2">
                    {step.step}
                  </div>
                  <h3 className="h5 font-weight-bold text-dark mb-2">
                    {step.title.replace(/^\d+\.\s*/, "")}
                  </h3>
                  <p className="small text-secondary mb-0">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW WE WORK (Exact Section from About Page) */}
      <ProcessSection
        title={
          serviceSlug === "ecommerce-website"
            ? <>E-commerce <span className="text-primary-blue">Website Development</span></>
            : serviceSlug === "mobile-app-development"
            ? <>Mobile App <span className="text-primary-blue">Development Process</span></>
            : serviceSlug === "android-app-development"
            ? <>Android App <span className="text-primary-blue">Development Process</span></>
            : isOta
            ? <>How Our OTA Listing <span className="text-primary-blue">Process Works</span></>
            : isPropertyManagement
            ? <>How Our Property Management <span className="text-primary-blue">Works</span></>
            : (detailedData?.howWeWorkTitle || undefined)
        }
        steps={detailedData?.howWeWork || detailedData?.process}
        subtitle={
          detailedData?.howWeWorkSubtitle ||
          (serviceSlug === "dynamic-website"
            ? "Our dynamic web development process guides your product smoothly from idea to launch with precision."
            : undefined)
        }
      />

      {/* 5. Industry Verticals We Serve */}
      <section className="section-padding bg-alt-light border-top border-bottom">
        <div className="container-fluid px-lg-5">
          <div className="text-center mb-5">
            <div className="badge-pill-tag mb-3">DOMAINS WE SERVE</div>
            <h2 className="section-title text-dark">
              Solutions Across <span className="text-primary-blue">Industry Verticals</span>
            </h2>
            <p className="section-subtitle">
              Delivering domain-tuned technology solutions for global market leaders and fast-growing enterprises.
            </p>
          </div>

          <div className="row g-4">
            {INDUSTRIES.map((ind, idx) => {
              const IconComponent = INDUSTRY_ICON_MAP[ind.icon] || Activity;
              return (
                <div key={idx} className="col-12 col-sm-6 col-lg-3">
                  <div className="p-4 bg-white rounded-4 border shadow-sm h-100 transition-all hover-shadow">
                    <div className="bg-primary-blue-light text-primary-blue p-3 rounded-3 d-inline-flex mb-3">
                      <IconComponent size={24} />
                    </div>
                    <h3 className="h6 font-weight-bold text-dark mb-2">{ind.name}</h3>
                    <p className="small text-secondary mb-0">{ind.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Centered FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-fluid px-lg-5">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <div className="text-center mb-4">
                <div className="badge-pill-tag mb-2">COMMON INQUIRIES</div>
                <h2 className="section-title text-dark">
                  Frequently Asked <span className="text-primary-blue">Questions</span>
                </h2>
              </div>
              <div className="gt-card p-4 p-md-4 border bg-alt-light rounded-4">
                <div className="d-flex flex-column gap-3">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="border rounded-3 p-3 bg-white">
                      <button
                        className="btn w-100 text-start p-0 font-weight-bold text-dark d-flex align-items-center justify-content-between border-0 bg-transparent"
                        onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                      >
                        <span style={{ fontSize: "0.95rem" }}>{faq.q}</span>
                        <ChevronDown
                          size={18}
                          className="text-primary-blue flex-shrink-0 ms-2"
                          style={{ transform: openFaq === idx ? "rotate(180deg)" : "rotate(0deg)", transition: "0.2s" }}
                        />
                      </button>
                      {openFaq === idx && (
                        <div className="mt-3 pt-2 border-top small text-secondary">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Final CTA Section */}
      <CTASection
        title={`Ready to Build Your ${formatSlugTitle(serviceSlug)} Application?`}
        subtitle="Contact our senior technical team today for a complimentary strategy session and project cost estimate."
        buttonText="Discuss Your Project Now"
      />
    </>
  );
}
