import styles from "./styles/Buttons.module.scss"
import { useState } from "react";

export default function Buttons({data, setItem, activeItem}){

    // Replace with context
    const language = "en";

    const handleClick = (obj) => {
        setItem(obj);
    }

    return (
        <div className={styles.button_block}>
            {/* Iterate through the "featured" array and create Icon components */}
            {data.map((item, index) => (
                <div key={index} className={`${styles.button} ${activeItem.img_url == item.img_url ? styles.active_button : ""}`} onClick={() => handleClick(item)}>
                    <div id={styles.index}>0{index + 1}</div>
                    <span id={styles.title}>{item.title}</span> 
                    <span id={styles.category}> - {item.category_names[0]}</span>
                </div>
            ))}
        </div>
    );
}
