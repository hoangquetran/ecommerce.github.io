import { FETCH_PRODUCT } from "./types";

export const getProducts = (payload) => ({
    type: FETCH_PRODUCT,
    payload
})