"use client";

import styles from "./styles/ContactForm.module.scss";
import { useState, useEffect } from "react";
import { useLanguageContext } from "@/context/LanguageContext";
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const { language } = useLanguageContext();

  const [isClient, setIsClient] = useState(false);
  const [emailStatus, setEmailStatus] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
   

  useEffect(() => setIsClient(true), []);

  if (!isClient) return null;

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  const validateFields = (name: string, email: string, message: string) => {
    const errors: { name?: string; email?: string; message?: string } = {};
    if (!name) errors.name = language === "en" ? "Name is required" : "Nome é obrigatório";
    if (!email) {
      errors.email = language === "en" ? "Email is required" : "E-mail é obrigatório";
    } else if (!validateEmail(email)) {
      errors.email = language === "en" ? "Invalid email format." : "Formato de e-mail inválido.";
    }
    if (!message) errors.message = language === "en" ? "Message is required" : "Mensagem é obrigatória";
    return errors;
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setEmailStatus('pending');
    const formData = new FormData(event.target);
    const inputName = formData.get('inputName');
    const inputEmail = formData.get('inputEmail');
    const inputMessage = formData.get('message');

    const formErrors = validateFields(inputName, inputEmail, inputMessage);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    else {
      setErrors({});
    }

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
    <div>
      {emailStatus !== 'success' &&
      <form className={`${styles.form} col-5`} onSubmit={handleSubmit} suppressHydrationWarning={true}>
        <input
          required
          className={`${styles.name} ${styles.input}`}
          type="text"
          name="inputName"
          placeholder={language === "en" ? "name" : "nome"}
        />
        {errors.name && <p className={styles.error}>{errors.name}</p>}


        <input
          required
          className={`${styles.email} ${styles.input}`}
          type="text"
          name="inputEmail"
          placeholder={language === "en" ? "email" : "e-mail"}
        />
        {errors.email && <p className={styles.error}>{errors.email}</p>}

        <textarea
          required
          className={`${styles.message} ${styles.input}`}
          name="message"
          placeholder={language === "en" ? "message" : "mensagem"}
        />
        {errors.message && <p className={styles.error}>{errors.message}</p>}

        <button className={`${styles.submitButton} col-2`} type="submit" disabled={emailStatus === 'pending'}> {language === "en" ? "send" : "enviar"} </button>
  
      </form>}
      {emailStatus === 'success' && <p className={styles.sentMail}> {language === "en" ? "Thank you for reaching out to Infinita Productions. We have received your message and will respond to your email shortly." : "Obrigado por entrar em contato com a Infinita Produções. Recebemos sua mensagem e responderemos ao seu e-mail em breve."}</p>}
      {emailStatus === 'error' && <p>{language === "en" ? "There was an error sending your message, try again" : "Erro ao enviar sua mensagem, tente novamente"}</p>}
    </div>


  );
} 
