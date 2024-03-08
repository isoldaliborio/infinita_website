import { motion } from "framer-motion";
import styles from "./styles/Buttons.module.scss";
import { useEffect, useState, useRef } from "react";


export default function Buttons({ data, setItem, activeItem, isLoading, setIsVisible }: { data: any; setItem: any; activeItem: any; isLoading: boolean; setIsVisible: any }) {

  const [isCycling, setIsCycling] = useState(true);
  const buttonRef = useRef<HTMLDivElement>(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Function to check if screen is small
  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth < 701);
  };

  //Checking screen size
  useEffect(() => {
    checkScreenSize();

    // Event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  // Click handler
  const handleClick = (item: any, index: number) => {
    setIsVisible(false); //triggers image fade-out

    if (!isLoading) {
      item.index = index;
      setItem(item, index);
    }
    setIsCycling(false);
  };

  // Animation config
  const buttonVariants = {
    closed: { width: '0px', }, //this value is overriden in the scss file.
    open: { width: "fit-content" },
  }

  const transition = {
    ease: 'easeOut',
    duration: 0.4
  }

  // Image cycling
  useEffect(() => {
    // Initial value
    var imageCycleIndex = 0;
    // Updates the imageCycleIndex to match the active button, to resume cycling from that button
    if (activeItem.index && imageCycleIndex !== activeItem.index){
      imageCycleIndex = activeItem.index;
    }
    // Cycles through carousel images
    const cycleInterval = setInterval(() => {
      if (!isLoading && isCycling) {
        setIsVisible(false); //triggers image fade-out
        if (imageCycleIndex >= 3) {
          imageCycleIndex = 0;
        } else {
          imageCycleIndex++;
        }
        data[imageCycleIndex].index = imageCycleIndex;
        setItem(data[imageCycleIndex], imageCycleIndex)
      } else if (!isCycling){
      }
    }, 7500)
    return () => clearInterval(cycleInterval);
  }, [isCycling]);

  // Reset cycling after click
  useEffect(() => {
    const cycleInterval = setInterval(() => {
      if (!isLoading && !isCycling) {
        setIsCycling(true);
        return () => clearInterval(cycleInterval);
      }
    }, 10000)
    return () => clearInterval(cycleInterval);
  }, [isCycling]);

  const maxChar = 20;

  return (
    <div className={styles.button_block}>
      {data.map((item: any, index: any) => (
        <motion.div
          animate={activeItem.title === item.title && item.title ? "open" : "closed"}
          variants={buttonVariants}
          transition={transition}
          key={index}
          ref={buttonRef}
          className={`${styles.button} ${activeItem.img_url == item.img_url && activeItem.title ? styles.active_button : ""}`}
          onClick={() => handleClick(item, index)}
        >
          <div className={styles.index}>0{index + 1}</div>
          <span
            dangerouslySetInnerHTML={{
              __html: item.title && item.title.length > maxChar && isSmallScreen
              ? item.title.replace(new RegExp(`^(.{0,${Math.floor(item.title.length / 2)}}\\s+)`, 'g'), "$1<br>")
                : item.title
            }}
            className={`${styles.title} ${item.title && item.title.length > maxChar ? styles.long_title : ""}`}
          ></span>
          <span className={styles.category}> {item.category_names[0]}</span>
        </motion.div>
      ))}
    </div>
  );
};
