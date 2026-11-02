import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ALL_ARTICLES, BLOG_CATEGORIES } from "../data/blogPosts";
import { ArrowRight, Clock, Calendar, User, Search, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BlogGrid({
  limit = null,
  showFilters = true,
  initialCategory = null,
  excludeSlug = null,
}) {
  const [activeCat, setActiveCat] = useState(initialCategory || "All Articles");
  const [query, setQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return ALL_ARTICLES.filter((post) => {
      if (activeCat !== "All Articles" && post.category !== activeCat) return false;
      if (excludeSlug && post.slug === excludeSlug) return false;
      if (query.trim()) {
        const q = query.toLowerCase();
        return (
          post.title.toLowerCase().includes(q) ||
          (post.description && post.description.toLowerCase().includes(q)) ||
          (post.excerpt && post.excerpt.toLowerCase().includes(q)) ||
          post.category.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [activeCat, query, excludeSlug]);

  const displayedPosts = limit ? filteredPosts.slice(0, limit) : filteredPosts;

  return (
    <div>
      {showFilters && (
        <div className="mb-5">
          <div className="row g-3 align-items-center justify-content-center mb-4">
            <div className="col-12 col-md-6">
              <div className="position-relative">
                <Search
                  size={18}
                  className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary"
                  aria-hidden="true"
                />
                <input
                  type="text"
                  className="blog-search-input"
                  placeholder="Search articles…"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  aria-label="Search articles"
                />
              </div>
            </div>
          </div>
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`blog-category-pill${activeCat === cat ? " active" : ""}`}
                onClick={() => setActiveCat(cat)}
                aria-pressed={activeCat === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}

      {displayedPosts.length === 0 ? (
        <div className="text-center py-5 my-4">
          <div
            className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3 bg-light text-secondary"
            style={{ width: "64px", height: "64px" }}
          >
            <BookOpen size={28} />
          </div>
          <h3 className="h5 font-weight-bold text-dark mb-2">No articles found</h3>
          <p className="small text-secondary mb-3">Try adjusting your search terms or filter.</p>
          <button
            type="button"
            className="btn btn-outline-gt btn-sm"
            onClick={() => {
              setActiveCat("All Articles");
              setQuery("");
            }}
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="row g-4">
          {displayedPosts.map((post) => (
            <div key={post.slug} className="col-12 col-md-6 col-lg-4">
              <article className="gt-card p-0 overflow-hidden h-100 d-flex flex-column blog-card">
                <div className="position-relative overflow-hidden" style={{ height: "220px" }}>
                  <Link to={`/blog/${post.slug}`} tabIndex="-1" aria-hidden="true">
                    <img
                      src={post.image}
                      alt={post.alt || post.title}
                      className="w-100 h-100 object-fit-cover blog-card-img"
                      loading="lazy"
                    />
                  </Link>
                  <div className="position-absolute top-0 end-0 m-3">
                    <span
                      className="badge text-white px-3 py-2 rounded-pill font-weight-bold"
                      style={{ backgroundColor: "#0866C6", fontSize: "11px" }}
                    >
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-4 d-flex flex-column justify-content-between flex-grow-1">
                  <div>
                    <div className="d-flex align-items-center gap-3 small text-muted mb-2">
                      <span className="d-inline-flex align-items-center gap-1">
                        <Calendar size={13} /> {post.date}
                      </span>
                      <span className="d-inline-flex align-items-center gap-1">
                        <Clock size={13} /> {post.readTime}
                      </span>
                    </div>

                    <h3 className="h5 font-weight-bold text-dark mb-2 line-clamp-2">
                      <Link to={`/blog/${post.slug}`} className="text-dark text-decoration-none">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="small text-secondary mb-4" style={{ lineHeight: "1.65" }}>
                      {post.description || post.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-top d-flex align-items-center justify-content-between">
                    <span className="small text-muted d-inline-flex align-items-center gap-1">
                      <User size={13} /> {post.author.split(",")[0]}
                    </span>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-primary-blue font-weight-bold small d-inline-flex align-items-center gap-1 text-decoration-none"
                      aria-label={`Read more: ${post.title}`}
                    >
                      <span>Read More</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
