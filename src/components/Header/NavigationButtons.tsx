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

export default function NavigationButtons({closeModal}:NavigationButtonProps){

    const language = useContext(LanguageContext);

    const getPathname = usePathname();

    const navButtonArray = [
        {
            ENpageName: "HOME",
            PTpageName: "HOME",
            href: "/"
        },
        {
            ENpageName: "ABOUT",
            PTpageName: "SOBRE",
            href: "/about"
        },
        {
            ENpageName: "PROJECTS",
            PTpageName: "PROJETOS",
            href: "/projects"
        },
        {
            ENpageName: "SERVICES",
            PTpageName: "SERVIÇOS",
            href: "/services"
        },
        {
            ENpageName: "CONTACT",
            PTpageName: "CONTATO",
            href: "/contact"
        },
    ];

    return <section id={styles.navButtonContainer}>
        {navButtonArray.map((item) => (
            <Link
                onClick={closeModal}
                href={item.href}
                key={item.ENpageName}
                className={`${styles.navButton} ${getPathname === item.href || getPathname === "/temp" ? styles.activeButton : ""}`}
            >
                {getPathname === item.href || getPathname === "/temp" ? ( //whilst homepage is deployed as temp
                    <div
                        className={`${styles.line} ${styles.top}`}
                        // layoutId="topLine"
                    />
                    ) : null}
                {language === "EN" ? item.ENpageName : item.PTpageName}
                {getPathname === item.href || getPathname === "/temp" ? ( //whilst homepage is deployed as temp
                    <div
                        className={`${styles.line} ${styles.bottom}`}
                        // layoutId="bottomLine"
                    />
                    ) : null}
            </Link>
        ))}
    </section>
};