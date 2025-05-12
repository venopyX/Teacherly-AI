'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Check if viewport is mobile on initial load and when window resizes
  useEffect(() => {
    // Set sidebar collapsed by default on mobile
    if (window.innerWidth <= 768) {
      setSidebarCollapsed(true);
    }

    // Function to handle window resize
    const handleResize = () => {
      // Auto-collapse sidebar on mobile devices
      if (window.innerWidth <= 768) {
        setSidebarCollapsed(true);
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(path + '/');
  };

  return (
    <div className="min-h-screen bg-card-bg flex flex-col">
      {/* Header */}
      <header className="h-16 border-b border-white/5 backdrop-blur-md bg-card-bg/80 fixed top-0 left-0 right-0 z-50 flex items-center px-4 md:px-6">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-3">
            <button 
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-white/5"
              onClick={toggleSidebar}
              aria-label="Toggle sidebar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
            <Link href="/dashboard" className="flex items-center gap-2 transition-all duration-300 group">
              <div className="relative w-8 h-8">
                <Image
                  src="/logo.svg"
                  alt="Teacherly Logo"
                  width={32}
                  height={32}
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span className="text-gradient text-xl font-bold relative">
                Teacherly
                <span className="absolute bottom-[-3px] left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full"
                      style={{ background: "var(--gradient-accent)" }}></span>
              </span>
            </Link>
          </div>
          
          {/* Right side header elements */}
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-white/5 relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
            </button>
            <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-medium">
              T
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 pt-16"> {/* Added pt-16 to account for fixed header height */}
        {/* Sidebar - fixed position */}
        <aside 
          className={`bg-black/20 backdrop-blur-md border-r border-white/5 h-[calc(100vh-64px)] fixed top-16 left-0 overflow-y-auto transition-all duration-300 flex flex-col
                     ${isSidebarCollapsed ? 'w-[70px]' : 'w-[250px]'}`}
        >
          <div className="flex-1 py-4">
            {/* Main navigation */}
            <div className="mb-8">
              <div className="px-4 mb-2">
                <h3 className={`text-xs font-bold uppercase tracking-wider ${isSidebarCollapsed ? 'opacity-0' : 'opacity-70'} transition-opacity`}>
                  Main
                </h3>
              </div>
              <nav>
                <Link 
                  href="/dashboard" 
                  className={`flex items-center gap-3 px-4 py-2.5 mb-1 rounded-lg transition-colors relative group
                              ${isActive('/dashboard') && !isActive('/dashboard/generation-hub') && !isActive('/dashboard/students') && !isActive('/dashboard/grades') 
                                ? 'bg-white/10 text-white' 
                                : 'hover:bg-white/5 text-white/70 hover:text-white'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  <span className={`transition-opacity ${isSidebarCollapsed ? 'opacity-0 absolute' : 'opacity-100'}`}>
                    Home
                  </span>
                  {isActive('/dashboard') && !isActive('/dashboard/generation-hub') && !isActive('/dashboard/students') && !isActive('/dashboard/grades') && (
                    <span className="absolute inset-0 rounded-lg opacity-20" style={{ background: "var(--gradient-glass)" }}></span>
                  )}
                </Link>
                
                <Link 
                  href="/dashboard/generation-hub" 
                  className={`flex items-center gap-3 px-4 py-2.5 mb-1 rounded-lg transition-colors relative group
                              ${isActive('/dashboard/generation-hub') 
                                ? 'bg-white/10 text-white' 
                                : 'hover:bg-white/5 text-white/70 hover:text-white'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <span className={`transition-opacity ${isSidebarCollapsed ? 'opacity-0 absolute' : 'opacity-100'}`}>
                    Generation Hub
                  </span>
                  {isActive('/dashboard/generation-hub') && (
                    <span className="absolute inset-0 rounded-lg opacity-20" style={{ background: "var(--gradient-glass)" }}></span>
                  )}
                </Link>
                
                <Link 
                  href="/dashboard/students" 
                  className={`flex items-center gap-3 px-4 py-2.5 mb-1 rounded-lg transition-colors relative group
                              ${isActive('/dashboard/students') 
                                ? 'bg-white/10 text-white' 
                                : 'hover:bg-white/5 text-white/70 hover:text-white'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  <span className={`transition-opacity ${isSidebarCollapsed ? 'opacity-0 absolute' : 'opacity-100'}`}>
                    Students
                  </span>
                  {isActive('/dashboard/students') && (
                    <span className="absolute inset-0 rounded-lg opacity-20" style={{ background: "var(--gradient-glass)" }}></span>
                  )}
                </Link>
                
                <Link 
                  href="/dashboard/grades" 
                  className={`flex items-center gap-3 px-4 py-2.5 mb-1 rounded-lg transition-colors relative group
                              ${isActive('/dashboard/grades') 
                                ? 'bg-white/10 text-white' 
                                : 'hover:bg-white/5 text-white/70 hover:text-white'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                  <span className={`transition-opacity ${isSidebarCollapsed ? 'opacity-0 absolute' : 'opacity-100'}`}>
                    Grades & Attendance
                  </span>
                  {isActive('/dashboard/grades') && (
                    <span className="absolute inset-0 rounded-lg opacity-20" style={{ background: "var(--gradient-glass)" }}></span>
                  )}
                </Link>
              </nav>
            </div>

            {/* Settings navigation */}
            <div>
              <div className="px-4 mb-2">
                <h3 className={`text-xs font-bold uppercase tracking-wider ${isSidebarCollapsed ? 'opacity-0' : 'opacity-70'} transition-opacity`}>
                  Settings
                </h3>
              </div>
              <nav>
                <Link 
                  href="/dashboard/settings" 
                  className={`flex items-center gap-3 px-4 py-2.5 mb-1 rounded-lg transition-colors relative group
                              ${isActive('/dashboard/settings') 
                                ? 'bg-white/10 text-white' 
                                : 'hover:bg-white/5 text-white/70 hover:text-white'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg>
                  <span className={`transition-opacity ${isSidebarCollapsed ? 'opacity-0 absolute' : 'opacity-100'}`}>
                    Settings
                  </span>
                  {isActive('/dashboard/settings') && (
                    <span className="absolute inset-0 rounded-lg opacity-20" style={{ background: "var(--gradient-glass)" }}></span>
                  )}
                </Link>
              </nav>
            </div>
          </div>

          {/* Sidebar footer */}
          <div className="py-4 border-t border-white/5 mt-auto">
            <Link 
              href="/dashboard/help" 
              className={`flex items-center gap-3 px-4 py-2.5 mb-1 rounded-lg transition-colors relative group
                          ${isActive('/dashboard/help') 
                            ? 'bg-white/10 text-white' 
                            : 'hover:bg-white/5 text-white/70 hover:text-white'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
              <span className={`transition-opacity ${isSidebarCollapsed ? 'opacity-0 absolute' : 'opacity-100'}`}>
                Help
              </span>
              {isActive('/dashboard/help') && (
                <span className="absolute inset-0 rounded-lg opacity-20" style={{ background: "var(--gradient-glass)" }}></span>
              )}
            </Link>
            <Link 
              href="/" 
              className="flex items-center gap-3 px-4 py-2.5 mb-1 rounded-lg transition-colors hover:bg-white/5 text-white/70 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
              <span className={`transition-opacity ${isSidebarCollapsed ? 'opacity-0 absolute' : 'opacity-100'}`}>
                Logout Account
              </span>
            </Link>
          </div>
        </aside>

        {/* Main content - with left margin to accommodate sidebar */}
        <main className={`flex-1 transition-all duration-300 ml-[70px] ${isSidebarCollapsed ? 'ml-[70px]' : 'ml-[250px]'}`}>
          {children}
        </main>
      </div>
    </div>
  );
}