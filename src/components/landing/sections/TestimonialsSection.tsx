import React from "react";
import Image from "next/image";
import styles from "../../../app/page.module.css";
import AnimatedSection from "../../AnimatedSection";
import AnimatedElement from "../../AnimatedElement";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "High School English Teacher",
      image: "/testimonial1.jpg", // placeholder
      content: "Teacherly has transformed the way I create and grade assignments. I'm saving at least 5 hours every week, which I can now spend giving students more personalized attention."
    },
    {
      name: "Michael Rodriguez",
      role: "Middle School Science Teacher",
      image: "/testimonial2.jpg", // placeholder
      content: "The AI lesson plans are incredibly adaptive. I can easily customize them for different learning styles, and my students are more engaged than ever. The analytics help me identify who needs extra support before they fall behind."
    },
    {
      name: "Emily Chang",
      role: "Elementary School Teacher",
      image: "/testimonial3.jpg", // placeholder
      content: "As a new teacher, Teacherly has been my secret weapon. The curriculum builder helped me design compelling lessons that meet all our district standards, and the grading tools make feedback consistent and meaningful."
    }
  ];

  return (
    <AnimatedSection className={styles.testimonialSection} animation="fade">
      <div className="container">
        <AnimatedElement animation="up" delay={0.2}>
          <h2 className={styles.sectionTitle}>
            <span className="text-gradient">Loved</span> by Educators
          </h2>
          <p className="section-subtitle text-center mx-auto" style={{ maxWidth: "600px" }}>
            Join hundreds of teachers who are transforming their classrooms with our AI-powered toolkit
          </p>
        </AnimatedElement>

        <div className="testimonial-slider mt-12">
          {testimonials.map((testimonial, index) => (
            <AnimatedElement
              key={index}
              animation={index % 2 === 0 ? "left" : "right"}
              delay={0.3 + index * 0.2}
              className="mb-8"
            >
              <div className={`${styles.testimonialCard} with-quote`}>
                <div className={styles.testimonialHeader}>
                  <div className={styles.testimonialAvatar}>
                    {/* Replace with actual images when available */}
                    <div className="avatar-placeholder"></div>
                  </div>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.testimonialName}>{testimonial.name}</div>
                    <div className={styles.testimonialRole}>{testimonial.role}</div>
                  </div>
                </div>
                <p className={styles.testimonialContent}>
                  {testimonial.content}
                </p>
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
        
        <AnimatedElement animation="up" delay={0.6}>
          <div className="text-center mt-12">
            <a href="/case-studies" className="btn btn-secondary">
              Read Success Stories
            </a>
          </div>
        </AnimatedElement>
      </div>
    </AnimatedSection>
  );
}
