'use client';

import styles from "./page.module.scss"
import Link from "next/link";
import Image from "next/image";
import VideoEmbed from "../../components/VideoEmbed/VideoEmbed";
import TitleBanner from "@/components/TitleBanner/TitleBanner";
import img_project from "../../../public/img_project.jpg";

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

    const searchParams = useSearchParams();

    const search:any = searchParams.get('p')

    
    useEffect(() => {

        
        const fetchData = async () => {
          const project = await getProjectsDataJson(search);
          console.log(project)
        };
        fetchData();
      }, []);

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
        </div>
    </>
}