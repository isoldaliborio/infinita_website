"use client";

import React, { useEffect } from "react";
import styles from "./styles/NavigationModal.module.scss"
import Image from "Next/Image";
import ReactPortal from "./ReactPortal";
import NavigationButtons from "./NavigationButtons";
import LanguageSwitch from "./LanguageSwitch";
import { LanguageContextType } from "../Context/LanguageContext";
// import closeIcon from "../../../public/icons/close_icon.png"

interface NavigationModalProps {
    isOpen: boolean;
    closeModal: () => void;
    setLanguage: React.Dispatch<React.SetStateAction<LanguageContextType>>;
}

export default function NavigationModal({isOpen, closeModal, setLanguage}: NavigationModalProps){

    //disable scroll on modal load
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return (): void => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen])

    if (!isOpen) return null;

    return (
        <ReactPortal wrapperId="react-portal-modal-container" >
            <div id={styles.modalMenuBackground}>
                <Image 
                    src={'/icons/close_icon.png'}
                    alt='close button'
                    width='50'
                    height='50'
                    id={styles.closeButton} 
                    onClick={closeModal}
                    priority
                />
                <NavigationButtons closeModal={closeModal}/>
                <LanguageSwitch setLanguage = {setLanguage} />
            </div>
        </ReactPortal>
    )   
}