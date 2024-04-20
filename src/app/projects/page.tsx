"use client";

import styles from "./page.module.scss";
import { useLanguageContext } from "@/context/LanguageContext";
import { useState, useEffect } from "react";
import TitleBanner from "@/components/TitleBanner/TitleBanner";
import Masonry from "@/components/Masonry/Masonry";
import Tabs from "@/components/Tabs/Tabs";
import { getProjectsDataJson, processCategories } from "@/lib/processProjectsData";
import { addLangParam } from "@/lib/utils";

export default function Projects() {
  type currentFilterState = {
    category: string
  }

  const { language } = useLanguageContext();
  const [currentFilter, setCurrentFilter] = useState<currentFilterState>({ category: "all" });
  const [projectsData, setProjectsData] = useState<any>(null);
  const [categories, setCategories] = useState<any>(null);

  // Add lang=pt to url if not present
  useEffect(() => addLangParam(language), [language]);

  useEffect(() => {
    const fetchData = async () => {
      const projects = await getProjectsDataJson();
      setProjectsData(projects);
      setCategories(processCategories(projects));
    };
    fetchData();
  }, []);

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