"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "./styles/Carousel.module.scss";
import Buttons from "@/components/Carousel/Buttons";
import LoadingScreen from "../Loading/LoadingScreen";
import { getHomePageDataJson, orderImages, processHomePageData } from "@/lib/processHomePageData";
import { motion, AnimatePresence } from "framer-motion";
import CarouselImage from "./CarouselImage";

import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';

export default function Carousel_v2() {

  const [orderedImages, setOrderedImages] = useState<any>(null);

  // Order images
  useEffect(() => {
    const getPageDataOrdered = async () => {
      try {
        const pageData = await getHomePageDataJson();
        return orderImages(pageData);
      } catch (error) {
        console.error("Error fetching ordered images:", error);
        return [];
      }
    };
    if (orderedImages === null) {
      setOrderedImages(getPageDataOrdered());
    }
  }, []);

  useEffect(() => {
    const processImages = async () => {
      try {
        if (orderedImages) {
          const images = await orderedImages;
          images.map((item) => {
            if(item.img_url){
              console.log(item.img_url);
            }
          });
          const [imageData] = await processHomePageData(images);
        }
      } catch (error) {
        console.error("Error updating image:", error);
      }
    }
    if (orderedImages){
      processImages();
    }
  }, [orderedImages]);

  // <motion.div
  //       initial={{opacity:1}} 
  //       animate={{opacity:0.999}}
  //       exit={{opacity:1}}
  //       transition={{duration:3}} 
  //       className={styles.imageContainer} 
  //     >
  //       <Image
  //         src={activeItem.img_url || "/images/blank.png"}
  //         alt="img"
  //         style={{ objectFit: "cover" }}
  //         fill
  //         priority={true}
  //       />
  //     </motion.div>

  


  // Conditional rendering of Loading Screen
  // if (!homePageData[0]?.img_id) {
  //   return <LoadingScreen />;
  // }

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.leftBox}>
        <div className={styles.innerBox}>
          {/* <Buttons data={homePageData} setItem={setActiveItem} activeItem={activeItem} isLoading={isLoading} setIsVisible={setIsVisible} /> */}
        </div>
      </div>
      <section id={styles.carousel}>
        <div className={styles.imageContainer}>
          {/* <CarouselImage activeItem={activeItem} isVisible={isVisible} /> */}
        </div>
      </section>
    </div>
  )
}
