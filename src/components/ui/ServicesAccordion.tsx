'use client';

import styles from './styles/ServicesAccordion.module.scss';
import Image from 'next/image';
import { LanguageContext } from "@/context/LanguageContext";
import { useContext } from "react";
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";

import { PlusIcon } from "@radix-ui/react-icons";
import { MinusIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";

//Modified from About page accordion component to fit styling requirements of Services page
const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "items-center justify-between text-sm font-medium transition-all hover:underline  border-solid border-red-600 border-1",
        className
      )}
      {...props}
    >
      {children}
    
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

//Services Page Accordion

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
      <AccordionTrigger className={styles.accordionTitle}>
        <div className={styles.accordionTitleText}> 
          {language === "EN" ? item.title.EN : item.title.PT} 
          { activeItem === item.activeItemName 
            ?
              <MinusIcon className={styles.accordionTitleIcon} />
            :
              <PlusIcon className={styles.accordionTitleIcon} />
          }
        </div> 
        <Image className={styles.accordionTitleImage} src={item.imageUrl} alt={item.imageAlt} width={0} height={0}/>
      </AccordionTrigger>
      <AccordionContent className={styles.accordionContent}>
        { language === "EN" ? item.textContent.EN : item.textContent.PT } 
      </AccordionContent>
    </AccordionItem>
      ))
    }
    {/* <AccordionItem onClick={()=> handleClick("Brazil")} className={styles.accordionItem} value="item-1">
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
    </AccordionItem> */}

  </Accordion>
};

export { ServicesAccordion };