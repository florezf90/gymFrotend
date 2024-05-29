'use client'

import  Container  from "react-bootstrap/Container"   
import NavigationBtn from "./navigationbtn"
import ImageCard from "./cardComponent"

import trainersInfo from "@florezf90gym/utils/trainersInfo"
import Link from "next/link"
export default function Team() {

    const { trainers } = trainersInfo();

    return (
      <Container className="my-5 py-5 d-flex  flex-column  justify-content-between bg-light ">
        <Container className=" my-5 pt-5 d-flex  flex-column flex-md-row justify-content-between bg-warning">
          <h1 className="text-center fs-2 my-3 pb-5 ">Meet Our Team</h1>
          <Link href="/about" className="mx-auto mx-md-0 ">
          <NavigationBtn
            name="Learn More"
          />
          </Link>
        </Container>
        <Container className="d-flex flex-column flex-xl-row justify-content-between  bg-danger mb-5 p-4 ">
          {trainers.map((trainer, index) => (
            <ImageCard
              key={index}
              tName={trainer.tName}
              tPhoto={trainer.tPhoto}
            />
          ))}
        </Container>
      </Container>
    );
}