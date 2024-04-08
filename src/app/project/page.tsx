"use client";

import styles from "./page.module.scss"
import Link from "next/link";
import Image from "next/image";
import VideoEmbed from "../../components/VideoEmbed/VideoEmbed";
import TitleBanner from "@/components/TitleBanner/TitleBanner";
import { LanguageContext } from '@/context/LanguageContext'
import { getProjectsDataJson, parseImageGallery } from "@/lib/processProjectsData";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState, useContext } from "react";
import ImageGallery from "@/components/ImageGallery/ImageGallery";

export default function Project() {

    const language = useContext(LanguageContext);
    const router = useRouter();

    const [projectData, setProjectData] = useState<any>();
    const [galleryImages, setGalleryImages] = useState<any>();

    const searchParams = useSearchParams();
    const search: any = searchParams.get("p")

    useEffect(() => {
        const fetchData = async () => {
            if (!search) {
                router.push("/projects");
            }
            const data = await getProjectsDataJson(search)
            setProjectData(data[0]);
            console.log(data[0]);

            const images = parseImageGallery(data);
            setGalleryImages(images);
            
        };
        fetchData();
    }, []);

    return <>
        <TitleBanner title='Project' />
        {projectData && <div className={styles.allContent}>
            <div className={styles.mainContet}>
                <div className={styles.imageBox}>
                    {projectData.featured_image && (
                        <Image
                            className={styles.image}
                            width="0" //THIS IS OVERRIDDEN IN SCSS FILE
                            height="0"
                            src={projectData.featured_image}
                            alt=""
                            priority
                        />
                    )}
                </div>

                <section className={styles.rightContent}>
                    <section className={styles.titleTop}>
                        <p className={styles.projectName} dangerouslySetInnerHTML={{ __html: projectData[`title_${language}`].toUpperCase() }} />
                        <p className={styles.category}> {projectData.categories[0].toUpperCase()}</p>
                    </section>
                    <section className={styles.titleBottom}>
                        <p dangerouslySetInnerHTML={{ __html: projectData[`country_${language}`].toUpperCase() }} />
                        <p>{projectData.year}</p>

                    </section>
                    <section className={styles.descripition} dangerouslySetInnerHTML={{ __html: projectData[`description_${language}`] }}>
                    </section>

                    {projectData.video_en && (
                        <section className={styles.videoEmbed}>
                            <VideoEmbed type="vimeo" videoUrl={projectData.video_en} />
                        </section>
                    )}
                    {galleryImages && (
                        <section className={styles.imageGalleryContainer}>
                            <ImageGallery galleryImages={galleryImages} />
                        </section>
                    )}
                </section>
            </div>
            <Link href="/projects" className={styles.back}> ← Back to Projects</Link>
        </div>}
    </>
}