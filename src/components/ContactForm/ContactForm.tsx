"use client";

import styles from "./styles/ContactForm.module.scss";
import { useState, useEffect } from "react";
import { useLanguageContext } from "@/context/LanguageContext";
import emailjs from 'emailjs-com';

type MessageKeys = "name" | "email" | "emailInvalid" | "message";
type LanguageKeys = "en" | "pt";

const messages: Record<LanguageKeys, Record<MessageKeys, string>> = {
  en: {
    name: "Name is required",
    email: "Email is required",
    emailInvalid: "Invalid email format.",
    message: "Message is required"
  },
  pt: {
    name: "Nome é obrigatório",
    email: "E-mail é obrigatório",
    emailInvalid: "Formato de e-mail inválido.",
    message: "Mensagem é obrigatória"
  }
};

const getErrorMessage = (field: MessageKeys, language: LanguageKeys): string => {
  return messages[language][field];
};

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
    if (!name) errors.name = getErrorMessage("name", language as LanguageKeys);
    if (!email) {
      errors.email = getErrorMessage("email", language as LanguageKeys);
    } else if (!validateEmail(email)) {
      errors.email = getErrorMessage("emailInvalid", language as LanguageKeys);
    }
    if (!message) errors.message = getErrorMessage("message", language as LanguageKeys);
    return errors;
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setEmailStatus('pending');
    const formData = new FormData(event.target);
    const inputName = formData.get('inputName') as string | null;
    const inputEmail = formData.get('inputEmail') as string | null;
    const inputMessage = formData.get('message') as string | null;

    // Ensure the inputs are strings
    if (inputName === null || inputEmail === null || inputMessage === null) {
      setErrors({
        name: inputName === null ? getErrorMessage("name", language as LanguageKeys) : undefined,
        email: inputEmail === null ? getErrorMessage("email", language as LanguageKeys) : undefined,
        message: inputMessage === null ? getErrorMessage("message", language as LanguageKeys) : undefined,
      });
      return;
    }

    const formErrors = validateFields(inputName, inputEmail, inputMessage);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    } else {
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