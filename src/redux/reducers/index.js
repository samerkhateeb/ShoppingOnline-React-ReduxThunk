import { productsReducer, selectProductReducer } from "./productReducer";

import { combineReducers } from "redux";

// combine the reducer with the productReducer
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectProductReducer,
});

export default reducers;
