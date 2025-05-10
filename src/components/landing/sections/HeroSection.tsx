import React from "react";
import Image from "next/image";
import styles from "../../../app/page.module.css";
import ScrollDownButton from "../../ScrollDownButton";

export default function HeroSection() {
  return (
    <section className={styles.heroSection} id="hero">
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Transform Your
          <br />
          Teaching With
          <br />
          <span className="text-gradient">AI-Powered</span>
          <br />
          Tools
        </h1>
        <p className={styles.heroText}>
          Create engaging lessons, grade assignments faster, and deliver personalized
          learning experiences with our AI teaching assistant that works 24/7
          to support your educational goals.
        </p>
        <div className="flex gap-4">
          <a href="/auth?mode=signup" className="btn btn-primary hero-btn">
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
          <a href="/about" className="btn btn-secondary hero-btn">
            Learn More
          </a>
        </div>
      </div>

      <div className={styles.heroImage}>
        <div className="glow-effect"></div>
        <Image
          src="/teacher.png"
          alt="Teacher working with AI teaching assistant"
          width={500}
          height={500}
          style={{ 
            objectFit: "cover", 
            width: "100%", 
            height: "auto",
            borderRadius: "12px"
          }}
          priority
        />
      </div>

      <div className={styles.statsContainer}>
        <div className={styles.statItem}>
          <div className="stat-value">120+</div>
          <div className="stat-label">AI templates</div>
        </div>
        <div className={styles.statItem}>
          <div className="stat-value">285</div>
          <div className="stat-label">educators</div>
        </div>
        <div className={styles.statItem}>
          <div className="stat-value">24/7</div>
          <div className="stat-label">support</div>
        </div>
        <div className={styles.statItem}>
          <div className="stat-value">10+</div>
          <div className="stat-label">countries</div>
        </div>
      </div>

      <ScrollDownButton targetId="services" />
    </section>
  );
}
