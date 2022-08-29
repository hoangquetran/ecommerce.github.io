import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { addCart } from "../../actions/cartActions";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ProductItem = (props) => {
    const carts = useSelector((state) => state.carts);
    const dispatch = useDispatch();

    const onAddToCart = (productId) => {
        dispatch(addCart(productId));
    };

//   Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Col className="product" xs={3}>
            <div className="product-img">
                <img src={props.image} alt="product" />
            </div>
            <div className="product-txt">
                <p className="product-cate">{props.category}</p>
                <p className="product-ttl">{props.title}</p>
                <p className="product-price">${props.price}</p>

                <Button className="btn-addcart" onClick={handleShow}>Quick View</Button>

                <Modal show={show} onHide={handleClose} className="modal-detail">
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col xs={6}>
                                <div className="product-img">
                                    <img src={props.image} alt="product" />
                                </div>
                            </Col>
                            <Col xs ={6}>
                                <div className="product-txt">
                                    <p className="product-ttl">{props.title}</p>
                                    <p className="product-price">${props.price}</p>
                                    <p className="product-des">{props.description}</p>
                                    <p className="product-rating">Rating : <span>{props.rating.rate}</span></p>
                                </div>
                                <Button className="btn-addcart"
                                    onClick={() => onAddToCart(props.id)}
                                    disabled={carts.includes(props.id)}
                                    >
                                    Add to cart
                                </Button> 
                            </Col>
                        </Row>
                            
                    </Modal.Body>
                </Modal>

                
            </div>
        </Col>
    );
};

export default ProductItem;
