"use client";

import styles from "./styles/ContactForm.module.scss";
import { useState, useEffect } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import { useContext } from "react";

export default function ContactForm() {

  let language = useContext(LanguageContext);

  // Workaround for LastPass extension. May be removed if we render the page based on some other state
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  if (!isClient) return null;

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const inputName = formData.get('inputName');
    const inputEmail = formData.get('inputEmail');
    const inputMessage = formData.get('message');
  };

  return (
    <form className={`${styles.form} col-5`} onSubmit={handleSubmit} suppressHydrationWarning={true}>
      <input className={`${styles.name} ${styles.input}`} type="string" name="inputName" placeholder={language === "en" ? "name" : "Nome"} />
      <input className={`${styles.email} ${styles.input}`} type="string" name="inputEmail" placeholder={language === "en" ? "email" : "email"} />
      <textarea className={`${styles.message} ${styles.input}`} type="string" name="message" placeholder={language === "en" ? "message" : "mensagem"} />
      <button className={`${styles.submitButton} col-2`} type="submit">submit</button>
    </form>
  );
}
