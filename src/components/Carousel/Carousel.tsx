"use client";

import { useState, useEffect } from "react";
import styles from "./styles/Carousel.module.scss";
import Buttons from "@/components/Carousel/Buttons";
import { useRouter } from "next/navigation";
import { getHomePageDataJson, orderImages } from "@/lib/processHomePageData";

import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.css"
import "./styles/react-responsive-carousel-custom.css"
import LoadingScreen from "../Loading/LoadingScreen";

export default function Carousel() {

  const [orderedImages, setOrderedImages] = useState<any>(null);
  const [activeItem, setActiveItem] = useState<any>(0);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  const slideHandler = (index: any) => {
    setActiveItem(index);
  }

  const goToProject = (array: any) => {
    router.push(`/project?p=${array[activeItem].slug}`)
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
    return <LoadingScreen />;
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
            stopOnHover={false}
            autoPlay={true}
            swipeable={false}
            interval={5000}
            onChange={slideHandler}
            selectedItem={activeItem}
          >
            {orderedImages.map((item: any, index: any, array: any) => (
              <div key={index} className={styles.slideContainer} onClick={() => goToProject(array)}>
                <img className={styles.carouselImage} src={item.img_url} alt={item.post_title} project-slug={item.slug} />
              </div>
            ))}
          </ResponsiveCarousel>
        </div>
      </section>
    </div>
  )
}
