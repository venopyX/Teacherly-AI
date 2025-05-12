"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

// Component that uses useSearchParams
function AuthContent() {
  const searchParams = useSearchParams();
  const mode = searchParams.get('mode');

  const [isLogin, setIsLogin] = useState(mode !== 'signup');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();

  // Set initial mode based on URL parameter
  useEffect(() => {
    if (mode === 'signup') {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [mode]);

  // Toggle between login and signup
  const toggleMode = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsLogin(!isLogin);
      setIsAnimating(false);
      
      // Update URL to reflect current mode
      const newMode = !isLogin ? 'login' : 'signup';
      router.push(`/auth?mode=${newMode}`, { scroll: false });
    }, 300);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Here you would typically handle authentication
    // For now, we'll just simulate a successful login/signup
    console.log(isLogin ? "Logging in..." : "Signing up...");
    console.log({ email, password, name });

    // Redirect to home page after successful login/signup
    router.push("/");
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

        <Link 
          href="/dashboard" 
          className="btn btn-sm group flex items-center gap-2 relative overflow-hidden"
        >
          <span className="relative z-10">Go to Dashboard</span>
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
            className="relative z-10 transition-transform duration-300 transform group-hover:translate-x-1"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="3" y1="9" x2="21" y2="9"></line>
            <line x1="9" y1="21" x2="9" y2="9"></line>
          </svg>
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "var(--gradient-glass)" }}></span>
        </Link>
      </header>

      {/* Main auth container */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className={`w-full max-w-md transition-all duration-300 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="card-gradient p-8 rounded-xl relative overflow-hidden">
            {/* Card glow effect */}
            <div className="absolute top-0 left-0 w-full h-16 opacity-20 pointer-events-none"
                 style={{ background: "linear-gradient(to bottom, var(--primary-light), transparent)" }}></div>
            
            {/* Form header */}
            <div className="text-center mb-8">
              <h1 className="heading-lg mb-2">
                {isLogin ? "Welcome Back" : "Create Account"}
              </h1>
              <p className="body-sm" style={{ color: "var(--text-secondary)" }}>
                {isLogin
                  ? "Enter your credentials to access your account"
                  : "Fill in the form to create your account"}
              </p>
            </div>

            {/* Auth form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Name field (signup only) */}
              {!isLogin && (
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium" style={{ color: "var(--text-color)" }}>
                    Full Name
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "var(--text-muted)" }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </span>
                    <input
                      type="text"
                      id="name"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required={!isLogin}
                      className="w-full glassmorphism py-3 px-10 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300"
                      style={{ 
                        color: "var(--text-color)",
                        borderColor: "rgba(255, 255, 255, 0.1)"
                      }}
                    />
                  </div>
                </div>
              )}

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

              {/* Password field */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <label htmlFor="password" className="text-sm font-medium" style={{ color: "var(--text-color)" }}>
                    Password
                  </label>
                  {isLogin && (
                    <Link 
                      href="/auth/forgot-password" 
                      className="text-xs hover:text-gradient-primary transition-all duration-300"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Forgot Password?
                    </Link>
                  )}
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "var(--text-muted)" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </span>
                  <input
                    type="password"
                    id="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                  {isLogin ? "Sign In" : "Create Account"}
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

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-1 h-px" style={{ background: "rgba(255, 255, 255, 0.1)" }}></div>
              <span className="px-4 text-xs uppercase" style={{ color: "var(--text-muted)" }}>or</span>
              <div className="flex-1 h-px" style={{ background: "rgba(255, 255, 255, 0.1)" }}></div>
            </div>

            {/* Social login */}
            <div className="flex flex-col gap-3">
              <button className="glassmorphism w-full py-3 px-4 rounded-lg flex items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#1877F2" }}>
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span style={{ color: "var(--text-color)" }}>Continue with Facebook</span>
              </button>
              <button className="glassmorphism w-full py-3 px-4 rounded-lg flex items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#333" }}>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <span style={{ color: "var(--text-color)" }}>Continue with GitHub</span>
              </button>
            </div>

            {/* Toggle mode */}
            <div className="mt-8 text-center">
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button 
                  type="button" 
                  onClick={toggleMode} 
                  className="ml-1 text-gradient-primary font-semibold hover:underline transition-all duration-300"
                >
                  {isLogin ? "Sign Up" : "Sign In"}
                </button>
              </p>
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

// Main Auth component with Suspense boundary
export default function Auth() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--card-bg)" }}>
        <div className="animate-pulse text-gradient-primary text-xl">Loading...</div>
      </div>
    }>
      <AuthContent />
    </Suspense>
  );
}