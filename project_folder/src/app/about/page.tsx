"use client";

import styles from './page.module.scss'
import { LanguageContext } from '@/context/LanguageContext'
import { useContext } from 'react';

export default function About() {

  let language = useContext(LanguageContext);

  return (
    <main className={`${styles.main} marginL marginR`}>
      <section className={styles.aboutBox}>
        <div className={`${styles.textAbout} col-5`}>
          <p className={styles.title}>
            {language === 'EN' ? 'Infinita Production' : 'Infinita Produções' }
          </p>
          <p className={styles.description}>
            {language === 'EN' ? 'Welcome to the about page!' : 'Bem-vindo à página sobre' }
          </p>
        </div>
        <div className={`${styles.categoryBox} col-5`}>
          categories
        </div>
      </section>
      <section className={`${styles.imageBox} col-7`}>
          Imagem
      </section>
    </main>
  )
  }