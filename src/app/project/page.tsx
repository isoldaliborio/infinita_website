import styles from "./page.module.scss"
import Link from "next/link";
import { getProjectsDataJson } from "@/lib/processProjectsData";



export default function Page({ params }: { params: { slug: string, project: any } }) {

    //pseudo code
    // res = fetch (wordpress/projects/${param.sslug})
    // data = response from fetch

    // if(data)
    // return Page 
    // div data.title
    // image src=data.imgUrl
    // embed video link=data.videoLink
    // carousel of images (shadcn?) data.carouselArray.map
    // back to projects Link

    const projects = getProjectsDataJson();
    console.log(projects)

    return <div>
        <div>
            -----Single Project: {params.slug}
            -----Id: {params.project}
        </div>
        <Link href="/projects"> ----- Back to Projects</Link>
    </div>
}