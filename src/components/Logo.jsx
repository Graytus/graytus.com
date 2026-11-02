import React from "react";
import { Link } from "react-router-dom";
import l1Logo from "../assets/logo/l1.png";

export default function Logo({ variant = "dark", height = 88, className = "" }) {
  return (
    <Link to="/" className={`d-inline-flex align-items-center text-decoration-none ${className}`}>
      <img
        src={l1Logo}
        alt="Graytus Technologies Logo"
        style={{
          height: `${height}px`,
          maxHeight: "100%",
          width: "auto",
          objectFit: "contain",
          filter: variant === "light" ? "brightness(1.1) drop-shadow(0 2px 8px rgba(255,255,255,0.2))" : "none",
          transition: "transform 0.2s ease"
        }}
      />
    </Link>
  );
}
