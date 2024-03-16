"use client";

import styles from "./page.module.scss";
import { LanguageContext } from "@/context/LanguageContext";
import { useContext } from "react";
import TitleBanner from "@/components/TitleBanner/TitleBanner";
import ContactForm from "@/components/ContactForm/ContactForm"

export default function Contact() {

  let language = useContext(LanguageContext);

  return (
    <>
      <TitleBanner title='Contact' />
      <main className={styles.main}>
        <ContactForm/>
        <div className={styles.description}>
          {language === "en" ? "Welcome to the contact page!" : "Bem-vindo à página contato"}

        </div>
      </main>
    </>
  )
}