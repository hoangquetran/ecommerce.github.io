import { ADD_CART } from "../actions/types";

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default cartReducer;
