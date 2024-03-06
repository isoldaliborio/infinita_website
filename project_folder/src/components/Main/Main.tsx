"use client";

import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { LanguageContextType, LanguageContext } from "../../context/LanguageContext";
import Div100vh from 'react-div-100vh';

export default function Main({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<LanguageContextType>("EN");

    // useEffect(() => {
    //     const updateHeight = () => {
    //         const windowHeight = window.innerHeight;
    //         document.documentElement.style.minHeight = `${windowHeight}px`;
    //         document.body.style.minHeight = `${windowHeight}px`;
    //         document.documentElement.style.maxHeight = `${windowHeight}px`;
    //         document.body.style.maxHeight = `${windowHeight}px`;
    //     };

    //     // Initial update on mount
    //     updateHeight();

    //     // Update on window resize
    //     window.addEventListener('resize', updateHeight);

    //     // Cleanup event listener on component unmount
    //     return () => {
    //         window.removeEventListener('resize', updateHeight);
    //     };
    // }, []);

    return (
        <Div100vh>
            <LanguageContext.Provider value={language}>
                <Header setLanguage={setLanguage} />
                {children}
                <Footer />
            </LanguageContext.Provider>
        </Div100vh>
    );
}
