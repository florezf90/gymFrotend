import styles from './components.module.css';

export default function FixedBackground ({background, title, text }) {

    return (
      <div
        className={` d-flex justify-content-start align-items-center  ${styles.fixedImgContainer}`} 
        style={{backgroundImage: `url(${background.src})`}}
      >
        <div className='w-40 mb-5 ' >
        <h1 className={`${styles.fixedImgText} mt-5`}>{title}</h1>
        <p className={styles.fixedImgText}>{text}</p>
        </div>
      </div>
    );
}