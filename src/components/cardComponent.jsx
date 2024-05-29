import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import styles from "./components.module.css";

export default function ImageCard() {
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
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className={styles.cardImage}
          />
          <div
            className={`${styles.imageOverlay} ${
              hover ? styles.imageOverlayHover : ""
            }`}
          ></div>
        </div>
        <Card.Body className={styles.cardBody}>
          {hover && (
            <Card.Title className={styles.cardTitle}>Card Title</Card.Title>
          )}
          {hover && (
            <Button variant="primary" className={styles.cardButton}>
              Click Me
            </Button>
          )}
        </Card.Body>
      </Card>
    </motion.div>
  );
}
