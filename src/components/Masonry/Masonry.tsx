import { useLanguageContext } from "@/context/LanguageContext";
import MasonryItem from "./MasonryItem";
import styles from "./styles/Masonry.module.scss";
import { useState, useEffect } from 'react';

type MasonryProps = {
  data: any,
  filter: any
}

export default function Masonry({ data, filter }: MasonryProps) {
  const { language } = useLanguageContext();
  const [resolvedData, setResolvedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await data;
        setResolvedData(result);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.gridContainer}>
      {resolvedData.map((item: any, index: any) => {
        const categories = item[`categories_${language}`];
        const currentCategory = Array.isArray(categories) && categories.length > 0 ? categories.map(c => c.toLowerCase()) : [""];
        const all = language === "en" ? "all" : "todos";
        return filter.category && filter.category !== all && !currentCategory.includes(filter.category.toLowerCase()) ? null : (
          <MasonryItem item={item} index={index} key={index} />
        );
      })}
    </div>
  );
}