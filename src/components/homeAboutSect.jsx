import { Container } from "react-bootstrap";
import FixedBackground from "./fixedBackground";
import styles from './components.module.css'
import curl from '../../public/curling.webp';
import NavigationBtn from "./navigationbtn";
import Link from "next/link";


export default function HomeAboutSect() {
    return (
      <Container className="my-5 py-5  d-flex flex-md-row  flex-column">
        <Container className={`${styles.container}`}>
          <FixedBackground background={curl} style={styles.smallfixedImg} />
        </Container>
        <Container className=" p-5 d-flex flex-column text-center ">
          <h1 className="text-light mt-5">About</h1>
          <p className="fs-3 text-light mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam est
            eaque impedit vitae! Voluptatem ratione asperiores harum, alias qui,
            totam voluptas deserunt enim vero quisquam eius numquam aperiam,
            consequuntur fugit! Repellat voluptate provident ullam.
          </p>
          <div className=" mt-4">
            <Link href="/about"><NavigationBtn name="about" style={`w-50 `} /></Link>
          </div>
        </Container>
      </Container>
    );
}