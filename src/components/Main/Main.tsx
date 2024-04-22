"use client";

import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import LanguageContext, { LanguageContextType } from "@/context/LanguageContext";

export default function Main({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<LanguageContextType>("en");

    useEffect(() => {
        const updateHeight = () => {
            const windowHeight = window.innerHeight;
            document.documentElement.style.height = `${windowHeight}px`;
        };
        updateHeight();
        window.addEventListener('resize', updateHeight);
        return () => {
            window.removeEventListener('resize', updateHeight);
        };
    }, []);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            <Header setLanguage={setLanguage} />
            {children}
            <Footer />
        </LanguageContext.Provider>
    );
}
