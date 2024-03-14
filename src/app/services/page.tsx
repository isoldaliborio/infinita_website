"use client";

import styles from "./page.module.scss";
import { LanguageContext } from "@/context/LanguageContext";
import { useContext } from "react";
import TitleBanner from "@/components/TitleBanner/TitleBanner";
import { useState, useEffect } from "react";
import { getServicesPageDataJson, getImageUrl } from '@/lib/processServicesData';
import Image from 'next/image';
import LoadingScreen from "@/components/Loading/LoadingScreen";


export default function Services() {

  let language = useContext(LanguageContext);
  const [servicesData, setServicesData] = useState<any>();
  const imageUrl = "https://infinitaproducoes.com/wordpress/wp-content/uploads/2024/03/"
  const urlArray = ["img_Services_Brazil.jpg", "img_Services_UK.jpg", "img_Services_Europe.jpg"]

  //fetch data from api endpoint
  useEffect(() => {
    getServicesPageDataJson().then((data) => {
      setServicesData(data);
    })
  }, []);

  return (
    <>
      <TitleBanner title="Services" />
      <main className={styles.main}>
        { !servicesData ? 
          <LoadingScreen/> 
        :
          <>
            <section className={styles.servicesText}>
              { language === "EN" ? servicesData.service_main_text_en : servicesData.service_main_text_pt}
            </section>
            <section className={styles.imageBox}>
              placeholder image
              <Image src={"https://infinitaproducoes.com/wordpress/wp-content/uploads/2024/03/img_Services_Brazil.jpg"} alt={"img test"} width={100} height={100}/>
              <Image src={"https://infinitaproducoes.com/wordpress/wp-content/uploads/2024/03/img_Services_UK.jpg"} alt={"img test"} width={100} height={100}/>
              <Image src={"https://infinitaproducoes.com/wordpress/wp-content/uploads/2024/03/img_Services_Europe.jpg"} alt={"img test"} width={100} height={100}/>
            </section>
          </> 
        }
      </main> 
    </>
  )
}