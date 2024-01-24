"use client";

import React from "react";
import { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { LanguageContextType, LanguageContext } from "../Context/LanguageContext";

export default function Main({children}:{children: React.ReactNode}){

    const [language, setLanguage] = useState<LanguageContextType>("EN")

    return <LanguageContext.Provider value={ language }>
        <Header setLanguage={setLanguage}/>
        {children}
        <Footer/>
    </LanguageContext.Provider>
}