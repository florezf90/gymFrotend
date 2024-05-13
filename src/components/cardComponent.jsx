'use client';

import { Card, CardTitle, CardText, Button } from "react-bootstrap";


export default function CardComponent({ title, text, buttonType, styling}) {
    return (
      <Card className={`${styling} p-5 my-3 mx-4 `}>
        <CardTitle className="text-center">{title}</CardTitle>
        <CardText className="text-center mt-2 ">{text}</CardText>
        <Button className="mt-4">{buttonType}</Button>
      </Card>
    );

}