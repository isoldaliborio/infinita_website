'use client';

//TODO: add language switch to this modal menu
//TODO: refactor for navButtons component


import React, { useEffect } from 'react';
import styles from './styles/NavigationModal.module.scss'
import ReactPortal from './ReactPortal';
import Link from 'next/link';
import { usePathname } from "next/navigation";

interface NavigationModalProps {
    isOpen: boolean;
    closeModal: () => void;
    navModalItems:{
        pageName:string,
        href:string
    }[]
}

export default function NavigationModal({isOpen, closeModal, navModalItems}: NavigationModalProps){

    const pathname = usePathname();

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
                <button id={styles.closeButton} onClick={closeModal}> Close </button>
                <section id={styles.navButtonContainer}>
                    {navModalItems.map((item) => (
                        <Link 
                            onClick={closeModal}
                            key={item.pageName}
                            className={`${
                                pathname === item.href 
                                    ? "underline"
                                    : ""
                                } px-2 py-6`} 
                            href={item.href}
                        >
                            {item.pageName}
                        </Link>
                    ))}
                </section>
            </div>
        </ReactPortal>
    )
    
    
    
   
}