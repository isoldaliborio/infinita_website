import { motion } from "framer-motion";
import styles from "./styles/Buttons.module.scss";
import { useEffect, useState, useRef } from "react";


export default function Buttons({ data, setItem, activeItem }: { data: any; setItem: any; activeItem: any; }) {

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth < 701);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleClick = (item: any, index: number) => {
    setItem(index);
  };

  // Animation config
  const buttonVariants = {
    closed: { width: '0px', }, // this value is overriden in the scss file.
    open: { width: "fit-content" },
  }

  const transition = {
    ease: 'easeOut',
    duration: 0.65
  }

  const maxChar = 20;

  return (
    <div className={styles.button_block}>
      {data.map((item: any, index: any) => (
        <motion.div
          animate={index === activeItem ? "open" : "closed"}
          variants={buttonVariants}
          transition={transition}
          key={index}
          ref={buttonRef}
          className={`${styles.button} ${index === activeItem ? styles.active_button : ""}`}
          onClick={() => handleClick(item, index)}
        >
          <div className={styles.index}>0{index + 1}</div>
          <span
            dangerouslySetInnerHTML={{
              __html: item.post_title && item.post_title.length > maxChar && isSmallScreen
                ? item.post_title.replace(new RegExp(`^(.{0,${Math.floor(item.post_title.length / 2)}}\\s+)`, 'g'), "$1<br>")
                : item.post_title
            }}
            className={`${styles.title} ${item.post_title && item.post_title.length > maxChar ? styles.long_title : ""}`}
          ></span>
          <span className={styles.category}> {item.category_names[0]}</span>
        </motion.div>
      ))}
    </div>
  );
};
