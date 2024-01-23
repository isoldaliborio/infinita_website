'use client';

import styles from "./styles/LanguageSwitch.module.scss";
import { useContext } from "react";
import { LanguageContextType, LanguageContext } from "../Context/LanguageContext";

interface LanguageSwitchProps {
    setLanguage: React.Dispatch<React.SetStateAction<LanguageContextType>>;
}

export default function LanguageSwitch({setLanguage}:LanguageSwitchProps) {

    let language = useContext(LanguageContext);

    function changeLanguage(languageButton:LanguageContextType) {
        setLanguage(languageButton)
    }

    return <div id={styles.languageSwitchContainer}>
        <button 
            onClick={() => changeLanguage("EN")}
            className={`${language === "EN"? styles.activeButton : ''}`}
        >
            EN
        </button>
        <button 
            onClick={() => changeLanguage("PT")}
            className={`${language === "PT"? styles.activeButton : ''}`}
        >
            PT
        </button>
    </div>
};

