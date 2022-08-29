import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Form,
  InputGroup,
  ListGroup,
  Stack,
} from "react-bootstrap";
import { changeCategory, changePrice } from "../../actions/filterActions";
import './sidebar.css';

const Sidebar = ({ categories }) => {
  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();

  const onChangeCategory = (event) =>
    dispatch(changeCategory(event.target.value));

  const onChangePrice = () => dispatch(changePrice(price));

  const onClear = () => {
    dispatch(changeCategory(""));
    dispatch(changePrice(null));
    setPrice(0);
  };

  return (
    <div className="sidebar mt-3">
      <h3>Product Category</h3>
      <ListGroup variant="flush" className="mb-5">
        <ListGroup.Item action onClick={onClear}>All</ListGroup.Item>
        {categories.map((category) => (
          <ListGroup.Item
            action
            onClick={onChangeCategory}
            value={category}
            key={category}
          >
            {category.toUpperCase()}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <h3>Prices</h3>
      <InputGroup className="mb-3">
        <InputGroup.Text>$</InputGroup.Text>
        <Form.Control
          aria-label="Amount (to the nearest dollar)"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </InputGroup>
      <Stack direction="horizontal" gap={2}>
        <Button variant="light" onClick={onChangePrice}>
          Filter
        </Button>
        <Button className="ms-auto" variant="light" onClick={onClear}>
          Clear
        </Button>
      </Stack>
    </div>
  );
};

export default Sidebar;
