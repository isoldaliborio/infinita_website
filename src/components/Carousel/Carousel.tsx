"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "./styles/Carousel.module.scss";
import Buttons from "@/components/Carousel/Buttons";
import LoadingScreen from "../Loading/LoadingScreen";
import { getHomePageDataJson, orderImages, processHomePageData } from "@/lib/processHomePageData";
import { motion, AnimatePresence } from "framer-motion";
import CarouselImage from "./CarouselImage";

export default function Carousel() {
  const initialData = Array.from({ length: 4 }, () => ({
    img_id: null,
    work_id: null,
    img_url: null,
    category_names: [null],
    title: null,
    index: 0,
  }));

  const [homePageData, setHomePageData] = useState<any>(initialData);
  const [activeItem, setActiveItem] = useState<any>();
  const [orderedImages, setOrderedImages] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
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

  // Update home page image
  // useEffect(() => {
  //   const processImages = async () => {
  //     try {
  //       updateImage(0);
  //     } catch (error) {
  //       console.error("Error processing images:", error);
  //     }
  //   };
  //   if (orderImages !== null) {
  //     processImages();
  //   }
  // }, [orderedImages]);

  const updateImage = useCallback(async (idx: number) => {
    try {
      if (orderedImages) {
        setIsLoading(true); // Set loading state to true during data fetching
        const images = await orderedImages;
        const [imageData] = await processHomePageData([images[idx]]);
        initialData[idx] = imageData;

        setHomePageData(initialData);
        setActiveItem(imageData);
      }
    } catch (error) {
      console.error("Error updating image:", error);
    } finally {
      setIsLoading(false); // Set loading state to false after data fetching is complete
      setIsVisible(true); // Triggers fade-in of image 
    }
  }, [orderedImages]);

  // TODO: is this needed?
  // Set initial image
  useEffect(() => {
    homePageData && setActiveItem(homePageData[0]);
    setIsVisible(true); // Triggers fade-in of image on initial render
  }, [homePageData]);

  // When activeItem changes
  useEffect(() => {
    if (activeItem && activeItem.index || activeItem && activeItem.index === 0) {
      updateImage(activeItem.index);
    };
  }, [activeItem, updateImage]); // is updateImage needed here?


  // Conditional rendering of Loading Screen
  if (!homePageData[0]?.img_id) {
    return <LoadingScreen />;
  }

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.leftBox}>
        <div className={styles.innerBox}>
          <Buttons data={homePageData} setItem={setActiveItem} activeItem={activeItem} isLoading={isLoading} setIsVisible={setIsVisible} />
        </div>
      </div>
      <section id={styles.carousel}>
        <div className={styles.imageContainer}>
          <CarouselImage activeItem={activeItem} isVisible={isVisible} />
        </div>
      </section>
    </div>
  )
}
