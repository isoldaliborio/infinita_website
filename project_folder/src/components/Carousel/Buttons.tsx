import styles from "./styles/Buttons.module.scss"
import { motion } from "framer-motion";

export default function Buttons({data, setItem, activeItem}: {data: any, setItem: any, activeItem: any}){

    const handleClick = (obj: any) => {
        setItem(obj);
    }

    const variants = {
        closed: { width:"25px",},
        open: { width:"fit-content", },
      }
      

    return (
        <div className={styles.button_block}>
            {/* Iterate through the "featured" array and create Icon components */}
            {data.map((item: any, index: any) => (
                <motion.div 
                    animate={activeItem.img_url == item.img_url ? "open" : "closed"}
                    variants={variants}
                    transition={{duration:0.6}}
                    key={index} 
                    className={`${styles.button} ${activeItem.img_url == item.img_url ? styles.active_button : ""}`}
                    onClick={() => handleClick(item)}
                >
                    <div id={styles.index}>0{index + 1}</div>
                    <span id={styles.title}>{item.title}</span> 
                    <span id={styles.category}> - {item.category_names[0]}</span>
                </motion.div>
            ))}
        </div>
    );
}
