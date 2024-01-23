'use client';

//TODO: add language switch to this modal menu
//TODO: refactor for navButtons component


import React, { useEffect } from 'react';
import styles from './styles/NavigationModal.module.scss'
import ReactPortal from './ReactPortal';
import NavigationButtons from './NavigationButtons';
import LanguageSwitch from './LanguageSwitch';
import { LanguageContextType } from '../Context/LanguageContext';

interface NavigationModalProps {
    isOpen: boolean;
    closeModal: () => void;
    setLanguage: React.Dispatch<React.SetStateAction<LanguageContextType>>;
}

export default function NavigationModal({isOpen, closeModal, setLanguage}: NavigationModalProps){

    //disable scroll on modal load
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return (): void => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen])

    if (!isOpen) return null;

    return (
        <ReactPortal wrapperId="react-portal-modal-container" >
            <div id={styles.modalMenuBackground}>
                <button id={styles.closeButton} onClick={closeModal}> X </button>
                <NavigationButtons closeModal={closeModal}/>
                <LanguageSwitch setLanguage = {setLanguage} />
            </div>
        </ReactPortal>
    )
    
    
    
   
}