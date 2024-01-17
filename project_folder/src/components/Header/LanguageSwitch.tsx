'use client';

import styles from "./styles/LanguageSwitch.module.scss";
import { useState } from "react";

export default function LanguageSwitch() {

    const [language, setLanguage] = useState("EN")

    function changeLanguage(languageButton: string) {
        setLanguage(languageButton)
    }

    return <div>
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

