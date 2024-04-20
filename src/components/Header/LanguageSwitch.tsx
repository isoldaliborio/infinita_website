"use client";

import styles from "./styles/LanguageSwitch.module.scss";
import { useEffect } from "react";
import { useLanguageContext, LanguageContextType } from "@/context/LanguageContext";

type LanguageSwitchProps = {
    setLanguage: React.Dispatch<React.SetStateAction<LanguageContextType>>;
};

export default function LanguageSwitch({ setLanguage }: LanguageSwitchProps) {
    const { language } = useLanguageContext();

    function changeLanguage(lang: LanguageContextType) {
        setLanguage(lang);

        const newUrl = new URL(window.location.href);
        newUrl.searchParams.set('lang', lang);

        if (window.location.search !== newUrl.search) {
            window.history.pushState({}, '', newUrl.toString());
        }
    };

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const urlLang = urlParams.get('lang');

        if (urlLang && ['en', 'pt'].includes(urlLang) && urlLang !== language) {
            setLanguage(urlLang as LanguageContextType);
        }
    }, []);

    return (
        <div id={styles.languageButtonContainer}>
            <button
                onClick={() => changeLanguage("en")}
                className={`${styles.languageButton} ${language === "en" ? styles.activeButton : ""}`}
            >
                EN
            </button>
            <button
                onClick={() => changeLanguage("pt")}
                className={`${styles.languageButton} ${language === "pt" ? styles.activeButton : ""}`}
            >
                PT
            </button>
        </div>
    );
};
