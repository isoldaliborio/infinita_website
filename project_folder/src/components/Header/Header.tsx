"use client"

import styles from "./styles/Header.module.scss"
import  Image from "next/image";
import Link from "next/link";
import { LanguageContextType } from "../Context/LanguageContext";
import NavigationBar from "./NavigationBar";

interface HeaderProps{
    setLanguage: React.Dispatch<React.SetStateAction<LanguageContextType>>;
}
 
export default function Header({setLanguage}:HeaderProps){

    return <div id={styles.header}>
        <Link href="/">
            <Image 
                id={styles.infinitaLogo} 
                src="/images/infinita-logo.png" 
                alt="infinita logo" 
                width="200" 
                height="200"
            />
        </Link>
        <NavigationBar setLanguage = {setLanguage}/>
    </div>

}