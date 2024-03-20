"use client";

import styles from "./styles/ContactForm.module.scss";
import { useState, useEffect } from "react";

export default function ContactForm() {

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
      <input className={`${styles.name} ${styles.input}`} type="string" name="inputName" placeholder="name" />
      <input className={`${styles.email} ${styles.input}`} type="string" name="inputEmail" placeholder="email" />
      <input className={`${styles.message} ${styles.input}`} type="string" name="message" placeholder="message" />
      <button className={`${styles.submitButton} col-2`} type="submit">submit</button>
    </form>
  );
}
