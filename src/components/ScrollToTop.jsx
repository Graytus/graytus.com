import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [showButton, setShowButton] = useState(false);

  // Scroll to top when route path changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  // Show floating scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!showButton) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="btn btn-primary-gt rounded-circle p-0 position-fixed shadow-lg d-flex align-items-center justify-content-center"
      style={{
        bottom: "30px",
        right: "30px",
        width: "48px",
        height: "48px",
        zIndex: 1040,
        boxShadow: "0 8px 24px rgba(3, 98, 195, 0.4)"
      }}
    >
      <ArrowUp size={20} />
    </button>
  );
}
