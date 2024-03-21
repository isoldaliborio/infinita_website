import styles from "./page.module.scss"
import Link from "next/link";

//FIXME: this page throws an error on render unless next.config.mjs is changed to remove/comment out- output:'exports'. 
//I believe it has something to do with static generation of all paths vs dynamically generated routes,
//need Edu to discuss what best way forward is

//error message: Error: Page "/projects/[slug]/page" is missing exported function "generateStaticParams()", which is required with "output: export" config.
//    at DevServer.renderToResponseWithComponentsImpl

export default function Page({ params }: { params: { slug: string } }) {

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


    return <div>
        <div>
            -----Single Project: {params.slug}
        </div>
        <Link href="/projects"> ----- Back to Projects</Link>
    </div>
}