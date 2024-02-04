"use client";

import styles from "./styles/Carousel.module.scss"
import Buttons from "@/components/Carousel/Buttons"
import Image from "next/image"
import { CarouselDataContext } from "../../context/CarouselDataContext";
import { useState, useContext } from "react";
import LoadingScreen from "../Loading/LoadingScreen";

export default function Carousel(){

    const fetchedData: any = useContext(CarouselDataContext)
    
    //rather than checking activeItem, we check fetchedData. meaning it will only load once the context
    //is no longer null.
    if(!fetchedData){
        return <LoadingScreen/>
    } 
    
    //if this was above the if statement, it would throw an error trying to assign [0] to a null value
    //here, the state will only be created after the data has been fetched, removing any errors.
    const [activeItem, setActiveItem] = useState<any>(fetchedData[0]);


    return (
        <section id={styles.Carousel}>
            <Buttons data={fetchedData} setItem={setActiveItem} activeItem={activeItem} />
            <div className={styles.imageContainer}>
                <Image id={styles.imagespace} src={activeItem.img_url} alt="img" style={{objectFit: "cover"}} fill priority={true} />
            </div>
        </section>
    )
}