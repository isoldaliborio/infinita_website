import styles from "./Tabs.module.scss";

export default function Tabs({ categories, currentFilter, setCurrentFilter }: any) {

  function handleClick(button: any) {
    setCurrentFilter((prevFilter: any) => ({
      category: prevFilter.category === button ? "all" : button
    }));
  };

  return (
    <section className={styles.tabs}>
      {categories.map((item: any, index: any) => (
        <div
          key={index}
          className={`${styles.button} ${currentFilter.category === item ? styles.activeButton : ""}`}
          onClick={() => handleClick(item)}
        >
          {item}
        </div>
      ))}
    </section>
  );
}
