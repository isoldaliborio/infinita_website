import styles from "./Tabs.module.scss";

export default function Tabs({ categories, currentFilter, setCurrentFilter }: any) {

  function handleClick(categoryFilter: string) {
    setCurrentFilter({ category: categoryFilter });
  };

  return (
    <section className={styles.tabs}>
      {categories.map((item: any, index: any) => (
        <div
          key={index}
          className={`${styles.button} ${currentFilter.category === item ? styles.activeButton : ""} noselect`}
          onClick={() => handleClick(item)}
        >
          {item}
        </div>
      ))}
    </section>
  );
}
