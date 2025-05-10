"use client"
import React, { useState, useEffect } from "react";
import styles from "../../../app/page.module.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className={styles.logo}>Teacherly</div>
      
      <nav className="header-nav">
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
        </ul>
      </nav>
      
      <div className={styles.signIn}>
        <a href="/auth?mode=login" className={styles.signInLink}>
          Sign in
        </a>
        <a href="/auth?mode=signup" className={styles.ctaButton}>
          Start Free
        </a>
      </div>
      
      <button 
        className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#hero" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
          <li><a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a></li>
          <li><a href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a></li>
          <li><a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a></li>
          <li><a href="/auth?mode=login" onClick={() => setMobileMenuOpen(false)}>Sign in</a></li>
          <li><a href="/auth?mode=signup" className="mobile-cta" onClick={() => setMobileMenuOpen(false)}>Start Free</a></li>
        </ul>
      </div>
    </header>
  );
}
