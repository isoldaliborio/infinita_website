"use client";

import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { CarouselDataContext, CarouselDataContextType } from "../Context/CarouselDataContext";
import { LanguageContextType, LanguageContext } from "../Context/LanguageContext";
import processHomePageData from "@/utils/processHomePageData";

export default function Main({ children }: { children: React.ReactNode }) {
    const [homePageData, setHomePageData] = useState<any>(null);
    const [language, setLanguage] = useState<LanguageContextType>("EN");

    useEffect(() => {
        const fetchData = async () => {
            const data = await processHomePageData();
            setHomePageData(data);
        };
        fetchData();
    }, []);

    if (!homePageData) {
        // Data is still loading, return loading indicator or null
        return null;
    }

    console.log(homePageData);


    return (
        <LanguageContext.Provider value={language}>
            <Header setLanguage={setLanguage} />
            <CarouselDataContext.Provider value={homePageData}>
                {children}
            </CarouselDataContext.Provider>
            <Footer />
        </LanguageContext.Provider>
    );
}
