'use client';

import styles from './styles/NavigationBar.module.scss'
import { useState} from 'react';
import NavigationModal from './NavigationModal';
import NavigationButtons from './NavigationButtons';
import LanguageSwitch from './LanguageSwitch';

interface NavigationBarlProps {
    setLanguage: React.Dispatch<React.SetStateAction<"EN" | "PT">>;
}

export default function NavigationBar({setLanguage}:NavigationBarlProps){

    const [modalOpen, setModalOpen] = useState<boolean>(false);

    function closeModal(){
        setModalOpen(false)
    }

    return <>
        <section id={styles.buttonContainer}>
            <NavigationButtons closeModal={closeModal}/>
            <LanguageSwitch setLanguage = {setLanguage}/>
        </section>
        <button onClick={() => setModalOpen(!modalOpen)} className={styles.modalMenuButton} > menu </button>
        {modalOpen && (
                <NavigationModal 
                    isOpen={modalOpen}
                    closeModal={closeModal}
                    setLanguage={setLanguage}
                />
            )}
    </>
}