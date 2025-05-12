'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import AnimatedElement from '@/components/AnimatedElement';

export default function GenerationHub() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col pb-16 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Page header */}
      <header className="pt-8 pb-6 px-6 md:px-8">
        <div className="flex items-center gap-2 mb-2">
          <Link 
            href="/dashboard" 
            className="text-sm hover:text-gradient-primary transition-colors duration-300"
            style={{ color: "var(--text-muted)" }}
          >
            Dashboard
          </Link>
          <span className="text-sm" style={{ color: "var(--text-muted)" }}>/</span>
          <span className="text-sm" style={{ color: "var(--text-secondary)" }}>Generation Hub</span>
        </div>
        <h1 className="heading-xl">Generation Hub</h1>
      </header>

      <div className="px-6 md:px-8 flex-1">
        {/* Main generation cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          <AnimatedElement animation="left" delay={0.1}>
            <div className="card-gradient rounded-xl overflow-hidden h-full flex flex-col shadow-sm hover:shadow-lg transition duration-300">
              <div className="p-6 flex justify-between items-start">
                <div>
                  <h2 className="heading-md mb-1">Generate Material</h2>
                  <p className="body-sm" style={{ color: "var(--text-secondary)" }}>
                    Create and update teaching resources
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full flex items-center justify-center"
                     style={{ background: "var(--gradient-glass)" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                </div>
              </div>
              <div className="px-6 py-3 flex-1">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FFB547' }}></div>
                    <span className="body-md" style={{ color: "var(--text-secondary)" }}>Create new material</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FFB547' }}></div>
                    <span className="body-md" style={{ color: "var(--text-secondary)" }}>Update existing materials</span>
                  </li>
                </ul>
              </div>
              <div className="px-6 pb-6 pt-3">
                <Link 
                  href="/dashboard/generation-hub/material" 
                  className="inline-flex items-center gap-2 btn btn-sm btn-ghost-primary group transition-all duration-300"
                >
                  <span>Create Material</span>
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
                </Link>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement animation="right" delay={0.2}>
            <div className="card-gradient rounded-xl overflow-hidden h-full flex flex-col shadow-sm hover:shadow-lg transition duration-300">
              <div className="p-6 flex justify-between items-start">
                <div>
                  <h2 className="heading-md mb-1">Generate Exam</h2>
                  <p className="body-sm" style={{ color: "var(--text-secondary)" }}>
                    Create assessments for your students
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full flex items-center justify-center"
                     style={{ background: "var(--gradient-glass)" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
              </div>
              <div className="px-6 py-3 flex-1">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#00C896' }}></div>
                    <span className="body-md" style={{ color: "var(--text-secondary)" }}>Quiz exam</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#00C896' }}></div>
                    <span className="body-md" style={{ color: "var(--text-secondary)" }}>Mid exam</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#00C896' }}></div>
                    <span className="body-md" style={{ color: "var(--text-secondary)" }}>Final exam</span>
                  </li>
                </ul>
              </div>
              <div className="px-6 pb-6 pt-3">
                <Link 
                  href="/dashboard/generation-hub/exam" 
                  className="inline-flex items-center gap-2 btn btn-sm btn-ghost-primary group transition-all duration-300"
                >
                  <span>Create Exam</span>
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
                </Link>
              </div>
            </div>
          </AnimatedElement>
        </div>

        {/* Recent generations section */}
        <AnimatedElement animation="up" delay={0.3}>
          <div className="card-gradient rounded-xl overflow-hidden mb-8">
            <div className="p-6">
              <h2 className="heading-md inline-block relative mb-6">
                Recent Generations
                <span className="absolute -bottom-1 left-0 w-12 h-0.5"
                      style={{ background: "var(--gradient-accent)" }}></span>
              </h2>
              
              <div className="flex items-center justify-center py-12 px-4">
                <div className="text-center max-w-md">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center opacity-70"
                       style={{ background: "var(--gradient-glass)" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="8" y1="12" x2="16" y2="12"></line>
                      <line x1="12" y1="16" x2="12" y2="8"></line>
                    </svg>
                  </div>
                  <h3 className="heading-sm mb-2">No generations yet</h3>
                  <p className="body-md" style={{ color: "var(--text-secondary)" }}>
                    You haven&apos;t generated any content yet. Use the cards above to create your first teaching material or exam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </div>
  );
}