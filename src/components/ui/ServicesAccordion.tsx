'use client';

import styles from './styles/ServicesAccordion.module.scss';
import Image from 'next/image';
import { LanguageContext } from "@/context/LanguageContext";
import { useContext } from "react";
import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { ModifiedAccordionTrigger } from './ModifiedAccordionTrigger';
import { PlusIcon } from "@radix-ui/react-icons";
import { MinusIcon } from "@radix-ui/react-icons";

type ServicesAccordionProps = {
  handleClick: any,
  activeItem: string,
  servicesData: any,
}

const ServicesAccordion = ({ handleClick, activeItem, servicesData}: ServicesAccordionProps) => {

  let language = useContext(LanguageContext);

  const accordionArray = [
    {
      activeItemName : "Brazil",
      value: "item-1",
      title: {
        EN: "BRAZIL",
        PT: "BRASIL"
      },
      imageUrl: "https://infinitaproducoes.com/wordpress/wp-content/uploads/2024/03/img_Services_Brazil.jpg",
      imageAlt: "the city of Rio de Janeiro",
      textContent: {
        EN: servicesData.brazil_service_text_en,
        PT: servicesData.brazil_service_text_pt
      },
      isMiddleItem : false
    },

    {
      activeItemName : "UK",
      value: "item-2",
      title: {
        EN: "UNITED KINGDOM",
        PT: "REINO UNIDO"
      },
      imageUrl: "https://infinitaproducoes.com/wordpress/wp-content/uploads/2024/03/img_Services_UK.jpg",
      imageAlt: "the Houses of Parliament and Big Ben in London",
      textContent: {
        EN: servicesData.uk_service_text_en,
        PT: servicesData.uk_service_text_pt
      },
      isMiddleItem : true
    },

    {
      activeItemName : "Europe",
      value: "item-3",
      title: {
        EN: "EUROPE",
        PT: "EUROPA"
      },
      imageUrl: "https://infinitaproducoes.com/wordpress/wp-content/uploads/2024/03/img_Services_Europe.jpg",
      imageAlt: "a city in Europe",
      textContent: {
        EN: servicesData.europe_service_text_en,
        PT: servicesData.europe_service_text_pt
      },
      isMiddleItem : false
    },

  ]

  return <Accordion type="single" collapsible>
    {
      accordionArray.map((item, index) => (
        <AccordionItem key={index} onClick={()=> handleClick(item.activeItemName)} className={`${styles.accordionItem} ${item.isMiddleItem ? styles.middleItem : ""}`} value={item.value}>
          <ModifiedAccordionTrigger className={styles.accordionTitle}>
            <div className={styles.accordionTitleText}> 
              {language === "EN" ? item.title.EN : item.title.PT} 
              { activeItem === item.activeItemName 
                ? <MinusIcon className={styles.accordionTitleIcon} />
                : <PlusIcon className={styles.accordionTitleIcon} />
              }
            </div> 
            <Image className={styles.accordionTitleImage} src={item.imageUrl} alt={item.imageAlt} width={0} height={0}/>
          </ModifiedAccordionTrigger>
          <AccordionContent className={styles.accordionContent}>
            { language === "EN" ? item.textContent.EN : item.textContent.PT } 
          </AccordionContent>
        </AccordionItem>
      ))
    }
  </Accordion>
};

export { ServicesAccordion };