'use client';

import { Container } from "react-bootstrap";
import styles from './global.module.css';


export default function FixedBackgroundSec({ title, subtitle, cards }) {
    return (
      <div className={styles.fixedImgContainer}>
        <header className={`${styles.header} mx-auto `}>
          <h1 className="fs-1 text-center mb-3 ">{title}</h1>
        </header>
        <p className="fs-3 text-center my-2 text-white  shadow   ">{subtitle}</p>
        <Container className={`${styles.cards} d-flex  flex-column flex-lg-row justify-content-between`}>
          {cards}
        </Container>
      </div>
    );
}