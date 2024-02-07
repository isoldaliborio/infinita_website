"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "./styles/Carousel.module.scss";
import Buttons from "@/components/Carousel/Buttons";
import LoadingScreen from "../Loading/LoadingScreen";
import { getHomePageDataJson, orderImages, processHomePageData } from "@/utils/processHomePageData";
import { motion, AnimatePresence } from "framer-motion";
import CarouselImage from "./CarouselImage";

export default function Carousel() {
  const initialData = Array.from({ length: 4 }, () => ({
    img_id: null,
    work_id: null,
    img_url: null,
    category_names: [null],
    title: null,
    index: null,
  }));

  const [homePageData, setHomePageData] = useState<any>(initialData);
  const [activeItem, setActiveItem] = useState<any>();
  const [orderedImages, setOrderedImages] = useState<any>();
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

    setOrderedImages(getPageDataOrdered());
  }, []);

  // Update home page image
  useEffect(() => {
    const processImages = async () => {
      try {
        updateImage(0);
      } catch (error) {
        console.error("Error processing images:", error);
      }
    };

    processImages();
  }, [orderedImages]);

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

  // Set initial image
  useEffect(() => {
    homePageData && setActiveItem(homePageData[0]);
    setIsVisible(true); // Triggers fade-in of image on initial render
  }, [homePageData]);

  // When activeItem changes
  useEffect(() => {
    if (activeItem && activeItem.index) {
      updateImage(activeItem.index);
    };
    if (activeItem && activeItem.index === 0){
      setIsVisible(true); // Triggers appearance of image for image at index 0 (but not fade in- needs fixing!)
    };
  }, [activeItem, updateImage]);

  // Conditional rendering of Loading Screen
  if (!homePageData[0]?.img_id) {
    return <LoadingScreen />;
  }

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.leftBox}>
                <div className={styles.innerBox}>
                    <Buttons data={homePageData} setItem={setActiveItem} activeItem={activeItem} isLoading={isLoading} setIsVisible={setIsVisible}/>
                </div>
            </div>
            <section id={styles.Carousel}>
                <div className={styles.imageContainer}>
                    {/* <Image id={styles.imagespace} src={activeItem.img_url} alt="img" style={{objectFit: "cover"}} fill priority={true} /> */}
                    <CarouselImage activeItem={activeItem} isVisible={isVisible}/>
                </div>
            </section>
        </div>
    )
}
