"use client";

import styles from "./page.module.scss";
import { useLanguageContext } from "@/context/LanguageContext";
import { useState, useEffect } from "react";
import TitleBanner from "@/components/TitleBanner/TitleBanner";
import Masonry from "@/components/Masonry/Masonry";
import Tabs from "@/components/Tabs/Tabs";
import { getProjectsDataJson, processCategories } from "@/lib/processProjectsData";
import { addLangParam } from "@/lib/utils";

import { ComboboxDemo } from "@/components/ui/ComboBox/ComboBox"

export default function Projects() {
  type currentFilterState = {
    category: string
  }

  const { language } = useLanguageContext();
  const [currentFilter, setCurrentFilter] = useState<currentFilterState>({ category: language === "en" ? "all" : "todos" });
  const [projectsData, setProjectsData] = useState<any>(null);
  const [categories, setCategories] = useState<any>(null);
  const [screenSize, setScreenSize] = useState<string>('large'); // Default to large

  // Add lang=pt to url if not present
  useEffect(() => addLangParam(language), [language]);

  useEffect(() => {
    const fetchData = async () => {
      const projects = await getProjectsDataJson();
      console.log(projects);
      setProjectsData(projects);
      setCategories(processCategories(projects, language));
    };
    fetchData();
  }, []);

  // Refresh categories if language changes
  useEffect(() => {
    if (projectsData) {
      setCategories(processCategories(projectsData, language));
      setCurrentFilter({ category: language === "en" ? "all" : "todos" });
    }
  }, [language, projectsData]);

  useEffect(() => {
    const checkScreenSize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 700) {
        setScreenSize('small');
      } else if (screenWidth > 700 && screenWidth <= 1169) {
        setScreenSize('medium');
      } else {
        setScreenSize('large');
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <>
      <TitleBanner title={language === "en" ? "projects" : "projetos"} />
      {screenSize !== 'small' && categories && <Tabs categories={categories} currentFilter={currentFilter} setCurrentFilter={setCurrentFilter} />}
      {screenSize === 'small' && categories && <ComboboxDemo categories={categories} currentFilter={currentFilter} setCurrentFilter={setCurrentFilter} />}
      <main className={styles.main}>
        {projectsData && <Masonry data={projectsData} filter={currentFilter} />}
      </main>
    </>
  )
}
