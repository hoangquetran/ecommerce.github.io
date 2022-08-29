import { FILTER_CHANGE_CATEGORY, FILTER_CHANGE_PRICE } from "./types";

export const changeCategory = (category) => ({
  type: FILTER_CHANGE_CATEGORY,
  payload: category,
});

export const changePrice = (price) => ({
  type: FILTER_CHANGE_PRICE,
  payload: price,
});
