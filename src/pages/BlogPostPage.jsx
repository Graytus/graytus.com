import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import SEO from "../components/SEO";
import { ALL_ARTICLES } from "../data/blogPosts";
import {
  Calendar,
  Clock,
  User,
  ChevronRight,
  Share2,
  ArrowLeft,
  ArrowRight,
  Check,
  Sparkles,
  BookOpen
} from "lucide-react";
import { motion } from "framer-motion";

export default function BlogPostPage() {
  const { slug } = useParams();
  const [copied, setCopied] = useState(false);

  const post = ALL_ARTICLES.find((p) => p.slug === slug);

  // If article not found, show clean fallback
  if (!post) {
    return (
      <div className="section-padding bg-alt-light text-center">
        <SEO
          title="Article Not Found | Graytus Technologies Blog"
          description="The article you are looking for does not exist or has been moved."
        />
        <div className="container py-5">
          <div
            className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3 bg-light text-secondary"
            style={{ width: "80px", height: "80px" }}
          >
            <BookOpen size={36} />
          </div>
          <h1 className="h3 font-weight-bold text-dark mb-2">Article Not Found</h1>
          <p className="text-secondary mx-auto mb-4" style={{ maxWidth: "460px" }}>
            The article you are looking for might have been moved or updated. Explore our full library of insights.
          </p>
          <Link to="/blog" className="btn btn-primary-gt d-inline-flex align-items-center gap-2">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Find 3 related articles (prefer same category, exclude current)
  const relatedPosts = ALL_ARTICLES.filter((p) => p.slug !== post.slug)
    .sort((a, b) => {
      if (a.category === post.category && b.category !== post.category) return -1;
      if (b.category === post.category && a.category !== post.category) return 1;
      return 0;
    })
    .slice(0, 3);

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  return (
    <>
      <SEO
        title={`${post.title} | Graytus Technologies Blog`}
        description={post.description || post.excerpt}
      />

      {/* Article Header & Breadcrumbs */}
      <section className="bg-alt-light py-5 border-bottom">
        <div className="container-fluid px-4 px-lg-5">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="gt-breadcrumb mb-3">
            <Link to="/">Home</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <Link to="/blog">Blog</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span className="text-dark font-weight-bold" aria-current="page">
              {post.category}
            </span>
          </nav>

          <div className="mx-auto text-center mt-3" style={{ maxWidth: "860px" }}>
            <span
              className="badge bg-primary-blue text-white px-3 py-2 rounded-pill font-weight-bold mb-3 d-inline-block"
              style={{ letterSpacing: "0.5px" }}
            >
              {post.category}
            </span>

            <h1
              className="display-5 font-weight-extrabold text-dark mb-3"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                lineHeight: "1.25",
                letterSpacing: "-0.02em",
                fontWeight: 800,
              }}
            >
              {post.title}
            </h1>

            <div className="d-flex align-items-center justify-content-center flex-wrap gap-4 text-secondary small">
              <span className="d-flex align-items-center gap-1 font-weight-semibold">
                <User size={15} className="text-primary-blue" /> {post.author}
              </span>
              <span className="d-flex align-items-center gap-1 font-weight-semibold">
                <Calendar size={15} className="text-primary-blue" /> {post.date}
              </span>
              <span className="d-flex align-items-center gap-1 font-weight-semibold">
                <Clock size={15} className="text-primary-blue" /> {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image & Body Content */}
      <section className="section-padding bg-white">
        <div className="container-fluid px-4 px-lg-5">
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            
            {/* Main Featured Image */}
            <div className="rounded-4 overflow-hidden border shadow-sm mb-5">
              <img
                src={post.image}
                alt={post.alt || post.title}
                className="w-100 h-auto object-fit-cover"
                style={{ maxHeight: "480px" }}
                loading="eager"
              />
            </div>

            {/* Semantic Article Body */}
            <article
              className="article-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* In-Article Project CTA Card */}
            <div
              className="p-4 p-md-5 my-5 rounded-4 text-white position-relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #0A192F 0%, #0866C6 100%)",
                boxShadow: "0 12px 36px rgba(8, 102, 198, 0.18)",
              }}
            >
              <div className="d-inline-flex align-items-center gap-2 mb-2 text-white-50 small font-weight-bold text-uppercase tracking-wider">
                <Sparkles size={14} className="text-info" />
                Graytus Technologies • Tiruvannamalai
              </div>
              <h3 className="h4 font-weight-bold text-white mb-2">
                Turn Your Ideas into Digital Solutions
              </h3>
              <p className="text-white-50 mb-4" style={{ maxWidth: "620px", fontSize: "15px", lineHeight: "1.65" }}>
                Need a website, mobile app, or software built around your business? Graytus Technologies, based in Tiruvannamalai, helps you plan and develop digital solutions with a clear purpose.
              </p>
              <Link
                to="/contact"
                className="btn btn-light text-primary font-weight-bold px-4 py-2 rounded-pill d-inline-flex align-items-center gap-2"
                style={{ color: "#0866C6", fontWeight: 700 }}
              >
                <span>Discuss Your Project</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Footer Navigation Actions */}
            <div className="mt-5 pt-4 border-top d-flex flex-wrap align-items-center justify-content-between gap-3">
              <Link to="/blog" className="btn btn-outline-gt d-inline-flex align-items-center gap-2">
                <ArrowLeft size={16} /> Back to Blog
              </Link>
              <button
                type="button"
                className="btn btn-light border d-inline-flex align-items-center gap-2 font-weight-bold"
                onClick={handleCopyLink}
                aria-label="Copy article link to clipboard"
              >
                {copied ? (
                  <>
                    <Check size={16} className="text-success" /> Link Copied!
                  </>
                ) : (
                  <>
                    <Share2 size={16} className="text-primary-blue" /> Copy Link
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles Section */}
      {relatedPosts.length > 0 && (
        <section className="section-padding bg-alt-light border-top">
          <div className="container-fluid px-4 px-lg-5">
            <div className="text-center mb-5">
              <span className="badge-pill-tag mb-2">FURTHER READING</span>
              <h2 className="section-title text-dark">
                Related <span className="text-primary-blue">Articles</span>
              </h2>
              <p className="section-subtitle">
                Explore more practical guides and insights from our engineering and design team.
              </p>
            </div>

            <div className="row g-4">
              {relatedPosts.map((rPost) => (
                <div key={rPost.slug} className="col-12 col-md-6 col-lg-4">
                  <article className="gt-card p-0 overflow-hidden h-100 d-flex flex-column blog-card">
                    <div className="position-relative overflow-hidden" style={{ height: "200px" }}>
                      <Link to={`/blog/${rPost.slug}`} tabIndex="-1" aria-hidden="true">
                        <img
                          src={rPost.image}
                          alt={rPost.alt}
                          className="w-100 h-100 object-fit-cover blog-card-img"
                          loading="lazy"
                        />
                      </Link>
                      <div className="position-absolute top-0 end-0 m-3">
                        <span
                          className="badge text-white px-3 py-2 rounded-pill font-weight-bold"
                          style={{ backgroundColor: "#0866C6", fontSize: "11px" }}
                        >
                          {rPost.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-4 d-flex flex-column justify-content-between flex-grow-1">
                      <div>
                        <div className="d-flex align-items-center gap-3 small text-muted mb-2">
                          <span className="d-inline-flex align-items-center gap-1">
                            <Calendar size={12} /> {rPost.date}
                          </span>
                          <span className="d-inline-flex align-items-center gap-1">
                            <Clock size={12} /> {rPost.readTime}
                          </span>
                        </div>

                        <h3 className="h6 font-weight-bold text-dark mb-2 line-clamp-2">
                          <Link
                            to={`/blog/${rPost.slug}`}
                            className="text-dark text-decoration-none"
                          >
                            {rPost.title}
                          </Link>
                        </h3>

                        <p className="small text-secondary mb-3" style={{ lineHeight: "1.6" }}>
                          {rPost.description}
                        </p>
                      </div>

                      <div className="pt-3 border-top d-flex align-items-center justify-content-between">
                        <span className="small text-muted">Graytus Tech</span>
                        <Link
                          to={`/blog/${rPost.slug}`}
                          className="text-primary-blue font-weight-bold small d-inline-flex align-items-center gap-1 text-decoration-none"
                          aria-label={`Read article: ${rPost.title}`}
                        >
                          <span>Read More</span>
                          <ArrowRight size={13} />
                        </Link>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Global Bottom CTA */}
      <section
        className="py-5 text-center bg-white border-top"
      >
        <div className="container-fluid px-4 px-lg-5">
          <div className="mx-auto" style={{ maxWidth: "700px" }}>
            <h2 className="h3 font-weight-bold text-dark mb-3">
              Need a Website, Mobile App, or Custom Software?
            </h2>
            <p className="text-secondary mb-4" style={{ fontSize: "16px", lineHeight: "1.65" }}>
              Graytus Technologies works with businesses across Tamil Nadu and beyond to architect, build, and scale high-performance digital systems.
            </p>
            <Link to="/contact" className="btn btn-primary-gt d-inline-flex align-items-center gap-2">
              <span>Discuss Your Project</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
