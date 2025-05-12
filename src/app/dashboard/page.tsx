'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import AnimatedElement from '@/components/AnimatedElement';

export default function Dashboard() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col pb-16 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Background elements */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(var(--primary)_1px,transparent_1px)] bg-[length:20px_20px] opacity-[0.03]"></div>
      
      {/* Glow effects */}
      <div className="glow-effect glow-primary w-[600px] h-[600px] -top-[200px] -left-[200px] fixed -z-10 opacity-20"></div>
      <div className="glow-effect glow-accent w-[500px] h-[500px] -bottom-[200px] -right-[200px] fixed -z-10 opacity-15"></div>

      {/* Page header */}
      <header className="pt-8 pb-6 px-6 md:px-8">
        <AnimatedElement animation="fade" delay={0.1}>
          <h1 className="heading-xl mb-2">Dashboard</h1>
          <p className="body-lg" style={{ color: "var(--text-secondary)" }}>
            Welcome back, Teacher! Here&apos;s an overview of your teaching tools and resources.
          </p>
        </AnimatedElement>
      </header>

      <div className="px-6 md:px-8 flex-1">
        {/* Main dashboard cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          <AnimatedElement animation="up" delay={0.1}>
            <div className="card-gradient rounded-xl overflow-hidden h-full flex flex-col shadow-sm hover:shadow-lg transition duration-300">
              <div className="p-6 flex justify-between items-start">
                <div>
                  <h2 className="heading-md mb-1">Generation Hub</h2>
                  <p className="body-sm" style={{ color: "var(--text-secondary)" }}>Create teaching materials and exams</p>
                </div>
                <div className="w-12 h-12 rounded-full flex items-center justify-center animate-pulse"
                     style={{ background: "var(--gradient-primary)", opacity: "0.8" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
              </div>
              <div className="px-6 py-3 flex-1">
                <p className="body-md" style={{ color: "var(--text-secondary)" }}>
                  Use AI to generate teaching materials and exams for your classes.
                </p>
              </div>
              <div className="px-6 pb-6 pt-3">
                <Link 
                  href="/dashboard/generation-hub" 
                  className="inline-flex items-center gap-2 btn btn-sm btn-ghost-primary group transition-all duration-300"
                >
                  <span>Go to Generation Hub</span>
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

          <AnimatedElement animation="up" delay={0.2}>
            <div className="card-gradient rounded-xl overflow-hidden h-full flex flex-col shadow-sm hover:shadow-lg transition duration-300">
              <div className="p-6 flex justify-between items-start">
                <div>
                  <h2 className="heading-md mb-1">Students</h2>
                  <p className="body-sm" style={{ color: "var(--text-secondary)" }}>Manage your student roster</p>
                </div>
                <div className="w-12 h-12 rounded-full flex items-center justify-center"
                     style={{ background: "var(--gradient-glass)" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
              </div>
              <div className="px-6 py-3 flex-1">
                <p className="body-md" style={{ color: "var(--text-secondary)" }}>
                  View and manage your students, classes, and groups.
                </p>
              </div>
              <div className="px-6 pb-6 pt-3">
                <Link 
                  href="/dashboard/students" 
                  className="inline-flex items-center gap-2 btn btn-sm btn-ghost-primary group transition-all duration-300"
                >
                  <span>Manage Students</span>
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

          <AnimatedElement animation="up" delay={0.3}>
            <div className="card-gradient rounded-xl overflow-hidden h-full flex flex-col shadow-sm hover:shadow-lg transition duration-300">
              <div className="p-6 flex justify-between items-start">
                <div>
                  <h2 className="heading-md mb-1">Grades & Attendance</h2>
                  <p className="body-sm" style={{ color: "var(--text-secondary)" }}>Track student performance</p>
                </div>
                <div className="w-12 h-12 rounded-full flex items-center justify-center"
                     style={{ background: "var(--gradient-glass)" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
              </div>
              <div className="px-6 py-3 flex-1">
                <p className="body-md" style={{ color: "var(--text-secondary)" }}>
                  Record and analyze student grades and attendance.
                </p>
              </div>
              <div className="px-6 pb-6 pt-3">
                <Link 
                  href="/dashboard/grades" 
                  className="inline-flex items-center gap-2 btn btn-sm btn-ghost-primary group transition-all duration-300"
                >
                  <span>View Grades</span>
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

        {/* Quick actions section - improved design */}
        <AnimatedElement animation="fade" delay={0.4}>
          <div className="card-gradient rounded-xl overflow-hidden mb-8">
            <div className="p-6">
              <h2 className="heading-md mb-6 inline-block relative">
                Quick Actions
                <span className="absolute -bottom-1 left-0 w-12 h-0.5"
                      style={{ background: "var(--gradient-accent)" }}></span>
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="glassmorphism rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition duration-300">
                  <div className="p-5 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center"
                           style={{ background: "var(--gradient-primary)", opacity: "0.7" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="12" y1="18" x2="12" y2="12"></line>
                          <line x1="9" y1="15" x2="15" y2="15"></line>
                        </svg>
                      </div>
                      <h3 className="heading-sm">Create New Material</h3>
                    </div>
                    <div className="flex-1 mb-4">
                      <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                        Generate lesson plans and teaching materials with AI
                      </p>
                    </div>
                    <Link 
                      href="/dashboard/generation-hub/material" 
                      className="btn btn-sm btn-primary group w-full"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Start Now
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
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="glassmorphism rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition duration-300">
                  <div className="p-5 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center"
                           style={{ background: "var(--gradient-accent)", opacity: "0.7" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                          <line x1="6" y1="6" x2="6.01" y2="6"></line>
                          <line x1="6" y1="18" x2="6.01" y2="18"></line>
                        </svg>
                      </div>
                      <h3 className="heading-sm">Generate Exam</h3>
                    </div>
                    <div className="flex-1 mb-4">
                      <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                        Create quizzes, tests and exams with AI assistance
                      </p>
                    </div>
                    <Link 
                      href="/dashboard/generation-hub/exam" 
                      className="btn btn-sm btn-primary group w-full"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Start Now
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
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="glassmorphism rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition duration-300">
                  <div className="p-5 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center"
                           style={{ background: "var(--cool-blue)", opacity: "0.7" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="8.5" cy="7" r="4"></circle>
                          <line x1="20" y1="8" x2="20" y2="14"></line>
                          <line x1="23" y1="11" x2="17" y2="11"></line>
                        </svg>
                      </div>
                      <h3 className="heading-sm">Add New Student</h3>
                    </div>
                    <div className="flex-1 mb-4">
                      <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                        Add a new student to your class roster
                      </p>
                    </div>
                    <Link 
                      href="/dashboard/students/add" 
                      className="btn btn-sm btn-primary group w-full"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Start Now
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
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* Recent activity section */}
        <AnimatedElement animation="up" delay={0.5}>
          <div className="card-gradient rounded-xl overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="heading-md inline-block relative">
                  Recent Activity
                  <span className="absolute -bottom-1 left-0 w-12 h-0.5"
                        style={{ background: "var(--gradient-accent)" }}></span>
                </h2>
                <Link 
                  href="/dashboard/activity" 
                  className="btn btn-sm btn-ghost inline-flex items-center gap-1 group"
                  style={{ color: "var(--text-secondary)" }}
                >
                  View all
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="14" 
                    height="14" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="transition-transform duration-300 transform group-hover:translate-x-1"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </Link>
              </div>
              
              <div className="space-y-3">
                {[
                  {
                    title: "Physics Exam Generated",
                    time: "Today at 2:30 PM",
                    icon: "📄",
                    link: "/dashboard/generation-hub/exam/123"
                  },
                  {
                    title: "John Smith added to Class 10B",
                    time: "Yesterday at 11:15 AM",
                    icon: "👤",
                    link: "/dashboard/students/456"
                  },
                  {
                    title: "Biology Lesson Plan Updated",
                    time: "May 10, 2025",
                    icon: "🧬",
                    link: "/dashboard/generation-hub/material/789"
                  }
                ].map((activity, index) => (
                  <Link 
                    key={index}
                    href={activity.link}
                    className="flex items-center gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-white/5 group"
                  >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
                         style={{ background: "var(--gradient-glass)" }}>
                      {activity.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="body-md font-medium" style={{ color: "var(--text-color)" }}>
                        {activity.title}
                      </h4>
                      <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                        {activity.time}
                      </p>
                    </div>
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
                      style={{ color: "var(--text-muted)" }}
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </div>
  );
}