'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../../dashboard.module.css';
import AnimatedElement from '@/components/AnimatedElement';

export default function ExamGeneration() {
  const [formData, setFormData] = useState({
    subject: '',
    grade: '',
    topic: '',
    examType: 'quiz',
    difficulty: 'medium',
    questionCount: '10',
    additionalInfo: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the form submission, e.g., send to an API
    console.log('Form submitted:', formData);
    // For demo purposes, we'll just show an alert
    alert('Exam generation request submitted!');
  };

  return (
    <div>
      <header className={styles.pageHeader}>
        <div className={styles.breadcrumb}>
          <Link href="/dashboard">Dashboard</Link>
          <span className={styles.breadcrumbSeparator}>/</span>
          <Link href="/dashboard/generation-hub">Generation Hub</Link>
          <span className={styles.breadcrumbSeparator}>/</span>
          <span>Create Exam</span>
        </div>
        <h1 className={styles.pageTitle}>Create Exam</h1>
      </header>

      <AnimatedElement animation="up" delay={0.1}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div>
              <h2 className={styles.cardTitle}>Exam Generator</h2>
              <p>Fill in the details to generate your exam</p>
            </div>
          </div>
          <div className={styles.cardContent}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.formLabel}>Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={styles.formInput}
                  placeholder="e.g., Mathematics, Science, English"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="grade" className={styles.formLabel}>Grade Level</label>
                <input
                  type="text"
                  id="grade"
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                  className={styles.formInput}
                  placeholder="e.g., 5th Grade, High School, College"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="topic" className={styles.formLabel}>Topic</label>
                <input
                  type="text"
                  id="topic"
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  className={styles.formInput}
                  placeholder="e.g., Fractions, Photosynthesis, Shakespeare"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="examType" className={styles.formLabel}>Exam Type</label>
                <select
                  id="examType"
                  name="examType"
                  value={formData.examType}
                  onChange={handleChange}
                  className={styles.formSelect}
                  required
                >
                  <option value="quiz">Quiz</option>
                  <option value="midterm">Mid Exam</option>
                  <option value="final">Final Exam</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="difficulty" className={styles.formLabel}>Difficulty Level</label>
                <select
                  id="difficulty"
                  name="difficulty"
                  value={formData.difficulty}
                  onChange={handleChange}
                  className={styles.formSelect}
                  required
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="questionCount" className={styles.formLabel}>Number of Questions</label>
                <input
                  type="number"
                  id="questionCount"
                  name="questionCount"
                  value={formData.questionCount}
                  onChange={handleChange}
                  className={styles.formInput}
                  min="1"
                  max="50"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="additionalInfo" className={styles.formLabel}>Additional Information</label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  className={styles.formTextarea}
                  placeholder="Any specific requirements or details you want to include..."
                  rows={4}
                ></textarea>
              </div>

              <div className={styles.formActions}>
                <button type="submit" className={styles.submitButton}>
                  Generate Exam
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
                <Link href="/dashboard/generation-hub" className={styles.cancelButton}>
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </AnimatedElement>
    </div>
  );
}
