"use client";

import React, { useEffect } from "react";
import styles from "./styles/NavigationModal.module.scss"
import Image from "next/image";
import ReactPortal from "./ReactPortal";
import NavigationButtons from "./NavigationButtons";
import LanguageSwitch from "./LanguageSwitch";
import { LanguageContextType } from "../../context/LanguageContext";
import { motion } from "framer-motion";
import closeIcon from "../../../public/icons/close_icon.png";
import Div100vh from 'react-div-100vh';

interface NavigationModalProps {
    isOpen: boolean;
    closeModal: () => void;
    setLanguage: React.Dispatch<React.SetStateAction<LanguageContextType>>;
};

export default function NavigationModal({isOpen, closeModal, setLanguage}: NavigationModalProps){

    if (!isOpen) return null;

    return (
        <ReactPortal wrapperId="react-portal-modal-container" >
            <Div100vh>
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
                        },
                        animateState: {
                            opacity: 100,
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
            </Div100vh>
        </ReactPortal>
    );
};