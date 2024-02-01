
import styles from './LoadingScreen.module.scss';
import Image from 'next/Image';
import InfinitaLogo from "../../../public/images/infinita-logo.png";

export default function LoadingScreen(){
    return <section id={styles.loadingScreen}>
        <Image alt='infinitaLogo' src={InfinitaLogo}/>
        <p id={styles.loadingText}>LOADING...</p>
    </section>
}