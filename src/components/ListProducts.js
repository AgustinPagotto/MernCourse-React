import React from "react";
import { Col, Row } from "react-bootstrap";
import json from "../examples/products.json";
import Product from "./Product";

const ListProducts = () => {
  const products = json.products;

  return (
    <Row>
      {products.map((product, index) => (
        <Product key={index} item={product}/>
      ))}
    </Row>
  );
};
