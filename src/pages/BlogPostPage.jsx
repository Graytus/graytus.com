import React from "react";
import { useParams, Link } from "react-router-dom";
import SEO from "../components/SEO";
import BlogGrid from "../components/BlogGrid";
import CTASection from "../components/CTASection";
import { BLOG_POSTS } from "../data/siteData";
import { Calendar, Clock, User, ChevronRight, Share2, ArrowLeft } from "lucide-react";

export default function BlogPostPage() {
  const { slug } = useParams();

  const post = BLOG_POSTS.find(p => p.slug === slug) || BLOG_POSTS[0];

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
      />

      {/* Article Header */}
      <section className="bg-alt-light py-5 border-bottom">
        <div className="container-fluid px-lg-5">
          <div className="gt-breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <Link to="/blog">Blog</Link>
            <ChevronRight size={14} />
            <span className="text-dark font-weight-bold">{post.title}</span>
          </div>

          <div className="max-w-3xl mx-auto text-center mt-3" style={{ maxWidth: "840px" }}>
            <span className="badge bg-primary-blue text-white px-3 py-2 rounded-pill font-weight-bold mb-3 d-inline-block">
              {post.category}
            </span>

            <h1 className="display-4 font-weight-extrabold text-dark mb-4" style={{ letterSpacing: "-1px" }}>
              {post.title}
            </h1>

            <div className="d-flex align-items-center justify-content-center gap-4 text-secondary small">
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
        <div className="container-fluid px-lg-5">
          <div style={{ maxWidth: "840px", margin: "0 auto" }}>
            <div className="rounded-4 overflow-hidden shadow-lg border mb-5">
              <img src={post.image} alt={post.title} className="w-100 h-auto object-fit-cover" style={{ maxHeight: "480px" }} />
            </div>

            {/* Article Main Text Body */}
            <div
              className="article-content fs-5 text-dark"
              style={{ lineHeight: "1.8" }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Share & Author Info Footer */}
            <div className="mt-5 pt-4 border-top d-flex align-items-center justify-content-between">
              <Link to="/blog" className="btn btn-outline-gt">
                <ArrowLeft size={16} /> Back to All Articles
              </Link>
              <button
                className="btn btn-light border d-inline-flex align-items-center gap-2 font-weight-bold"
                onClick={() => navigator.clipboard?.writeText(window.location.href)}
              >
                <Share2 size={16} className="text-primary-blue" /> Copy Link
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="section-padding bg-alt-light border-top">
        <div className="container-fluid px-lg-5">
          <div className="text-center mb-5">
            <h2 className="section-title text-dark">Related <span className="text-primary-blue">Articles</span></h2>
          </div>
          <BlogGrid limit={3} showFilters={false} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
