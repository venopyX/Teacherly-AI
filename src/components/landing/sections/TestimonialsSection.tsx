import React from "react";
import Image from "next/image";
import AnimatedElement from "../../AnimatedElement";
import Link from "next/link";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Tamiru",
      role: "High School English Teacher",
      image: "/sarah-tamiru.png",
      content:
        "Teacherly has transformed the way I create and grade assignments. I'm saving at least 5 hours every week, which I can now spend giving students more personalized attention.",
    },
    {
      name: "Milki Johannes",
      role: "Geography Teacher",
      image: "/milki-johannes.png",
      content:
        "The AI lesson plans are incredibly adaptive. I can easily customize them for different learning styles, and my students are more engaged than ever. The analytics help me identify who needs extra support before they fall behind.",
    },
    {
      name: "Abebech Dinku",
      role: "Art & Culture Teacher",
      image: "/abebech-dinku.png",
      content:
        "Teacherly has been my secret weapon. The curriculum builder helped me design compelling lessons that meet all our district standards, and the grading tools make feedback consistent and meaningful.",
    },
  ];

  return (
    <section className="section-padding relative" id="testimonials">
      {/* Background patterns and effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Wave pattern at the top */}
        <div className="absolute top-0 left-0 w-full">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 320" 
            className="w-full opacity-20"
            style={{color: "var(--background-tertiary)"}}
          >
            <path 
              fill="currentColor" 
              fillOpacity="1" 
              d="M0,128L40,138.7C80,149,160,171,240,160C320,149,400,107,480,106.7C560,107,640,149,720,154.7C800,160,880,128,960,106.7C1040,85,1120,75,1200,90.7C1280,107,1360,149,1400,170.7L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            ></path>
          </svg>
        </div>

        {/* Dot pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]"
             style={{
               background: "radial-gradient(var(--primary) 1px, transparent 1px)",
               backgroundSize: "30px 30px"
             }}></div>

        {/* Glow elements */}
        <div className="glow-effect w-96 h-96 top-1/3 left-0 rounded-full opacity-20"
             style={{background: "var(--gradient-primary)"}}></div>
        <div className="glow-effect w-80 h-80 bottom-0 right-10 rounded-full opacity-15"
             style={{background: "var(--gradient-accent)"}}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section header */}
        <AnimatedElement animation="up" delay={0.2}>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="badge badge-accent mb-4">Testimonials</div>
            <h2 className="heading-xl mb-6">
              <span className="text-gradient-primary">Loved</span> by Educators
            </h2>
            <div className="divider mx-auto"></div>
            <p className="body-lg mt-4 max-w-[600px]" style={{color: "var(--text-secondary)"}}>
              Join hundreds of teachers who are transforming their classrooms with
              our AI-powered toolkit
            </p>
          </div>
        </AnimatedElement>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <AnimatedElement
              key={index}
              animation={index % 2 === 0 ? "left" : "right"}
              delay={0.3 + index * 0.2}
            >
              <div className="card-gradient p-8 rounded-xl border border-white/5 transition-all duration-500 hover:-translate-y-3 hover:shadow-xl relative overflow-hidden group h-full">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-xl -translate-y-20 translate-x-20 group-hover:translate-y-0 group-hover:translate-x-10 transition-all duration-700 ease-in-out"
                     style={{background: "linear-gradient(to bottom right, rgba(var(--primary), 0.05), rgba(var(--accent), 0.05))"}}></div>
                
                {/* Quote mark */}
                <div className="absolute top-6 left-6 text-7xl font-serif leading-none z-0 group-hover:text-primary/5 transition-all duration-300"
                     style={{color: "rgba(255, 255, 255, 0.03)"}}>
                  &quot;
                </div>
                
                {/* Testimonial header with avatar */}
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="w-16 h-16 rounded-full overflow-hidden relative p-[2px] shadow-lg transition-all duration-300 group-hover:shadow-primary/20"
                       style={{background: "linear-gradient(to bottom right, var(--primary-light), var(--accent-light))"}}>
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={`${testimonial.name} avatar`}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-lg transition-all duration-300 group-hover:text-gradient-primary">
                      {testimonial.name}
                    </div>
                    <div className="text-xs transition-all duration-300 group-hover:text-foreground"
                         style={{color: "var(--text-muted)"}}>
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                
                {/* Testimonial content */}
                <div className="relative">
                  <p className="body-sm leading-relaxed relative z-10 transition-all duration-300 group-hover:text-text-color"
                     style={{color: "var(--text-muted)"}}>
                    {testimonial.content}
                  </p>
                </div>
                
                {/* Star rating */}
                <div className="mt-6 tracking-wider flex gap-1" style={{color: "var(--warning)"}}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="transition-all duration-700 transform group-hover:scale-110 animate-pulse"
                          style={{animationDelay: `${i * 0.1}s`, animationDuration: "3s"}}>
                      ★
                    </span>
                  ))}
                </div>
                
                {/* Decorative corner element */}
                <div className="absolute bottom-0 right-0 h-16 w-16 rounded-tl-3xl opacity-30 group-hover:opacity-70 transition-all duration-500"
                     style={{background: "linear-gradient(to top left, var(--primary-light), transparent)"}}></div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Call to action button */}
        <AnimatedElement animation="up" delay={0.6}>
          <div className="text-center mt-16">
            <Link href="/case-studies" className="btn btn-primary group relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Read Success Stories
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
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </span>
              <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{background: "var(--gradient-accent)"}}></span>
            </Link>
          </div>
        </AnimatedElement>
        
        {/* Bottom gradient border */}
        <div className="absolute bottom-0 left-0 w-full h-1"
             style={{background: "linear-gradient(to right, rgba(var(--primary), 0), rgba(var(--primary), 0.3), rgba(var(--accent), 0))"}}></div>
      </div>
    </section>
  );
}