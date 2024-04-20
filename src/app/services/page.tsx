"use client";

import styles from "./page.module.scss";
import { useLanguageContext } from "@/context/LanguageContext";
import { useState, useEffect } from "react";
import { getServicesPageDataJson } from '@/lib/processServicesData';
import TitleBanner from "@/components/TitleBanner/TitleBanner";
import LoadingScreen from "@/components/Loading/LoadingScreen";
import { ServicesAccordion } from "@/components/ui/Accordion/AccordionServices";

export default function Services() {
  const { language } = useLanguageContext();
  const [servicesData, setServicesData] = useState<any>();
  const [activeItem, setActiveItem] = useState<any>("");

  // Fetch data from API endpoint
  useEffect(() => {
    getServicesPageDataJson().then((data) => {
      setServicesData(data);
    });
  }, []);

  // Handling click of accordion and setting active item for icon changes
  function handleClick(item: string) {
    setActiveItem(item === activeItem ? "" : item);
  }

  return (
    <>
      <TitleBanner title={language === "en" ? "services" : "serviços"} />
      <main className={styles.main}>
        {!servicesData ? <LoadingScreen /> : (
          <>
            <section className={styles.servicesText}>
              {/* {servicesData[`service_main_text_${language}`]} */}
              Infinita Productions is a production company based in London, UK and Salvador, Brazil. We aim to support projects in both countries, encouraging co-productions and stimulating a cultural dialogue. infinita is also committed to creating original content. <br />
              Our action areas are Films, Music, Curating and Accounting. <br />
              We can bring together a Brazilian dream team of professional filmmakers for your British production in Brazil and vice-versa. <br />
              We work with highly respected international producers in both a servicing and co-producing capacity while remaining dedicated to fostering Brazilian and British talents. (meet our team)
              Infinita also strives to take an eco sustainable aoproach to all of its productions and donates a portion of its profits to social causes. By investing in Infinita you`re also supporting the environment.
              We work with a team of experienced professionals to develop and deliver best results according to our clients needs.
            </section>
            <section className={styles.accordionContainer}>
              <ServicesAccordion
                handleClick={handleClick}
                activeItem={activeItem}
                servicesData={servicesData}
              />
            </section>
          </>
        )}
      </main>
    </>
  );
}
