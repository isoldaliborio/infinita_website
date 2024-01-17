'use client';

import Link from 'next/link';
import styles from './styles/NavigationBar.module.css'

export default function NavigationBar(){

    return <>
        <Link
        href='/about'
        className={styles.navButton}
        >
            about
        </Link>
    </>

}