'use client'

import Container from "react-bootstrap/Container";
import Link from "next/link";
import Button  from "react-bootstrap/Button";
import NavigationBtn from "./navigationbtn";
import Card from "react-bootstrap/Card";


export default function Memberships() {
    return (
      <Container className="my-5 py-5 d-flex  flex-column  justify-content-between bg-light ">
        <Container className=" my-5 pt-5 d-flex  flex-column flex-md-row justify-content-between bg-warning">
          <Link href="/services" className="mx-auto mx-md-0">
            <NavigationBtn name="Learn More" />
          </Link>
          <h1 className="text-center fs-2 my-3  pb-5">Memberships</h1>
        </Container>
        <Container className="d-flex flex-column flex-xl-row justify-content-center  bg-danger mb-5 p-4 ">
          <Card className="p-5 mx-5 ">
            <Card.Title className="text-center px-5 mb-5 ">Monthly</Card.Title>
            <Card.Body>
              <Card.Text>
                <ul>
                  <li>
                    lorem Lorem, ipsum dolor sit amet consectetur adipisicing{" "}
                  </li>
                  <li>lorem</li>
                  <li>lorem</li>
                  <li>lorem</li>
                </ul>
              </Card.Text>
            </Card.Body>
            <Link href="/services" className="mx-auto mt-5 ">
              <Button>Subscribe</Button>
            </Link>
          </Card>
          <Card className="p-5 mx-5 ">
            <Card.Title className="text-center px-5 mb-5 ">Monthly</Card.Title>
            <Card.Body>
              <Card.Text>
                <ul>
                  <li>
                    lorem Lorem, ipsum dolor sit amet consectetur adipisicing{" "}
                  </li>
                  <li>lorem</li>
                  <li>lorem</li>
                  <li>lorem</li>
                </ul>
              </Card.Text>
            </Card.Body>
            <Link href="/services" className="mx-auto mt-5 ">
              <Button>Subscribe</Button>
            </Link>
          </Card>
          <Card className="p-5 mx-5 ">
            <Card.Title className="text-center px-5 mb-5 ">Monthly</Card.Title>
            <Card.Body>
              <Card.Text>
                <ul>
                  <li>
                    lorem Lorem, ipsum dolor sit amet consectetur adipisicing{" "}
                  </li>
                  <li>lorem</li>
                  <li>lorem</li>
                  <li>lorem</li>
                </ul>
              </Card.Text>
            </Card.Body>
            <Link href="/services" className="mx-auto mt-5 ">
              <Button>Subscribe</Button>
            </Link>
          </Card>
        </Container>
      </Container>
    );
}