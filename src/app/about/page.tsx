"use client";

import styles from './page.module.scss';
import { useLanguageContext } from '@/context/LanguageContext';
import { useEffect, useState } from 'react';
import { getAboutPageDataJson, getImageUrl } from '@/lib/processAboutData';
import Image from 'next/image';
import TitleBanner from '@/components/TitleBanner/TitleBanner';
import LoadingScreen from '@/components/Loading/LoadingScreen';
import { AccordionAbout } from '@/components/ui/Accordion/AccordionAbout';
import { addLangParam } from "@/lib/utils";

export default function About() {
  const { language } = useLanguageContext();

  const [aboutData, setAboutData] = useState<any>();
  const [imageUrl, setImageUrl] = useState<any>();
  const [activeItem, setActiveItem] = useState<any>('');

  // Add lang=pt to url if not present
  useEffect(() => addLangParam(language), [language]);

  // Handling click of accordion and setting active item for icon changes
  function handleClick(item: string) {
    setActiveItem((prevItem: any) => (prevItem === item ? '' : item));
  }

  useEffect(() => {
    getAboutPageDataJson().then((data) => {
      setAboutData(data);
    });
  }, []);

  useEffect(() => {
    if (aboutData) {
      getImageUrl(aboutData.image_id).then((data) => {
        setImageUrl(data.media_details.sizes.full.source_url);
      });
    }
  }, [aboutData]);

  return (
    <>
      <TitleBanner title={language === "en" ? "about us" : "sobre nós"} />

      <main className={styles.main}>
        {!aboutData ? (
          <LoadingScreen />
        ) : (
          <>
            <section className={styles.aboutBox}>
              <div className={styles.textAbout}>
                {/* Main content */}
                <p className={styles.title}>
                  {language === 'en'
                    ? 'Infinita Productions'.toUpperCase()
                    : 'Infinita Produções'.toUpperCase()}
                </p>
                <p
                  className={styles.description}
                  dangerouslySetInnerHTML={{
                    __html: aboutData[`main_content_${language}`],
                  }}
                ></p>
              </div>

              {/* Accordion */}
              <div className={styles.categoryBox}>
                {aboutData && (
                  <AccordionAbout
                    handleClick={handleClick}
                    activeItem={activeItem}
                    aboutData={aboutData}
                  />
                )}
              </div>
            </section>

            {/* Side image */}
            <section className={styles.imageBox}>
              {imageUrl && (
                <Image
                  className={styles.aboutImage}
                  width={0}
                  height={0}
                  src={imageUrl}
                  alt="about image"
                />
              )}
            </section>
          </>
        )}
      </main>
    </>
  );
}
