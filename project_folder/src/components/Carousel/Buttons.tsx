import { motion } from "framer-motion";
import styles from "./styles/Buttons.module.scss";
import { useEffect, useState, useRef } from "react";


export default function Buttons({ data, setItem, activeItem, isLoading, setIsVisible }: { data: any; setItem: any; activeItem: any; isLoading: boolean; setIsVisible: any }) {

  const [isCycling, setIsCycling] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [buttonWidth, setButtonWidth] = useState<number | null>(null);
  const buttonRef = useRef<HTMLDivElement>(null);



  // Detect screen width
  // useEffect(() => {
  //   const updateScreenWidth = () => setScreenWidth(window.innerWidth);
  //   updateScreenWidth();
  //   window.addEventListener('resize', updateScreenWidth);
  //   return () => window.removeEventListener('resize', updateScreenWidth);
  // }, []);

  // // Detect button width
  // useEffect(() => {
  //   const updateButtonWidth = () => {
  //     if (buttonRef.current) {
  //       const currentWidth = buttonRef.current.offsetWidth;
  //       setButtonWidth(currentWidth);
  //     }
  //   };
  //   updateButtonWidth();
  //   window.addEventListener('resize', updateButtonWidth);
  //   return () => window.removeEventListener('resize', updateButtonWidth);
  // }, []);

  // Click handler
  const handleClick = (item: any, index: number) => {
    if (!isLoading) {
      item.index = index;
      setItem(item, index);
    }
    setIsCycling(false);
    // console.log('stopping cycle')
    // console.log(isCycling)
  };

  // Animation config
  // const variants: { closed: any; open: any } = {
  //   closed: {
  //     width: buttonWidth !== null ? buttonWidth : undefined,
  //     // Desktop-specific config (i.e. free height on mobile)
  //     ...(screenWidth > 700 && { height: buttonWidth !== null ? buttonWidth : undefined }),
  //   },
  //   open: {
  //     width: "fit-content",
  //     // Desktop-specific config
  //     ...(screenWidth > 700 && { height: buttonWidth !== null ? buttonWidth : undefined, maxWidth: "fit-content" }),
  //   },
  // };

  // const transition = {
  //   duration: 0.6
  // }

  // Image cycling
  useEffect(() => {
    //initial value
    var imageCycleIndex = 0;

    //updates the imageCycleIndex to match the active button, to resume cycling from that button
    if (activeItem.index && imageCycleIndex !== activeItem.index){
      // console.log('image cycle index and active item index are not aligned, updating...')
      imageCycleIndex = activeItem.index;
    }
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

  return (
    <div className={styles.button_block}>
      {data.map((item: any, index: any) => (
        <div
          // animate={activeItem.title == item.title && !isLoading ? "open" : "closed"}
          // variants={variants}
          // transition={transition}
          key={index}
          ref={buttonRef}
          className={`${styles.button} ${activeItem.img_url == item.img_url && !isLoading && activeItem.title ? styles.active_button : ""}`}
          onClick={() => handleClick(item, index)}
        >
          <div className={styles.index}>0{index + 1}</div>
          <span className={styles.title}>{item.title}</span>
          <span className={styles.category}> {item.category_names[0]}</span>
        </div>
      ))}
    </div>
  );
};
