
import styles from "./styles/TitleBanner.module.scss"


export default function TitleBanner({ title }: { title: string }) {
    return (
        <div className={styles.titleBanner}>
            <p className={styles.title}> {title.toUpperCase()}</p>
        </div>
    );
}
