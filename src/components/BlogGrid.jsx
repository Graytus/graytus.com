import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BLOG_POSTS } from "../data/siteData";
import { ArrowRight, Clock, Calendar, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BlogGrid({ limit = null, showFilters = true }) {
  const [activeCat, setActiveCat] = useState("All");

  const categories = ["All", "AI", "Mobile App Development", "Software Development", "Web Development", "UI/UX"];

  const filteredPosts = BLOG_POSTS.filter(post => {
    if (activeCat === "All") return true;
    return post.category === activeCat;
  });

  const displayedPosts = limit ? filteredPosts.slice(0, limit) : filteredPosts;

  return (
    <div>
      {/* Category Pills */}
      {showFilters && (
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`tech-pill ${activeCat === cat ? "active" : ""}`}
              onClick={() => setActiveCat(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Grid of Blog Cards */}
      <AnimatePresence mode="wait">
        <motion.div key={activeCat} className="row g-4">
          {displayedPosts.map((post, idx) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="col-12 col-md-6 col-lg-4"
            >
              <div className="gt-card p-0 overflow-hidden h-100 d-flex flex-column justify-content-between">
                {/* Image */}
                <div className="position-relative overflow-hidden" style={{ height: "220px" }}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-100 h-100 object-fit-cover"
                    style={{ transition: "transform 0.5s" }}
                  />
                  <div className="position-absolute top-0 start-0 m-3">
                    <span className="badge bg-primary-blue text-white px-3 py-2 rounded-pill font-weight-bold">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-4 d-flex flex-column justify-content-between flex-grow-1">
                  <div>
                    <div className="d-flex align-items-center gap-3 small text-secondary mb-2">
                      <span className="d-flex align-items-center gap-1">
                        <Calendar size={13} /> {post.date}
                      </span>
                      <span className="d-flex align-items-center gap-1">
                        <Clock size={13} /> {post.readTime}
                      </span>
                    </div>

                    <h3 className="h5 font-weight-bold text-dark mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="small text-secondary mb-4" style={{ lineHeight: "1.6" }}>
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-top d-flex align-items-center justify-content-between">
                    <span className="small text-muted d-flex align-items-center gap-1">
                      <User size={13} /> {post.author.split(",")[0]}
                    </span>
                    <Link to={`/blog/${post.slug}`} className="text-primary-blue font-weight-bold small d-inline-flex align-items-center gap-1 text-decoration-none">
                      Read Article <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
