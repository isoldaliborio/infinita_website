import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles/SocialsBar.module.scss';


interface IconProps {
  href: string;
  icontype: IconProp;
}

const Icon: React.FC<IconProps> = ({ href, icontype }) => {
  return (
    <a href={href} target='_blank'>
      <FontAwesomeIcon icon={icontype} className={styles.icon} />
    </a>
  );
}

export default Icon;