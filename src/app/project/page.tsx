import styles from "./page.module.scss"
import Link from "next/link";
import TitleBanner from "@/components/TitleBanner/TitleBanner";


export default function Project() {

    return <>
        <TitleBanner title='Project' />
        <div className={styles.allContent}>
            <div className={styles.mainContet}>
                <section className={styles.imageBox} >Banner    
                </section>
                <section className={styles.rightContent}>
                    <section className={styles.titleTop}>
                        <p>Project Name</p>
                        <p>Category</p>
                    </section>
                    <section className={styles.titleBottom}>
                        <p>Country</p>
                        <p>year</p>
                    </section>
                </section> 
            </div>
            <Link href="/projects" > ----- Back to Projects</Link>
        </div>
    </>
}