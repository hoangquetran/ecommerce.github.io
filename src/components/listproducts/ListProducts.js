import React from "react";
import Row from "react-bootstrap/Row";
import ProductItem from "./ProductItem";
import "./products.css";

const ListProduct = ({ products }) => {
  return (
    <Row className="list-products">
      {products.map((product) => {
        return <ProductItem key={product.id} {...product} />;
      })}
    </Row>
  );
};

export default ListProduct;
