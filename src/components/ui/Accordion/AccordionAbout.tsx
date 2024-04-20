"use client";

import styles from './styles/AccordionAbout.module.scss';
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

type AccordionAboutProps = {
  handleClick: any,
  activeItem: string,
  aboutData: any,
}

const accordionItems = (data: any) => [
  {
    title: { en: "Films", pt: "Filmes" },
    content: { en: data.films_text_en, pt: data.films_text_pt }
  },
  {
    title: { en: "Music", pt: "Música" },
    content: { en: data.music_text_en, pt: data.music_text_pt }
  },
  {
    title: { en: "Curating", pt: "Curadoria" },
    content: { en: data.curating_text_en, pt: data.curating_text_pt }
  },
  {
    title: { en: "Accounting", pt: "Contabilidade" },
    content: { en: data.accounting_text_en, pt: data.accounting_text_pt }
  }
];

const AccordionAbout = ({ handleClick, activeItem, aboutData }: AccordionAboutProps) => {
  const { language } = useLanguageContext();

  return (
    <Accordion type="single" collapsible>
      {accordionItems(aboutData).map((item: any, index: any) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className={`
            ${styles.accordionItem}
            ${index === 0 ? styles.accordionItemFirst : ""}
            ${![0, accordionItems({}).length - 1].includes(index) ? styles.accordionItemMid : ""}
          `}
        >
          <ModifiedAccordionTrigger
            onClick={() => handleClick(item.title.en)}
            className={`${styles.accordionTitle} ${activeItem === item.title.en ? styles.activeItem : ""}`}
          >
            {item.title[language]}
            {activeItem === item.title.en ? (
              <MinusIcon className={styles.accordionTitleIconOpen} />
            ) : (
              <PlusIcon className={styles.accordionTitleIcon} />
            )}
          </ModifiedAccordionTrigger>
          <AccordionContent className={styles.accordionContent}>
            <span className={styles.categoryText} dangerouslySetInnerHTML={{ __html: item.content[language] }} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export { AccordionAbout };
