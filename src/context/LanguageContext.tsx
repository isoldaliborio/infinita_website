"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type LanguageContextType = "en" | "pt";

interface LanguageContextProps {
    language: LanguageContextType;
    setLanguage: (lang: LanguageContextType) => void;
}

const LanguageContext = createContext<LanguageContextProps>({
    language: "en",
    setLanguage: () => { },
});

export const useLanguageContext = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<LanguageContextType>("en");

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageContext;
