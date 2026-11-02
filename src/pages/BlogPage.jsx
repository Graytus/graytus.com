import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import CTASection from "../components/CTASection";
import { FEATURED_POST, BLOG_POSTS } from "../data/blogPosts";
import {
  Search,
  X,
  ArrowRight,
  Clock,
  Calendar,
  Sparkles,
  BookOpen,
  Layers,
  Globe,
  Smartphone,
  Cpu,
  Flame,
  Send,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Categories configuration with dedicated minimal outline icons
const CATEGORY_ITEMS = [
  { name: "All Articles", icon: Layers },
  { name: "Web Development", icon: Globe },
  { name: "App Development", icon: Smartphone },
  { name: "Software Development", icon: Cpu },
  { name: "AI & Emerging Tech", icon: Sparkles }
];

// 3 Curated Popular Articles for Sidebar
const POPULAR_ARTICLES = [
  {
    title: "Why Your Business Needs a Professional Website",
    slug: "why-your-business-needs-a-professional-website",
    category: "Web Development",
    readTime: "5 min read",
    image: "/images/projects/web.png",
    alt: "Corporate Website Architecture and Strategy"
  },
  {
    title: "Does Your Business Need a Mobile App?",
    slug: "does-your-business-need-a-mobile-app",
    category: "App Development",
    readTime: "5 min read",
    image: "/images/projects/app.png",
    alt: "Mobile App Development Interface"
  },
  {
    title: "How AI Can Help Your Business Save Time",
    slug: "how-ai-can-help-your-business-save-time",
    category: "Artificial Intelligence",
    readTime: "5 min read",
    image: "/images/blog-ai.jpg",
    alt: "AI and Machine Learning for Business Efficiency"
  }
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Articles");

  // Newsletter interactive state
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState("idle"); // 'idle' | 'success' | 'error'
  const [newsletterMessage, setNewsletterMessage] = useState("");

  // Category matching helper
  const isCategoryMatch = (postCat, selectedCat) => {
    if (selectedCat === "All Articles") return true;
    if (selectedCat === "AI & Emerging Tech") {
      return (
        postCat === "Artificial Intelligence" ||
        postCat === "AI & Emerging Tech" ||
        postCat.toLowerCase().includes("ai")
      );
    }
    return postCat === selectedCat;
  };

  // Determine if Featured Article matches current search & category filter
  const matchesFeatured = useMemo(() => {
    const matchesCat = isCategoryMatch(FEATURED_POST.category, activeCategory);
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !q ||
      FEATURED_POST.title.toLowerCase().includes(q) ||
      FEATURED_POST.description.toLowerCase().includes(q) ||
      FEATURED_POST.category.toLowerCase().includes(q);

    return matchesCat && matchesSearch;
  }, [activeCategory, searchQuery]);

  // Filter latest articles
  const filteredLatest = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return BLOG_POSTS.filter((post) => {
      const matchesCat = isCategoryMatch(post.category, activeCategory);
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.description.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q);

      return matchesCat && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const hasResults = matchesFeatured || filteredLatest.length > 0;

  const handleResetFilters = () => {
    setSearchQuery("");
    setActiveCategory("All Articles");
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const trimmed = newsletterEmail.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmed || !emailRegex.test(trimmed)) {
      setNewsletterStatus("error");
      setNewsletterMessage("Please enter a valid work email address.");
      return;
    }

    setNewsletterStatus("success");
    setNewsletterMessage("Thank you for subscribing! We'll keep you updated with our latest insights.");
    setNewsletterEmail("");
  };

  return (
    <>
      <SEO
        title="Tech Insights & Resources | Graytus Technologies Blog"
        description="Guides, best practices, and industry trends on Web Development, App Development, Software Development, and Artificial Intelligence."
      />

      {/* =========================================================================
          SECTION 1: HERO HEADER (#0057CC Brand Background)
          ========================================================================= */}
      <section
        className="position-relative overflow-hidden py-5"
        style={{
          backgroundColor: "#0057CC",
          backgroundImage: "linear-gradient(135deg, #0057CC 0%, #0045A6 100%)"
        }}
      >
        {/* Subtle decorative radial glow */}
        <div
          className="position-absolute rounded-circle"
          style={{
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 70%)",
            top: "-100px",
            right: "10%",
            filter: "blur(50px)",
            pointerEvents: "none"
          }}
        />

        <div className="container-fluid px-4 px-lg-5 py-3 position-relative z-1 text-center text-md-start">
          <div className="row align-items-center g-4">
            <div className="col-12 col-lg-10">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Small Rounded Badge */}
                <div
                  className="d-inline-flex align-items-center gap-2 px-3 py-1.5 rounded-pill mb-3"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    color: "#FFFFFF",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    letterSpacing: "0.5px"
                  }}
                >
                  <span
                    className="rounded-circle bg-white"
                    style={{ width: "7px", height: "7px" }}
                  />
                  <span>Graytus Blog</span>
                </div>

                {/* Heading */}
                <h1
                  className="display-5 font-weight-extrabold text-white mb-3"
                  style={{
                    letterSpacing: "-0.02em",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 800,
                    lineHeight: 1.2
                  }}
                >
                  Tech Insights & Resources
                </h1>

                {/* Description */}
                <p
                  className="lead text-white-50 mb-4"
                  style={{
                    color: "rgba(255, 255, 255, 0.9)",
                    fontSize: "1.1rem",
                    lineHeight: 1.65,
                    maxWidth: "680px"
                  }}
                >
                  Guides, best practices, and industry trends on Web Development, App Development, and Software Development.
                </p>

                {/* 3 Quick Pill Tags */}
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-start gap-2">
                  <div
                    className="d-inline-flex align-items-center gap-2 px-3 py-1.5 rounded-pill text-white"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.12)",
                      border: "1px solid rgba(255, 255, 255, 0.22)",
                      fontSize: "0.85rem",
                      fontWeight: 600
                    }}
                  >
                    <Globe size={15} />
                    <span>Web Development</span>
                  </div>

                  <div
                    className="d-inline-flex align-items-center gap-2 px-3 py-1.5 rounded-pill text-white"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.12)",
                      border: "1px solid rgba(255, 255, 255, 0.22)",
                      fontSize: "0.85rem",
                      fontWeight: 600
                    }}
                  >
                    <Smartphone size={15} />
                    <span>App Development</span>
                  </div>

                  <div
                    className="d-inline-flex align-items-center gap-2 px-3 py-1.5 rounded-pill text-white"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.12)",
                      border: "1px solid rgba(255, 255, 255, 0.22)",
                      fontSize: "0.85rem",
                      fontWeight: 600
                    }}
                  >
                    <Cpu size={15} />
                    <span>Software Development</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: BLOG CATEGORY NAVIGATION (Filter Buttons)
          ========================================================================= */}
      <div
        className="border-bottom py-3 sticky-top"
        style={{
          backgroundColor: "#FFFFFF",
          borderColor: "#E3EAF5",
          zIndex: 10
        }}
      >
        <div className="container-fluid px-4 px-lg-5">
          <div
            className="d-flex align-items-center gap-2 overflow-x-auto py-1"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none"
            }}
            role="tablist"
            aria-label="Filter blog articles by category"
          >
            {CATEGORY_ITEMS.map((item) => {
              const isActive = activeCategory === item.name;
              const IconComponent = item.icon;
              return (
                <button
                  key={item.name}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill text-nowrap border"
                  style={{
                    backgroundColor: isActive ? "#071D49" : "#FFFFFF",
                    color: isActive ? "#FFFFFF" : "#14213D",
                    borderColor: isActive ? "#071D49" : "#E3EAF5",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    cursor: "pointer",
                    boxShadow: isActive ? "0 4px 14px rgba(7, 29, 73, 0.18)" : "none",
                    transition: "all 0.22s ease"
                  }}
                  onClick={() => setActiveCategory(item.name)}
                >
                  <IconComponent
                    size={15}
                    style={{ color: isActive ? "#60A5FA" : "#0057CC" }}
                  />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* =========================================================================
          SECTION 3: MAIN TWO-COLUMN WORKSPACE (70% Left / 30% Right Sidebar)
          ========================================================================= */}
      <section className="py-5" style={{ backgroundColor: "#F4F8FF" }}>
        <div className="container-fluid px-4 px-lg-5">
          <div className="row g-5">
            {/* ── Left Content Area: 70% width (col-12 col-lg-8) ── */}
            <div className="col-12 col-lg-8">
              {/* Empty Results State */}
              {!hasResults && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-center py-5 my-4 px-4 bg-white rounded-4 border"
                  style={{ borderColor: "#E3EAF5" }}
                >
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                    style={{
                      width: "68px",
                      height: "68px",
                      backgroundColor: "#F4F8FF",
                      color: "#0057CC"
                    }}
                  >
                    <BookOpen size={30} />
                  </div>
                  <h3 className="h4 font-weight-bold mb-2" style={{ color: "#071D49" }}>
                    No matching articles found
                  </h3>
                  <p className="text-secondary mx-auto mb-4" style={{ maxWidth: "460px", fontSize: "0.95rem" }}>
                    We couldn't find any articles matching {searchQuery ? `"${searchQuery}"` : "your filter"}. Try different search terms or reset your filters.
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary-gt d-inline-flex align-items-center gap-2"
                    onClick={handleResetFilters}
                    style={{ backgroundColor: "#0057CC", borderColor: "#0057CC" }}
                  >
                    <span>Reset All Filters</span>
                    <ArrowRight size={16} />
                  </button>
                </motion.div>
              )}

              {/* ── 1. Featured Article Section ── */}
              {matchesFeatured && (
                <div className="mb-5">
                  <article
                    className="bg-white overflow-hidden"
                    style={{
                      borderRadius: "20px",
                      border: "1px solid #E3EAF5",
                      boxShadow: "0 10px 30px rgba(7, 29, 73, 0.05)"
                    }}
                  >
                    <div className="row g-0 align-items-stretch">
                      {/* Left: Large Rectangular Article Image */}
                      <div className="col-12 col-md-5 position-relative overflow-hidden" style={{ minHeight: "280px" }}>
                        <Link to={`/blog/${FEATURED_POST.slug}`} className="d-block w-100 h-100">
                          <img
                            src={FEATURED_POST.image}
                            alt={FEATURED_POST.alt}
                            className="w-100 h-100 object-fit-cover blog-card-img"
                            style={{ minHeight: "280px" }}
                            loading="eager"
                          />
                        </Link>
                        {/* Floating "Featured Article" Badge */}
                        <div className="position-absolute top-0 start-0 m-3 z-2">
                          <span
                            className="badge bg-white text-dark shadow-sm px-3 py-1.5 rounded-pill font-weight-bold d-inline-flex align-items-center gap-1.5"
                            style={{
                              fontSize: "0.78rem",
                              border: "1px solid #E3EAF5",
                              color: "#071D49"
                            }}
                          >
                            <Sparkles size={12} style={{ color: "#0057CC" }} />
                            <span>Featured Article</span>
                          </span>
                        </div>
                      </div>

                      {/* Right: Article Information */}
                      <div className="col-12 col-md-7 p-4 p-lg-5 d-flex flex-column justify-content-between">
                        <div>
                          {/* Category, Date & Read Time */}
                          <div className="d-flex flex-wrap align-items-center gap-3 mb-3">
                            <span
                              className="badge"
                              style={{
                                backgroundColor: "#EAF2FF",
                                color: "#0057CC",
                                fontWeight: 700,
                                padding: "6px 12px",
                                borderRadius: "8px",
                                fontSize: "0.78rem"
                              }}
                            >
                              {FEATURED_POST.category}
                            </span>
                            <span className="text-muted small d-inline-flex align-items-center gap-1">
                              <Calendar size={13} /> {FEATURED_POST.date}
                            </span>
                            <span className="text-muted small d-inline-flex align-items-center gap-1">
                              <Clock size={13} /> {FEATURED_POST.readTime}
                            </span>
                          </div>

                          {/* Title */}
                          <h2
                            className="h3 font-weight-bold mb-3"
                            style={{
                              color: "#071D49",
                              lineHeight: "1.3",
                              letterSpacing: "-0.015em",
                              fontFamily: "'Plus Jakarta Sans', sans-serif"
                            }}
                          >
                            <Link
                              to={`/blog/${FEATURED_POST.slug}`}
                              className="text-decoration-none"
                              style={{ color: "#071D49" }}
                            >
                              {FEATURED_POST.title}
                            </Link>
                          </h2>

                          {/* Description */}
                          <p
                            className="mb-4"
                            style={{
                              color: "#475569",
                              fontSize: "0.95rem",
                              lineHeight: "1.65"
                            }}
                          >
                            {FEATURED_POST.description}
                          </p>
                        </div>

                        {/* Read Article CTA Button */}
                        <div>
                          <Link
                            to={`/blog/${FEATURED_POST.slug}`}
                            className="btn btn-primary-gt d-inline-flex align-items-center gap-2"
                            style={{
                              backgroundColor: "#0057CC",
                              borderColor: "#0057CC",
                              borderRadius: "12px",
                              padding: "10px 22px"
                            }}
                          >
                            <span>Read Article</span>
                            <ArrowRight size={16} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              )}

              {/* ── 2. Latest Articles Section ── */}
              {filteredLatest.length > 0 && (
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom" style={{ borderColor: "#E3EAF5" }}>
                    <div>
                      <h2
                        className="h4 font-weight-bold mb-0"
                        style={{ color: "#071D49", letterSpacing: "-0.02em" }}
                      >
                        Latest Articles
                      </h2>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setActiveCategory("All Articles");
                        setSearchQuery("");
                      }}
                      className="btn btn-link text-decoration-none p-0 d-inline-flex align-items-center gap-1 font-weight-bold small"
                      style={{ color: "#0057CC" }}
                    >
                      <span>View All Articles</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>

                  {/* Responsive Grid */}
                  <div className="row g-4">
                    {filteredLatest.map((post, idx) => (
                      <motion.div
                        key={post.slug}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.04 }}
                        className="col-12 col-md-6"
                      >
                        <article
                          className="bg-white overflow-hidden h-100 d-flex flex-column blog-card"
                          style={{
                            borderRadius: "18px",
                            border: "1px solid #E3EAF5",
                            boxShadow: "0 6px 20px rgba(7, 29, 73, 0.04)"
                          }}
                        >
                          {/* Card Image */}
                          <div className="position-relative overflow-hidden" style={{ height: "200px" }}>
                            <Link to={`/blog/${post.slug}`} tabIndex="-1" aria-hidden="true" className="d-block w-100 h-100">
                              <img
                                src={post.image}
                                alt={post.alt}
                                className="w-100 h-100 object-fit-cover blog-card-img"
                                loading="lazy"
                              />
                            </Link>

                            {/* Floating Category Badge */}
                            <div className="position-absolute top-0 end-0 m-3 z-2">
                              <span
                                className="badge text-white px-3 py-1.5 rounded-pill font-weight-bold"
                                style={{
                                  backgroundColor: "rgba(7, 29, 73, 0.88)",
                                  backdropFilter: "blur(4px)",
                                  fontSize: "0.75rem",
                                  boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
                                }}
                              >
                                {post.category}
                              </span>
                            </div>
                          </div>

                          {/* Card Content */}
                          <div className="p-4 d-flex flex-column justify-content-between flex-grow-1">
                            <div>
                              {/* Metadata */}
                              <div className="d-flex align-items-center gap-3 small text-muted mb-2">
                                <span className="d-inline-flex align-items-center gap-1" style={{ fontSize: "0.8rem" }}>
                                  <Calendar size={13} /> {post.date}
                                </span>
                                <span className="d-inline-flex align-items-center gap-1" style={{ fontSize: "0.8rem" }}>
                                  <Clock size={13} /> {post.readTime}
                                </span>
                              </div>

                              {/* Title */}
                              <h3
                                className="h5 font-weight-bold mb-2 line-clamp-2"
                                style={{
                                  lineHeight: "1.38",
                                  color: "#071D49",
                                  fontFamily: "'Plus Jakarta Sans', sans-serif"
                                }}
                              >
                                <Link
                                  to={`/blog/${post.slug}`}
                                  className="text-decoration-none"
                                  style={{ color: "#071D49" }}
                                >
                                  {post.title}
                                </Link>
                              </h3>

                              {/* Description */}
                              <p
                                className="small mb-4 line-clamp-2"
                                style={{ color: "#475569", lineHeight: "1.6" }}
                              >
                                {post.description}
                              </p>
                            </div>

                            {/* Read More Link */}
                            <div
                              className="pt-3 border-top d-flex align-items-center justify-content-between"
                              style={{ borderColor: "#F1F5F9" }}
                            >
                              <span className="small text-muted" style={{ fontSize: "0.8rem" }}>
                                Graytus Tech
                              </span>
                              <Link
                                to={`/blog/${post.slug}`}
                                className="font-weight-bold small d-inline-flex align-items-center gap-1 text-decoration-none"
                                style={{ color: "#0057CC", fontSize: "0.85rem" }}
                                aria-label={`Read more about ${post.title}`}
                              >
                                <span>Read More</span>
                                <ArrowRight size={14} />
                              </Link>
                            </div>
                          </div>
                        </article>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ── Right Sidebar: 30% width (col-12 col-lg-4) ── */}
            <div className="col-12 col-lg-4">
              <aside
                className="d-flex flex-column gap-4"
                style={{
                  position: "sticky",
                  top: "90px"
                }}
              >
                {/* ── Widget 1: Search Box ── */}
                <div
                  className="bg-white p-3 shadow-sm"
                  style={{
                    borderRadius: "18px",
                    border: "1px solid #E3EAF5"
                  }}
                >
                  <label htmlFor="sidebar-blog-search" className="visually-hidden">
                    Search blog articles
                  </label>
                  <div className="position-relative">
                    <Search
                      size={18}
                      className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary"
                      aria-hidden="true"
                    />
                    <input
                      id="sidebar-blog-search"
                      type="text"
                      className="form-control"
                      placeholder="Search blog articles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      style={{
                        paddingLeft: "42px",
                        paddingRight: searchQuery ? "40px" : "14px",
                        paddingTop: "12px",
                        paddingBottom: "12px",
                        borderRadius: "14px",
                        borderColor: "#E3EAF5",
                        backgroundColor: "#F8FAFC",
                        fontSize: "0.92rem",
                        color: "#14213D"
                      }}
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        className="btn btn-sm position-absolute top-50 end-0 translate-middle-y me-2 text-secondary p-1 border-0 rounded-circle"
                        onClick={() => setSearchQuery("")}
                        aria-label="Clear search input"
                        style={{ background: "transparent" }}
                      >
                        <X size={16} />
                      </button>
                    )}
                  </div>
                </div>

                {/* ── Widget 2: Popular Articles ── */}
                <div
                  className="bg-white p-4 shadow-sm"
                  style={{
                    borderRadius: "20px",
                    border: "1px solid #E3EAF5"
                  }}
                >
                  <div className="d-flex align-items-center gap-2 mb-3 pb-2 border-bottom" style={{ borderColor: "#F1F5F9" }}>
                    <Flame size={19} style={{ color: "#EF4444" }} />
                    <h3
                      className="h6 font-weight-bold mb-0 text-uppercase tracking-wider"
                      style={{ color: "#071D49", letterSpacing: "0.5px", fontSize: "0.88rem" }}
                    >
                      Popular Articles
                    </h3>
                  </div>

                  <div className="d-flex flex-column gap-3">
                    {POPULAR_ARTICLES.map((article, idx) => (
                      <div
                        key={idx}
                        className="d-flex align-items-center gap-3 pb-2.5 border-bottom last-border-0"
                        style={{ borderColor: "#F1F5F9" }}
                      >
                        {/* Thumbnail */}
                        <Link
                          to={`/blog/${article.slug}`}
                          className="flex-shrink-0 overflow-hidden"
                          style={{
                            width: "68px",
                            height: "68px",
                            borderRadius: "12px",
                            border: "1px solid #E3EAF5"
                          }}
                        >
                          <img
                            src={article.image}
                            alt={article.alt}
                            className="w-100 h-100 object-fit-cover blog-card-img"
                            loading="lazy"
                          />
                        </Link>

                        {/* Text Information */}
                        <div className="flex-grow-1 min-w-0">
                          <h4
                            className="font-weight-bold mb-1 line-clamp-2"
                            style={{ fontSize: "0.9rem", lineHeight: "1.35" }}
                          >
                            <Link
                              to={`/blog/${article.slug}`}
                              className="text-decoration-none"
                              style={{ color: "#071D49" }}
                            >
                              {article.title}
                            </Link>
                          </h4>
                          <span
                            className="text-muted d-inline-flex align-items-center gap-1"
                            style={{ fontSize: "0.78rem" }}
                          >
                            <Clock size={12} /> {article.readTime}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── Widget 3: Newsletter Subscription ── */}
                <div
                  className="p-4 shadow-sm"
                  style={{
                    background: "linear-gradient(145deg, #FFFFFF 0%, #EFF6FF 100%)",
                    borderRadius: "20px",
                    border: "1px solid #D5E4FC"
                  }}
                >
                  <div className="mb-3">
                    <span
                      className="badge mb-2"
                      style={{
                        backgroundColor: "#EAF2FF",
                        color: "#0057CC",
                        fontWeight: 700,
                        padding: "5px 10px",
                        borderRadius: "6px",
                        fontSize: "0.75rem"
                      }}
                    >
                      NEWSLETTER
                    </span>
                    <h3
                      className="h5 font-weight-bold mb-2"
                      style={{ color: "#071D49", letterSpacing: "-0.01em" }}
                    >
                      Stay Updated
                    </h3>
                    <p
                      className="small mb-0"
                      style={{ color: "#475569", lineHeight: "1.55" }}
                    >
                      Get the latest tech insights, guides and updates from Graytus Technologies.
                    </p>
                  </div>

                  <form onSubmit={handleNewsletterSubmit}>
                    <div className="mb-2">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your work email..."
                        value={newsletterEmail}
                        onChange={(e) => {
                          setNewsletterEmail(e.target.value);
                          if (newsletterStatus === "error") setNewsletterStatus("idle");
                        }}
                        style={{
                          borderRadius: "12px",
                          borderColor: "#C8DCFA",
                          padding: "10px 14px",
                          fontSize: "0.88rem"
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn w-100 text-white font-weight-bold d-inline-flex align-items-center justify-content-center gap-2"
                      style={{
                        backgroundColor: "#0057CC",
                        borderRadius: "12px",
                        padding: "10px 16px",
                        fontSize: "0.9rem",
                        boxShadow: "0 4px 12px rgba(0, 87, 204, 0.2)"
                      }}
                    >
                      <span>Subscribe Now</span>
                      <Send size={14} />
                    </button>
                  </form>

                  {/* Feedback Messages */}
                  {newsletterStatus === "error" && (
                    <div
                      className="mt-2.5 p-2 rounded-3 small d-flex align-items-center gap-1.5"
                      style={{ backgroundColor: "#FEE2E2", color: "#991B1B", fontSize: "0.8rem" }}
                    >
                      <AlertCircle size={14} className="flex-shrink-0" />
                      <span>{newsletterMessage}</span>
                    </div>
                  )}

                  {newsletterStatus === "success" && (
                    <div
                      className="mt-2.5 p-2 rounded-3 small d-flex align-items-center gap-1.5"
                      style={{ backgroundColor: "#DCFCE7", color: "#166534", fontSize: "0.8rem" }}
                    >
                      <CheckCircle2 size={14} className="flex-shrink-0" />
                      <span>{newsletterMessage}</span>
                    </div>
                  )}
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: QUOTE BANNER SECTION DIRECTLY ABOVE FOOTER
          ========================================================================= */}
      <CTASection />
    </>
  );
}
