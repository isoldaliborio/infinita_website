"use client";

import { useState, useEffect } from "react";
import styles from "./styles/Carousel.module.scss";
import Buttons from "@/components/Carousel/Buttons";
import { getHomePageDataJson, orderImages } from "@/lib/processHomePageData";

import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.css"
import "./styles/react-responsive-carousel-custom.css"

export default function Carousel() {

  const [orderedImages, setOrderedImages] = useState<any>(null);
  const [activeItem, setActiveItem] = useState<any>(0);
  const [isLoading, setIsLoading] = useState(true);

  const slideHandler = (index: any, item: any) => {
    setActiveItem(index);
  }

  useEffect(() => {
    const getPageDataOrdered = async () => {
      const pageData = await getHomePageDataJson();
      const orderedImages = orderImages(pageData);
      setOrderedImages(orderedImages);
      setIsLoading(false);
    };
    if (orderedImages === null) {
      getPageDataOrdered();
    }
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.leftBox}>
        <div className={styles.innerBox}>
          <Buttons data={orderedImages} setItem={setActiveItem} activeItem={activeItem} />
        </div>
      </div>
      <section id={styles.carousel}>
        <div className={styles.imageContainer}>
          <ResponsiveCarousel
            animationHandler={"fade"}
            infiniteLoop={true}
            showArrows={false}
            showIndicators={false}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={5000}
            onChange={slideHandler}
            selectedItem={activeItem}
          >
            {orderedImages.map((item: any, index: any) => (
              <div key={index}>
                <img className={styles.carouselImage} src={item.img_url} />
              </div>
            ))}
          </ResponsiveCarousel>
        </div>
      </section>
    </div>
  )
}
