'use client'

import NavigationBar from './NavigationBar'
import styles from './styles/Header.module.scss'
import { useState } from 'react';
import { LanguageContextType, LanguageContext } from '../Context/LanguageContext'

    
    export function Header(){
        
        const [language, setLanguage] = useState<LanguageContextType>("EN")

        return <LanguageContext.Provider value={ language }>
            <div id={styles.header}>
                logo
                <NavigationBar setLanguage = {setLanguage}/>
            </div>
        </LanguageContext.Provider>
}