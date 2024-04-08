import MasonryItem from "./MasonryItem";
import styles from "./styles/Masonry.module.scss";
import { useState, useEffect } from 'react';

type MasonryProps = {
  data: any,
  filter: any
}

export default function Masonry({ data, filter }: MasonryProps) {
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
        const currentCategory = Array.isArray(item.categories) && item.categories.length > 0 ? item.categories[0].toLowerCase() : ""
        return filter.category !== 'all' && filter.category.toLowerCase() !== currentCategory ? null : (
          <MasonryItem item={item} index={index} key={index} />
        );
      })}
    </div>
  );
}