import React from "react";
import { Badge, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Bag } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import "./cart.css";

const CartHeader = () => {
  const carts = useSelector((state) => state.carts);

  return (
    <Link to="/cart" className="cart">
      <Row className="align-items-md-center">
        <Col className="cart-txt">
          <p>Cart /</p>
        </Col>
        <Col className="cart-bag">
          <Badge bg="secondary">{carts.length || 0}</Badge>
          <Bag color="#ffffff" size={32} />
        </Col>
      </Row>
    </Link>
  );
};

export default CartHeader;
