import { FILTER_CHANGE_CATEGORY, FILTER_CHANGE_PRICE } from "../actions/types";

const initialState = {
  category: "",
  price: null,
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_CHANGE_CATEGORY:
      return { ...state, category: action.payload };
    case FILTER_CHANGE_PRICE:
      return { ...state, price: action.payload };
    default:
      return state;
  }
};

export default filterReducer;
