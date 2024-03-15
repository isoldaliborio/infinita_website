"use client";

import styles from "./page.module.scss";
import { LanguageContext } from "@/context/LanguageContext";
import { useContext } from "react";
import TitleBanner from "@/components/TitleBanner/TitleBanner";
import Image from 'next/image';

export default function Projects() {

  let language = useContext(LanguageContext);

  return (
    <>
      <TitleBanner title={language === "EN" ? "PROJECTS" : "PROJETOS"} />
      <main className={styles.main}>
        <div className={styles.gridContainer}>
          <div className={`${styles.firstChild} ${styles.gridChild}`}>
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
          </div>
        </div>
      </main>
    </>
  )
}