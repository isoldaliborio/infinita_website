"use client";

import { createContext } from "react";

// import processHomePageData from "@/utils/processHomePageData"

export type CarouselDataContextType = undefined |null | {
    category_names: string[]
    img_id: number
    img_url: string
    title: string
    work_id: number
}[]

export const CarouselDataContext = createContext(null);
