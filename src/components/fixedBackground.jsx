import styles from './components.module.css';

export default function FixedBackground ({background, title, text }) {

    return (
      <div
        className={` d-flex justify-content-start align-items-center  ${styles.fixedImgContainer}`} 
        style={{backgroundImage: `url(${background.src})`}}
      >
        <div className='w-50 mb-5' >
        <h1 className={`${styles.fixedImgText}`}>{title}</h1>
        <h2 className={`${styles.fixedImgText} fs-2 mb-5 mt-3 `}>{text}</h2>
        </div>
      </div>
    );
}