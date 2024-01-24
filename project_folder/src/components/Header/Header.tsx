"use client"

import styles from "./styles/Header.module.scss"
import Image from "next/Image";
import { LanguageContextType } from "../Context/LanguageContext";
import NavigationBar from "./NavigationBar";

interface HeaderProps{
    setLanguage: React.Dispatch<React.SetStateAction<LanguageContextType>>;
}
 
export default function Header({setLanguage}:HeaderProps){

    return <div id={styles.header}>
        <Image id={styles.infinitaLogo} src="/images/infinita-logo.png" alt="infinita logo" width="200" height="50"/>
        <NavigationBar setLanguage = {setLanguage}/>
    </div>

}