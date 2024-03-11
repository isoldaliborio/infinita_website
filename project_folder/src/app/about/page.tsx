"use client";

import styles from './page.module.scss'
import { LanguageContext } from '@/context/LanguageContext'
import { useContext } from 'react';
import { useState, useEffect } from "react";
import { getAboutPageDataJson, getImageUrl } from '@/utils/processAboutData';
import { url } from 'inspector';
import Image from 'next/image';




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
      getImageUrl(aboutData.image_id).then((data) => {
        const url = data.media_details.sizes.full.source_url;
        setImageUrl(url);
      })
    }
  }, [aboutData]);


  if (!aboutData || !imageUrl) {
    return <div>...</div>
  }

  // Temporary -- testing column sizes
  return (
    <main className={`${styles.main} marginR`}>
      <section className={`${styles.aboutBox} marginL`}>
        <div className={`${styles.textAbout} col-5`}>
          <p className={styles.title}>
            {language === 'EN' ? 'Infinita Production' : 'Infinita Produções'}
          </p>
          <p className={styles.description}>
            {language === 'EN' ? aboutData.main_content_en : aboutData.main_content_pt}
          </p>
        </div>
        <div className={`${styles.categoryBox} col-5`}>
          categories
        </div>
      </section>
      <section className={`${styles.imageBox} col-7`}>
        <Image
          className={styles.aboutImage}
          width={0}
          height={0}
          src={imageUrl}
          alt="about image"
        />
      </section>
    </main>
  )
}