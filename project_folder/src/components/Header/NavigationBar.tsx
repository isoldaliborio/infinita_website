'use client';

//TODO:refactor so navButtons are a separate reusable component for both navbar and nav modal

import Link from 'next/link';
import styles from './styles/NavigationBar.module.scss'
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import NavigationModal from './NavigationModal';

export default function NavigationBar(){

    const [modalOpen, setModalOpen] = useState<boolean>(false);

    function closeModal(){
        setModalOpen(false)
    }

    const getPathname = usePathname();

    const navButtonArray = [
        {
            pageName: 'home',
            href: '/'
        },
        {
            pageName: 'about',
            href: '/about'
        },
        {
            pageName: 'projects',
            href: '/projects'
        },
        {
            pageName: 'services',
            href: '/services'
        },
        {
            pageName: 'contact',
            href: '/contact'
        },
    ]

    return <>
        {navButtonArray.map((item) => (
            <Link
            onClick={closeModal}
            href={item.href}
            key={item.pageName}
            className={`${styles.navButton} ${getPathname === item.href ? styles.activeButton : ''}`}
            >
                {item.pageName}
            </Link>
        ))}
        <button onClick={() => setModalOpen(!modalOpen)} className={styles.modalMenuButton} > menu </button>
        {modalOpen && (
                <NavigationModal 
                    isOpen={modalOpen}
                    closeModal={closeModal}
                    navModalItems={navButtonArray}
                />
            )}
    </>
}