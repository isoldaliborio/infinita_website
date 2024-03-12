"use client";

import styles from "./page.module.scss";
import { LanguageContext } from "@/context/LanguageContext";
import { useContext } from "react";

export default function Projects() {

  let language = useContext(LanguageContext);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {language === "EN" ? "Welcome to the project page!" : "Bem-vindo à página projetos" }
      </div>
    </main>
  )
  }