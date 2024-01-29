"use client";

import styles from "./styles/Carousel.module.scss"
import Buttons from "@/components/Carousel/Buttons"
import Image from "next/Image";
import { useState } from "react";

export default function Carousel(){

    const dummyData = {
        "featured": [
            {
                "pt": {
                    "title": "Image1",
                    "category": "curating",
                },
                "en": {
                    "title": "Sunset Screening Session 2021/22/23",
                    "category": "music",
                },
                "path": "image1.jpg"
            },
            {
                "pt": {
                    "title": "Imagem2",
                    "category": "produção",
                },
                "en": {
                    "title": "Sunset Screening Session 2021/22/23",
                    "category": "production",
                },
                "path": "image2.jpg"
            },
            {
                "pt": {
                    "title": "Imagem3",
                    "category": "contabilidade",
                },
                "en": {
                    "title": "Image3",
                    "category": "accountancy",
                },
                "path": "image3.jpg"
            },
            {
                "pt": {
                    "title": "Imagem4",
                    "category": "outro",
                },
                "en": {
                    "title": "Image4",
                    "category": "other",
                },
                "path": "image4.jpg"
            },
        ]
    }

    const [activeItem, setActiveItem] = useState<any>(dummyData.featured[0]);

    if(!activeItem){
        return <div></div>
    }

    return (
        <section id={styles.Carousel}>
            <Buttons data={dummyData} setItem={setActiveItem} activeItem={activeItem} />
            <div className={styles.imageContainer}>
                <Image id={styles.imagespace} src={"/images/" + activeItem.path} alt="img" style={{objectFit: "cover"}} fill />
            </div>
        </section>
    )
}