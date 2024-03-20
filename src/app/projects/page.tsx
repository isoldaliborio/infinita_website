"use client";

import styles from "./page.module.scss";
import { LanguageContext } from "@/context/LanguageContext";
import { useState, useContext } from "react";
import TitleBanner from "@/components/TitleBanner/TitleBanner";
import Image from 'next/image';
import { dummyData } from "../../lib/dummyProjectData";



export default function Projects() {

  type activeFilterState ={
    filter:string
  }

  const [activeFilter, setActiveFilter] = useState<activeFilterState>({filter:"all"})

  let language = useContext(LanguageContext);

  const projectArray = dummyData.projects;
  const categoryArray = dummyData.categories;
  const url = "https://images.unsplash.com/photo"

  function handleClick(button:string){
    setActiveFilter({filter:button});
  };


  return (
    <>
      <TitleBanner title={language === "EN" ? "PROJECTS" : "PROJETOS"} />
      <section className={styles.filter}>
        {
          categoryArray.map((item, index) => {
            return <div 
              key={index} 
              className={`${styles.button} ${activeFilter.filter === item ? styles.activeButton : ""}`}
              onClick={() => handleClick(item)}
            >
              {item}
            </div>             
          })
        }
      </section>
      <main className={styles.main}>
        <div className={styles.gridContainer}>
          {
            projectArray.map((item, index) => {
              return activeFilter.filter !== "all" && activeFilter.filter !== item.category ? null : <div key={index} className={`${styles.gridChild} ${item.size === "2" ? styles.horizontalPoster : ""} ${item.size === "3" ? styles.verticalPoster : ""}`}> 
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