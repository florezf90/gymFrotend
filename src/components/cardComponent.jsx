'use client';

import { Card, CardTitle, CardText, Button } from "react-bootstrap";


export default function CardComponent({ title, text, buttonType}) {
    return (
      <Card className="p-5 m-3  ">
        <CardTitle className="text-center">{title}</CardTitle>
        <CardText className="text-center">
          {text}
        </CardText>
        <Button>{buttonType}</Button>
      </Card>
    );

}