'use client';

import Link from 'next/link';
import styles from './styles/NavigationBar.module.css'
import { usePathname } from 'next/navigation';

export default function NavigationBar(){

    const getPathname = usePathname();

    // const navButtonArray = [
    //     {
    //         pageName: 'home',
    //         href: '/'
    //     },
    //     {
    //         pageName: 'about',
    //         href: '/about'
    //     },
    //     {
    //         pageName: 'projects',
    //         href: '/projects'
    //     },
    //     {
    //         pageName: 'services',
    //         href: '/services'
    //     },
    //     {
    //         pageName: 'contact',
    //         href: '/contact'
    //     },
    // ]

    return <>
        <Link
        href='/'
        className={`${styles.navButton} ${getPathname === '/' ? styles.activeButton : ''}`}
        >
            home
        </Link>
        <Link
        href='/about'
        className={`${styles.navButton} ${getPathname === '/about' ? styles.activeButton : ''}`}
        >
            about
        </Link>
        <Link
        href='/projects'
        className={`${styles.navButton} ${getPathname === '/projects' ? styles.activeButton : ''}`}
        >
            projects
        </Link>
        <Link
        href='/services'
        className={`${styles.navButton} ${getPathname === '/services' ? styles.activeButton : ''}`}
        >
            services
        </Link>
        <Link
        href='/contact'
        className={`${styles.navButton} ${getPathname === '/contact' ? styles.activeButton : ''}`}
        >
            contact
        </Link>
</>
}