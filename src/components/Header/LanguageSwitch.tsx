import styles from "./styles/LanguageSwitch.module.scss";
import { useEffect } from "react";
import { useLanguageContext, LanguageContextType } from "@/context/LanguageContext";

type LanguageSwitchProps = {
    setLanguage: React.Dispatch<React.SetStateAction<LanguageContextType>>;
};

export default function LanguageSwitch({ setLanguage }: LanguageSwitchProps) {
    const { language } = useLanguageContext();

    function changeLanguage(lang: LanguageContextType) {
        // Check if the language is changing to "en"
        const isSwitchingToEnglish = lang === "en";

        // If switching to English, remove the "lang" param from the URL
        if (isSwitchingToEnglish) {
            const urlWithoutLangParam = window.location.href.replace(/[?&]lang=pt/, "");
            window.history.pushState({}, '', urlWithoutLangParam);
        } else {
            // Otherwise, add/update the "lang" param in the URL
            const newUrl = new URL(window.location.href);
            newUrl.searchParams.set('lang', lang);
            window.history.pushState({}, '', newUrl.toString());
        }

        // Set the language
        setLanguage(lang);
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
