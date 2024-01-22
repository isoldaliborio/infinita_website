'use client'
import LanguageSwitch from './LanguageSwitch'
import NavigationBar from './NavigationBar'
import styles from './styles/Header.module.scss'
import { createContext, useState } from 'react';

    type LanguageContextType = "EN" | "PT";
    
    //This CONTEXT should be moved to a higher component when we implement language changes
    export const LanguageContext = createContext<LanguageContextType>("EN");
    
    export function Header(){
        
        const [language, setLanguage] = useState<LanguageContextType>("EN")

        return <LanguageContext.Provider value={ language }>
            <div id={styles.header}>
            logo
            <NavigationBar setLanguage = {setLanguage}/>
            {/* <LanguageSwitch setLanguage = {setLanguage} /> */}
            </div>
        </LanguageContext.Provider>
}