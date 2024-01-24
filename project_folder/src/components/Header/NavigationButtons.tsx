"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./styles/NavigationButtons.module.scss"
import { motion } from "framer-motion"

interface NavigationButtonProps {
    closeModal: () => void;
}

export default function NavigationButtons({closeModal}:NavigationButtonProps){

    const getPathname = usePathname();

    const navButtonArray = [
        {
            pageName: "HOME",
            href: "/"
        },
        {
            pageName: "ABOUT",
            href: "/about"
        },
        {
            pageName: "PROJECTS",
            href: "/projects"
        },
        {
            pageName: "SERVICES",
            href: "/services"
        },
        {
            pageName: "CONTACT",
            href: "/contact"
        },
    ]

    return <motion.section layout id={styles.navButtonContainer}>
        {navButtonArray.map((item) => (
            <Link
                onClick={closeModal}
                href={item.href}
                key={item.pageName}
                className={`${styles.navButton} ${getPathname === item.href ? styles.activeButton : ""}`}
            >
                {getPathname === item.href ? (
                    <motion.div
                        className={`${styles.line} ${styles.top}`}
                        layoutId="topLine"
                    />
                    ) : null}
                {item.pageName}
                {getPathname === item.href ? (
                    <motion.div
                        className={`${styles.line} ${styles.bottom}`}
                        layoutId="bottomLine"
                    />
                    ) : null}
            </Link>
        ))}
    </motion.section>

}