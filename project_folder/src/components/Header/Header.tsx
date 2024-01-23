'use client'

import styles from "./styles/Header.module.scss"
import  Image  from "next/Image";
import { useState } from "react";
import { LanguageContextType, LanguageContext } from "../Context/LanguageContext";
import NavigationBar from "./NavigationBar";
 
export default function Header(){
    
    const [language, setLanguage] = useState<LanguageContextType>("EN")

    return <LanguageContext.Provider value={ language }>
        <div id={styles.header}>
            <Image id={styles.infinitaLogo} src="/images/infinita-logo.png" alt="infinita logo" width="200" height="50"/>
            <NavigationBar setLanguage = {setLanguage}/>
        </div>
    </LanguageContext.Provider>
}