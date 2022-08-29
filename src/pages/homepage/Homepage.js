import React, { useEffect } from "react";
import SlideTop from "../../components/slide/SlideTop";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListProduct from "../../components/listproducts/ListProducts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../reducers/productReducer";

function Homepage() {
  const products = useSelector((state) => state.products);
  const filter = useSelector((state) => state.filter);
  const categories = [...new Set(products.map((product) => product.category))];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct);
  }, [dispatch]);

  let filteredProducts = products;
  if (filter.category) {
    filteredProducts = products.filter(
      (product) => product.category === filter.category
    );
  }

  if (filter.price) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price <= filter.price
    );
  }

  return (
    <div className="main-contents">
      <Row className="banner-top align-items-md-center">
        <Col xs={8}>
          <SlideTop />
        </Col>
        <Col className="banner-top--img">
          <img
            src="https://img.freepik.com/free-vector/floral-new-collection-banner-template_1361-1251.jpg?w=1060&t=st=1661228389~exp=1661228989~hmac=60d6d324a8896d6033c9b33d39ff204d99557b066b16b23b3b01d7a4b99decef"
            alt="banner top"
          />
        </Col>
      </Row>

      <Row className="main-product">
        <Col xs={3}>
          <Sidebar categories={categories} />
        </Col>
        <Col xs={9}>
          <ListProduct products={filteredProducts} />
        </Col>
      </Row>
    </div>
  );
}

export default Homepage;
