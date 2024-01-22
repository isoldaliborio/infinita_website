'use client';

import React, { useEffect } from 'react';
import styles from './styles/NavigationModal.module.scss'
import ReactPortal from './ReactPortal';
import Link from 'next/link';
import { usePathname } from "next/navigation";

interface NavigationModalProps {
    isOpen: boolean;
    handleClose: () => void;
    navModalItems:{
        pageName:string,
        href:string
    }[]
}

export default function NavigationModal({isOpen, handleClose, navModalItems}: NavigationModalProps){

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
                <button id={styles.closeButton} onClick={handleClose}> Close </button>
                <section id={styles.navButtonContainer}>
                    {navModalItems.map((item) => (
                        <Link 
                            onClick={handleClose}
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