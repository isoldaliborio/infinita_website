
import styles from './LoadingScreen.module.scss';
import Image from 'next/image';
import InfinitaLogo from "../../../public/images/infinita-logo.png";

export default function LoadingScreen(){
    return <section id={styles.loadingScreen}>
        <Image id={styles.logo} alt='infinitaLogo' src={InfinitaLogo}/>
        <p id={styles.loadingText}>LOADING...</p>
    </section>
}