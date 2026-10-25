import React from "react";
import { Link } from "react-router-dom";

export default function Logo({ variant = "dark", height = 68, className = "" }) {
  return (
    <Link to="/" className={`d-inline-flex align-items-center text-decoration-none ${className}`}>
      <img
        src="/images/official-logo.png"
        alt="Graytus Technologies Logo"
        style={{
          height: `${height}px`,
          width: "auto",
          objectFit: "contain",
          filter: variant === "light" ? "brightness(1.1) drop-shadow(0 2px 8px rgba(255,255,255,0.2))" : "none",
          transition: "transform 0.2s ease"
        }}
      />
    </Link>
  );
}