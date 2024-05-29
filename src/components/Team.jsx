'use client'

import  Container  from "react-bootstrap/Container"   
import NavigationBtn from "./navigationbtn"
import ImageCard from "./cardComponent"

import trainersInfo from "@florezf90gym/utils/trainersInfo"
export default function Team() {

    const { trainers } = trainersInfo();

    return (
      <Container className="my-5 py-5 d-flex  flex-column  justify-content-between bg-light ">
        <Container className=" my-5 pt-5 d-flex  flex-column flex-md-row justify-content-between bg-warning">
          <h1 className="text-center fs-2 my-5  pt-5">Meet Our Team</h1>
          <NavigationBtn
            name="Learn More"
            style={`mt-auto mb-5 w-20 mx-auto  mx-md-0`}
          />
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