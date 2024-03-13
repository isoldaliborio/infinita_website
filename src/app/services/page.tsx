"use client";

import styles from "./page.module.scss";
import { LanguageContext } from "@/context/LanguageContext";
import { useContext } from "react";
import TitleBanner from "@/components/TitleBanner/TitleBanner";
import { useState, useEffect } from "react";
import { getServicesPageDataJson, getImageUrl } from '@/lib/processServicesData';
import Image from 'next/image';
import { ACTION_FAST_REFRESH } from "next/dist/client/components/router-reducer/router-reducer-types";
import LoadingScreen from "@/components/Loading/LoadingScreen";


export default function Services() {

  let language = useContext(LanguageContext);
  const [servicesData, setServicesData] = useState<any>();
  const [imageGallery, setImageGallery] = useState<any>();

  useEffect(() => {
    getServicesPageDataJson().then((data) => {
      setServicesData(data);
    })
  }, []);

  return (
    <>
      <TitleBanner title="Services" />
      <main className={styles.main}>
        {!servicesData ? <LoadingScreen/> 
        :<>
          <section className={styles.servicesText}>
            {servicesData.service_main_text_en}
          </section>
          <section className={styles.imageBox}>
            placeholder image
          </section>
        </> }
      </main> 
    </>
  )
}