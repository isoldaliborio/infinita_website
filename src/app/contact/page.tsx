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
        <div className={styles.description}>
          {language === "en" 
            ? "Infinita Productions is a production company based in London, UK and Salvador, Brazil. We aim to support projects in both countries, encounraging co-productions and stimulatingg a cultural dialogue. Infinita is also committed to creating original content." 
            : "Infinita Productions é uma produtora com sede em Londres, Reino Unido e Salvador, Brasil. Pretendemos apoiar projetos em ambos os países, incentivando as coproduções e estimulando o diálogo cultural. A Infinita também está comprometida em criar conteúdo original."
          }
        <br/>
        {language === "en" 
            ? "Our action areas are Films, Music, Curating and Accounting." 
            : "As nossas áreas de atuação são Cinema, Música, Curadoria e Contabilidade."
          }
        </div>
        <ContactForm />
      </main>
    </>
  )
}