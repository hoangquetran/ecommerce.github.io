import { ADD_CART } from "./types";

export const addCart = (product) => ({
  type: ADD_CART,
  payload: product,
});
