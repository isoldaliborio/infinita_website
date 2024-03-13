"use client";

import styles from "./page.module.scss";
import { LanguageContext } from "@/context/LanguageContext";
import { useContext } from "react";
import TitleBanner from "@/components/TitleBanner/TitleBanner";

export default function Services() {

  let language = useContext(LanguageContext);

  return (
    <>
      <TitleBanner title='Services' />
      <main className={styles.main}>
        <section className={styles.servicesText}>
        Infinita Productions is a production company based in London, UK and Salvador, Brazil. We aim to support projects in both countries, encouraging co-productions and stimulating a cultural dialogue. infinita is also committed to creating original content.
Our action areas are Films, Music, Curating and Accounting.
We can bring together a Brazilian dream team of professional filmmakers for your British production in Brazil and vice-versa
We work with highly respected international producers in both a servicing and co-producing capacity while remaining dedicated to fostering Brazilian and British talents. (meet our team)
Infinita also strives to take an eco sustainable approach to all of its productions and donates a portion of its profits to social causes. By investing in Infinita you're also supporting the environment.
We work with a team of experienced professionals to develop and deliver best results according to our clients* needs. Whatever your requirements are
- TV, feature and short films, music videos, corporate and art videos or internet films. Infinita can support you from screenwriting to post-production.
We'd love to hear about your projects and discuss how infinita can help! (get in touch link)
Infinita also has its own original audiovisual project under development, the feature film London Eye, a co-production between Brazil/UK directed by Tiago Di Mauro.
        </section>
        <section className={styles.imageBox}>
          placeholder image
        </section>
      </main>
    </>
  )
}