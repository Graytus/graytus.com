import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CTASection({
  title = "Know Your Website Development Cost",
  subtitle = "Share your website idea with us and receive a personalized estimate based on your goals, features, and business requirements.",
  buttonText = "Get a Quote"
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let step = 0;

    let width = (canvas.width = container.offsetWidth);
    let height = (canvas.height = container.offsetHeight);

    const handleResize = () => {
      width = canvas.width = container.offsetWidth;
      height = canvas.height = container.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    // Wave configuration matching the reference image's flowing gradient waves
    const waves = [
      {
        frequency: 0.008,
        amplitude: 45,
        speed: 0.015,
        offset: 0,
        gradient: (ctx, h) => {
          const g = ctx.createLinearGradient(0, 0, width, h);
          g.addColorStop(0, "rgba(56, 189, 248, 0.85)");
          g.addColorStop(0.5, "rgba(2, 132, 199, 0.75)");
          g.addColorStop(1, "rgba(3, 98, 195, 0.9)");
          return g;
        },
      },
      {
        frequency: 0.006,
        amplitude: 60,
        speed: 0.012,
        offset: Math.PI * 0.7,
        gradient: (ctx, h) => {
          const g = ctx.createLinearGradient(0, 0, width, h);
          g.addColorStop(0, "rgba(224, 242, 254, 0.7)");
          g.addColorStop(0.5, "rgba(56, 189, 248, 0.8)");
          g.addColorStop(1, "rgba(125, 211, 252, 0.65)");
          return g;
        },
      },
      {
        frequency: 0.01,
        amplitude: 35,
        speed: 0.02,
        offset: Math.PI * 1.3,
        gradient: (ctx, h) => {
          const g = ctx.createLinearGradient(0, 0, width, h);
          g.addColorStop(0, "rgba(3, 98, 195, 0.65)");
          g.addColorStop(0.5, "rgba(99, 102, 241, 0.75)");
          g.addColorStop(1, "rgba(56, 189, 248, 0.8)");
          return g;
        },
      },
    ];

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Base smooth gradient background
      const baseGradient = ctx.createLinearGradient(0, 0, width, height);
      baseGradient.addColorStop(0, "#e0f2fe");
      baseGradient.addColorStop(0.4, "#38bdf8");
      baseGradient.addColorStop(0.8, "#0284c7");
      baseGradient.addColorStop(1, "#0362c3");
      ctx.fillStyle = baseGradient;
      ctx.fillRect(0, 0, width, height);

      step += 0.02;

      // Draw dynamic flowing gradient waves
      waves.forEach((wave) => {
        ctx.beginPath();
        ctx.moveTo(0, height);

        for (let x = 0; x <= width; x += 5) {
          const y =
            Math.sin(x * wave.frequency + step * (wave.speed / 0.015) + wave.offset) *
              wave.amplitude +
            height * 0.55;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();

        ctx.fillStyle = wave.gradient(ctx, height);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="position-relative overflow-hidden py-5 my-0" ref={containerRef}>
      {/* Dynamic Animated Gradient Wave Canvas Background */}
      <canvas
        ref={canvasRef}
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ pointerEvents: "none", zIndex: 0 }}
      />

      {/* Main Content Banner Overlaid on Gradient Wave */}
      <div className="container-fluid px-lg-5 position-relative py-4" style={{ zIndex: 1 }}>
        <div
          className="position-relative overflow-hidden rounded-5 p-4 p-md-5 text-white mx-auto"
          style={{
            maxWidth: "1200px"
          }}
        >
          <div className="row align-items-center g-4">
            {/* Left Column: 3D Illustration */}
            <div className="col-12 col-md-5 col-lg-4 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src="/images/cost-calculator-illustration.jpg"
                  alt="Website Development Cost Calculator"
                  className="img-fluid rounded-4"
                  style={{
                    maxHeight: "260px",
                    objectFit: "contain",
                    filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.3))"
                  }}
                />
              </motion.div>
            </div>

            {/* Right Column: Title, Subtitle, & Get a Quote Pill Button */}
            <div className="col-12 col-md-7 col-lg-8 ps-md-4 text-center text-md-start">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
              >
                <h2
                  className="display-5 font-weight-extrabold text-white mb-3"
                  style={{ fontWeight: 800, letterSpacing: "-0.5px" }}
                >
                  {title}
                </h2>
                <p
                  className="lead text-white opacity-90 mb-4"
                  style={{ maxWidth: "660px", fontSize: "1.1rem", lineHeight: "1.5" }}
                >
                  {subtitle}
                </p>

                <div>
                  <Link
                    to="/contact"
                    className="btn rounded-pill px-4 py-3 text-white font-weight-bold shadow-lg hover-lift"
                    style={{
                      backgroundColor: "#E53935",
                      border: "none",
                      fontSize: "1rem",
                      fontWeight: 700,
                      paddingLeft: "2.2rem",
                      paddingRight: "2.2rem",
                      boxShadow: "0 8px 24px rgba(229, 57, 53, 0.4)"
                    }}
                  >
                    {buttonText}
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


