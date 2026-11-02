import React, { useState, useEffect, useRef } from "react";
import { PROCESS_STEPS } from "../data/siteData";
import {
  Lightbulb,
  Compass,
  Palette,
  Code2,
  CheckCircle2,
  Rocket,
  Headphones,
  Target,
  ClipboardList,
  Layout,
  Database,
  Plug,
  ShieldCheck,
  Package,
  ShoppingCart,
  CreditCard
} from "lucide-react";

const STEP_ICONS = [
  Lightbulb,
  Compass,
  Palette,
  Code2,
  CheckCircle2,
  Rocket,
  Headphones,
];

const ICON_MAP = {
  ClipboardList,
  ClipboardCheck: ClipboardList,
  Layout,
  Palette,
  Code2,
  Database,
  Plug,
  ShieldCheck,
  CheckCircle2,
  Rocket,
  Lightbulb,
  Compass,
  Headphones,
  Target,
  Package,
  ShoppingCart,
  CreditCard
};

export default function ProcessSection({ steps, title, subtitle, badge }) {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const [activeItems, setActiveItems] = useState({});
  const [progressHeight, setProgressHeight] = useState(0);

  const stepsToRender = steps && steps.length > 0 ? steps : PROCESS_STEPS;

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY || window.pageYOffset;

      // Calculate scroll progress through section center
      const sectionTop = rect.top + scrollTop;
      const sectionHeight = rect.height;
      const triggerY = scrollTop + windowHeight * 0.55;

      let progress = 0;
      if (triggerY > sectionTop) {
        progress = Math.min(100, Math.max(0, ((triggerY - sectionTop) / sectionHeight) * 100));
      }
      setProgressHeight(progress);

      // Check active state for each step item
      const newActive = {};
      const items = section.querySelectorAll(".ag-timeline_item");

      items.forEach((item, index) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenter = itemRect.top + itemRect.height / 2;
        if (itemCenter < windowHeight * 0.7) {
          newActive[index] = true;
        } else {
          newActive[index] = false;
        }
      });

      setActiveItems(newActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [stepsToRender]);

  return (
    <section className="section-padding py-5 bg-white overflow-hidden position-relative" ref={sectionRef}>
      {/* Embedded JPLoft Exact Timeline Styling */}
      <style>{`
        .ag-timeline {
          width: 1020px;
          max-width: 100%;
          margin: 40px auto 0;
          position: relative;
        }
        .ag-timeline_line {
          width: 3px;
          background-color: rgba(8, 102, 198, 0.12);
          position: absolute;
          top: 20px;
          left: 50%;
          bottom: 40px;
          overflow: hidden;
          transform: translateX(-50%);
          z-index: 1;
        }
        .ag-timeline_line-progress {
          width: 100%;
          background: linear-gradient(180deg, #0866C6 0%, #00C49F 100%);
          box-shadow: 0 0 10px rgba(8, 102, 198, 0.6);
          transition: height 0.1s linear;
        }
        .ag-timeline_item {
          margin: 0 0 60px;
          position: relative;
        }
        .ag-timeline_item:nth-child(2n) {
          text-align: right;
        }
        .ag-timeline-card_box {
          padding: 0 0 20px 50%;
          display: flex;
          align-items: center;
        }
        .ag-timeline_item:nth-child(2n) .ag-timeline-card_box {
          padding: 0 50% 20px 0;
          justify-content: flex-end;
        }
        .ag-timeline-card_point-box {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 14px 0 -20px;
          width: 40px;
          height: 40px;
          background: #ffffff;
          border-radius: 50%;
          border: 4px solid #CBD5E1;
          transition: all 0.4s ease;
          z-index: 3;
        }
        .ag-timeline_item:nth-child(2n) .ag-timeline-card_point-box {
          margin: 0 -20px 0 14px;
        }
        .js-ag-active .ag-timeline-card_point-box {
          border-color: #0866C6 !important;
          box-shadow: 0 0 15px rgba(8, 102, 198, 0.5);
          transform: scale(1.2);
        }
        .ag-timeline-card_point {
          width: 12px;
          height: 12px;
          background-color: #CBD5E1;
          border-radius: 50%;
          transition: all 0.4s ease;
        }
        .js-ag-active .ag-timeline-card_point {
          background-color: #0866C6;
        }
        .ag-timeline-card_meta-box {
          display: inline-block;
        }
        .ag-timeline-card_meta {
          font-weight: 800;
          font-size: 22px;
          color: #94A3B8;
          transition: color 0.4s ease;
        }
        .js-ag-active .ag-timeline-card_meta {
          color: #0866C6;
        }
        /* Exact JPLoft Fly-In Card Animations */
        .ag-timeline-card_item {
          display: inline-block;
          width: 45%;
          margin: -65px 0 0;
          background-color: #ffffff;
          opacity: 0;
          border-radius: 16px;
          border: 1px solid #E2E8F0;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease, border-color 0.4s ease;
          position: relative;
          text-align: left;
        }
        .ag-timeline_item:nth-child(odd) .ag-timeline-card_item {
          transform: translateX(-150px);
        }
        .ag-timeline_item:nth-child(2n) .ag-timeline-card_item {
          transform: translateX(150px);
        }
        .js-ag-active.ag-timeline_item:nth-child(2n) .ag-timeline-card_item,
        .js-ag-active.ag-timeline_item:nth-child(odd) .ag-timeline-card_item {
          opacity: 1;
          transform: translateX(0);
          border-color: #0866C6;
          box-shadow: 0 15px 35px rgba(8, 102, 198, 0.12);
        }
        .ag-timeline-card_arrow {
          height: 16px;
          width: 16px;
          background-color: #ffffff;
          border-left: 1px solid #0866C6;
          border-bottom: 1px solid #0866C6;
          z-index: 2;
          position: absolute;
          top: 24px;
          right: -8px;
          transform: rotate(225deg);
        }
        .ag-timeline_item:nth-child(2n) .ag-timeline-card_arrow {
          right: auto;
          left: -8px;
          transform: rotate(45deg);
        }
        .ag-timeline-card_info {
          padding: 24px;
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }
        .rang_sec_img {
          flex: 0 0 52px;
          height: 52px;
          border-radius: 12px;
          background: #ffffff;
          border: 1.5px solid #E2E8F0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0866C6;
          box-shadow: 0 4px 12px rgba(8, 102, 198, 0.08);
          transition: all 0.3s ease;
        }
        .js-ag-active .rang_sec_img {
          background: #EFF6FF;
          border-color: #93C5FD;
          color: #0866C6;
          box-shadow: 0 6px 16px rgba(8, 102, 198, 0.16);
          transform: scale(1.05);
        }
        .ag-timeline-card_title {
          color: #0F172A;
          font-weight: 700;
          font-size: 1.1rem;
          margin-bottom: 8px;
        }
        .ag-timeline-card_desc p {
          line-height: 1.55;
          font-size: 0.88rem;
          color: #475569;
          margin: 0;
        }

        /* Mobile Responsiveness */
        @media (max-width: 991px) {
          .ag-timeline_line {
            left: 20px;
          }
          .ag-timeline-card_box {
            padding: 0 0 15px 0 !important;
            justify-content: flex-start !important;
          }
          .ag-timeline-card_point-box {
            margin: 0 15px 0 0 !important;
          }
          .ag-timeline-card_item {
            width: calc(100% - 50px) !important;
            margin: 0 0 0 50px !important;
            transform: translateY(30px) !important;
          }
          .js-ag-active .ag-timeline-card_item {
            transform: translateY(0) !important;
          }
          .ag-timeline-card_arrow {
            left: -8px !important;
            right: auto !important;
            transform: rotate(45deg) !important;
          }
        }
      `}</style>

      <div className="container-fluid px-lg-5 py-4">
        {/* Section Heading */}
        <div className="text-center mb-5">
          <div className="badge-pill-tag mb-3">{badge || "HOW WE WORK"}</div>
          <h2 className="display-5 font-weight-extrabold text-dark mb-2" style={{ fontWeight: 800 }}>
            {title || (
              <>
                Our Streamlined <span className="text-primary-blue">Development Process</span>
              </>
            )}
          </h2>
          <p className="text-secondary lead mb-0 mx-auto" style={{ maxWidth: "740px", fontSize: "1.05rem" }}>
            {subtitle || "Every successful project starts with a clear vision. Our web development process guides your product smoothly from idea to launch with precision."}
          </p>
        </div>

        {/* Exact JPLoft HTML Timeline Section */}
        <div className="js-timeline ag-timeline">
          {/* Scroll Progress Line */}
          <div className="js-timeline_line ag-timeline_line" ref={lineRef}>
            <div
              className="js-timeline_line-progress ag-timeline_line-progress"
              style={{ height: `${progressHeight}%` }}
            />
          </div>

          <div className="ag-timeline_list">
            {stepsToRender.map((step, idx) => {
              let IconComp = STEP_ICONS[idx % STEP_ICONS.length] || Target;
              if (step.icon && typeof step.icon === "string" && ICON_MAP[step.icon]) {
                IconComp = ICON_MAP[step.icon];
              } else if (step.icon && typeof step.icon === "function") {
                IconComp = step.icon;
              }

              const isActive = !!activeItems[idx];
              const isEven = idx % 2 !== 0;

              return (
                <div
                  key={step.step || idx}
                  className={`js-timeline_item ag-timeline_item ${isActive ? "js-ag-active" : ""}`}
                >
                  <div className="ag-timeline-card_box">
                    {!isEven ? (
                      <>
                        <div className="js-timeline-card_point-box ag-timeline-card_point-box">
                          <div className="ag-timeline-card_point" />
                        </div>
                        <div className="ag-timeline-card_meta-box">
                          <div className="ag-timeline-card_meta">Step {step.step}</div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="ag-timeline-card_meta-box">
                          <div className="ag-timeline-card_meta">Step {step.step}</div>
                        </div>
                        <div className="js-timeline-card_point-box ag-timeline-card_point-box">
                          <div className="ag-timeline-card_point" />
                        </div>
                      </>
                    )}
                  </div>

                  <div className="ag-timeline-card_item">
                    <div className="ag-timeline-card_info">
                      <div className="rang_sec_img">
                        <IconComp size={24} />
                      </div>
                      <div className="ag-timeline-card_info-in">
                        <h3 className="ag-timeline-card_title">{step.title}</h3>
                        <div className="ag-timeline-card_desc">
                          <p>{step.desc}</p>
                        </div>
                      </div>
                    </div>
                    <div className="ag-timeline-card_arrow" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}



