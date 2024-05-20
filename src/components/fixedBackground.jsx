import styles from './components.module.css';

export default function FixedBackground ({background}) {

    return (
      <div
        className={` d-flex justify-content-start align-items-center  ${styles.fixedImgContainer}`} 
        style={{backgroundImage: `url(${background.src})`}}
      >
        <div className='w-50 mb-5 ' >
        <h1 className={`${styles.fixedImgText}`}>Florezf90 Gym</h1>
        <p className={styles.fixedImgText}>1-800-555-1234</p>
        </div>
      </div>
    );
}