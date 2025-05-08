import React from "react";
import styles from "../../../app/page.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Teacherly</div>
      <div className={styles.signIn}>
        <a href="/auth?mode=login" className={styles.signInLink}>
          Sign in
        </a>{" "}
        |
        <a href="/auth?mode=signup" className={styles.ctaButton}>
          Join
        </a>
      </div>
    </header>
  );
}
