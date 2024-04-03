'use client';

import styles from "./page.module.scss"
import Link from "next/link";
import Image from "next/image";
import VideoEmbed from "../../components/VideoEmbed/VideoEmbed";
import TitleBanner from "@/components/TitleBanner/TitleBanner";
import img_project from "../../../public/img_project.jpg";
import { LanguageContext } from '@/context/LanguageContext'
import { useContext } from 'react';

//backend integration
import { getProjectsDataJson } from "@/lib/processProjectsData";
import { useSearchParams } from "next/navigation";
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
    let language = useContext(LanguageContext);

    const searchParams = useSearchParams();

    const search:any = searchParams.get('p')

    const [projectData, setProjectData] = useState<any>();

    
    useEffect(() => {

        
        const fetchData = async () => {
            const data = await getProjectsDataJson(search)
            console.log(data);
            setProjectData(data[0]);
            console.log(projectData);
        
        };
        fetchData();
      }, []);

    return <>
        <TitleBanner title='Project' />
        {projectData &&< div className={styles.allContent}>
            <div className={styles.mainContet}>
              
                <Image 
                    id={styles.imageBox} 
                    src={img_project}
                    alt="Banner"
                    priority
                />
                
                <section className={styles.rightContent}>
                    <section className={styles.titleTop}>
                        <p className={styles.projectName} dangerouslySetInnerHTML={{ __html: projectData[`title_${language}`] }}/>
                        <p className={styles.category}> {projectData.categories[0]}</p>
                    </section>
                    <section className={styles.titleBottom}>
                        <p dangerouslySetInnerHTML={{ __html: projectData[`country_${language}`] }}/>
                        <p>{projectData.year}</p>

                    </section>
                    <section className={styles.descripition} dangerouslySetInnerHTML={{ __html: projectData[`description_${language}`] }}>
                    </section>
                    <section className={styles.videoEmbed}>
                        <VideoEmbed type="vimeo" videoId= {projectData.video_id} />
                    </section>
                    <section className={styles.imageGalery}>
                        <Carousel>
                            <CarouselContent>
                                <CarouselItem className="basis-1/3">
                                    <Image alt="" src={image1}/>
                                </CarouselItem>
                                <CarouselItem className="basis-1/3">
                                    <Image alt="" src={image2}/>
                                </CarouselItem>
                                <CarouselItem className="basis-1/3">
                                    <Image alt="" src={image3}/>
                                </CarouselItem>
                                <CarouselItem className="basis-1/3">
                                    <Image alt="" src={image4}/>
                                </CarouselItem>
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