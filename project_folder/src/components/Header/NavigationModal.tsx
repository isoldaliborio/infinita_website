"use client";

import React, { useEffect } from "react";
import styles from "./styles/NavigationModal.module.scss"
import Image from "next/Image";
import ReactPortal from "./ReactPortal";
import NavigationButtons from "./NavigationButtons";
import LanguageSwitch from "./LanguageSwitch";
import { LanguageContextType } from "../Context/LanguageContext";
import { motion } from "framer-motion";
import closeIcon from "../../../public/icons/close_icon.png";

interface NavigationModalProps {
    isOpen: boolean;
    closeModal: () => void;
    setLanguage: React.Dispatch<React.SetStateAction<LanguageContextType>>;
};

export default function NavigationModal({isOpen, closeModal, setLanguage}: NavigationModalProps){

    function disableScrollOnModalLoad(){
        document.body.style.overflow = "hidden";
        return (): void => {
            document.body.style.overflow = "unset";
        };
    };

    useEffect(() => {
        disableScrollOnModalLoad();
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <ReactPortal wrapperId="react-portal-modal-container" >
            <motion.div 
                id={styles.modalMenuBackground}
                initial="initialState"
                animate="animateState"
                transition={{
                    duration: 0.3,
                    delay: 0.2
                }}
                variants={{
                    initialState: {
                        opacity:0,
                        y:20
                    },
                    animateState: {
                        opacity: 100,
                        y:0
                    }
                }}
            >
                <section id={styles.closeButtonContainer}>
                    <Image 
                        src={closeIcon}
                        alt="close button"
                        id={styles.closeButton} 
                        onClick={closeModal}
                        priority
                    />
                </section>
                <NavigationButtons closeModal={closeModal}/>
                <LanguageSwitch setLanguage = {setLanguage} />
            </motion.div>
        </ReactPortal>
    );
};