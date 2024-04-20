import styles from './styles/AccordionServices.module.scss';
import Image from 'next/image';
import { useLanguageContext } from "@/context/LanguageContext";
import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/Accordion/accordion";
import { ModifiedAccordionTrigger } from './AccordionTriggerModified';
import { PlusIcon } from "@radix-ui/react-icons";
import { MinusIcon } from "@radix-ui/react-icons";

type ServicesAccordionProps = {
  handleClick: any,
  activeItem: string,
  servicesData: any,
}

const ServicesAccordion = ({ handleClick, activeItem, servicesData }: ServicesAccordionProps) => {

  const { language } = useLanguageContext();

  const accordionArray = [
    {
      activeItemName: "Brazil",
      value: "item-1",
      title: {
        en: "BRAZIL",
        pt: "BRASIL"
      },
      imageUrl: "https://infinitaproducoes.com/wordpress/wp-content/uploads/2024/03/img_Services_Brazil.jpg",
      imageAlt: "the city of Rio de Janeiro",
      textContent: {
        en: servicesData.brazil_service_text_en,
        pt: servicesData.brazil_service_text_pt
      },
      isMiddleItem: false
    },

    {
      activeItemName: "UK",
      value: "item-2",
      title: {
        en: "UNITED KINGDOM",
        pt: "REINO UNIDO"
      },
      imageUrl: "https://infinitaproducoes.com/wordpress/wp-content/uploads/2024/03/img_Services_UK.jpg",
      imageAlt: "the Houses of Parliament and Big Ben in London",
      textContent: {
        en: servicesData.uk_service_text_en,
        pt: servicesData.uk_service_text_pt
      },
      isMiddleItem: true
    },

    {
      activeItemName: "Europe",
      value: "item-3",
      title: {
        en: "EUROPE",
        pt: "EUROPA"
      },
      imageUrl: "https://infinitaproducoes.com/wordpress/wp-content/uploads/2024/03/img_Services_Europe.jpg",
      imageAlt: "a city in Europe",
      textContent: {
        en: servicesData.europe_service_text_en,
        pt: servicesData.europe_service_text_pt
      },
      isMiddleItem: false
    },
  ];

  return <Accordion type="single" collapsible>
    {
      accordionArray.map((item, index) => (
        <AccordionItem key={index} onClick={() => handleClick(item.activeItemName)} className={`${styles.accordionItem} ${item.isMiddleItem ? styles.middleItem : ""}`} value={item.value}>
          <ModifiedAccordionTrigger className={styles.accordionTitle}>
            <div className={styles.accordionTitleText}>
              {item.title[language as keyof typeof item.title]}
              {activeItem === item.activeItemName
                ? <MinusIcon className={styles.accordionTitleIcon} />
                : <PlusIcon className={styles.accordionTitleIcon} />
              }
            </div>
            <Image className={styles.accordionTitleImage} src={item.imageUrl} alt={item.imageAlt} width={0} height={0} />
          </ModifiedAccordionTrigger>
          <AccordionContent className={styles.accordionContent}>
            {item.textContent[language as keyof typeof item.textContent]}
          </AccordionContent>
        </AccordionItem>
      ))
    }
  </Accordion>
};

export { ServicesAccordion };
