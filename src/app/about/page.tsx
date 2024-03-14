"use client";

import styles from './page.module.scss'
import { LanguageContext } from '@/context/LanguageContext'
import { useContext } from 'react';
import { useState, useEffect } from "react";
import { getAboutPageDataJson, getImageUrl } from '@/lib/processAboutData';
import Image from 'next/image';
import TitleBanner from "@/components/TitleBanner/TitleBanner";


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function About() {

  let language = useContext(LanguageContext);
  const [aboutData, setAboutData] = useState<any>();
  const [imageUrl, setImageUrl] = useState<any>();

  useEffect(() => {
    getAboutPageDataJson().then((data) => {
      setAboutData(data);
    })
  }, []);

  useEffect(() => {
    if (aboutData) {
      console.log(aboutData)
      getImageUrl(aboutData.image_id).then((data) => {
        const url = data.media_details.sizes.full.source_url;
        setImageUrl(url);
      })
    }
  }, [aboutData]);

  // Temporary -- testing column sizes
  return (
    <>
      <TitleBanner title='About us' />
      <main className={`${styles.main} marginR`}>
        {aboutData && <section className={`${styles.aboutBox} marginL`}>
          <div className={`${styles.textAbout} col-5`}>
            <p className={styles.title}>
              {language === 'EN' ? 'Infinita Production' : 'Infinita Produções'}
            </p>
            <p
              className={styles.description}
              dangerouslySetInnerHTML={{
                __html: language === 'EN' ? aboutData.main_content_en : aboutData.main_content_pt
              }}>
            </p>
          </div>
          <div className={`${styles.categoryBox} col-5`}>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className={styles.accordionTitle}>Films</AccordionTrigger>
                <AccordionContent className={styles.accordionContent}>
                  <span
                  className={styles.categoryText}
                  dangerouslySetInnerHTML={{
                   __html: language === 'EN' ? aboutData.films_text_en : aboutData.films_text_pt
                  }}
                  >
                  </span>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className={styles.accordionTitle}>Music</AccordionTrigger>
                <AccordionContent className={styles.accordionContent}>
                <span
                  className={styles.categoryText}
                  dangerouslySetInnerHTML={{
                   __html: language === 'EN' ? aboutData.music_text_en : aboutData.music_text_pt
                  }}
                  >
                  </span>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className={styles.accordionTitle}>Curating</AccordionTrigger>
                <AccordionContent className={styles.accordionContent}>
                  <span
                    className={styles.categoryText}
                    dangerouslySetInnerHTML={{
                     __html: language === 'EN' ? aboutData.curating_text_en : aboutData.curating_text_pt
                    }}
                  >
                  </span>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className={styles.accordionTitle}>Accounting</AccordionTrigger>
                <AccordionContent className={styles.accordionContent}>
                <span
                  className={styles.categoryText}
                  dangerouslySetInnerHTML={{
                   __html: language === 'EN' ? aboutData.accounting_text_en : aboutData.accounting_text_pt
                  }}
                  >
                  </span>
                 </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>}
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