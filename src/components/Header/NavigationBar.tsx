"use client";

import styles from "./styles/NavigationBar.module.scss";
import { useState} from "react";
import Image from "next/image";
import NavigationModal from "./NavigationModal";
import NavigationButtons from "./NavigationButtons";
import LanguageSwitch from "./LanguageSwitch";
import { LanguageContextType } from "../../context/LanguageContext";
import menuIcon from "../../../public/icons/hamburger_menu_icon.svg";

type NavigationBarProps = {
    setLanguage: React.Dispatch<React.SetStateAction<LanguageContextType>>;
};

export default function NavigationBar({setLanguage}:NavigationBarProps){

    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

    function closeModal(){
        setModalIsOpen(false);
    };

    return <>
        <section id={styles.buttonContainer}>
            <NavigationButtons closeModal={closeModal}/>
            <LanguageSwitch setLanguage = {setLanguage}/>
        </section>
        <Image 
            className={styles.modalMenuButton} 
            src={menuIcon} 
            alt="hamburger menu button" 
            onClick={() => setModalIsOpen(!modalIsOpen)} 
        />
        {modalIsOpen && (
            <NavigationModal 
                isOpen={modalIsOpen}
                closeModal={closeModal}
                setLanguage={setLanguage}
            />
        )}
    </>
};