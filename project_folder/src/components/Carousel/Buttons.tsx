import styles from "./styles/Buttons.module.scss"
import { useState } from "react";

export default function Buttons({data, setItem, activeItem}){

    // Replace with context
    const language = "en";

    return (
        <div className={styles.button_block}>
            {/* Iterate through the "featured" array and create Icon components */}
            {data.featured.map((item, index) => (
                <div key={index} className={`${styles.button} ${activeItem.path == item.path ? styles.active_button : ""}`} onClick={() => setItem(item)}>
                    <div>0{index + 1}</div>
                    <span>{item[language].title} - {item[language].category}</span>
                </div>
            ))}
        </div>
    );
}
