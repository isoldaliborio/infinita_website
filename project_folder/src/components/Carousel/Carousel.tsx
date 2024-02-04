"use client";

import { useState, useEffect } from "react";
import styles from "./styles/Carousel.module.scss"
import Buttons from "@/components/Carousel/Buttons"
import Image from "next/image"
import processHomePageData from "@/utils/processHomePageData";
import LoadingScreen from "../Loading/LoadingScreen";

export default function Carousel(){

    const [homePageData, setHomePageData] = useState<any>();
    const [activeItem, setActiveItem] = useState<any>();

    useEffect(() => {
        const fetchData = async () => setHomePageData(await processHomePageData());
        fetchData().catch(console.error);
    }, []);

    useEffect(() => {homePageData && setActiveItem(homePageData[0])}, [homePageData]);
    
    if(!homePageData || !activeItem){
        return <LoadingScreen/>
    } 
    
    return (
        <section id={styles.Carousel}>
            <Buttons data={homePageData} setItem={setActiveItem} activeItem={activeItem} />
            <div className={styles.imageContainer}>
                <Image id={styles.imagespace} src={activeItem.img_url} alt="img" style={{objectFit: "cover"}} fill priority={true} />
            </div>
        </section>
    )
}