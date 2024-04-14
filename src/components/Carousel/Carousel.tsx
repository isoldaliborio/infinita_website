"use client";

import { useState, useEffect } from "react";
import styles from "./styles/Carousel.module.scss";
import Buttons from "@/components/Carousel/Buttons";
import { useRouter } from "next/navigation";
import { getHomePageDataJson, orderImages } from "@/lib/processHomePageData";

import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.css"
import "./styles/react-responsive-carousel-custom.css"

export default function Carousel() {

  const [orderedImages, setOrderedImages] = useState<any>(null);
  const [activeItem, setActiveItem] = useState<any>(0);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  const slideHandler = (index: any, item: any) => {
    setActiveItem(index);
  }

  const goToProject = (index: any, item: any) => {
    const slug = item.props.children.props["project-slug"];
    router.push(`/project?p=${slug}`)
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
            interval={50000}
            onChange={slideHandler}
            selectedItem={activeItem}
            onClickItem={goToProject}
          >
            {orderedImages.map((item: any, index: any) => (
              <div key={index} className={styles.slideContainer} >
                <img className={styles.carouselImage} src={item.img_url} alt={item.post_title} project-slug={item.slug} />
              </div>
            ))}
          </ResponsiveCarousel>
        </div>
      </section>
    </div>
  )
}
