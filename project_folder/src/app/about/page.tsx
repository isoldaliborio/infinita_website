"use client";

import styles from './page.module.scss'
import { LanguageContext } from '@/components/Context/LanguageContext'
import { useContext } from 'react';

export default function About() {

  let language = useContext(LanguageContext);

    return (
      <main className={styles.main}>
        <div className={styles.description}>
          {language === 'EN' ? 'Welcome to the about page!' : 'Bem-vindo à página sobre' }
        </div>
      </main>
    )
  }