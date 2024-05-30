"use client";

import styles from "./styles/ContactForm.module.scss";
import { useState, useEffect } from "react";
import { useLanguageContext } from "@/context/LanguageContext";
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const { language } = useLanguageContext();

  const [isClient, setIsClient] = useState(false);
  const [emailStatus, setEmailStatus] = useState<string | null>(null);

  useEffect(() => setIsClient(true), []);

  if (!isClient) return null;

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const inputName = formData.get('inputName');
    const inputEmail = formData.get('inputEmail');
    const inputMessage = formData.get('message');

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      console.error('EmailJS environment variables are not properly set.');
      return;
    }

    const templateParams = {
      from_name: inputName,
      from_email: inputEmail,
      message: inputMessage
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        if (response.status === 200) {
          setEmailStatus('success');
        } else {
          setEmailStatus('error');
        }
      }, (error) => {
        console.error(error);
        setEmailStatus('error');
      });
  };

  return (
    <form className={`${styles.form} col-5`} onSubmit={handleSubmit} suppressHydrationWarning={true}>
      <input required className={`${styles.name} ${styles.input}`} type="string" name="inputName" placeholder={language === "en" ? "name" : "nome"} />
      <input required className={`${styles.email} ${styles.input}`} type="string" name="inputEmail" placeholder={language === "en" ? "email" : "e-mail"} />
      <textarea required className={`${styles.message} ${styles.input}`} name="message" placeholder={language === "en" ? "message" : "mensagem"} />
      {emailStatus !== 'success' && (
        <button className={`${styles.submitButton} col-2`} type="submit">{language === "en" ? "send" : "enviar"}</button>
      )}
      {emailStatus === 'success' && <p className={styles.sentMail}> {language === "en" ? "Thank you for reaching out to Infinita Productions. We have received your message and will respond to your email shortly." : "Obrigado por entrar em contato com a Infinita Produções. Recebemos sua mensagem e responderemos ao seu e-mail em breve."}</p>}
      {emailStatus === 'error' && <p>{language === "en" ? "There was an error sending your message, try again" : "Erro ao enviar sua mensagem, tente novamente"}</p>}
    </form>
  );
} 
