import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import filterReducer from "./filterReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  products: productReducer,
  filter: filterReducer,
  carts: cartReducer,
});

export default rootReducer;
