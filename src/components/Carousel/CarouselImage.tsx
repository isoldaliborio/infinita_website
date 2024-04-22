import { AnimatePresence, motion } from "framer-motion";
import styles from "./styles/Carousel.module.scss";
import Image from "next/image";

export default function CarouselImage({activeItem, isVisible}: any){

  return <AnimatePresence>
    { isVisible && (
      <motion.div
        initial={{opacity:1}} 
        animate={{opacity:0.999}}
        exit={{opacity:1}}
        transition={{duration:3}} 
        className={styles.imageContainer} 
      >
        <Image
          src={activeItem.img_url || "/images/blank.png"}
          alt="img"
          style={{ objectFit: "cover" }}
          fill
          priority={true}
        />
      </motion.div>
    )}
  </AnimatePresence>
}