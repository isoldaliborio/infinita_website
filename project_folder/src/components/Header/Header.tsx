"use client";

import styles from "./styles/Header.module.scss";
import  Image from "next/image";
import Link from "next/link";
import { LanguageContextType } from "../../context/LanguageContext";
import NavigationBar from "./NavigationBar";
import InfinitaLogo from "../../../public/images/infinita-logo.png"

type HeaderProps = {
    setLanguage: React.Dispatch<React.SetStateAction<LanguageContextType>>;
};
 
export default function Header({setLanguage}:HeaderProps){

    return <div id={styles.header}>
        <Link href="/">
            <Image 
                id={styles.infinitaLogo} 
                src={InfinitaLogo} 
                alt="infinita logo"
            />
        </Link>
        <NavigationBar setLanguage = {setLanguage}/>
    </div>
};