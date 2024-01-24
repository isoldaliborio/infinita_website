import React from 'react';
import styles from './styles/SocialsBar.module.scss';
import { faVimeoV, faLinkedin, faXTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Icon from './Icons';

// export default function SocialsBar(){
//     return (
//         <div className={styles.container}>
//             <FontAwesomeIcon icon={faVimeoV} className={styles.icon} id={styles.vimeo}/>
//             <FontAwesomeIcon icon={faLinkedin} className={styles.icon}/>
//             <FontAwesomeIcon icon={faXTwitter} className={styles.icon}/>
//             <FontAwesomeIcon icon={faFacebookF}className={styles.icon}/>
//             <FontAwesomeIcon icon={faInstagram} className={styles.icon} id={styles.instagram}/> 
//         </div>
//     )
// }


            // <a href="https://vimeo.com/infinitaprod">
            //     <FontAwesomeIcon icon={faVimeoV} className={styles.icon} id={styles.vimeo}/>
            // </a>



export default function SBIcons() {
        return (
            <div className={styles.container}>
                <Icon href='https://vimeo.com/infinitaprod' icontype={faVimeoV} />
                <Icon href='https://www.linkedin.com/company/infinitaproductions' icontype={faLinkedin} />
                <Icon href='https://twitter.com/Infinita_Prod' icontype={faXTwitter} />
                <Icon href='https://www.facebook.com/infinitaproductions' icontype={faFacebookF} />
                <Icon href='https://www.instagram.com/infinitaproductions/' icontype={faInstagram} />
            </div>
        )
    }