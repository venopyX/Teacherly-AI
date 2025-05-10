import React from "react";
import styles from "../../../app/page.module.css";
import AnimatedSection from "../../AnimatedSection";
import AnimatedElement from "../../AnimatedElement";

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
      description: "Generate engaging lesson plans, activities, and materials in seconds based on your curriculum needs and teaching style."
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
      description: "Save hours with AI-assisted grading that provides fair assessments and personalized feedback for each student."
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
      description: "Analyze learning patterns and identify areas where students need additional help with real-time performance analytics."
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
      description: "Design comprehensive, standards-aligned curriculum pathways that adapt to your teaching philosophy and student needs."
    }
  ];

  return (
    <>
      <AnimatedElement animation="scale" delay={0.3}>
        <div className={styles.instructorsText}>
          <span className="badge">Trusted by 120+ Educational Institutions</span>
        </div>
      </AnimatedElement>

      <AnimatedSection
        id="services"
        className={styles.servicesSection}
        animation="up"
      >
        <div className="container">
          <AnimatedElement animation="fade" delay={0.2}>
            <h2 className={styles.sectionTitle}>
              <span className="text-gradient">AI-Powered</span> Teaching Tools
            </h2>
            <p className="section-subtitle">
              Everything you need to transform your teaching experience
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-2 gap-6 mt-12">
            {services.map((service, index) => (
              <AnimatedElement 
                key={index}
                animation={index % 2 === 0 ? "left" : "right"} 
                delay={0.3 + index * 0.1}
              >
                <div className={styles.serviceItem}>
                  <div className={`${styles.serviceIcon} service-icon-${index}`}>
                    {service.icon}
                  </div>
                  <div className={styles.serviceContent}>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                    <p className={styles.serviceDescription}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>

          <AnimatedElement animation="up" delay={0.8}>
            <div className="flex justify-center mt-12">
              <a href="/features" className="btn btn-accent">
                Explore All Features
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
            </div>
            
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <div className="stat-value">5x</div>
                <div className="stat-label">faster grading</div>
              </div>
              <div className={styles.statItem}>
                <div className="stat-value">3hrs</div>
                <div className="stat-label">saved weekly</div>
              </div>
              <div className={styles.statItem}>
                <div className="stat-value">97%</div>
                <div className="stat-label">satisfaction</div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </AnimatedSection>
    </>
  );
}
