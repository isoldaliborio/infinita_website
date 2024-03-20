"use client";

import styles from "./page.module.scss";
import { LanguageContext } from "@/context/LanguageContext";
import { useState, useContext } from "react";
import TitleBanner from "@/components/TitleBanner/TitleBanner";
import Masonry from "@/components/Masonry/Masonry";
import Tabs from "@/components/Tabs/Tabs";
import { dummyData } from "../../lib/dummyProjectData";


export default function Projects() {

  type currentFilterState ={
    category:string
  }

  const [currentFilter, setCurrentFilter] = useState<currentFilterState>({category:"all"})

  let language = useContext(LanguageContext);

  const projectArray = dummyData.projects;
  const categoryArray = dummyData.categories;
  
  return (
    <>
      <TitleBanner title="Projects" />
      <Tabs categories={categoryArray} currentFilter={currentFilter} setCurrentFilter={setCurrentFilter}/>
      <main className={styles.main}>
        <Masonry data={projectArray} filter={currentFilter}/>
      </main>
    </>
  )
}