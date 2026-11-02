import React from "react";
import { Link } from "react-router-dom";
import quoteBannerImg from "../assets/quote/quote.png";

export default function CTASection() {
  return (
    <section className="position-relative w-100 p-0 m-0 overflow-hidden bg-white border-top border-bottom">
      <div className="position-relative w-100 d-block overflow-hidden">
        <div className="position-relative w-100 mx-auto" style={{ maxWidth: "2172px" }}>
          {/* Main Quote Banner Image */}
          <img
            src={quoteBannerImg}
            alt="Know Your Website Development Cost — Share your website idea with us and receive a personalized estimate"
            className="w-100 d-block"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              maxHeight: "680px"
            }}
          />

          {/* Interactive 'Get a Quote' Button positioned directly over the graphic on the image */}
          <Link
            to="/contact"
            className="position-absolute d-inline-flex align-items-center justify-content-center text-decoration-none rounded-pill"
            style={{
              left: "52.85%",
              top: "60.08%",
              width: "12.85%",
              height: "9.39%",
              minWidth: "120px",
              minHeight: "36px",
              cursor: "pointer",
              zIndex: 5,
              backgroundColor: "transparent",
              transition: "all 0.25s ease"
            }}
            aria-label="Get a Quote"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
              e.currentTarget.style.boxShadow = "0 0 20px rgba(0, 163, 255, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <span className="visually-hidden">Get a Quote</span>
          </Link>
        </div>

        {/* Mobile-Friendly Fallback CTA button shown on small screens (< 576px) */}
        <div className="d-block d-sm-none p-3 text-center bg-dark">
          <Link
            to="/contact"
            className="btn btn-primary-gt w-100 py-2.5 rounded-pill font-weight-bold"
            style={{ backgroundColor: "#00A3FF", borderColor: "#00A3FF" }}
          >
            Get a Quote →
          </Link>
        </div>
      </div>
    </section>
  );
}
