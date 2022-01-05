import React from "react";
import "./Weeklyproduct.css";
import { Card, Col } from "react-bootstrap";
const Weeklyproduct = ({ weeklyProduct }) => {
  const { image, category } = weeklyProduct;
  return (
    <>
      <Col>
        <Card className="weeklyproduct py-5 my-5">
          <Card.Img variant="top" src={image} />
          <h6> {category} </h6>
        </Card>
      </Col>
    </>
  );
};

export default Weeklyproduct;
