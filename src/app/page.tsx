import styles from "./page.module.css";
import Header from "../components/landing/sections/Header";
import HeroSection from "../components/landing/sections/HeroSection";
import ServicesSection from "../components/landing/sections/ServicesSection";
import TestimonialsSection from "../components/landing/sections/TestimonialsSection";
import FooterSection from "../components/landing/sections/FooterSection";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <FooterSection />
    </div>
  );
}
