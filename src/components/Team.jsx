'use client'

import  Container  from "react-bootstrap/Container"   
import Card from "react-bootstrap/Card"
import NavigationBtn from "./navigationbtn"
export default function Team() {
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
          <Card className="m-3 p-4 ">
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="m-3 p-4  ">
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="m-3 p-4 ">
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="m-3 p-4 ">
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="m-3 p-4 ">
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="m-3 p-4 ">
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </Container>
    );
}