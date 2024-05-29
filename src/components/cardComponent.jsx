import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import styles from "./components.module.css";
import Link from "next/link";


export default function ImageCard({ tName, tPhoto }) {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      className={styles.cardContainer}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      whileHover={{ scale: 1.05 }} // Example hover animation using Framer Motion
      whileTap={{ scale: 0.95 }} // Example click animation using Framer Motion
    >
      <Card className={`m-3 ${styles.imageCard}`}>
        <div className={styles.imageWrapper}>
          <Card.Img variant="top" src={tPhoto} className={styles.cardImage} alt={`${tName} trainer`} />
          <div
            className={`${styles.imageOverlay} ${
              hover ? styles.imageOverlayHover : ""
            }`}
          ></div>
        </div>
        <Card.Body className={styles.cardBody}>
          {hover && (
            <Card.Title className={styles.cardTitle}>{tName}</Card.Title>
          )}
          {hover && (
            <Link href={"/about"}>
              <Button variant="primary" className={styles.cardButton}>
                Learn More
              </Button>
            </Link>
          )}
        </Card.Body>
      </Card>
    </motion.div>
  );
}
