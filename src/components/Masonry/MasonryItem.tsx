"use client";

import styles from "./styles/MasonryItem.module.scss";
import { useState, useEffect } from "react";
import { useLanguageContext } from "@/context/LanguageContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type MasonryItemProps = {
  index: any,
  item: any,
}


export default function MasonryItem({ index, item }: MasonryItemProps) {
  const { language } = useLanguageContext();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMouseEnter, setIsMouseEnter] = useState(false)
  const router = useRouter();

  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth < 701);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const goToProject = (item: any) => router.push(`/project/?p=${item.slug}`);
  const mouseEnter = () => {
    setIsMouseEnter(true)
  };

  const mouseOut = () => {
    setIsMouseEnter(false)
  };

  console.log(item);

  return item.image_in_list && (
    <div 
      key={index} 
      className={`${styles.masonryItem} ${item.image_size === "horizontal" ? styles.horizontalPoster : ""} ${item.image_size === "vertical" ? styles.verticalPoster : ""}`}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseOut}

      >
      <Image
        onClick={() => goToProject(item)}
        className={`${styles.image} ${isMouseEnter === true ? styles.grayscale : ""} `}
        src={item.image_in_list[0]}
        alt={item[`title_${language}`] || ""}
        fill
      />
      {!isSmallScreen && <Link href={`/project/?p=${item.slug}`} className={styles.imageOverlay}>
        <div className={styles.overlayTitle}> {item[`title_${language}`] || ""} </div>
        <section className={styles.overlayBottomText}>
          <div>{Array.isArray(item.categories) && item.categories.length > 0 ? item.categories[0].toLowerCase() : ""}</div>
          <div className={styles.overlayLine} />
          <div> {item.year} </div>
        </section>
        <div className={styles.gradient} />
      </Link>}
    </div>
  );
}
