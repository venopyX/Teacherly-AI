"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className="sticky top-0 w-full transition-all duration-300 z-[1000]"
      style={{ 
        padding: isScrolled ? "0.75rem 2rem" : "1.5rem 2rem", 
        backgroundColor: isScrolled ? "rgba(15, 15, 24, 0.95)" : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "blur(4px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
        boxShadow: isScrolled ? "var(--shadow-md)" : "none",
      }}
    >
      {/* Background patterns */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="glow-effect glow-primary w-64 h-64 -bottom-8 left-0"></div>
        <div className="glow-effect glow-accent w-64 h-64 -top-8 right-0"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full filter blur-2xl"
             style={{backgroundColor: "var(--cool-blue)", opacity: "0.3"}}></div>
      </div>

      <div className="container-custom flex justify-between items-center">
        {/* Logo with icon */}
        <div className="relative group z-10">
          <Link href="/" className="flex items-center gap-2 transition-all duration-300">
            <div className="relative w-8 h-8 md:w-9 md:h-9">
              <Image
                src="/logo.svg"
                alt="Teacherly Logo"
                width={36}
                height={36}
                className="object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-70 transition duration-300"
                   style={{background: "var(--gradient-primary)"}}></div>
            </div>
            <span className="text-gradient text-2xl font-bold relative">
              Teacherly
              <span className="absolute bottom-[-5px] left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full"
                    style={{background: "var(--gradient-accent)"}}></span>
            </span>
          </Link>
          <div className="absolute -inset-1 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"
               style={{background: "var(--gradient-glass)"}}></div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block z-10">
          <ul className="flex gap-8">
            {["Home", "Services", "Features", "Testimonials", "Pricing"].map((item, index) => (
              <li key={index}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="relative transition-all duration-300 group"
                  style={{
                    color: "var(--text-secondary)",
                    fontWeight: "600",
                    fontSize: "0.9rem"
                  }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full"
                        style={{background: "var(--gradient-accent)"}}></span>
                  <span className="absolute -inset-x-2 -inset-y-1 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"
                        style={{background: "var(--gradient-glass)"}}></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Auth buttons */}
        <div className="flex items-center gap-4 z-10">
          <Link
            href="/auth?mode=login"
            className="hidden sm:inline-block relative group transition-all duration-300"
            style={{
              color: "var(--text-muted)",
              fontSize: "0.875rem"
            }}
          >
            Sign in
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full"
                  style={{backgroundColor: "var(--text-muted)"}}></span>
          </Link>
          <Link
            href="/auth?mode=signup"
            className="btn btn-primary relative py-2 px-4 text-sm"
          >
            <span className="relative z-10">Start Free</span>
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{background: "var(--gradient-accent)"}}></span>
            <span className="absolute -inset-1 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"
                  style={{background: "var(--gradient-glass)"}}></span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className={`flex md:hidden flex-col justify-between w-6 h-[18px] bg-transparent border-none cursor-pointer p-0 z-50 relative ${
            mobileMenuOpen ? "active" : ""
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-full h-[2px] transition-all duration-300"
            style={{
              backgroundColor: mobileMenuOpen ? "var(--primary)" : "var(--text-color)",
              transform: mobileMenuOpen ? "translateY(8px) rotate(45deg)" : "none"
            }}
          ></span>
          <span
            className="block w-full h-[2px] transition-all duration-300"
            style={{
              backgroundColor: "var(--text-color)",
              opacity: mobileMenuOpen ? "0" : "1"
            }}
          ></span>
          <span
            className="block w-full h-[2px] transition-all duration-300"
            style={{
              backgroundColor: mobileMenuOpen ? "var(--primary)" : "var(--text-color)",
              transform: mobileMenuOpen ? "translateY(-8px) rotate(-45deg)" : "none"
            }}
          ></span>
          <span className="absolute -inset-3 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"
                style={{backgroundColor: "var(--primary)", opacity: "0.2"}}></span>
        </button>

        {/* Mobile menu */}
        <div
          className={`fixed top-[70px] right-0 w-4/5 max-w-[300px] h-[calc(100vh-70px)] z-40 transition-all duration-300 p-8 overflow-y-auto glassmorphism ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            boxShadow: "var(--shadow-lg)"
          }}
        >
          {/* Mobile menu background effects */}
          <div className="glow-effect glow-primary w-32 h-32 top-0 right-0"></div>
          <div className="glow-effect glow-accent w-32 h-32 bottom-0 left-0"></div>

          {/* Mobile menu logo */}
          <div className="flex items-center gap-2 mb-8">
            <div className="relative w-7 h-7">
              <Image
                src="/logo.svg"
                alt="Teacherly Logo"
                width={28}
                height={28}
                className="object-contain"
              />
            </div>
            <span className="text-gradient text-xl font-bold">Teacherly</span>
          </div>

          <ul className="flex flex-col gap-6 p-0 relative z-10">
            {["Home", "Services", "Features", "Testimonials", "Pricing", "Sign in"].map(
              (item, index) => (
                <li key={index}>
                  <Link
                    href={
                      item === "Sign in"
                        ? "/auth?mode=login"
                        : `#${item.toLowerCase()}`
                    }
                    onClick={() => setMobileMenuOpen(false)}
                    className="block transition-all duration-300 group hover:translate-x-2"
                    style={{
                      color: "var(--text-color)",
                      fontSize: "1.125rem",
                      fontWeight: "600"
                    }}
                  >
                    {item}
                    <span className="block w-0 h-[1px] transition-all duration-300 group-hover:w-1/2 mt-1"
                          style={{background: "var(--gradient-accent)"}}></span>
                  </Link>
                </li>
              )
            )}
            <li>
              <Link
                href="/auth?mode=signup"
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn-primary block text-center mt-4 relative group overflow-hidden"
              >
                <span className="relative z-10">Start Free</span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{background: "var(--gradient-accent)"}}></span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}