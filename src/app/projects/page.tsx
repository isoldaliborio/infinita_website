"use client";

import styles from "./page.module.scss";
import { LanguageContext } from "@/context/LanguageContext";
import { useContext } from "react";
import TitleBanner from "@/components/TitleBanner/TitleBanner";
import Image from 'next/image';
import { dummyData } from "../../lib/dummyProjectData";

export default function Projects() {

  let language = useContext(LanguageContext);

  const imageArray = dummyData;

  const url = "https://images.unsplash.com/photo"

  return (
    <>
      <TitleBanner title={language === "EN" ? "PROJECTS" : "PROJETOS"} />
      <section className={styles.filter}>
        <div className={styles.button}>all</div>
        <div className={styles.button}>films</div>
        <div className={styles.button}>music</div>
        <div className={styles.button}>curating</div>
        <div className={styles.button}>accounting</div>
      </section>
      <main className={styles.main}>
        <div className={styles.gridContainer}>
          {
            imageArray.map((item, index) => {
              return <div key={index} className={`${styles.gridChild} ${item.size === "2" ? styles.horizontalPoster : ""} ${item.size === "3" ? styles.verticalPoster : ""}`}> 
                <Image 
                  className={styles.gridImage} 
                  src={(`${url}${item.imageUrl}`)} 
                  alt={item.title} 
                  fill
                />  
                <section className={styles.imageOverlay}>
                  <div className={styles.overlayTitle}> {item.title} </div>
                  <section className={styles.overlayBottomText}>
                    <div> {item.category} </div>
                    <div className={styles.overlayLine}/>
                    <div> 2020 </div>
                  </section>
                  <div className={styles.gradient}/>
                </section>
              </div>
            })
          }
        </div>
      </main>
    </>
  )
}