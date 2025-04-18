'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../dashboard.module.css';
import AnimatedElement from '@/components/AnimatedElement';

export default function GenerationHub() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`${isLoaded ? styles.fadeIn : ''}`}>
      <header className={styles.pageHeader}>
        <div className={styles.breadcrumb}>
          <Link href="/dashboard">Dashboard</Link>
          <span className={styles.breadcrumbSeparator}>/</span>
          <span>exam / teaching material</span>
        </div>
        <h1 className={styles.pageTitle}>Generation Hub</h1>
      </header>

      <div className={styles.cardsGrid}>
        <AnimatedElement animation="left" delay={0.1}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div>
                <h2 className={styles.cardTitle}>Generate material</h2>
              </div>
              <div className={styles.cardIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              </div>
            </div>
            <div className={styles.cardContent}>
              <ul className={styles.cardList}>
                <li className={styles.cardListItem}>
                  <div className={styles.cardListItemIcon} style={{ backgroundColor: '#FFB547' }}></div>
                  <span className={styles.cardListItemText}>Create New material</span>
                </li>
                <li className={styles.cardListItem}>
                  <div className={styles.cardListItemIcon} style={{ backgroundColor: '#FFB547' }}></div>
                  <span className={styles.cardListItemText}>update materials</span>
                </li>
              </ul>
            </div>
            <div className={styles.cardFooter}>
              <Link href="/dashboard/generation-hub/material" className={styles.cardLink}>
                Create Material
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        </AnimatedElement>

        <AnimatedElement animation="right" delay={0.2}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div>
                <h2 className={styles.cardTitle}>Generate Exam</h2>
              </div>
              <div className={styles.cardIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
            </div>
            <div className={styles.cardContent}>
              <ul className={styles.cardList}>
                <li className={styles.cardListItem}>
                  <div className={styles.cardListItemIcon} style={{ backgroundColor: '#00C896' }}></div>
                  <span className={styles.cardListItemText}>Quiz exam</span>
                </li>
                <li className={styles.cardListItem}>
                  <div className={styles.cardListItemIcon} style={{ backgroundColor: '#00C896' }}></div>
                  <span className={styles.cardListItemText}>Mid exam</span>
                </li>
                <li className={styles.cardListItem}>
                  <div className={styles.cardListItemIcon} style={{ backgroundColor: '#00C896' }}></div>
                  <span className={styles.cardListItemText}>final exam</span>
                </li>
              </ul>
            </div>
            <div className={styles.cardFooter}>
              <Link href="/dashboard/generation-hub/exam" className={styles.cardLink}>
                Create Exam
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        </AnimatedElement>
      </div>

      <AnimatedElement animation="up" delay={0.3}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div>
              <h2 className={styles.cardTitle}>Recent Generations</h2>
            </div>
          </div>
          <div className={styles.cardContent}>
            <p>You haven&apos;t generated any content yet. Use the cards above to create your first teaching material or exam.</p>
          </div>
        </div>
      </AnimatedElement>
    </div>
  );
}
