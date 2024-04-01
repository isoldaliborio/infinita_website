import styles from "./styles/MasonryItem.module.scss";
import { LanguageContext } from "@/context/LanguageContext";
import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

type MasonryItemProps = {
  index: any,
  item: any,
}

export default function MasonryItem({ index, item }: MasonryItemProps) {

  let language = useContext(LanguageContext);

  return item.image_in_list &&
    <div key={index} className={`${styles.masonryItem} ${item.image_size === "horizontal" ? styles.horizontalPoster : ""} ${item.image_size === "vertical" ? styles.verticalPoster : ""}`}>
      <Image
        className={styles.image}
        src={item.image_in_list[0]}
        alt={item[`title_${language}`] || ""}
        fill
      />
      <Link href={`/projects/${item.slug}`} className={styles.imageOverlay}>
        <div className={styles.overlayTitle}> {item[`title_${language}`] || ""} </div>
        <section className={styles.overlayBottomText}>
          <div>{Array.isArray(item.categories) && item.categories.length > 0 ? item.categories[0].toLowerCase() : ""}</div>
          <div className={styles.overlayLine} />
          <div> {item.year} </div>
        </section>
        <div className={styles.gradient} />
      </Link>
    </div>
}