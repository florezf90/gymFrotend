
import styles from './global.module.css'
import ControlledCarousel from "@florezf90gym/components/carousel";
import CardSection from '@florezf90gym/components/cardSection';
export default function Home() {
    return (
      <main>
        <ControlledCarousel />
        <div className={styles.imagecontainer}></div>
        <CardSection />
      </main>
    );
}