import Image from "next/image";
import gymSquat from '../../public/saes.webp'
import styles from './global.module.css' 
export default function Home() {
    return (
      <main  >
        <Image src={gymSquat} alt="squat" className={`${styles.coverPhoto} mx-auto`} />
        <div className={styles.imagecontainer}></div>
      </main>
    );
}