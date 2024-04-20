"use client";

import styles from "./page.module.scss";
import { useLanguageContext } from "@/context/LanguageContext";
import TitleBanner from "@/components/TitleBanner/TitleBanner";
import ContactForm from "@/components/ContactForm/ContactForm";

export default function Contact() {
  const { language } = useLanguageContext();

  return (
    <>
      <TitleBanner title={language === "en" ? "contact" : "contato"} />
      <main className={styles.main}>
        <ContactForm />
        <div className={styles.description}>
          <h1>{language === "en" ? "Contact us on our social media!" : "Entre en contato através das nossas redes sociais"}</h1>
          <ul className={styles.socialLinks}>
            <li><a href="https://www.linkedin.com/company/infinitaproductions/" target="_blank">LinkedIn </a></li>
            <li> | </li>
            <li><a href="https://www.instagram.com/infinitaproductions/" target="_blank">Instagram </a></li>
            <li> | </li>
            <li><a href="https://vimeo.com/infinitaprod" target="_blank">Vimeo </a></li>
            <li> | </li>
            <li><a href="https://www.facebook.com/infinitaproductions" target="_blank">Facebook </a></li>
            <li> | </li>
            <li><a href="https://twitter.com/i/flow/login?redirect_after_login=%2FInfinita_Prod" target="_blank"> x </a></li>
          </ul>
        </div>
      </main>
    </>
  )
}