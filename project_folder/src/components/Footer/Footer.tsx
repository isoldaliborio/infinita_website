import SBIcons from "./SocialsBar"
import styles from "./styles/Footer.module.scss"

export default function Footer() {
    return (
        <footer id={styles.footer}>
            <section className={styles.paragraph}>
                All rights reserved © 2024 Inifita Productions
            </section>
            <SBIcons/>
        </footer>
    )
}