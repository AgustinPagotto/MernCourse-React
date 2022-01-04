import React from "react";
import { Col, Row, Button, Badge } from "react-bootstrap";
import "../assets/css/styles.css";

export const product = ({ item }) => {
  const { title, image, description, price } = item;
  return (
    <Col xs={4}>
      <Row>
        <Col xs={8}>
          <div style={styles.font}>{title}</div>
        </Col>
        <Col xs={4}>
          <Button variant="primary">
            Precio <Badge bg="secondary">{price}</Badge>
            <span className="visually-hidden">$</span>
          </Button>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <img className="img-product" alt="" src={image}></img>
        </Col>
      </Row>
    </Col>
  );
};

const styles = {
  font: {
    fontSize: "18px",
    color: "red",
  },
  image: {
    height: "100px",
    width: "100px",
  },
};
