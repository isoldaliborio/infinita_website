"use client";

import styles from "./styles/Carousel.module.scss"
import Buttons from "@/components/Carousel/Buttons"
import Image from "next/image"
import { CarouselDataContext } from "../Context/CarouselDataContext";
import { useState, useContext } from "react";

export default function Carousel(){

    const fetchedData: any = useContext(CarouselDataContext)
    const [activeItem, setActiveItem] = useState<any>(null);
    
    if (!fetchedData) {
        // Data is still loading, return loading indicator or null
        return null;
    }


    if(!activeItem){
        return <div></div>
    }

    return (
        <section id={styles.Carousel}>
            <Buttons data={fetchedData} setItem={setActiveItem} activeItem={activeItem} />
            <div className={styles.imageContainer}>
                <Image id={styles.imagespace} src={activeItem.img_url} alt="img" style={{objectFit: "cover"}} fill priority={true} />
            </div>
        </section>
    )
}