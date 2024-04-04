"use client";

import styles from "./page.module.scss"
import Link from "next/link";
import Image from "next/image";
import VideoEmbed from "../../components/VideoEmbed/VideoEmbed";
import TitleBanner from "@/components/TitleBanner/TitleBanner";
import { LanguageContext } from '@/context/LanguageContext'
import { useContext } from 'react';

import { getProjectsDataJson, parseImageGallery } from "@/lib/processProjectsData";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

//dummy image imports
import image1 from "../../../public/images_gallery/WINGS_Still 1.jpg";
import image2 from "../../../public/images_gallery/ddd_IMG_9797.jpeg";
import image3 from "../../../public/images_gallery/mms_squared.png";
import image4 from "../../../public/images_gallery/Arthur_Vieira.jpg";


import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/Carousel/carousel"


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

                    <section className={styles.imageGalery}>
                        <Carousel>
                            <CarouselContent>
                                {galleryImages && galleryImages.map((item: any, index: any) => (
                                    item["1536w"] && <CarouselItem className="basis-1/3" key={index}>
                                        <Image className={styles.galleryItem} alt="" src={item["1536w"]} width="0" height="0" />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </section>
                </section>
            </div>
            <Link href="/projects" className={styles.back}> ← Back to Projects</Link>
        </div>}
    </>
}