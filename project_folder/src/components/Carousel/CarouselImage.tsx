import { AnimatePresence, motion } from "framer-motion";
import styles from "./styles/Carousel.module.scss";
import Image from "next/Image";

export default function CarouselImage({activeItem, isVisible}:any){
  return <AnimatePresence>
    { isVisible && (
      <motion.div
        initial={{opacity:0}} 
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{duration:0.5}} 
        className={styles.imageContainer} 
        id={activeItem}
      >
        <Image
          id={styles.imageSpace}
          src={activeItem?.img_url || "/images/blank.png"}
          alt="img"
          style={{ objectFit: "cover" }}
          fill
          priority
        />
      </motion.div>
    )}
  </AnimatePresence>
}