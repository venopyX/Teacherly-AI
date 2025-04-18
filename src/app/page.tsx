import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>Teacherly</div>
        <div className={styles.signIn}>
          <a href="/auth" className={styles.signInLink}>Sign in</a> |
          <a href="/auth" className={styles.ctaButton}>Join</a>
        </div>
      </header>

      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Hello, Welcome<br />
            To AI Powered<br />
            Teaching<br />
            Toolkit
          </h1>
          <p className={styles.heroText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibhed euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </p>
          <div>
            <button className="btn btn-primary">
              Start
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.heroImage}>
          <Image
            src="/teacher.jpeg"
            alt="Teacher working on computer"
            width={500}
            height={500}
            style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
            priority
          />
        </div>

        <div className={styles.statsContainer}>
          <div className={styles.statItem}>
            <div className="stat-value">120</div>
            <div className="stat-label">courses</div>
          </div>
          <div className={styles.statItem}>
            <div className="stat-value">285</div>
            <div className="stat-label">happy users</div>
          </div>
          <div className={styles.statItem}>
            <div className="stat-value">24.7</div>
            <div className="stat-label">hours</div>
          </div>
          <div className={styles.statItem}>
            <div className="stat-value">10</div>
            <div className="stat-label">countries</div>
          </div>
        </div>
      </section>

      <div className={styles.instructorsText}>Over 120+ Instructors</div>

      <section className={styles.servicesSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our<br />Services</h2>

          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <div className={styles.serviceIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <div className={styles.serviceContent}>
                <h3 className={styles.serviceTitle}>GENERATION HUB</h3>
                <p className={styles.serviceDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibhed euismod tincidunt ut laoreet.</p>
              </div>
            </div>

            <div className={styles.serviceItem}>
              <div className={styles.serviceIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div className={styles.serviceContent}>
                <h3 className={styles.serviceTitle}>GRADING SYSTEM</h3>
                <p className={styles.serviceDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibhed euismod tincidunt ut laoreet.</p>
              </div>
            </div>
          </div>

          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className="stat-value">120</div>
              <div className="stat-label">courses</div>
            </div>
            <div className={styles.statItem}>
              <div className="stat-value">285</div>
              <div className="stat-label">happy users</div>
            </div>
            <div className={styles.statItem}>
              <div className="stat-value">10</div>
              <div className="stat-label">countries</div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.testimonialSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Testimonials</h2>

          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialHeader}>
                <div className={styles.testimonialAvatar}></div>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialName}>Josh Broline</div>
                  <div className={styles.testimonialRole}>English Teacher</div>
                </div>
              </div>
              <p className={styles.testimonialContent}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibhed euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.testimonialHeader}>
                <div className={styles.testimonialAvatar}></div>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialName}>Mike Portnoy</div>
                  <div className={styles.testimonialRole}>Science Teacher</div>
                </div>
              </div>
              <p className={styles.testimonialContent}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibhed euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerContent}>
            <div className={styles.footerColumn}>
              <div className={styles.footerLogo}>Teacherly</div>
              <p className={styles.footerAbout}>
                Empowering educators with AI-powered tools to create engaging, personalized learning experiences for students around the world.
              </p>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className={styles.socialIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a href="#" className={styles.socialIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className={styles.socialIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>

            <div className={styles.footerColumn}>
              <h4>Company</h4>
              <div className={styles.footerLinks}>
                <a href="#" className={styles.footerLink}>About Us</a>
                <a href="#" className={styles.footerLink}>Our Team</a>
                <a href="#" className={styles.footerLink}>Careers</a>
                <a href="#" className={styles.footerLink}>Press</a>
                <a href="#" className={styles.footerLink}>Contact</a>
              </div>
            </div>

            <div className={styles.footerColumn}>
              <h4>Resources</h4>
              <div className={styles.footerLinks}>
                <a href="#" className={styles.footerLink}>Blog</a>
                <a href="#" className={styles.footerLink}>Documentation</a>
                <a href="#" className={styles.footerLink}>Help Center</a>
                <a href="#" className={styles.footerLink}>Community</a>
                <a href="#" className={styles.footerLink}>Webinars</a>
              </div>
            </div>

            <div className={styles.footerColumn}>
              <h4>Legal</h4>
              <div className={styles.footerLinks}>
                <a href="#" className={styles.footerLink}>Terms of Service</a>
                <a href="#" className={styles.footerLink}>Privacy Policy</a>
                <a href="#" className={styles.footerLink}>Cookie Policy</a>
                <a href="#" className={styles.footerLink}>GDPR</a>
                <a href="#" className={styles.footerLink}>Accessibility</a>
              </div>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <div className={styles.footerCopyright}>
              © {new Date().getFullYear()} Teacherly. All rights reserved.
            </div>
            <div className={styles.footerBottomLinks}>
              <a href="#" className={styles.footerBottomLink}>Sitemap</a>
              <a href="#" className={styles.footerBottomLink}>Cookies</a>
              <a href="#" className={styles.footerBottomLink}>Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
