import MasonryItem from "./MasonryItem";
import styles from "./styles/Masonry.module.scss";
import Image from "next/image";

type MasonryProps = {
    data: any,
    filter: any
}

export default function Masonry({data, filter}:MasonryProps){

    return <div className={styles.gridContainer}>
    {
      data.map((item:any, index:any) => {
        return filter.category !== "all" && filter.category !== item.category 
        ? null
        : <MasonryItem item={item} index={index}/>
      })
    }
  </div>
}