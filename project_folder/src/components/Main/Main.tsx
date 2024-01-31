"use client";

import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { LanguageContextType, LanguageContext } from "../Context/LanguageContext";
import processHomePageData from "@/utils/processHomePageData"

export default function Main({children}:{children: React.ReactNode}){

    useEffect(() => {
        processHomePageData();
    }, []);

    const [language, setLanguage] = useState<LanguageContextType>("EN")

    return <LanguageContext.Provider value={language}>
        <Header setLanguage={setLanguage}/>
        {children}
        <Footer/>
    </LanguageContext.Provider>
}