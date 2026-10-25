import React, { useRef, useEffect } from "react";

export default function KineticGrid({ className = "", children }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = container.offsetWidth);
    let height = (canvas.height = container.offsetHeight);

    const spacing = 42; // distance between grid points
    let cols = Math.floor(width / spacing) + 2;
    let rows = Math.floor(height / spacing) + 2;

    let points = [];
    let ripples = [];

    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 190,
    };

    function initPoints() {
      width = canvas.width = container.offsetWidth;
      height = canvas.height = container.offsetHeight;
      cols = Math.ceil(width / spacing) + 2;
      rows = Math.ceil(height / spacing) + 2;

      points = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const ox = c * spacing;
          const oy = r * spacing;
          points.push({
            r,
            c,
            ox,
            oy,
            x: ox,
            y: oy,
            vx: 0,
            vy: 0,
          });
        }
      }
    }

    initPoints();

    const handleResize = () => {
      initPoints();
    };

    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    const handleClick = (e) => {
      const rect = container.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;

      ripples.push({
        x: cx,
        y: cy,
        radius: 0,
        maxRadius: 380,
        speed: 7,
        amplitude: 28,
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("click", handleClick);

    const draw = () => {
      // Smooth mouse position interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.15;
      mouse.y += (mouse.targetY - mouse.y) * 0.15;

      ctx.clearRect(0, 0, width, height);

      // Update ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rip = ripples[i];
        rip.radius += rip.speed;
        if (rip.radius > rip.maxRadius) {
          ripples.splice(i, 1);
        }
      }

      // Physics update for grid points
      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        // 1. Mouse attraction / warping effect toward cursor
        const dx = mouse.x - p.ox;
        const dy = mouse.y - p.oy;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let targetDispX = 0;
        let targetDispY = 0;

        if (dist < mouse.radius) {
          // Warp towards cursor (kinetic grid lens effect)
          const factor = Math.pow(1 - dist / mouse.radius, 2) * 38;
          const angle = Math.atan2(dy, dx);
          targetDispX = Math.cos(angle) * factor;
          targetDispY = Math.sin(angle) * factor;
        }

        // 2. Ripple displacement
        for (let rIdx = 0; rIdx < ripples.length; rIdx++) {
          const rip = ripples[rIdx];
          const rDx = p.ox - rip.x;
          const rDy = p.oy - rip.y;
          const rDist = Math.sqrt(rDx * rDx + rDy * rDy);
          const diff = Math.abs(rDist - rip.radius);

          if (diff < 50) {
            const wave = Math.sin((diff / 50) * Math.PI) * rip.amplitude;
            const ripAngle = Math.atan2(rDy, rDx);
            const fade = 1 - rip.radius / rip.maxRadius;
            targetDispX += Math.cos(ripAngle) * wave * fade;
            targetDispY += Math.sin(ripAngle) * wave * fade;
          }
        }

        const destX = p.ox + targetDispX;
        const destY = p.oy + targetDispY;

        // Spring physics
        const ax = (destX - p.x) * 0.12;
        const ay = (destY - p.y) * 0.12;

        p.vx = (p.vx + ax) * 0.82; // damping
        p.vy = (p.vy + ay) * 0.82;

        p.x += p.vx;
        p.y += p.vy;
      }

      // Draw Grid Lines
      ctx.lineWidth = 1;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const idx = r * cols + c;
          const p = points[idx];

          // Right Connection
          if (c < cols - 1) {
            const rightP = points[r * cols + (c + 1)];
            const distFromMouse = Math.hypot(mouse.x - p.x, mouse.y - p.y);
            const isNear = distFromMouse < mouse.radius;

            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(rightP.x, rightP.y);
            ctx.strokeStyle = isNear ? "rgba(56, 189, 248, 0.4)" : "rgba(255, 255, 255, 0.08)";
            ctx.stroke();
          }

          // Down Connection
          if (r < rows - 1) {
            const downP = points[(r + 1) * cols + c];
            const distFromMouse = Math.hypot(mouse.x - p.x, mouse.y - p.y);
            const isNear = distFromMouse < mouse.radius;

            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(downP.x, downP.y);
            ctx.strokeStyle = isNear ? "rgba(56, 189, 248, 0.4)" : "rgba(255, 255, 255, 0.08)";
            ctx.stroke();
          }
        }
      }

      // Draw Glowing Dots at Intersections
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        const distFromMouse = Math.hypot(mouse.x - p.x, mouse.y - p.y);

        let dotRadius = 1.8;
        let fillStyle = "rgba(255, 255, 255, 0.25)";

        if (distFromMouse < mouse.radius) {
          const intensity = 1 - distFromMouse / mouse.radius;
          dotRadius = 2 + intensity * 3.5;
          fillStyle = `rgba(56, 189, 248, ${0.45 + intensity * 0.55})`;

          // Draw subtle glow ring around nodes
          if (intensity > 0.35) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, dotRadius + 3.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(56, 189, 248, ${intensity * 0.22})`;
            ctx.fill();
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, dotRadius, 0, Math.PI * 2);
        ctx.fillStyle = fillStyle;
        ctx.fill();
      }

      // Draw dashed mouse cursor radius ring like the design screenshot
      if (mouse.x > 0 && mouse.y > 0) {
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(56, 189, 248, 0.16)";
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("click", handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className={`position-relative overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ pointerEvents: "none", zIndex: 0 }}
      />
      <div className="position-relative" style={{ zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}
