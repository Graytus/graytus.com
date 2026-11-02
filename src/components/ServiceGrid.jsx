import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ServiceGrid({ services }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredTopic, setHoveredTopic] = useState(null);

  // Normalize services data to match cards layout
  const serviceList = services && services.length > 0 ? services.map(s => ({
    category: s.category,
    slug: s.slug,
    items: s.items || []
  })) : [
    {
      category: "Website Development",
      slug: "website-development",
      items: [
        { name: "Static Website", path: "/services/static-website" },
        { name: "Dynamic Website", path: "/services/dynamic-website" },
        { name: "Ecommerce website", path: "/services/ecommerce-website" }
      ]
    },
    {
      category: "Mobile App Development",
      slug: "mobile-app-development",
      items: [
        { name: "Mobile App Development", path: "/services/mobile-app-development" },
        { name: "Android App Development", path: "/services/android-app-development" }
      ]
    },
    {
      category: "Software Solutions",
      slug: "software-development",
      items: [
        { name: "Custom Software Development", path: "/services/custom-software-development" },
        { name: "SaaS Development", path: "/services/saas-development" },
        { name: "ERP Development", path: "/services/erp-development" }
      ]
    },
    {
      category: "Hospitality Services",
      slug: "hospitality-services",
      items: [
        { name: "OTA Listing Management", path: "/services/ota-listing-management" },
        { name: "Property Management System", path: "/services/property-management-system" }
      ]
    }
  ];

  return (
    <div className="w-100">
      <div className="row g-4 align-items-stretch">
        {serviceList.map((service, idx) => {
          const theme = {
            primary: "#0866C6",
            lightTint: "rgba(8, 102, 198, 0.06)",
            glow: "rgba(8, 102, 198, 0.22)",
            border: "#0866C6",
            gradient: "linear-gradient(135deg, #0866C6 0%, #38BDF8 100%)",
            topicColors: [
              { text: "#0866C6", bg: "rgba(8, 102, 198, 0.10)", border: "rgba(8, 102, 198, 0.28)" },
              { text: "#0284C7", bg: "rgba(2, 132, 199, 0.10)", border: "rgba(2, 132, 199, 0.28)" },
              { text: "#2563EB", bg: "rgba(37, 99, 235, 0.10)", border: "rgba(37, 99, 235, 0.28)" }
            ]
          };
          const isActive = hoveredIndex !== null ? hoveredIndex === idx : activeIndex === idx;
          const numberStr = String(idx + 1).padStart(2, "0");
          const categoryPath = `/services/${service.slug || ""}`;

          return (
            <div
              key={idx}
              className="col-12 col-md-6 col-lg-3"
              onMouseEnter={() => {
                setHoveredIndex(idx);
                setActiveIndex(idx);
              }}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="h-100 rounded-4 p-4 d-flex flex-column justify-content-between position-relative overflow-hidden"
                style={{
                  minHeight: "410px",
                  backgroundColor: "#ffffff",
                  border: `2px solid ${isActive ? theme.border : "#E2E8F0"}`,
                  boxShadow: isActive
                    ? `0 20px 40px ${theme.glow}`
                    : "0 4px 14px rgba(0, 0, 0, 0.04)",
                  backgroundImage: isActive
                    ? `linear-gradient(180deg, ${theme.lightTint} 0%, #ffffff 45%)`
                    : "none",
                  transform: isActive ? "translateY(-8px)" : "translateY(0)",
                  transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1), background-image 0.35s ease",
                  willChange: "transform, box-shadow"
                }}
              >
                {/* Top Accent Gradient Bar for Each Card */}
                <div
                  className="position-absolute top-0 start-0 end-0"
                  style={{
                    height: isActive ? "5px" : "0px",
                    background: theme.gradient,
                    transition: "height 0.25s ease, opacity 0.25s ease",
                    opacity: isActive ? 1 : 0
                  }}
                />

                <div>
                  {/* Header Link */}
                  <Link to={categoryPath} className="text-decoration-none d-block mb-3">
                    <div
                      className="display-4 font-weight-extrabold mb-1"
                      style={{
                        fontWeight: 800,
                        letterSpacing: "-1px",
                        color: isActive ? theme.primary : "#111418",
                        transform: isActive ? "translateY(-2px)" : "translateY(0)",
                        transition: "color 0.3s ease, transform 0.3s ease"
                      }}
                    >
                      {numberStr}
                    </div>

                    <h3
                      className="h5 font-weight-bold mb-0"
                      style={{
                        fontWeight: 700,
                        color: isActive ? theme.primary : "#111418",
                        transition: "color 0.3s ease"
                      }}
                    >
                      {service.category}
                    </h3>
                  </Link>

                  {/* Sub-services list with unique topic hover colors */}
                  <div className="pt-2 d-flex flex-column gap-1">
                    {service.items && service.items.slice(0, 5).map((item, itemIdx) => {
                      const topicKey = `${idx}-${itemIdx}`;
                      const isTopicHovered = hoveredTopic === topicKey;
                      const topicTheme = (theme.topicColors && theme.topicColors[itemIdx % theme.topicColors.length]) || {
                        text: theme.primary,
                        bg: theme.lightTint,
                        border: theme.primary
                      };

                      return (
                        <div
                          key={itemIdx}
                          className="border-top pt-1"
                          style={{ borderColor: "#F1F5F9" }}
                        >
                          <Link
                            to={item.path || categoryPath}
                            onMouseEnter={() => setHoveredTopic(topicKey)}
                            onMouseLeave={() => setHoveredTopic(null)}
                            className="text-decoration-none d-flex align-items-center justify-content-between w-100 px-2 py-2 rounded-3"
                            style={{
                              backgroundColor: isTopicHovered ? topicTheme.bg : "transparent",
                              border: `1px solid ${isTopicHovered ? topicTheme.border : "transparent"}`,
                              transition: "all 0.22s ease",
                              transform: isTopicHovered ? "translateX(4px)" : "translateX(0)"
                            }}
                          >
                            <div className="d-flex align-items-center gap-2">
                              {/* Glowing dot indicator on hover */}
                              <span
                                className="rounded-circle d-inline-block flex-shrink-0"
                                style={{
                                  width: "6px",
                                  height: "6px",
                                  backgroundColor: topicTheme.text,
                                  opacity: isTopicHovered ? 1 : 0,
                                  transform: isTopicHovered ? "scale(1)" : "scale(0)",
                                  transition: "all 0.2s ease"
                                }}
                              />
                              <span
                                style={{
                                  fontSize: "0.88rem",
                                  fontWeight: isTopicHovered ? "700" : "500",
                                  color: isTopicHovered ? topicTheme.text : "#1E293B",
                                  transition: "color 0.2s ease"
                                }}
                              >
                                {item.name}
                              </span>
                            </div>
                            <ChevronRight
                              size={15}
                              className="flex-shrink-0 ms-1"
                              style={{
                                color: isTopicHovered ? topicTheme.text : (isActive ? theme.primary : "#94A3B8"),
                                transform: isTopicHovered ? "translateX(3px)" : "translateX(0)",
                                transition: "all 0.2s ease"
                              }}
                            />
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Action Button - Highlights in That Card's Unique Color */}
                <div className="pt-4 mt-auto">
                  <Link
                    to={categoryPath}
                    className="btn w-100 btn-sm d-flex align-items-center justify-content-center gap-2 font-weight-bold py-2 rounded-3 text-decoration-none"
                    style={{
                      border: `1.5px solid ${isActive ? theme.primary : "#CBD5E1"}`,
                      backgroundColor: isActive ? theme.primary : "#ffffff",
                      color: isActive ? "#ffffff" : "#334155",
                      boxShadow: isActive ? `0 4px 14px ${theme.glow}` : "none",
                      transition: "all 0.25s ease"
                    }}
                  >
                    <span>Explore {service.category}</span>
                    <ArrowRight
                      size={15}
                      style={{
                        transform: isActive ? "translateX(4px)" : "translateX(0)",
                        transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)"
                      }}
                    />
                  </Link>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
