import SocialsBar from "./SocialsBar"
import styles from "./styles/Footer.module.scss"

export default function Footer() {
    return (
        <footer id={styles.footer}>
            <section>
                All rights reserver © 2024 Inifita Productions
            </section>
            <SocialsBar/>
        </footer>
    )
}