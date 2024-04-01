"use client";

import styles from "./page.module.scss";
import { LanguageContext } from "@/context/LanguageContext";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { getServicesPageDataJson } from '@/lib/processServicesData';
import TitleBanner from "@/components/TitleBanner/TitleBanner";
import LoadingScreen from "@/components/Loading/LoadingScreen";
import { ServicesAccordion } from "@/components/ui/Accordion/AccordionServices";

export default function Services() {

  let language = useContext(LanguageContext);
  const [servicesData, setServicesData] = useState<any>();
  const [activeItem, setActiveItem] = useState<any>("");

  //fetch data from api endpoint
  useEffect(() => {
    getServicesPageDataJson().then((data) => {
      setServicesData(data);
    })
  }, []);

  //handling click of accordion and setting active item for icon changes
  function handleClick(item: string) {
    if (item === activeItem) {
      setActiveItem("");
    } else {
      setActiveItem(item)
    }
  }

  return (
    <>
      <TitleBanner title={ language === "en" ? "services" : "serviços"} />
      <main className={styles.main}>
        {!servicesData ? <LoadingScreen /> : <>
          <section className={styles.servicesText}>
            {servicesData[`service_main_text_${language}`]}
          </section>
          <section className={styles.accordionContainer}>
            <ServicesAccordion
              handleClick={handleClick}
              activeItem={activeItem}
              servicesData={servicesData}
            />
          </section>
        </>}
      </main>
    </>
  )
}