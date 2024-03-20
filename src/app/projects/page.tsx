"use client";

import styles from "./page.module.scss";
import { LanguageContext } from "@/context/LanguageContext";
import { useContext } from "react";
import TitleBanner from "@/components/TitleBanner/TitleBanner";
import Image from 'next/image';

export default function Projects() {

  let language = useContext(LanguageContext);

  const imageArray = [
    {
      title: "1",
      size: "2"
    },
    {
      title: "2",
      size: "2"
    },
    {
      title: "3",
      size: "1"
    },
    {
      title: "4",
      size: "1"
    },
    {
      title: "5",
      size: "2"
    },
    {
      title: "6",
      size: "2"
    },
    {
      title: "7",
      size: "3"
    },
    {
      title: "8",
      size: "1"
    },
    {
      title: "9",
      size: "2"
    },
    {
      title: "10",
      size: "1"
    },
    {
      title: "11",
      size: "2"
    },
    {
      title: "12",
      size: "1"
    },
    {
      title: "13",
      size: "1"
    },
    {
      title: "14",
      size: "2"
    },
    {
      title: "15",
      size: "1"
    },
    {
      title: "16",
      size: "2"
    },
    {
      title: "17",
      size: "2"
    },
    {
      title: "18",
      size: "3"
    },
    {
      title: "19",
      size: "1"
    },
    {
      title: "20",
      size: "3"
    },
    {
      title: "21",
      size: "2"
    },
    {
      title: "22",
      size: "3"
    },
    {
      title: "23",
      size: "2"
    },
    {
      title: "24",
      size: "3"
    },
    {
      title: "25",
      size: "1"
    },
    {
      title: "26",
      size: "1"
    },
    {
      title: "27",
      size: "2"
    },
    {
      title: "28",
      size: "3"
    },
    {
      title: "29",
      size: "1"
    },
    {
      title: "30",
      size: "2"
    },
    {
      title: "31",
      size: "1"
    },
    {
      title: "32",
      size: "2"
    },
    {
      title: "33",
      size: "1"
    },
    {
      title: "34",
      size: "1"
    },
    {
      title: "35",
      size: "2"
    },
    {
      title: "36",
      size: "1"
    },
    {
      title: "37",
      size: "2"
    },
    {
      title: "38",
      size: "2"
    },
    {
      title: "39",
      size: "3"
    },
    {
      title: "40",
      size: "1"
    },
    {
      title: "41",
      size: "3"
    },
    {
      title: "42",
      size: "2"
    },
    {
      title: "43",
      size: "3"
    },
    {
      title: "44",
      size: "2"
    },
    {
      title: "45",
      size: "3"
    },
    {
      title: "46",
      size: "1"
    },
    {
      title: "47",
      size: "1"
    },
    {
      title: "48",
      size: "2"
    },
    {
      title: "49",
      size: "3"
    },
    {
      title: "50",
      size: "1"
    },
    {
      title: "51",
      size: "2"
    },
    {
      title: "52",
      size: "1"
    },
    {
      title: "53",
      size: "2"
    },
    {
      title: "54",
      size: "1"
    },
    {
      title: "55",
      size: "1"
    },
    {
      title: "56",
      size: "2"
    },
    {
      title: "57",
      size: "1"
    },
    {
      title: "58",
      size: "2"
    },
    {
      title: "59",
      size: "2"
    },
    {
      title: "60",
      size: "3"
    },
    {
      title: "61",
      size: "1"
    },
    {
      title: "62",
      size: "3"
    },
    {
      title: "63",
      size: "2"
    },
  ]

  return (
    <>
      <TitleBanner title={language === "EN" ? "PROJECTS" : "PROJETOS"} />
      <main className={styles.main}>
        <div className={styles.gridContainer}>
          {
            imageArray.map((item, index) => {
              return <div key={index} className={`${styles.gridChild} ${item.size === "2" ? styles.horizontalPoster : ""} ${item.size === "3" ? styles.verticalPoster : ""}`}> 
                {item.title}
              </div>
            })
          }



          {/* <div className={`${styles.firstChild} ${styles.gridChild}`}>
            1
            <Image className={styles.gridImage} src={"https://images.unsplash.com/photo-1710302112350-e14ceae0c385?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="unsplash image" height={100} width={100}/>
          </div>
          <div className={styles.gridChild}>
            2
            <Image className={styles.gridImage} src={"https://images.unsplash.com/photo-1710372165237-2a2ada353c15?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="unsplash image" height={100} width={100}/>
          </div>
          <div className={styles.gridChild}>
            3
            <Image className={styles.gridImage} src={"https://images.unsplash.com/photo-1710302112350-e14ceae0c385?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="unsplash image" height={100} width={100}/>
          </div>
          <div className={styles.gridChild}>
            4
            <Image className={styles.gridImage} src={"https://images.unsplash.com/photo-1707343848655-a196bfe88861?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="unsplash image" height={100} width={100}/>
          </div>
          <div className={styles.gridChild}>
            5
          </div>
          <div className={styles.gridChild}>
            6
          </div>
          <div className={styles.gridChild}>
            7
          </div>
          <div className={styles.eighthChild}>
            8
          </div>
          <div className={styles.gridChild}>
            9
          </div>
          <div className={styles.gridChild}>
            10
          </div>
          <div className={styles.gridChild}>
            11
          </div>
          <div className={styles.gridChild}>
            12
          </div>
          <div className={styles.gridChild}>
            13
          </div>
          <div className={styles.gridChild}>
            14
          </div>
          <div className={styles.fifteenthChild}>
            15
          </div>
          <div className={styles.gridChild}>
            16
          </div>
          <div className={styles.gridChild}>
            17
          </div>
          <div className={styles.gridChild}>
            18
          </div>
          <div className={styles.gridChild}>
            19
          </div>
          <div className={styles.gridChild}>
            20
          </div>
          <div className={styles.twentyFirstChild}>
            21
          </div> */}
        </div>
      </main>
    </>
  )
}