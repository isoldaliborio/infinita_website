"use client";

//TODO: convert tailwind into CSS 

import styles from "./page.module.scss";
import { LanguageContext } from "@/context/LanguageContext";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { getServicesPageDataJson} from '@/lib/processServicesData';
import Image from 'next/image';
import TitleBanner from "@/components/TitleBanner/TitleBanner";
import LoadingScreen from "@/components/Loading/LoadingScreen";

import { PlusIcon } from "@radix-ui/react-icons";
import { MinusIcon } from "@radix-ui/react-icons";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
 import {
  AccordionTrigger,
 } from "@/components/ui/ServicesAccordion";

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
  function handleClick(item:string){
    if(item === activeItem){
      setActiveItem("");
    } else{
      setActiveItem(item)
    }
  }

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
            <section className={styles.accordionContainer}>
              <Accordion type="single" collapsible>

                <AccordionItem onClick={()=> handleClick("Brazil")} className={styles.accordionItem} value="item-1">
                  <AccordionTrigger className={styles.accordionTitle}>
                    <div className={styles.accordionTitleText}> 
                      {language === "EN" ? "BRAZIL" : "BRASIL"} 
                      { activeItem === "Brazil" 
                        ?
                          <MinusIcon className={styles.accordionTitleIcon} />
                        :
                          <PlusIcon className={styles.accordionTitleIcon} />
                      }
                    </div> 
                    <Image className={styles.accordionTitleImage} src={"https://infinitaproducoes.com/wordpress/wp-content/uploads/2024/03/img_Services_Brazil.jpg"} alt={"img test"} width={0} height={0}/>
                  </AccordionTrigger>
                  <AccordionContent className={styles.accordionContent}>
                    { language === "EN" ? servicesData.brazil_service_text_en : servicesData.brazil_service_text_pt } 
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem onClick={()=> handleClick("UK")} className={`${styles.accordionItem} ${styles.middleItem}`} value="item-2">
                  <AccordionTrigger className={styles.accordionTitle}>
                    <div className={styles.accordionTitleText}> 
                      { language === "EN" ? "UNITED KINGDOM" : "REINO UNIDO"}
                      { activeItem === "UK" 
                      ?
                        <MinusIcon className={styles.accordionTitleIcon} />
                      :
                        <PlusIcon className={styles.accordionTitleIcon} />
                    } 
                    </div> 
                    <Image className={styles.accordionTitleImage} src={"https://infinitaproducoes.com/wordpress/wp-content/uploads/2024/03/img_Services_UK.jpg"} alt={"img test"} width={0} height={0}/>
                  </AccordionTrigger>
                  <AccordionContent className={styles.accordionContent}>
                    { language === "EN" ? servicesData.uk_service_text_en : servicesData.uk_service_text_pt } 
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem onClick={()=> handleClick("Europe")} className={styles.accordionItem} value="item-3">
                  <AccordionTrigger className={styles.accordionTitle}>
                    <div className={styles.accordionTitleText}>
                      { language === "EN" ? "EUROPE" : "EUROPA" }
                      { activeItem === "Europe" 
                      ?
                        <MinusIcon className={styles.accordionTitleIcon} />
                      :
                        <PlusIcon className={styles.accordionTitleIcon} />
                    }
                    </div> 
                    <Image className={styles.accordionTitleImage} src={"https://infinitaproducoes.com/wordpress/wp-content/uploads/2024/03/img_Services_Europe.jpg"} alt={"img test"} width={0} height={0}/>
                  </AccordionTrigger>
                  <AccordionContent className={styles.accordionContent}>
                    { language === "EN" ? servicesData.europe_service_text_en : servicesData.europe_service_text_pt } 
                  </AccordionContent>
                </AccordionItem>

              </Accordion>
            </section>
          </> 
        }
      </main> 
    </>
  )
}