
import styles from "./styles/TitleBanner.module.scss"
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";


export default function TitleBanner() {
    const [showComponent, setShowComponent] = useState(true);
    const pathname = usePathname();

    useEffect(() => {
        if (pathname === "/") {
            setShowComponent(false);
            }
        }, [pathname]
    );

    return (
        <> {showComponent && (
            <div className={styles.titleBanner}>
                <p className={styles.title}> {pathname.slice(1).toUpperCase()}</p>
            </div>
                )}
        </>
    );  
} 
