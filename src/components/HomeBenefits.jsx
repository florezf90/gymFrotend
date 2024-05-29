
import CardSection from "./cardSection";
import  Container  from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";

import CarouselComponent from "./carousel";


import benefitsInfo from "@florezf90gym/utils/BenefitsInfo";

export default function HomeBenefits() {

    const { benefitscards } = benefitsInfo();

    return (
      <div className="pt-2">
        <CardSection sectionTitle="Join us and transform your life" />
        <Container className="bg-danger py-5  my-5  ">
          <Carousel>
            {benefitscards.map((card, index) => (
              <CarouselItem key={index}>
              <CarouselComponent
                Btitle={card.Btitle}
                Bdescription={card.Bdescription}
                Bimg={card.Bimg}
              />
              </CarouselItem>
            ))}
          </Carousel>
        </Container>
      </div>
    );
};