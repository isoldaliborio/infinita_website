"use client";

import { useEffect } from 'react';
import styles from "./page.module.scss";
import { useLanguageContext } from "@/context/LanguageContext";
import TitleBanner from "@/components/TitleBanner/TitleBanner";
import ContactForm from "@/components/ContactForm/ContactForm";
import { addLangParam } from "@/lib/utils";

export default function Contact() {
  const { language } = useLanguageContext();

  // Add lang=pt to url if not present
  useEffect(() => addLangParam(language), [language]);

  return (
    <>
      <TitleBanner title={language === "en" ? "contact" : "contato"} />
      <main className={styles.main}>
        <ContactForm />
      </main>
    </>
  )
}