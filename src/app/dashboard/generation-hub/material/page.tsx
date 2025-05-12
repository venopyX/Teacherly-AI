'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AnimatedElement from '@/components/AnimatedElement';
import CustomDropdown from '@/components/CustomDropdown';

export default function MaterialGeneration() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    subject: '',
    grade: '',
    topic: '',
    contentType: 'lesson',
    additionalInfo: '',
  });

  const contentTypeOptions = [
    { value: 'lesson', label: 'Lesson Plan' },
    { value: 'worksheet', label: 'Worksheet' },
    { value: 'presentation', label: 'Presentation Slides' },
    { value: 'activity', label: 'Classroom Activity' },
    { value: 'homework', label: 'Homework Assignment' }
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleDropdownChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the form submission, e.g., send to an API
    console.log('Form submitted:', formData);
    // For demo purposes, we'll just show an alert
    alert('Material generation request submitted!');
  };

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
          <Link 
            href="/dashboard/generation-hub" 
            className="text-sm hover:text-gradient-primary transition-colors duration-300"
            style={{ color: "var(--text-muted)" }}
          >
            Generation Hub
          </Link>
          <span className="text-sm" style={{ color: "var(--text-muted)" }}>/</span>
          <span className="text-sm" style={{ color: "var(--text-secondary)" }}>Create Material</span>
        </div>
        <h1 className="heading-xl">Create Teaching Material</h1>
      </header>

      <div className="px-6 md:px-8 flex-1">
        <AnimatedElement animation="up" delay={0.1}>
          <div className="card-gradient rounded-xl overflow-hidden shadow-sm mb-8">
            <div className="p-6 border-b border-white/5">
              <h2 className="heading-md mb-1">Material Generator</h2>
              <p className="body-md" style={{ color: "var(--text-secondary)" }}>Fill in the details to generate your teaching material</p>
            </div>
            
            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full glassmorphism py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                      style={{ color: "var(--text-color)" }}
                      placeholder="e.g., Mathematics, Science, English"
                      required
                    />
                  </div>

                  {/* Grade Level */}
                  <div>
                    <label htmlFor="grade" className="block text-sm font-medium mb-2">Grade Level</label>
                    <input
                      type="text"
                      id="grade"
                      name="grade"
                      value={formData.grade}
                      onChange={handleChange}
                      className="w-full glassmorphism py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                      style={{ color: "var(--text-color)" }}
                      placeholder="e.g., 5th Grade, High School, College"
                      required
                    />
                  </div>
                </div>

                {/* Topic */}
                <div>
                  <label htmlFor="topic" className="block text-sm font-medium mb-2">Topic</label>
                  <input
                    type="text"
                    id="topic"
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    className="w-full glassmorphism py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                    style={{ color: "var(--text-color)" }}
                    placeholder="e.g., Fractions, Photosynthesis, Shakespeare"
                    required
                  />
                </div>

                {/* Content Type Dropdown */}
                <div>
                  <CustomDropdown
                    options={contentTypeOptions}
                    value={formData.contentType}
                    onChange={(value) => handleDropdownChange('contentType', value)}
                    label="Content Type"
                    name="contentType"
                  />
                </div>

                {/* Additional Information */}
                <div>
                  <label htmlFor="additionalInfo" className="block text-sm font-medium mb-2">Additional Information</label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    className="w-full glassmorphism py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 min-h-[120px]"
                    style={{ color: "var(--text-color)" }}
                    placeholder="Any specific requirements or details you want to include..."
                    rows={4}
                  ></textarea>
                </div>

                {/* Form Actions */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button 
                    type="submit" 
                    className="btn btn-primary group order-2 sm:order-1"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Generate Material
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
                  </button>
                  <Link 
                    href="/dashboard/generation-hub" 
                    className="btn btn-ghost-secondary order-1 sm:order-2"
                  >
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </AnimatedElement>

        {/* Visual aid or help section */}
        <AnimatedElement animation="up" delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="glassmorphism rounded-xl p-5 hover:shadow-md transition duration-300">
              <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                   style={{ background: "var(--gradient-primary)", opacity: "0.7" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              </div>
              <h3 className="heading-sm mb-2">Lesson Plans</h3>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Create structured lesson plans with objectives, activities, and assessments.
              </p>
            </div>

            <div className="glassmorphism rounded-xl p-5 hover:shadow-md transition duration-300">
              <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                   style={{ background: "var(--gradient-accent)", opacity: "0.7" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                  <line x1="8" y1="2" x2="8" y2="18"></line>
                  <line x1="16" y1="6" x2="16" y2="22"></line>
                </svg>
              </div>
              <h3 className="heading-sm mb-2">Worksheets</h3>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Generate engaging worksheets with questions and activities tailored to your topic.
              </p>
            </div>

            <div className="glassmorphism rounded-xl p-5 hover:shadow-md transition duration-300">
              <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                   style={{ background: "var(--cool-blue)", opacity: "0.7" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </div>
              <h3 className="heading-sm mb-2">Presentations</h3>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Create slide content for engaging classroom presentations with key points and visuals.
              </p>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </div>
  );
}