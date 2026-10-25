import React from "react";

export default function WaterFillLayer({ isFilled = false, delay = 0 }) {
  return (
    <div
      className={`water-liquid-box ${isFilled ? "filled" : ""}`}
      style={{
        transitionDelay: `${delay}s`
      }}
      aria-hidden="true"
    >
      <div className="water-wave-track wave-back" />
      <div className="water-wave-track wave-front" />
      <div className="water-body" />
      <div className="water-bubble b1" />
      <div className="water-bubble b2" />
      <div className="water-bubble b3" />
      <div className="water-bubble b4" />
    </div>
  );
}
