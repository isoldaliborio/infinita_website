"use client";

import styles from "./page.module.scss";
import { LanguageContext } from "@/context/LanguageContext";
import { useContext } from "react";
import TitleBanner from "@/components/TitleBanner/TitleBanner";

export default function Contact() {

  let language = useContext(LanguageContext);

  return (
    <>
      <TitleBanner title='Contact' />
      <main className={styles.main}>
        <div className={styles.description}>
          {language === "EN" ? "Welcome to the contact page!" : "Bem-vindo à página contato"}
        </div>
      </main>
    </>
  )
}