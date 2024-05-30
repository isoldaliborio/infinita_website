"use client";

import styles from "./styles/ImageGallery.module.scss";
import { useRef } from "react";
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
  function findImageWidth(item: any, targetWidth: any) {
    //make an array of keys
    const keyArray = Object.keys(item);

    //if target width exists, just use that
    if (keyArray.includes(targetWidth)) {
      return targetWidth;
    } else {
      //if target width doesnt exist, sort through array to find nearest number to it, and use that instead
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
            lightboxRef.current = ref.instance; //opens the lightbox on the image that was clicked
          }
        }}
        speed={500} //transition speed
        download={false} //user cannot download the images
        plugins={[lgThumbnail]}
        dynamic
        dynamicEl={galleryImages.map((item: any) => ({
          src: item[findImageWidth(item, "1536w")],
          thumb: item[findImageWidth(item, "300w")],
        }))}
      />
    </>
  );
}
