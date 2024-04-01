"use client";

import Link from "next/link";
import { useContext } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import styles from "./styles/NavigationButtons.module.scss";
import { LanguageContext } from "../../context/LanguageContext";

type NavigationButtonProps = {
    closeModal: () => void;
};

export default function NavigationButtons({ closeModal }: NavigationButtonProps) {

    const language = useContext(LanguageContext);
    const getPathname = removeTrailingSlash(usePathname());

    const navButtonArray = [
        {
            en: "HOME",
            pt: "HOME",
            href: "/"
        },
        {
            en: "ABOUT",
            pt: "SOBRE",
            href: "/about/"
        },
        {
            en: "PROJECTS",
            pt: "PROJETOS",
            href: "/projects/"
        },
        {
            en: "SERVICES",
            pt: "SERVIÇOS",
            href: "/services/"
        },
        {
            en: "CONTACT",
            pt: "CONTATO",
            href: "/contact/"
        },
    ];

    return <section id={styles.navButtonContainer}>
        {navButtonArray.map((item) => (
            <Link
                onClick={closeModal}
                href={item.href}
                key={item.en}
                className={`${styles.navButton} ${getPathname === item.href ? styles.activeButton : ""}`}
            >
                {getPathname === item.href ? (
                    <div
                        className={`${styles.line} ${styles.top}`}
                    // layoutId="topLine"
                    />
                ) : null}
                {item[language]}
                {getPathname === item.href ? (
                    <div
                        className={`${styles.line} ${styles.bottom}`}
                    // layoutId="bottomLine"
                    />
                ) : null}
            </Link>
        ))}
    </section>
};

function removeTrailingSlash(str: string) {
    // This regex matches a trailing slash and replaces it with an empty string
    return str.replace(/\/$/, '');
}