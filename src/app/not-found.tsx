'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedElement from '@/components/AnimatedElement';

export default function NotFoundPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [randomPhrase, setRandomPhrase] = useState('');

  // Collection of teacher-themed 404 phrases
  const teacherPhrases = [
    "Oops! This page is playing hooky today.",
    "This page must be in the teacher&apos;s lounge.",
    "Looks like this page forgot to turn in its homework.",
    "Class dismissed! This page doesn&apos;t exist.",
    "Even the smartest teachers get lost sometimes.",
    "Pop quiz: Where did this page go?",
    "This page has been sent to the principal&apos;s office.",
    "The chalkboard&apos;s blank-this page is missing!",
    "Oops! No detention can fix this missing page.",
    "This page is out for recess. Try again later!",
    "Looks like this page skipped class today.",
    "The bell rang, but this page never showed up.",
    "This page is still grading its papers-try again soon!",
    "This page took a field trip and got lost.",
    "This page is hiding behind the teacher&apos;s desk.",
    "This page is stuck in a pop quiz frenzy.",
    "Looks like this page is still in study hall.",
    "This page is on a coffee break with the staff.",
  ];

  useEffect(() => {
    // Select a random phrase
    const randomIndex = Math.floor(Math.random() * teacherPhrases.length);
    setRandomPhrase(teacherPhrases[randomIndex]);
    
    // Set loaded state for animation
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-card-bg flex flex-col items-center justify-center p-6 text-center transition-opacity duration-500 relative overflow-hidden" style={{ opacity: isLoaded ? '1' : '0' }}>
      {/* Background elements */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(var(--primary)_1px,transparent_1px)] bg-[length:20px_20px] opacity-[0.03]"></div>
      
      {/* Math formulas floating in background */}
      <div className="absolute inset-0 overflow-hidden -z-5 select-none pointer-events-none">
        {['E=mc²', '2+2=4', 'x²+y²=r²', 'a²+b²=c²', 'F=ma', 'y=mx+b', 'πr²', '∫f(x)dx', 'sin(θ)'].map((formula, index) => (
          <div 
            key={index}
            className="absolute text-white text-2xl md:text-4xl font-bold"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              opacity: 0.1 + Math.random() * 0.2
            }}
          >
            {formula}
          </div>
        ))}
      </div>

      {/* Glow effects */}
      <div className="glow-effect glow-primary w-[600px] h-[600px] -top-[100px] -left-[300px] fixed -z-10 opacity-20"></div>
      <div className="glow-effect glow-accent w-[500px] h-[500px] -bottom-[250px] -right-[250px] fixed -z-10 opacity-15"></div>

      <div className="max-w-3xl w-full">
        <AnimatedElement animation="down" delay={0.1}>
          <div className="flex justify-center mb-6">
            <div className="relative w-20 h-20">
              <Image 
                src="/logo.svg"
                alt="Teacherly Logo"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
          </div>
        </AnimatedElement>

        <AnimatedElement animation="up" delay={0.2}>
          <h1 className="text-5xl md:text-8xl font-bold mb-4 text-gradient-primary">
            404
          </h1>
        </AnimatedElement>

        <AnimatedElement animation="up" delay={0.3}>
          <div className="glassmorphism rounded-xl p-6 mb-8 max-w-xl mx-auto">
            <h2 className="text-xl md:text-2xl font-medium mb-3">{randomPhrase}</h2>
            <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
              The page you&apos;re looking for has mysteriously vanished, like homework on a Monday morning.
            </p>
            
            <div className="w-full h-[1px] bg-white/10 mb-6"></div>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/dashboard" className="btn btn-primary">
                Go to Dashboard
              </Link>
              <Link href="/" className="btn btn-ghost-secondary">
                Back to Home
              </Link>
            </div>
          </div>
        </AnimatedElement>

        <AnimatedElement animation="fade" delay={0.4}>
          <div className="mt-8 flex flex-col items-center">
            <div className="w-50 h-50 relative mb-4">
              <Image 
                src="/404-teacher.svg" 
                alt="Teacher looking confused" 
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              Even the best teachers get lost sometimes!
            </p>
          </div>
        </AnimatedElement>
      </div>
    </div>
  );
}