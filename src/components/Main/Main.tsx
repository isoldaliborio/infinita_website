"use client";

import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import TitleBanner from "../TitleBanner/TitleBanner";
import Header from "../Header/Header";
import { LanguageContextType, LanguageContext } from "../../context/LanguageContext";

export default function Main({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<LanguageContextType>("EN");

    useEffect(() => {
        const updateHeight = () => {
            const windowHeight = window.innerHeight;
            document.documentElement.style.height = `${windowHeight}px`;
        };

        // Initial update on mount
        updateHeight();

        // Update on window resize
        window.addEventListener('resize', updateHeight);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateHeight);
        };
    }, []);

    return (
        <LanguageContext.Provider value={language}>
            <Header setLanguage={setLanguage} />
            <TitleBanner/>
            {children}
            <Footer />
        </LanguageContext.Provider>
    );
}
