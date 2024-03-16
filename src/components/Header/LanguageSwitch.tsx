"use client";

import styles from "./styles/LanguageSwitch.module.scss";
import { useContext } from "react";
import { LanguageContextType, LanguageContext } from "../../context/LanguageContext";

type LanguageSwitchProps = {
    setLanguage: React.Dispatch<React.SetStateAction<LanguageContextType>>;
};

export default function LanguageSwitch({setLanguage}:LanguageSwitchProps) {

    const language = useContext(LanguageContext);

    function changeLanguage(languageButton:LanguageContextType) {
        setLanguage(languageButton);
    };

    return <div id={styles.languageButtonContainer}>
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
};

