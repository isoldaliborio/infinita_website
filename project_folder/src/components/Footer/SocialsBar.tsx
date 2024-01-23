import styles from './styles/SocialsBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVimeoV, faLinkedin, faXTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function SocialsBar(){
    return (
        <div className={styles.container}>
            <FontAwesomeIcon icon={faVimeoV} className={styles.icon} id={styles.vimeo}/>
            <FontAwesomeIcon icon={faLinkedin} className={styles.icon}/>
            <FontAwesomeIcon icon={faXTwitter} className={styles.icon}/>
            <FontAwesomeIcon icon={faFacebookF}className={styles.icon}/>
            <FontAwesomeIcon icon={faInstagram} className={styles.icon}/> 
        </div>
    )
}
