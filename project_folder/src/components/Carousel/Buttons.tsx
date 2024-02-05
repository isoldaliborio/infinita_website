import { motion } from "framer-motion";
import styles from "./styles/Buttons.module.scss";
import { useEffect, useState } from "react";

export default function Buttons({ data, setItem, activeItem, isLoading }: { data: any; setItem: any; activeItem: any; isLoading: boolean }) {

    var imageCycleIndex = 0;

    const handleClick = (item: any, index: number) => {
    if (!isLoading) {
      item.index = index;
      setItem(item, index);
    }
  };

    const variants = {
        closed: { width:"25px",},
        open: { width:"fit-content", },
      }

      useEffect(() => {
        //   let imageCycleIndex = 0
          const interval = setInterval(() => {
              if(!isLoading){
                  if(imageCycleIndex >= 3){
                    imageCycleIndex = 0;
                  } else{
                    imageCycleIndex++;
                  }
                  console.log(imageCycleIndex);
                  data[imageCycleIndex].index = imageCycleIndex
                  setItem(data[imageCycleIndex], imageCycleIndex)
              }
          }, 5000)
          console.log(data)
          return () => clearInterval(interval);
      }, []);
      

    return (
        <div className={styles.button_block}>
            {/* Iterate through the "featured" array and create Icon components */}
            {data.map((item: any, index: any) => (
                <motion.div 
                    animate={activeItem.img_url == item.img_url && !isLoading ? "open" : "closed"}
                    variants={variants}
                    transition={{duration:0.6}}
                    key={index} 
                    className={`${styles.button} ${activeItem.img_url == item.img_url && !isLoading ? styles.active_button : ""}`}
                    onClick={() => handleClick(item, index)}
                >
                    <div id={styles.index}>0{index + 1}</div>
                    <span id={styles.title}>{item.title}</span> 
                    <span id={styles.category}> - {item.category_names[0]}</span>
                </motion.div>
            ))}
        </div>
    );
};
