"use client";

import styles from './page.module.scss'
import { LanguageContext } from '@/context/LanguageContext'
import { useContext } from 'react';
import { useState, useEffect } from "react";
import { getAboutPageDataJson, getImageUrl } from '@/lib/processAboutData';
import Image from 'next/image';
import TitleBanner from "@/components/TitleBanner/TitleBanner";
import { AccordionAbout } from "@/components/ui/Accordion/AccordionAbout";


export default function About() {

  let language = useContext(LanguageContext);
  const [aboutData, setAboutData] = useState<any>();
  const [imageUrl, setImageUrl] = useState<any>();
  const [activeItem, setActiveItem] = useState<any>("");

  //handling click of accordion and setting active item for icon changes
  function handleClick(item: string) {
    if (item === activeItem) {
      setActiveItem("");
    } else {
      setActiveItem(item)
    }
  }

  useEffect(() => {
    getAboutPageDataJson().then((data) => {
      setAboutData(data);
    })
  }, []);

  useEffect(() => {
    if (aboutData) {
      getImageUrl(aboutData.image_id).then((data) => {
        setImageUrl(data.media_details.sizes.full.source_url);
      })
    }
  }, [aboutData]);

  return (
    <>
      <TitleBanner title='About us' />

      <main className={`${styles.main} marginR`}>
        <section className={`${styles.aboutBox} marginL`}>
          <div className={`${styles.textAbout} col-5`}>
            <p className={styles.title}>
              {language === 'en' ? 'Infinita Production' : 'Infinita Produções'}
            </p>
            {aboutData && <p
              className={styles.description}
              dangerouslySetInnerHTML={{
                __html: language === 'en' ? aboutData.main_content_en : aboutData.main_content_pt
              }}>
            </p>}
          </div>

          <div className={`${styles.categoryBox} col-5`}>
            {aboutData && <AccordionAbout
              handleClick={handleClick}
              activeItem={activeItem}
              aboutData={aboutData}
            />}
          </div>
        </section>

        <section className={`${styles.imageBox} col-7`}>
          {imageUrl && <Image
            className={styles.aboutImage}
            width={0}
            height={0}
            src={imageUrl}
            alt="about image"
          />}
        </section>
      </main>
    </>
  )
}