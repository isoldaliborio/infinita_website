import styles from "./styles/Buttons.module.scss";

export default function Buttons({ data, setItem, activeItem, isLoading }: { data: any; setItem: any; activeItem: any; isLoading: boolean }) {
  const handleClick = (item: any, index: number) => {
    if (!isLoading) {
      item.index = index;
      setItem(item, index);
    }
  };

  return (
    <div className={styles.button_block}>
      {data.map((item: any, index: any) => (
        <div
          key={index}
          className={`${styles.button} ${activeItem.img_url === item.img_url && !isLoading ? styles.active_button : ""}`}
          onClick={() => handleClick(item, index)}
        >
          <div id={styles.index}>0{index + 1}</div>
          <span id={styles.title}>{item.title}</span>
          <span id={styles.category}> - {item.category_names[0]}</span>
        </div>
      ))}
    </div>
  );
}
