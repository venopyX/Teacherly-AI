"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the password reset request
    console.log("Password reset requested for:", email);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10" style={{ background: "var(--card-bg)" }}></div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(var(--primary)_1px,transparent_1px)] bg-[length:20px_20px] opacity-[0.03]"></div>
      
      {/* Glow effects */}
      <div className="glow-effect glow-primary w-[600px] h-[600px] -top-[200px] -left-[200px] -z-10 opacity-20"></div>
      <div className="glow-effect glow-accent w-[500px] h-[500px] -bottom-[200px] -right-[200px] -z-10 opacity-15"></div>
      <div className="glow-effect w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-10"
           style={{ background: "var(--cool-blue)" }}></div>

      {/* Header with logo */}
      <header className="w-full p-6 flex justify-between items-center relative z-10">
        <Link href="/" className="flex items-center gap-2 transition-all duration-300 group">
          <div className="relative w-8 h-8">
            <Image
              src="/logo.svg"
              alt="Teacherly Logo"
              width={32}
              height={32}
              className="object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-70 transition duration-300"
                 style={{ background: "var(--gradient-primary)" }}></div>
          </div>
          <span className="text-gradient text-xl font-bold relative">
            Teacherly
            <span className="absolute bottom-[-3px] left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full"
                  style={{ background: "var(--gradient-accent)" }}></span>
          </span>
        </Link>
      </header>

      {/* Main content container */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="card-gradient p-8 rounded-xl relative overflow-hidden">
            {/* Card glow effect */}
            <div className="absolute top-0 left-0 w-full h-16 opacity-20 pointer-events-none"
                 style={{ background: "linear-gradient(to bottom, var(--primary-light), transparent)" }}></div>
            
            {!isSubmitted ? (
              <>
                {/* Form header */}
                <div className="text-center mb-8">
                  <h1 className="heading-lg mb-2">
                    Reset Password
                  </h1>
                  <p className="body-sm" style={{ color: "var(--text-secondary)" }}>
                    Enter your email address and we&apos;ll send you a link to reset your password
                  </p>
                </div>

                {/* Reset password form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Email field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium" style={{ color: "var(--text-color)" }}>
                      Email Address
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "var(--text-muted)" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      </span>
                      <input
                        type="email"
                        id="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full glassmorphism py-3 px-10 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300"
                        style={{ 
                          color: "var(--text-color)",
                          borderColor: "rgba(255, 255, 255, 0.1)"
                        }}
                      />
                    </div>
                  </div>

                  {/* Submit button */}
                  <button 
                    type="submit" 
                    className="btn btn-primary group mt-2 relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Send Reset Link
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
                    </span>
                    <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ background: "var(--gradient-accent)" }}></span>
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6"
                     style={{ background: "rgba(var(--success), 0.1)" }}>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="32" 
                    height="32" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    style={{ color: "var(--success)" }}
                    className="animate-pulse"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h2 className="heading-md mb-3">Check Your Email</h2>
                <p className="body-md mb-2" style={{ color: "var(--text-color)" }}>
                  We&apos;ve sent a password reset link to <strong className="text-gradient-primary">{email}</strong>
                </p>
                <p className="text-sm mt-4 max-w-sm mx-auto" style={{ color: "var(--text-muted)" }}>
                  If you don&apos;t see the email, check your spam folder or make sure you entered the correct email address.
                </p>
              </div>
            )}

            {/* Back to login link */}
            <div className="mt-8 text-center">
              <Link 
                href="/auth" 
                className="inline-flex items-center gap-2 text-sm hover:text-gradient-primary transition-all duration-300"
                style={{ color: "var(--text-secondary)" }}
              >
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
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                Back to Login
              </Link>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-0 right-0 h-24 w-24 rounded-tl-3xl opacity-20 pointer-events-none"
                 style={{ background: "linear-gradient(to top left, var(--primary-light), transparent)" }}></div>
            <div className="absolute top-0 left-0 h-16 w-16 rounded-br-3xl opacity-20 pointer-events-none"
                 style={{ background: "linear-gradient(to bottom right, var(--accent-light), transparent)" }}></div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="p-6 text-center text-xs" style={{ color: "var(--text-muted)" }}>
        <p>© {new Date().getFullYear()} Teacherly. All rights reserved.</p>
      </footer>
    </div>
  );
}