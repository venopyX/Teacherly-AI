'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import AnimatedElement from '@/components/AnimatedElement';

export default function ExamGeneration() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    subject: '',
    grade: '',
    topic: '',
    examType: 'quiz',
    difficulty: 'medium',
    questionCount: '10',
    additionalInfo: '',
  });

  // Custom dropdowns state
  const [examTypeOpen, setExamTypeOpen] = useState(false);
  const [difficultyOpen, setDifficultyOpen] = useState(false);
  const examTypeRef = useRef<HTMLDivElement>(null);
  const difficultyRef = useRef<HTMLDivElement>(null);

  const examTypeOptions = [
    { value: 'quiz', label: 'Quiz' },
    { value: 'midterm', label: 'Mid Exam' },
    { value: 'final', label: 'Final Exam' }
  ];

  const difficultyOptions = [
    { value: 'easy', label: 'Easy' },
    { value: 'medium', label: 'Medium' },
    { value: 'hard', label: 'Hard' }
  ];
  
  useEffect(() => {
    setIsLoaded(true);
    
    // Close dropdowns when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (examTypeRef.current && !examTypeRef.current.contains(event.target as Node)) {
        setExamTypeOpen(false);
      }
      if (difficultyRef.current && !difficultyRef.current.contains(event.target as Node)) {
        setDifficultyOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleDropdownChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'examType') {
      setExamTypeOpen(false);
    } else if (name === 'difficulty') {
      setDifficultyOpen(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the form submission, e.g., send to an API
    console.log('Form submitted:', formData);
    // For demo purposes, we'll just show an alert
    alert('Exam generation request submitted!');
  };

  // Get current selected label
  const getCurrentExamTypeLabel = () => {
    return examTypeOptions.find(option => option.value === formData.examType)?.label || 'Quiz';
  };
  
  const getCurrentDifficultyLabel = () => {
    return difficultyOptions.find(option => option.value === formData.difficulty)?.label || 'Medium';
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
          <span className="text-sm" style={{ color: "var(--text-secondary)" }}>Create Exam</span>
        </div>
        <h1 className="heading-xl">Create Exam</h1>
      </header>

      <div className="px-6 md:px-8 flex-1">
        <AnimatedElement animation="up" delay={0.1}>
          <div className="card-gradient rounded-xl overflow-hidden shadow-sm mb-8">
            <div className="p-6 border-b border-white/5">
              <h2 className="heading-md mb-1">Exam Generator</h2>
              <p className="body-md" style={{ color: "var(--text-secondary)" }}>Fill in the details to generate your exam</p>
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Custom Exam Type Dropdown */}
                  <div ref={examTypeRef}>
                    <label className="block text-sm font-medium mb-2">Exam Type</label>
                    <div className="relative">
                      <div 
                        className="w-full glassmorphism py-3 px-4 rounded-lg flex justify-between items-center cursor-pointer hover:bg-white/10 transition-colors"
                        onClick={() => setExamTypeOpen(!examTypeOpen)}
                      >
                        <span>{getCurrentExamTypeLabel()}</span>
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
                          className={`transition-transform duration-300 ${examTypeOpen ? 'rotate-180' : ''}`}
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                      
                      {/* Dropdown menu */}
                      {examTypeOpen && (
                        <div 
                          className="absolute top-full left-0 right-0 mt-1 glassmorphism rounded-lg py-1 z-10"
                        >
                          {examTypeOptions.map((option) => (
                            <div 
                              key={option.value}
                              className="py-2 px-4 hover:bg-white/10 cursor-pointer transition-colors"
                              onClick={() => handleDropdownChange('examType', option.value)}
                            >
                              {option.label}
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {/* Hidden input for form submission */}
                      <input 
                        type="hidden" 
                        name="examType" 
                        value={formData.examType} 
                      />
                    </div>
                  </div>

                  {/* Custom Difficulty Dropdown */}
                  <div ref={difficultyRef}>
                    <label className="block text-sm font-medium mb-2">Difficulty Level</label>
                    <div className="relative">
                      <div 
                        className="w-full glassmorphism py-3 px-4 rounded-lg flex justify-between items-center cursor-pointer hover:bg-white/10 transition-colors"
                        onClick={() => setDifficultyOpen(!difficultyOpen)}
                      >
                        <span>{getCurrentDifficultyLabel()}</span>
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
                          className={`transition-transform duration-300 ${difficultyOpen ? 'rotate-180' : ''}`}
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                      
                      {/* Dropdown menu */}
                      {difficultyOpen && (
                        <div 
                          className="absolute top-full left-0 right-0 mt-1 glassmorphism rounded-lg py-1 z-10"
                        >
                          {difficultyOptions.map((option) => (
                            <div 
                              key={option.value}
                              className="py-2 px-4 hover:bg-white/10 cursor-pointer transition-colors"
                              onClick={() => handleDropdownChange('difficulty', option.value)}
                            >
                              {option.label}
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {/* Hidden input for form submission */}
                      <input 
                        type="hidden" 
                        name="difficulty" 
                        value={formData.difficulty} 
                      />
                    </div>
                  </div>

                  {/* Number of Questions */}
                  <div>
                    <label htmlFor="questionCount" className="block text-sm font-medium mb-2">Number of Questions</label>
                    <input
                      type="number"
                      id="questionCount"
                      name="questionCount"
                      value={formData.questionCount}
                      onChange={handleChange}
                      className="w-full glassmorphism py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                      style={{ color: "var(--text-color)" }}
                      min="1"
                      max="50"
                      required
                    />
                  </div>
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
                      Generate Exam
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

        {/* Difficulty level information cards */}
        <AnimatedElement animation="up" delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            <div className="glassmorphism rounded-xl p-5 hover:shadow-md transition duration-300 border-l-4 border-green-400">
              <h3 className="heading-sm mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400"></span>
                Easy
              </h3>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Basic recall questions and simple applications. Suitable for practice quizzes and knowledge checks.
              </p>
            </div>

            <div className="glassmorphism rounded-xl p-5 hover:shadow-md transition duration-300 border-l-4 border-yellow-400">
              <h3 className="heading-sm mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                Medium
              </h3>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Balanced difficulty with application and analysis questions. Good for regular assessments.
              </p>
            </div>

            <div className="glassmorphism rounded-xl p-5 hover:shadow-md transition duration-300 border-l-4 border-red-400">
              <h3 className="heading-sm mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-400"></span>
                Hard
              </h3>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Advanced questions requiring synthesis and evaluation. Suitable for final exams and comprehensive tests.
              </p>
            </div>
          </div>
        </AnimatedElement>

        {/* Exam tips section */}
        <AnimatedElement animation="up" delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Exam Types */}
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="heading-md mb-4 text-gradient-primary">Exam Types</h3>
              
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center mt-1"
                       style={{ background: "var(--gradient-primary)", opacity: "0.7" }}>
                    <span className="text-sm font-bold">Q</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-1">Quiz</h4>
                    <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      Short assessments with 5-15 questions, focusing on specific topics or recent lessons.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center mt-1"
                       style={{ background: "var(--gradient-accent)", opacity: "0.7" }}>
                    <span className="text-sm font-bold">M</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-1">Mid Exam</h4>
                    <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      Comprehensive review of material covered in the first half of a course or unit.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center mt-1"
                       style={{ background: "var(--cool-blue)", opacity: "0.7" }}>
                    <span className="text-sm font-bold">F</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-1">Final Exam</h4>
                    <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      Complete assessment covering all course material, designed for end-of-term evaluation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Tips section */}
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="heading-md mb-4 text-gradient-primary">Tips for Better Exams</h3>
              <ul className="space-y-3" style={{ color: "var(--text-secondary)" }}>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center mt-1 flex-shrink-0"
                       style={{ background: "var(--gradient-primary)", opacity: "0.7" }}>
                    <span className="text-xs font-bold">1</span>
                  </div>
                  <p className="text-sm">
                    <span className="font-medium">Be specific with your topic</span> - The more precise your topic description, the more focused your exam will be.
                  </p>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center mt-1 flex-shrink-0"
                       style={{ background: "var(--gradient-primary)", opacity: "0.7" }}>
                    <span className="text-xs font-bold">2</span>
                  </div>
                  <p className="text-sm">
                    <span className="font-medium">Balance question types</span> - Consider including multiple choice, short answer, and essay questions.
                  </p>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center mt-1 flex-shrink-0"
                       style={{ background: "var(--gradient-primary)", opacity: "0.7" }}>
                    <span className="text-xs font-bold">3</span>
                  </div>
                  <p className="text-sm">
                    <span className="font-medium">Use additional information</span> - Include specific concepts you want to emphasize.
                  </p>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center mt-1 flex-shrink-0"
                       style={{ background: "var(--gradient-primary)", opacity: "0.7" }}>
                    <span className="text-xs font-bold">4</span>
                  </div>
                  <p className="text-sm">
                    <span className="font-medium">Consider time constraints</span> - Match question count to available testing time (1-2 minutes per question).
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </div>
  );
}