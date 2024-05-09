'use client';
import Carousel from "react-bootstrap/Carousel";
import  CarouselItem  from "react-bootstrap/CarouselItem";
import CarouselCaption from "react-bootstrap/CarouselCaption";
import biceps1 from "../../public/saes.webp";
import moriremos from "../../public/moriremos.webp";
import cardiogril from "../../public/gymgirl.webp";
import Image from "next/image";
import styles from './global.module.css'

function ControlledCarousel() {


  return (
    <Carousel className="" >
      <CarouselItem>
        <Image src={biceps1} alt="squat" className={`${styles.coverPhoto} mx-auto`}  />
        <CarouselCaption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </CarouselCaption>
      </CarouselItem>
      <CarouselItem>
        <Image src={moriremos} alt="squat" className={`${styles.coverPhoto} mx-auto`} />
        <CarouselCaption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </CarouselCaption>
      </CarouselItem>
      <CarouselItem>
        <Image src={cardiogril} alt="squat" className={`${styles.coverPhoto} mx-auto`} />
        <CarouselCaption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </CarouselCaption>
      </CarouselItem>
    </Carousel>
  );
}

export default ControlledCarousel;
