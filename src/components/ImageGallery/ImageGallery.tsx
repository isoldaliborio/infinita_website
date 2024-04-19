"use client";

import styles from "./styles/ImageGallery.module.scss";
import { useRef } from "react";
import Image from "next/image"

import type { LightGallery } from "lightgallery/lightgallery";
import LightGalleryComponent from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/Carousel/carousel"

type ImageGalleryProps = {
    galleryImages: any
}

export default function ImageGallery({galleryImages}:ImageGalleryProps){

    const lightboxRef = useRef<LightGallery | null>(null)

    return <>
         <Carousel>
            <CarouselContent>
                {galleryImages && galleryImages.map((item: any, index: any) => (
                    item["1536w"] && <CarouselItem className="sm:basis-1/3" key={index}>
                        <Image 
                            onClick={() => { lightboxRef.current?.openGallery(index);}}
                            className={styles.galleryItem} 
                            alt="" 
                            src={item["1536w"]} 
                            width="0" 
                            height="0" 
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
        <LightGalleryComponent
            onInit={(ref) => {
                if (ref) {
                    lightboxRef.current = ref.instance //opens the lightbox on the image that was clicked
                }
            }}
            speed={500} //transition speed
            download={false} //user cannot download the images
            plugins={[lgThumbnail]}
            dynamic
            dynamicEl={galleryImages.map((item:any) => ({
                src: item["1536w"] , 
                thumb: item["300w"]
            }))}
        />
    </>
}