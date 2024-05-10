'use client';

import Carousel from "react-bootstrap/Carousel";
import  CarouselItem  from "react-bootstrap/CarouselItem";
import CarouselCaption from "react-bootstrap/CarouselCaption";
import Image from "next/image";

import styles from './global.module.css'

import CarouselInfo from "@florezf90gym/utils/carouselInfo";

function ControlledCarousel() {
    const carouselItems = CarouselInfo();
  return (
    
    <Carousel >
      {carouselItems.map((item, index) => (
      <CarouselItem key={index}>
        <Image alt="squat" className={`${styles.coverPhoto} mx-auto`} src={item.photo}/>
        <CarouselCaption className={styles.carouselText}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </CarouselCaption>
    </CarouselItem>
      ))}
    </Carousel>
  );
}

export default ControlledCarousel;
