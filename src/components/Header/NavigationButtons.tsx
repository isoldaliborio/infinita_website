"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./styles/NavigationButtons.module.scss";
import { useLanguageContext } from "@/context/LanguageContext";
import { removeTrailingSlash } from "@/lib/utils";

type NavigationButtonProps = {
    closeModal: () => void;
};

export default function NavigationButtons({ closeModal }: NavigationButtonProps) {
    const { language } = useLanguageContext();

    const getPathname = removeTrailingSlash(usePathname());

    const navButtonArray = [
        { en: "home", pt: "home", href: "/" },
        { en: "about", pt: "sobre", href: "/about" },
        { en: "projects", pt: "projetos", href: "/projects" },
        { en: "services", pt: "serviços", href: "/services" },
        { en: "contact", pt: "contato", href: "/contact" },
    ];

    return (
        <section id={styles.navButtonContainer}>
            {navButtonArray.map((item) => (
                <Link
                    onClick={closeModal}
                    href={item.href}
                    key={item.en}
                    className={`${styles.navButton} ${checkActiveUrl(item, getPathname) ? styles.activeButton : ""}`}
                >
                    {checkActiveUrl(item, getPathname) ? (
                        <div className={`${styles.line} ${styles.top}`} />
                    ) : null}
                    {item[language]}
                    {checkActiveUrl(item, getPathname) ? (
                        <div className={`${styles.line} ${styles.bottom}`} />
                    ) : null}
                </Link>
            ))}
        </section>
    );
};

const checkActiveUrl = (item: any, getPathname: any) => {
    // home
    if (getPathname === "" && item.en === "home") {
        return true;
    }
    // inner project
    if (getPathname === "/project" && item.en === "projects") {
        return true;
    }
    // all others
    return getPathname.includes(item.en)
}
