'use client';

import Link from 'next/link';
import styles from './styles/NavigationBar.module.scss'
import { usePathname } from 'next/navigation';

export default function NavigationBar(){

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

    return (<>
        {navButtonArray.map((item) => (
            <Link
            href={item.href}
            key={item.pageName}
            className={`${styles.navButton} ${getPathname === item.href ? styles.activeButton : ''}`}
            >
                {item.pageName}
            </Link>
        ))}
    </>
    ) 
}