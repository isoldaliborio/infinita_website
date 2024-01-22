import styles from './styles/SocialsBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVimeoV, faLinkedin, faXTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function SocialsBar(){
    return (
        <div className={styles.container}>
            <FontAwesomeIcon icon={faVimeoV} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faXTwitter} />
            <FontAwesomeIcon icon={faFacebookF} size="sm" />
            <FontAwesomeIcon icon={faInstagram} /> 
        </div>
    )
}
