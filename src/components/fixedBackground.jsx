import styles from './components.module.css';
import gymgirl from '../../public/moriremos.webp';

export default function FixedBackground ({background}) {

    return (
      <div
        className={styles.fixedImgContainer} 
        style={{backgroundImage: `url(${background.src})`}}
      ></div>
    );
}