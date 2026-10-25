import React, { useState, useEffect, useRef } from "react";
import { COMPANY_INFO } from "../data/siteData";

function Counter({ endValue, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 1500;
    const stepTime = Math.abs(Math.floor(duration / endValue));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= endValue) {
        clearInterval(timer);
      }
    }, Math.max(stepTime, 20));

    return () => clearInterval(timer);
  }, [isVisible, endValue]);

  return (
    <span ref={ref} className="display-5 font-weight-extrabold text-primary-blue">
      {count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-4 bg-white border-bottom border-top">
      <div className="container-fluid px-lg-5">
        <div className="row g-4 text-center justify-content-center">
          {COMPANY_INFO.stats.map((stat, idx) => (
            <div key={idx} className="col-6 col-md-3">
              <div className="p-3">
                <Counter endValue={stat.value} suffix={stat.suffix} />
                <div className="text-secondary font-weight-bold mt-1 text-uppercase tracking-wider small">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
