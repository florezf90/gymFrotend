'use client';

import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

import Image from "next/image";


export default function CarouselComponent({Btitle, Bdescription, Bimg}) {
    return (
      <Carousel.Item>
        <Container className="bg-success p-4 d-flex flex-column flex-md-row  text-center">
          <Container className="bg-success p-4 d-flex flex-column text-center">
            <h1 className="my-3 ">{Btitle}</h1>
            <p className="fs-4 text-light my-4 ">{Bdescription}</p>
          </Container>

        </Container>
      </Carousel.Item>

    )

}

