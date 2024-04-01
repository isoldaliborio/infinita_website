import styles from "./Tabs.module.scss";

export default function Tabs({ categories, currentFilter, setCurrentFilter }: any) {

  function handleClick(button: string) {
    setCurrentFilter({ category: button });
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
