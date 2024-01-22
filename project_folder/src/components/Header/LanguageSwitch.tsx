'use client';

import styles from "./styles/LanguageSwitch.module.scss";
import { useContext } from "react";
import { LanguageContext } from './Header'

interface LanguageSwitchProps {
    setLanguage: React.Dispatch<React.SetStateAction<"EN" | "PT">>;
}

export default function LanguageSwitch({setLanguage}:LanguageSwitchProps) {

    // const [language, setLanguage] = useState("EN")
    let language = useContext(LanguageContext);

    function changeLanguage(languageButton: "EN" | "PT") {
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

