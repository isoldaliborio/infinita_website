import styles from "./page.module.scss"
import Link from "next/link";
import Image from "next/image";
import VideoEmbed from "../../components/VideoEmbed/VideoEmbed";
import TitleBanner from "@/components/TitleBanner/TitleBanner";
import img_project from "../../../public/img_project.jpg";



export default function Project() {

    return <>
        <TitleBanner title='Project' />
        <div className={styles.allContent}>
            <div className={styles.mainContet}>
              
                <Image 
                    id={styles.imageBox} 
                    src={img_project}
                    alt="Banner"
                    priority
                />
                
                <section className={styles.rightContent}>
                    <section className={styles.titleTop}>
                        <p className={styles.projectName}>London Eye</p>
                        <p className={styles.category}>Films</p>
                    </section>
                    <section className={styles.titleBottom}>
                        <p>United Kingdom</p>
                        <p>2020</p>
                    </section>
                    <section className={styles.descripition}>London Eye its a co-production between Brazil/UK and the first feature film developed by Infinita Productions in a partnership with Brazilian Production Company Truque. The project written by Director Tiago Di Mauro was granted a development grant by ANCINE ( Brazil Film Agency) BRDE/FSA – PRODAV 05/2016.
                    </section>
                    <section className={styles.videoEmbed}>
                        <VideoEmbed type="vimeo" videoId="886624349" />
                    </section>
                    <section className={styles.imageGalery}>

                    </section>
                </section> 
            </div>
            <Link href="/projects" className={styles.back}> ← Back to Projects</Link>
        </div>
    </>
}