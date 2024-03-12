
import styles from "./styles/TitleBanner.module.scss"
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";


export default function TitleBanner() {
    const [showComponent, setShowComponent] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        let isNotHome = (pathname !== "/")
        setShowComponent(isNotHome);
    }, [pathname]
    );

    return (
        <>
            {showComponent && (
                <div className={styles.titleBanner}>
                    <p className={styles.title}> {pathname.slice(1).toUpperCase()}</p>
                </div>
            )}
        </>
    );
}
