"use client";

import React, { useState, useEffect, Suspense } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { CarouselDataContext } from "../Context/CarouselDataContext";
import { LanguageContextType, LanguageContext } from "../Context/LanguageContext";
import processHomePageData from "@/utils/processHomePageData";
import LoadingScreen from "../Loading/LoadingScreen";

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

    //moved this into Carousel, allowing the header and footer to render before the main content.
    // if (!homePageData) {
    //     // Data is still loading, return loading indicator or null
    //     return <LoadingScreen/>;
    // }

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
