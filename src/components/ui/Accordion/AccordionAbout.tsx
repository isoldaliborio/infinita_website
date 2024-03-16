'use client';

import styles from './styles/AccordionAbout.module.scss';
import Image from 'next/image';
import { LanguageContext } from "@/context/LanguageContext";

import { useContext } from "react";
import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/Accordion/accordion";
import { ModifiedAccordionTrigger } from './AccordionTriggerModified';
import { PlusIcon } from "@radix-ui/react-icons";
import { MinusIcon } from "@radix-ui/react-icons";

type AccordionAboutProps = {
  handleClick: any,
  activeItem: string,
  accordionItems: any,
  data: any,
}

const AccordionAbout = ({ handleClick, activeItem, accordionItems, data }: AccordionAboutProps) => {

  let language = useContext(LanguageContext);

  return <Accordion type="single" collapsible>
    {accordionItems(data).map((item: any, index: any) => (
      <AccordionItem
        className={`
        ${styles.accordionItem}
        ${index === 0 ? styles.accordionItemFirst : ""}
        ${![0, accordionItems({}).length - 1].includes(index) ? styles.accordionItemMid : ""}
      `}
        key={index}
        value={`item-${index}`}>
        <AccordionTrigger className={styles.accordionTitle}>{item.title[language]}</AccordionTrigger>
        <AccordionContent className={styles.accordionContent}>
          <span className={styles.categoryText} dangerouslySetInnerHTML={{ __html: item.content[language] }} />
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
};

export { AccordionAbout };