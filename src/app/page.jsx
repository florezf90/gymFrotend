
import Image from "next/image";
import styles from './global.module.css'
import ControlledCarousel from "@florezf90gym/components/carousel"; 
export default function Home() {
    return (
      <main  >
        <ControlledCarousel  />
        <div className={styles.imagecontainer}></div>
      </main>
    );
}