import React from "react";
import Image from "next/image";
import ScrollDownButton from "../../ScrollDownButton";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="container-custom section-padding relative min-h-[calc(100vh-80px)] overflow-hidden" id="hero">
      {/* Background patterns and gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main background gradients */}
        <div className="glow-effect glow-primary w-[40%] h-[40%] top-0 right-0 opacity-15"></div>
        <div className="glow-effect glow-accent w-[40%] h-[40%] bottom-0 left-0 opacity-15"></div>

        {/* Animated floating orbs */}
        <div className="glow-effect glow-primary w-64 h-64 top-1/4 right-1/4 animate-float"></div>
        <div className="glow-effect glow-accent w-80 h-80 bottom-1/4 left-1/3 animate-float delay-200"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 rounded-full filter blur-2xl animate-float delay-300" 
             style={{backgroundColor: "var(--cool-blue)", opacity: "0.1"}}></div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-24 h-1 rotate-45" 
             style={{background: "linear-gradient(to right, var(--primary), transparent)"}}></div>
        <div className="absolute bottom-32 right-40 w-24 h-1 -rotate-45" 
             style={{background: "linear-gradient(to right, var(--accent), transparent)"}}></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full animate-pulse" 
             style={{backgroundColor: "var(--primary)"}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 rounded-full animate-pulse delay-300" 
             style={{backgroundColor: "var(--accent)"}}></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-20"
             style={{
               background: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
               backgroundSize: "40px 40px"
             }}></div>
      </div>

      {/* Content wrapper */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10 pt-12">
        {/* Hero content */}
        <div className="flex flex-col gap-6 relative z-10">
          <div className="glassmorphism inline-block px-3 py-1 rounded-full mb-2 border-0 self-start">
            <span style={{color: "var(--text-secondary)", fontSize: "0.875rem", fontWeight: "500"}}>
              <span style={{color: "var(--primary)"}}>✨</span> AI-Powered Education Platform
            </span>
          </div>

          <h1 className="heading-xl animate-fade-in">
            <span className="block">Transform Your</span>
            <span className="block">Teaching With</span>
            <span className="relative">
              <span className="text-gradient-primary">AI-Powered</span>
              <span className="absolute -bottom-2 left-0 w-24 h-1 rounded-full"
                    style={{background: "var(--gradient-accent)"}}></span>
            </span>
            <span className="block">Tools</span>
          </h1>

          <p className="body-lg animate-fade-in delay-100" style={{color: "var(--text-muted)", maxWidth: "500px"}}>
            Create engaging lessons, grade assignments faster, and deliver
            personalized learning experiences with our AI teaching assistant that
            works 24/7 to support your educational goals.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <Link href="/auth?mode=signup" className="relative group">
              <span className="absolute -inset-0.5 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-300 animate-pulse"
                    style={{background: "var(--gradient-accent)"}}></span>
              <button className="btn btn-primary relative">
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
                  className="transition-transform duration-300 transform group-hover:translate-x-1"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </Link>

            <Link href="/about" className="relative group">
              <span className="absolute -inset-0.5 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-300"
                    style={{background: "var(--gradient-primary)"}}></span>
              <button className="relative py-3 px-6 rounded-lg font-semibold transition-all duration-300 group-hover:-translate-y-1 group-hover:text-white group-hover:shadow-md"
                      style={{
                        backgroundColor: "var(--background-tertiary)", 
                        color: "var(--text-secondary)",
                        border: "1px solid rgba(255,255,255,0.1)"
                      }}>
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative max-w-[500px] mx-auto z-10">
          {/* Glow effects */}
          <div className="absolute -inset-0.5 rounded-2xl blur opacity-30 animate-pulse"
               style={{background: "var(--gradient-accent)"}}></div>
          <div className="absolute -inset-3 rounded-[30px] blur-xl opacity-50"
               style={{background: "var(--gradient-primary)", opacity: "0.3"}}></div>

          {/* Image wrapper with effects */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 group"
               style={{boxShadow: "var(--shadow-lg)"}}>
            {/* Inner highlight effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                 style={{background: "linear-gradient(to top right, rgba(132,71,164,0.2), rgba(255,107,139,0.2)"}}></div>

            {/* Animated border */}
            <div className="absolute inset-0 p-[1px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 animate-shimmer"
                   style={{
                     background: "linear-gradient(to right, var(--primary), var(--accent), var(--primary))",
                     backgroundSize: "200% 100%"
                   }}></div>
            </div>

            <Image
              src="/teacher.png"
              alt="Teacher working with AI teaching assistant"
              width={600}
              height={600}
              className="w-full h-auto rounded-xl relative z-0"
              priority
            />

            {/* Interactive hover elements */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6"
                 style={{background: "linear-gradient(to top, rgba(15,15,24,0.8), transparent)"}}>
              <span className="px-4 py-2 rounded-full text-sm font-medium glassmorphism"
                    style={{color: "var(--text-color)"}}>
                Learn how it works
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats on desktop */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-8 z-20 hidden lg:flex">
        {[
          { value: "120+", label: "AI templates" },
          { value: "285", label: "educators" },
          { value: "24/7", label: "support" },
          { value: "10+", label: "countries" },
        ].map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-end transition-all duration-300 hover:-translate-x-1 hover:scale-105 relative group"
          >
            <div className="absolute -inset-2 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"
                 style={{background: "var(--gradient-glass)"}}></div>
            <div className="text-2xl md:text-4xl font-bold relative text-gradient-primary">
              {stat.value}
            </div>
            <div className="text-sm uppercase tracking-wider transition-all duration-300 group-hover:text-foreground"
                 style={{color: "var(--text-muted)"}}>
              {stat.label}
            </div>
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-0 h-full rounded-md transition-all duration-300 group-hover:w-1 -mr-4"
                 style={{background: "var(--gradient-primary)"}}></div>
          </div>
        ))}
      </div>

      {/* Stats on mobile */}
      <div className="absolute bottom-8 left-0 w-full flex justify-center lg:hidden z-20">
        <div className="grid grid-cols-2 gap-6 p-4 rounded-xl glassmorphism border-0">
          {[
            { value: "120+", label: "AI templates" },
            { value: "285", label: "educators" },
            { value: "24/7", label: "support" },
            { value: "10+", label: "countries" },
          ].map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center transition-all duration-300 group"
            >
              <div className="text-xl sm:text-2xl font-bold text-gradient">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wider transition-all duration-300"
                   style={{color: "var(--text-muted)"}}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-0 w-full flex justify-center z-1000">
        <ScrollDownButton targetId="services" />
      </div>
    </section>
  );
}