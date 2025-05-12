"use client";

import Link from "next/link";
import React from "react";

interface ScrollDownButtonProps {
  targetId: string;
}

const ScrollDownButton: React.FC<ScrollDownButtonProps> = ({ targetId }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Enhanced smooth scrolling with better easing
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 1000; // Longer duration for smoother scroll
      let startTime: number | null = null;

      function animation(currentTime: number) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        // Easing function: easeInOutQuad for smoother acceleration/deceleration
        const easeInOutQuad = (t: number) => {
          return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        };

        window.scrollTo(0, startPosition + distance * easeInOutQuad(progress));

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      }

      requestAnimationFrame(animation);
    }
  };

  return (
    <Link
      href={`#${targetId}`}
      className="flex flex-col items-center gap-2 text-text-secondary hover:text-primary transition-colors duration-300 animate-pulse"
      onClick={handleClick}
    >
      <span className="text-sm font-medium">Scroll Down</span>
      <div className="p-2 rounded-full bg-background-tertiary border border-white/10 hover:bg-gradient-to-r from-primary/20 to-accent/20 transition-all duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </Link>
  );
};

export default ScrollDownButton;
