import React from "react";
import AnimatedSection from "../../AnimatedSection";
import AnimatedElement from "../../AnimatedElement";
import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
        </svg>
      ),
      title: "AI LESSON CREATOR",
      description: "Generate engaging lesson plans, activities, and materials in seconds based on your curriculum needs and teaching style.",
      color: "primary",
      gradient: "gradient-primary"
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      ),
      title: "SMART GRADING",
      description: "Save hours with AI-assisted grading that provides fair assessments and personalized feedback for each student.",
      color: "accent",
      gradient: "gradient-accent"
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      ),
      title: "STUDENT INSIGHTS",
      description: "Analyze learning patterns and identify areas where students need additional help with real-time performance analytics.",
      color: "cool-teal",
      gradient: "linear-gradient(135deg, var(--cool-teal) 0%, var(--cool-blue) 100%)"
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      ),
      title: "CURRICULUM BUILDER",
      description: "Design comprehensive, standards-aligned curriculum pathways that adapt to your teaching philosophy and student needs.",
      color: "cool-orange",
      gradient: "linear-gradient(135deg, var(--cool-orange) 0%, var(--accent) 100%)"
    }
  ];

  return (
    <section className="section-padding" id="services">
      <div className="container-custom relative z-10">
        {/* Floating badge with institutions count */}
        <AnimatedElement animation="scale" delay={0.3} className="mb-16">
          <div className="flex justify-center relative">
            <div className="absolute inset-0" 
                 style={{background: "radial-gradient(circle at center, rgba(132,71,164,0.12), rgba(0,0,0,0) 70%)"}}></div>
            <div className="glassmorphism py-2 px-6 rounded-full inline-flex items-center gap-2 animate-pulse"
                 style={{border: "1px solid rgba(var(--primary), 0.3)"}}>
              <span style={{color: "var(--accent)"}}>✦</span>
              <span className="font-semibold tracking-wide" style={{color: "var(--primary-light)", fontSize: "0.875rem"}}>
                Trusted by 120+ Educational Institutions
              </span>
              <span style={{color: "var(--accent)"}}>✦</span>
            </div>
          </div>
        </AnimatedElement>

        {/* Section header with gradient background */}
        <div className="relative py-20 rounded-xl overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 -z-10" style={{background: "var(--gradient-bg)"}}></div>
          
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            {/* Glowing orbs */}
            <div className="glow-effect glow-primary w-40 h-40 top-1/4 -left-20 opacity-30 animate-float"></div>
            <div className="glow-effect glow-accent w-64 h-64 bottom-10 right-10 opacity-20 animate-float delay-200"></div>
            <div className="glow-effect w-24 h-24 top-1/3 right-1/4 opacity-30 animate-float delay-300"
                 style={{backgroundColor: "var(--cool-teal)"}}></div>
            
            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-10"
                 style={{
                   background: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                   backgroundSize: "40px 40px"
                 }}></div>
          </div>
          
          {/* Section content */}
          <div className="relative z-10">
            {/* Heading */}
            <AnimatedElement animation="fade" delay={0.2} className="mb-16">
              <div className="flex flex-col items-center text-center">
                <div className="badge badge-primary mb-4">Our Services</div>
                <h2 className="heading-xl mb-6">
                  <span className="text-gradient-primary">AI-Powered</span> Teaching Tools
                </h2>
                <div className="divider mx-auto"></div>
                <p className="body-lg mt-4 max-w-[600px]" style={{color: "var(--text-secondary)"}}>
                  Everything you need to transform your teaching experience with cutting-edge AI technology
                </p>
              </div>
            </AnimatedElement>

            {/* Services grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {services.map((service, index) => (
                <AnimatedElement 
                  key={index}
                  animation={index % 2 === 0 ? "left" : "right"} 
                  delay={0.3 + index * 0.1}
                  className="h-full"
                >
                  <div className="card h-full flex gap-6 group hover:translate-y-[-5px]">
                    {/* Service icon with glow effect */}
                    <div className="relative">
                      <div className="absolute inset-0 scale-150 blur-xl opacity-40 transition-opacity duration-300 group-hover:opacity-70 rounded-full"
                           style={{backgroundColor: `var(--${service.color})`, opacity: "0.2"}}></div>
                      <div className="text-3xl relative transition-all duration-500 group-hover:scale-[1.2]"
                           style={{color: `var(--${service.color})`}}>
                        {service.icon}
                      </div>
                    </div>

                    {/* Service content */}
                    <div className="flex flex-col gap-3">
                      <h3 className="heading-sm transition-all duration-300 group-hover:text-gradient"
                          style={{color: "var(--text-color)"}}>{service.title}</h3>
                      
                      {/* Animated divider line */}
                      <div className="h-1 w-12 rounded-full transition-all duration-300 group-hover:w-20"
                           style={{background: service.color === "primary" ? "var(--gradient-primary)" : 
                                           service.color === "accent" ? "var(--gradient-accent)" : 
                                           service.gradient}}></div>
                      
                      <p className="body-sm transition-all duration-300 group-hover:text-text-secondary"
                         style={{color: "var(--text-muted)"}}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                </AnimatedElement>
              ))}
            </div>

            {/* CTA Button */}
            <AnimatedElement animation="up" delay={0.6} className="flex justify-center mt-16">
              <Link href="/features" className="btn btn-accent group">
                <span className="relative z-10">Explore All Features</span>
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
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </AnimatedElement>
            
            {/* Stats cards */}
            <AnimatedElement animation="up" delay={0.8} className="mt-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { value: "5x", label: "faster grading", icon: "⚡" },
                  { value: "3hrs", label: "saved weekly", icon: "🕒" },
                  { value: "97%", label: "satisfaction", icon: "★" }
                ].map((stat, index) => (
                  <div key={index} className="card-gradient h-full p-8 flex flex-col items-center justify-center text-center group hover:-translate-y-[5px] animate-fade-in delay-300">
                    <div className="text-2xl mb-2 transition-all duration-300 group-hover:animate-pulse"
                         style={{color: "var(--text-muted)"}}>{stat.icon}</div>
                    
                    <div className="text-4xl font-bold text-gradient-primary animate-fade-in">{stat.value}</div>
                    
                    <div className="text-sm uppercase tracking-wider mt-1 transition-all duration-300 group-hover:text-text-secondary"
                         style={{color: "var(--text-muted)"}}>
                      {stat.label}
                    </div>
                    
                    {/* Hover effect */}
                    <div className="absolute bottom-0 left-0 w-0 h-1 group-hover:w-full transition-all duration-500 rounded-b-lg"
                         style={{background: "var(--gradient-primary)"}}></div>
                  </div>
                ))}
              </div>
            </AnimatedElement>
          </div>
        </div>
        
        {/* Bottom decorative element */}
        <div className="relative h-24 mt-4">
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background-secondary/80 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}