import styles from "./styles/MasonryItem.module.scss";
import Image from "next/image";
import Link from "next/link";

type MasonryItemProps = {
    item: any,
}

export default function MasonryItem({item}: MasonryItemProps){

    const url = "https://images.unsplash.com/photo"

    return <div className={`${styles.masonryItem} ${item.size === "2" ? styles.horizontalPoster : ""} ${item.size === "3" ? styles.verticalPoster : ""}`}> 
    <Image 
      className={styles.image} 
      src={(`${url}${item.imageUrl}`)} 
      alt={item.title} 
      fill
    />  
    <Link href={`/projects/${item.slug}`} className={styles.imageOverlay}>
      <div className={styles.overlayTitle}> {item.title} </div>
      <section className={styles.overlayBottomText}>
        <div> {item.category} </div>
        <div className={styles.overlayLine}/>
        <div> {item.date} </div>
      </section>
      <div className={styles.gradient}/>
    </Link>
  </div>
}