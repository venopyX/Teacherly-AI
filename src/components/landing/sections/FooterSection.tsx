import React from "react";
import AnimatedElement from "../../AnimatedElement";

export default function FooterSection() {
  // Array of social media links for easy maintenance
  const socialLinks = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      ),
      href: "#",
      ariaLabel: "Facebook"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
        </svg>
      ),
      href: "#",
      ariaLabel: "Twitter"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
      href: "#",
      ariaLabel: "Instagram"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
      href: "#",
      ariaLabel: "LinkedIn"
    }
  ];

  // Quick links organized by columns for better structure
  const quickLinks = [
    {
      column: 1,
      links: [
        { name: "About Us", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Help Center", href: "#" }
      ]
    },
    {
      column: 2,
      links: [
        { name: "Documentation", href: "#" },
        { name: "Community", href: "#" },
        { name: "Contact", href: "#" },
        { name: "Webinars", href: "#" }
      ]
    }
  ];

  return (
    <footer className="section-padding relative overflow-hidden" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
      {/* Background gradient and pattern */}
      <div className="absolute inset-0 -z-10" style={{ background: "var(--card-bg)" }}></div>
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full opacity-5"
             style={{ 
               backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNmMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNnptMTIgMTJjMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTZjLTMuMzE0IDAtNiAyLjY4Ni02IDZzMi42ODYgNiA2IDZ6TTEyIDMwYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02Yy0zLjMxNCAwLTYgMi42ODYtNiA2czIuNjg2IDYgNiA2eiIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjJweCIvPjwvZz48L3N2Zz4=')",
             }}></div>
      </div>
      
      {/* Glowing orbs */}
      <div className="glow-effect glow-primary w-[300px] h-[300px] bottom-[-100px] right-[-100px] rounded-full -z-10 opacity-10"></div>
      <div className="glow-effect w-[200px] h-[200px] top-[-50px] left-[-50px] rounded-full -z-10 opacity-10"
           style={{ backgroundColor: "var(--accent-light)" }}></div>
      
      <div className="container-custom relative z-10">
        <AnimatedElement animation="fade" delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative z-10">
            {/* Brand column */}
            <div className="md:col-span-1">
              <div className="flex items-center mb-4">
                <div className="text-gradient text-3xl font-bold mr-2">Teacherly</div>
                <div className="h-6 w-6 rounded-full animate-pulse"
                     style={{ background: "var(--gradient-accent)" }}></div>
              </div>
              <p className="body-sm max-w-[300px] mb-6" style={{ color: "var(--text-muted)" }}>
                Empowering educators with AI-powered tools to create engaging,
                personalized learning experiences.
              </p>
              <div className="flex gap-4 mb-8">
                {/* Social links with improved hover effects */}
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    aria-label={social.ariaLabel}
                    className="w-10 h-10 rounded-full glassmorphism flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md group"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <span className="group-hover:text-gradient-primary transition-all duration-300">
                      {social.icon}
                    </span>
                    <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                          style={{ background: "var(--gradient-primary)" }}></span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links - consolidated */}
            <div className="md:col-span-1">
              <h4 className="heading-sm mb-6 inline-block relative">
                Quick Links
                <span className="absolute -bottom-1 left-0 w-8 h-0.5 transition-all duration-300 group-hover:w-full"
                      style={{ background: "var(--gradient-accent)" }}></span>
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((column, colIndex) => (
                  <div key={colIndex} className="flex flex-col gap-3">
                    {column.links.map((link, linkIndex) => (
                      <a 
                        key={linkIndex}
                        href={link.href}
                        className="link-hover"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup - with improved styling */}
            <div className="md:col-span-1">
              <h4 className="heading-sm mb-6 inline-block relative">
                Stay Updated
                <span className="absolute -bottom-1 left-0 w-8 h-0.5 transition-all duration-300 group-hover:w-full"
                      style={{ background: "var(--gradient-accent)" }}></span>
              </h4>
              <div className="mb-6">
                <p className="body-sm mb-4" style={{ color: "var(--text-muted)" }}>
                  Get the latest updates and resources delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-grow">
                    <input 
                      type="email" 
                      placeholder="Your email" 
                      className="w-full glassmorphism rounded-lg px-4 py-2 text-sm transition-all duration-300 focus:outline-none focus:ring-2"
                      style={{ 
                        borderColor: "rgba(255, 255, 255, 0.1)", 
                        color: "var(--text-color)"
                      }}
                    />
                    <div className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 pointer-events-none focus-within:opacity-20"
                         style={{ background: "var(--gradient-glass)" }}></div>
                  </div>
                  <button className="btn btn-primary text-sm whitespace-nowrap group relative overflow-hidden">
                    <span className="relative z-10">Subscribe</span>
                    <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ background: "var(--gradient-accent)" }}></span>
                  </button>
                </div>
              </div>
              <div style={{ color: "var(--text-muted)" }}>
                <h5 className="text-xs font-semibold mb-2" style={{ color: "var(--text-color)" }}>Legal</h5>
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  <a href="#" className="text-xs hover:text-gradient-primary transition-all duration-300">Terms</a>
                  <a href="#" className="text-xs hover:text-gradient-primary transition-all duration-300">Privacy</a>
                  <a href="#" className="text-xs hover:text-gradient-primary transition-all duration-300">Cookies</a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer bottom with animated border and wave */}
          <div className="relative mt-12">
            {/* Animated wave separator */}
            <div className="absolute top-0 left-0 w-full h-12 overflow-hidden -mt-12">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute block w-full h-12">
                <path 
                  d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                  opacity=".25" 
                  className="fill-current" 
                  style={{ color: "var(--primary)" }}
                ></path>
                <path 
                  d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
                  opacity=".5" 
                  className="fill-current" 
                  style={{ color: "var(--accent)" }}
                ></path>
                <path 
                  d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
                  className="fill-current" 
                  style={{ color: "var(--background)" }}
                  fillOpacity="0.1"
                ></path>
              </svg>
            </div>
            
            <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-xs relative z-10" 
                 style={{ borderTop: "1px solid rgba(255, 255, 255, 0.05)", color: "var(--text-muted)" }}>
              <div className="hover:text-gradient-primary transition-all duration-300">
                © {new Date().getFullYear()} Teacherly. All rights reserved.
              </div>
              <div className="flex gap-6 mt-4 sm:mt-0">
                <a href="#" className="hover:text-gradient-primary transition-all duration-300">
                  Sitemap
                </a>
                <a href="#" className="hover:text-gradient-primary transition-all duration-300">
                  Accessibility
                </a>
              </div>
            </div>
          </div>
          
          {/* Footer decorative elements */}
          <div className="absolute bottom-0 right-0 h-6 w-6 rounded-tl-lg opacity-20"
               style={{ background: "var(--gradient-primary)" }}></div>
          <div className="absolute top-4 right-1/4 h-1 w-1 rounded-full animate-ping"
               style={{ background: "var(--primary)", animationDuration: "3s" }}></div>
          <div className="absolute bottom-12 left-1/3 h-1 w-1 rounded-full animate-ping"
               style={{ background: "var(--accent)", animationDuration: "4s", animationDelay: "1s" }}></div>
        </AnimatedElement>
      </div>
    </footer>
  );
}