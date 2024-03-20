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

  return (
    <>
      <TitleBanner title={language === "EN" ? "PROJECTS" : "PROJETOS"} />
      <main className={styles.main}>
        <div className={styles.gridContainer}>
          {
            imageArray.map((item, index) => {
              return <div key={index} className={`${styles.gridChild} ${item.size === "2" ? styles.horizontalPoster : ""} ${item.size === "3" ? styles.verticalPoster : ""}`}> 
                {item.title}
                <div className={styles.imageOverlay}> some random words</div>
              </div>
            })
          }
        </div>
      </main>
    </>
  )
}