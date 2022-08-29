import { getProducts } from "../actions/productActions";
import { FETCH_PRODUCT } from "../actions/types";
import productAPI from "../api";

const initialState = [];

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};

export async function fetchProduct(dispatch, getState) {
  const response = await productAPI.get("products/");
  dispatch(getProducts(response.data));
}

export default productReducer;
