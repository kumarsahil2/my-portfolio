import React, { useEffect, useState } from "react";
import "../styles/loader.css";

const Loader = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!showLoader) return null;

  return (
    <div className="loader-overlay">
      <div className="loader-content">
        <div className="loader-icon">
          <img src="./loadingcoder.png" alt="Loading..." />
        </div>
        <h1 className="loader-title">Welcome to Sahil's Portfolio</h1>

        <p className="loader-subtitle falling-text">
          {"A FullStack Developer".split("").map((char, idx) => (
            <span key={idx}>{char === " " ? "\u00A0" : char}</span>
          ))}
        </p>

        <p className="loader-secondary">
          🚀 Backend, ML & Cloud — building scalable, production-ready
          solutions. <br />
          <span className="highlight">
            Crafting your portfolio experience...
          </span>
        </p>
      </div>
    </div>
  );
};

export default Loader;
