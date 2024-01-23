"use client";

import styles from "./styles/NavigationBar.module.scss"
import { useState} from "react";
import Image from "next/Image";
import NavigationModal from "./NavigationModal";
import NavigationButtons from "./NavigationButtons";
import LanguageSwitch from "./LanguageSwitch";
import { LanguageContextType } from "../Context/LanguageContext";
import menuIcon from "../../../public/icons/hamburger_menu_icon.svg";

interface NavigationBarlProps {
    setLanguage: React.Dispatch<React.SetStateAction<LanguageContextType>>;
}

export default function NavigationBar({setLanguage}:NavigationBarlProps){

    const [modalOpen, setModalOpen] = useState<boolean>(false);

    function closeModal(){
        setModalOpen(false)
    }

    return <>
        <section id={styles.buttonContainer}>
            <NavigationButtons closeModal={closeModal}/>
            <LanguageSwitch setLanguage = {setLanguage}/>
        </section>
        <Image 
            className={styles.modalMenuButton} 
            src={menuIcon} 
            alt='hamburger menu button' 
            onClick={() => setModalOpen(!modalOpen)} 
        />
        {modalOpen && (
                <NavigationModal 
                    isOpen={modalOpen}
                    closeModal={closeModal}
                    setLanguage={setLanguage}
                />
            )}
    </>
}