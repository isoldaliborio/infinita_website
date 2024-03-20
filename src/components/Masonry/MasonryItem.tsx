import styles from "./styles/MasonryItem.module.scss";
import Image from "next/image";

type MasonryItemProps = {
    index: any,
    item: any,
}

export default function MasonryItem({index, item}: MasonryItemProps){

    const url = "https://images.unsplash.com/photo"

    return <div key={index} className={`${styles.masonryItem} ${item.size === "2" ? styles.horizontalPoster : ""} ${item.size === "3" ? styles.verticalPoster : ""}`}> 
    <Image 
      className={styles.image} 
      src={(`${url}${item.imageUrl}`)} 
      alt={item.title} 
      fill
    />  
    <section className={styles.imageOverlay}>
      <div className={styles.overlayTitle}> {item.title} </div>
      <section className={styles.overlayBottomText}>
        <div> {item.category} </div>
        <div className={styles.overlayLine}/>
        <div> 2020 </div>
      </section>
      <div className={styles.gradient}/>
    </section>
  </div>
}