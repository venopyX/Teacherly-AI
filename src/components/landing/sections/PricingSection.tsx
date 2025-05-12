"use client"
import React, { useState } from "react";
import AnimatedElement from "../../AnimatedElement";

interface PriceToggleProps {
  isAnnual: boolean;
  setIsAnnual: (value: boolean) => void;
}

// Price toggle component with global styles and proper TypeScript types
const PriceToggle: React.FC<PriceToggleProps> = ({ isAnnual, setIsAnnual }) => {
  return (
    <div className="flex items-center justify-center gap-4 mb-12">
      <span 
        className="text-sm font-medium transition-colors duration-300"
        style={{ color: !isAnnual ? 'var(--text-color)' : 'var(--text-muted)' }}
      >
        Monthly
      </span>
      <div
        className="relative w-16 h-8 rounded-full cursor-pointer glassmorphism"
        onClick={() => setIsAnnual(!isAnnual)}
      >
        <div className="absolute inset-1 rounded-full overflow-hidden"
             style={{ background: 'var(--gradient-glass)' }}>
          <div
            className="absolute w-6 h-6 rounded-full transition-all duration-300 transform"
            style={{ 
              backgroundColor: 'var(--primary)',
              transform: isAnnual ? 'translateX(2rem)' : 'translateX(0)' 
            }}
          >
            <div className="absolute inset-1 rounded-full bg-white/90"></div>
          </div>
        </div>
      </div>
      <span 
        className="text-sm font-medium transition-colors duration-300 flex items-center gap-1"
        style={{ color: isAnnual ? 'var(--text-color)' : 'var(--text-muted)' }}
      >
        Yearly 
        <span className="text-xs font-bold badge badge-primary ml-1">Save 20%</span>
      </span>
    </div>
  );
};

// Popular tag component
const PopularTag = () => (
  <div className="absolute -top-3 right-6 text-xs font-bold py-1 px-3 rounded-full animate-pulse"
       style={{ 
         background: 'var(--gradient-accent)',
         color: 'white',
         boxShadow: 'var(--shadow-primary)'
       }}>
    Most Popular
  </div>
);

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individual teachers",
      price: isAnnual ? 15 : 19,
      features: [
        "50 AI-powered lesson plans",
        "Basic analytics",
        "Email support",
        "Single classroom management",
        "Standard templates"
      ],
      cta: "Start Free Trial",
      ctaClass: "starter",
      isPopular: false
    },
    {
      name: "Professional",
      description: "Designed for growing educators",
      price: isAnnual ? 39 : 49,
      features: [
        "Unlimited AI-powered lesson plans",
        "Advanced analytics & insights",
        "Priority support",
        "Multiple classroom management",
        "Custom templates",
        "Student progress tracking",
        "Learning path creation"
      ],
      cta: "Get Started",
      ctaClass: "pro",
      isPopular: true
    },
    {
      name: "Enterprise",
      description: "For schools and institutions",
      price: isAnnual ? 79 : 99,
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "API access",
        "Custom integrations",
        "Advanced reporting",
        "School-wide analytics",
        "Training workshops"
      ],
      cta: "Contact Sales",
      ctaClass: "enterprise",
      isPopular: false
    }
  ];

  return (
    <section className="section-padding relative overflow-hidden" id="pricing">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10" style={{ background: 'var(--background-secondary)' }}></div>
      <div className="absolute inset-0 -z-10 opacity-50"
           style={{ 
             backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC4wNCIgY3g9IjMwIiBjeT0iMzAiIHI9IjEiLz48L2c+PC9zdmc+")',
           }}></div>
      
      {/* Gradient orbs */}
      <div className="glow-effect w-[400px] h-[400px] top-[-200px] right-[-100px] -z-10 rounded-full"
           style={{ backgroundColor: 'var(--deep-purple)', opacity: '0.2', filter: 'blur(120px)' }}></div>
      <div className="glow-effect glow-primary w-[300px] h-[300px] bottom-[-100px] left-[-100px] -z-10 rounded-full opacity-15"
           style={{ filter: 'blur(100px)' }}></div>
      
      <div className="container-custom relative z-10">
        {/* Section header */}
        <AnimatedElement animation="fade" delay={0.1} className="text-center mb-12">
          <div className="glassmorphism inline-block px-3 py-1 rounded-full mb-4">
            <span className="text-xs font-semibold" style={{ color: 'var(--text-secondary)' }}>
              Flexible Plans
            </span>
          </div>
          <h2 className="heading-xl mb-4">
            <span className="text-gradient-primary">Simple Pricing</span> for Every Educator
          </h2>
          <p className="body-md max-w-lg mx-auto mb-6" style={{ color: 'var(--text-secondary)' }}>
            Choose the perfect plan that fits your teaching needs. All plans include a 14-day free trial.
          </p>
          
          {/* Price toggle */}
          <PriceToggle isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
        </AnimatedElement>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <AnimatedElement 
              key={plan.name} 
              animation="fade" 
              delay={0.2 + index * 0.1} 
              className="relative"
            >
              <div className={`h-full rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
                plan.isPopular ? 'animate-glow' : ''
              }`}
                   style={{
                     border: plan.isPopular ? '1px solid rgba(var(--primary), 0.3)' : '1px solid rgba(255, 255, 255, 0.05)',
                     background: plan.isPopular 
                       ? 'linear-gradient(to bottom, var(--card-bg), var(--background-tertiary))' 
                       : 'var(--card-bg)',
                     boxShadow: plan.isPopular ? 'var(--shadow-lg)' : 'var(--shadow-sm)'
                   }}>
                {plan.isPopular && <PopularTag />}
                
                <div className="p-8">
                  {/* Plan header */}
                  <h3 className="heading-sm mb-2">{plan.name}</h3>
                  <p className="body-sm mb-6" style={{ color: 'var(--text-muted)' }}>{plan.description}</p>
                  
                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-end">
                      <span className="text-4xl font-bold" style={{ color: 'var(--text-color)' }}>${plan.price}</span>
                      <span className="ml-2 mb-1" style={{ color: 'var(--text-muted)' }}>/ {isAnnual ? 'year' : 'month'}</span>
                    </div>
                    {isAnnual && (
                      <div className="text-xs mt-1" style={{ color: 'var(--primary)' }}>Billed annually</div>
                    )}
                  </div>
                  
                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <svg 
                          className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" 
                          style={{ color: 'var(--primary)' }}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span style={{ color: 'var(--text-secondary)' }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA */}
                  <button 
                    className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                      plan.ctaClass === "pro" ? "btn btn-primary" : 
                      "relative group overflow-hidden"
                    }`}
                    style={
                      plan.ctaClass !== "pro" ? {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        color: 'var(--text-color)'
                      } : {}
                    }
                  >
                    <span className="relative z-10">{plan.cta}</span>
                    {plan.ctaClass !== "pro" && (
                      <span 
                        className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                      ></span>
                    )}
                  </button>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
        
        {/* Enterprise banner */}
        <AnimatedElement animation="fade" delay={0.5} className="mt-16">
          <div className="rounded-xl p-1"
               style={{ background: 'linear-gradient(to right, rgba(var(--primary), 0.3), rgba(var(--cool-teal), 0.3), rgba(var(--primary), 0.3))' }}>
            <div className="glassmorphism rounded-lg p-8 md:p-10 flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 text-center md:text-left">
                <h3 className="heading-sm mb-2">Need a custom solution?</h3>
                <p className="body-md max-w-lg" style={{ color: 'var(--text-secondary)' }}>
                  Contact our team for a tailored plan that fits your institution&apos;s specific requirements.
                </p>
              </div>
              <button className="btn relative group overflow-hidden whitespace-nowrap">
                <span className="relative z-10">Contact Sales</span>
                <span 
                  className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'var(--gradient-glass)' }}
                ></span>
              </button>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}