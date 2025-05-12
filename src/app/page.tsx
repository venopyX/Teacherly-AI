import Header from "@/components/landing/sections/Header";
import HeroSection from "@/components/landing/sections/HeroSection";
import ServicesSection from "@/components/landing/sections/ServicesSection";
import TestimonialsSection from "@/components/landing/sections/TestimonialsSection";
import FooterSection from "@/components/landing/sections/FooterSection";
import PricingSection from "@/components/landing/sections/PricingSection";

export default function Home() {
  return (
    <main className="flex flex-col w-full max-w-full overflow-hidden m-0 p-0">
      {/* Header positioned outside the glassmorphism container to ensure stickiness works properly */}
      <Header />
      
      {/* Glassmorphism container - slightly narrower with subtle shadow */}
      <div className="container-custom mx-auto my-0 p-0 overflow-hidden relative rounded-2xl shadow-xl">
        {/* Decorative elements */}
        <div className="absolute -z-10 w-full h-full m-0 p-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-bg opacity-90 m-0 p-0"></div>
          <div className="absolute top-0 left-0 w-full h-full glassmorphism opacity-30 m-0 p-0"></div>

          {/* Abstract shape overlays */}
          <div className="absolute top-64 right-0 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl m-0 p-0"></div>
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent opacity-5 rounded-full blur-3xl m-0 p-0"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cool-teal opacity-5 rounded-full blur-3xl m-0 p-0"></div>
        </div>

        {/* Main content */}
        <div className="relative z-10 flex flex-col overflow-hidden m-0 p-0">
          {/* Sections with staggered animation */}
          <section className="animate-fade-in m-0 p-0">
            <HeroSection />
          </section>

          <section className="animate-fade-in delay-200 m-0 p-0">
            <ServicesSection />
          </section>

          <section className="animate-fade-in delay-300 m-0 p-0">
            <TestimonialsSection />
          </section>

          <section className="animate-fade-in delay-400 m-0 p-0">
            <PricingSection />
          </section>

          <FooterSection />
        </div>
      </div>
    </main>
  );
}