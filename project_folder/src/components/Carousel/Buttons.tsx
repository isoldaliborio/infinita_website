import styles from "./styles/Buttons.module.scss"


export default function Buttons() {
    return (
        <section className={styles.button_block}>
            <div className={styles.button} id={styles.button1}> 01 </div>
            <div className={styles.button} id={styles.button2}> 02 </div>
            <div className={styles.button} id={styles.button3}> 03 </div>
            <div className={styles.button} id={styles.button4}> 04 </div>
        </section>
    )
}