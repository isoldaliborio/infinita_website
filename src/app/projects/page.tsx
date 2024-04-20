  "use client";

  import styles from "./page.module.scss";
  import { LanguageContext } from "@/context/LanguageContext";
  import { useState, useContext, useEffect } from "react";
  import TitleBanner from "@/components/TitleBanner/TitleBanner";
  import Masonry from "@/components/Masonry/Masonry";
  import Tabs from "@/components/Tabs/Tabs";
  import { getProjectsDataJson, processCategories } from "@/lib/processProjectsData";

  import {ComboboxDemo} from "@/components/ui/ComboBox/ComboBox"

  export default function Projects() {

    type currentFilterState = {
      category: string
    }

    const [currentFilter, setCurrentFilter] = useState<currentFilterState>({ category: "all" })
    const [projectsData, setProjectsData] = useState<any>(null)
    const [categories, setCategories] = useState<any>(null)
    const [screenSize, setScreenSize] = useState<string>('large'); // Default to large

    useEffect(() => {
      const fetchData = async () => {
        const projects = await getProjectsDataJson();
        setProjectsData(projects);
        setCategories(processCategories(projects));
      };
      fetchData();
      
    }, []);

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

    let language = useContext(LanguageContext);

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