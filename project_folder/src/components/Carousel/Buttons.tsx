import { motion } from "framer-motion";
import styles from "./styles/Buttons.module.scss";
import { useEffect, useState } from "react";

export default function Buttons({ data, setItem, activeItem, isLoading, setIsLoading, setIsVisible }: { data: any; setItem: any; activeItem: any; isLoading: boolean; setIsLoading:any; setIsVisible: any }) {

  const [isCycling, setIsCycling] = useState(true);

  const handleClick = (item: any, index: number) => {
    if (!isLoading) {
      item.index = index;
      setItem(item, index);
    }
    //temporarily disables carousel cycling
    if (setIsCycling){
      setIsCycling(false);
      console.log('set to false')
    }
  };
  
  const variants = {
    closed: { width:"40px"},
    open: { width:"fit-content", maxWidth:"fit-content", },
  }

  var imageCycleIndex = 0;

  //cycle through images
  useEffect(() => {
    const cycleInterval = setInterval(() => {
      if(!isLoading && isCycling){
        setIsVisible(false); //triggers image fade-out
        console.log(isCycling);
        if(imageCycleIndex >= 3){
          imageCycleIndex = 0;
        } else{
          imageCycleIndex++;
        }
        data[imageCycleIndex].index = imageCycleIndex
        setItem(data[imageCycleIndex], imageCycleIndex)
        setIsLoading(true); //this fixes the buttons glitching as the active item will not be 'open' before the data has been fetched, but has caused a bug where the button of index 0 doesnt render
      }
    }, 5000)
      return () => clearInterval(cycleInterval);
  }, [isCycling]);

  //reset cycling after user has clicked on a button
  useEffect(() => {
    const cycleInterval = setInterval(() => {
      console.log('checking to see if cycling...')
      if(!isLoading && !isCycling){
        console.log('is not cycling, resetting cycle...')
        setIsCycling(true);
        return () => clearInterval(cycleInterval);
      } else{
        console.log('is cycling, doing nothing...')
      }
    }, 15000)
      return () => clearInterval(cycleInterval);
  }, [isCycling]);
      
    return (
        <div className={styles.button_block}>
            {/* Iterate through the "featured" array and create Icon components */}
            {data.map((item: any, index: any) => (
                <motion.div 
                    animate={activeItem.title == item.title && !isLoading ? "open" : "closed"}
                    variants={variants}
                    transition={{duration:0.6}}
                    key={index} 
                    className={`${styles.button} ${activeItem.img_url == item.img_url && !isLoading && activeItem.title ? styles.active_button : ""}`}
                    onClick={() => handleClick(item, index)}
                >
                    <div id={styles.index}>0{index + 1}</div>
                    <span id={styles.title}>{item.title}</span> 

                    <span id={styles.category}> {item.category_names[0]}</span>
                </motion.div>
            ))}
        </div>
    );
};
