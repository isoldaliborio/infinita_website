"use client";

import styles from "./page.module.scss";
import { LanguageContext } from "@/context/LanguageContext";
import { useState, useContext, useEffect } from "react";
import TitleBanner from "@/components/TitleBanner/TitleBanner";
import Masonry from "@/components/Masonry/Masonry";
import Tabs from "@/components/Tabs/Tabs";
import { getProjectsDataJson, processCategories } from "@/lib/processProjectsData";

export default function Projects() {

  type currentFilterState = {
    category: string
  }

  const [currentFilter, setCurrentFilter] = useState<currentFilterState>({ category: "all" })
  const [projectsData, setProjectsData] = useState<any>(null)
  const [categories, setCategories] = useState<any>(null)

  useEffect(() => {
    const fetchData = async () => {
      const projects = await getProjectsDataJson();
      setProjectsData(projects);
      setCategories(processCategories(projects));
    };
    fetchData();
  }, []);

  let language = useContext(LanguageContext);

  return (
    <>
      <TitleBanner title={language === "en" ? "projects" : "projetos"} />
      {categories && <Tabs categories={categories} currentFilter={currentFilter} setCurrentFilter={setCurrentFilter} />}
      <main className={styles.main}>
        {projectsData && <Masonry data={projectsData} filter={currentFilter} />}
      </main>
    </>
  )
}