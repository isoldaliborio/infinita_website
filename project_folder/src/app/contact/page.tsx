"use client";

import styles from "./page.module.scss";
import { LanguageContext } from "@/components/Context/LanguageContext";
import { useContext } from "react";

export default function Contact() {

  let language = useContext(LanguageContext);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {language === "EN" ? "Welcome to the contact page!" : "Bem-vindo à página contato" }
      </div>
    </main>
  )
  }