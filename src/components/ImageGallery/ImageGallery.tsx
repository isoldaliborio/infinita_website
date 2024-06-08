"use client";

import "./styles/LightGallery.scss";
import styles from "./styles/ImageGallery.module.scss";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

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
} from "@/components/ui/Carousel/carousel";

type ImageGalleryProps = {
  galleryImages: any;
};

export default function ImageGallery({ galleryImages }: ImageGalleryProps) {
  const [screenSize, setScreenSize] = useState<string>('large'); // Default to large

  function findImageWidth(item: any, targetWidth: any) {
    const keyArray = Object.keys(item);
    if (keyArray.includes(targetWidth)) {
      return targetWidth;
    } else {
      const target = parseInt(targetWidth.slice(0, -1));
      keyArray.sort((a: any, b: any) => {
        return (
          Math.abs(parseInt(a.slice(0, -1)) - target) -
          Math.abs(parseInt(b.slice(0, -1)) - target)
        );
      })[0];
      return keyArray[0];
    }
  }

  useEffect(() => {
    const checkScreenSize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 700) {
        setScreenSize('small');
      } else if (screenWidth > 700 && screenWidth <= 1169) {
        setScreenSize('medium');
      } else {
        setScreenSize('large');
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const lightboxRef = useRef<LightGallery | null>(null);

  return (
    <>
      <Carousel
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {galleryImages &&
            galleryImages.map(
              (item: any, index: any) =>
                item[findImageWidth(item, "1536w")] && (
                  <CarouselItem className="sm:basis-1/3" key={index}>
                    <Image
                      onClick={() => {
                        lightboxRef.current?.openGallery(index);
                      }}
                      className={styles.galleryItem}
                      alt=""
                      src={item[findImageWidth(item, "1536w")]}
                      width="0"
                      height="0"
                    />
                  </CarouselItem>
                )
            )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <LightGalleryComponent
        onInit={(ref) => {
          if (ref) {
            lightboxRef.current = ref.instance;
          }
        }}
        speed={500}
        download={false}
        plugins={[lgThumbnail]}
        dynamic
        dynamicEl={galleryImages.map((item: any) => ({
          src: item[findImageWidth(item, "1536w")],
          thumb: item[findImageWidth(item, "300w")],
          subHtml: `<div class="lightGallery-captions"><p class="image-caption">${item.caption}</p></div>`,
        }))}
        appendSubHtmlTo={screenSize === "small" ? ".lg-outer" : ".lg-sub-html"}
        thumbnail={screenSize !== "small"}
      />
    </>
  );
}