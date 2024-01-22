import styles from "./styles/Carousel.module.scss"
import Buttons from "@/components/Carousel/buttons"
export default function Carousel(){
    return (
        <section id={styles.Carousel}>
            <Buttons/>
            <div className={styles.imageContainer}></div>
        </section>
    )
}