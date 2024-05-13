'use client';

import { Container, } from "react-bootstrap";
import styles from "./global.module.css";
import CardComponent from "./cardComponent";

export default function CardSection() {

  const cardData = [
    {
      title: "gropus workout",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
      buttonType: "view schedule",
    },
    {
      title: "body building ",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
      buttonType: "view schedule",
    },
    {
      title: "boxing",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
      buttonType: "view schedule",
    },
  ];
    return (
      <Container className={styles.cardsSection}>
        <header className={`${styles.header} mx-auto`}>
          <h1 className="fs-1 text-center mb-3">welcome to florezf90gym!</h1>
        </header>
        <p className="fs-3 text-center my-3 text-light">
          Kick your feet up! With a gym designed around you, we think you’ll
          love it here.
        </p>
        <Container className="d-flex   flex-column flex-lg-row   justify-content-between  bg-light">
         {cardData.map((card, index) => (
          <CardComponent key={index} title={card.title} text={card.text} buttonType={card.buttonType}/>
         ))}
        </Container>
      </Container>
    );
}