import { ActionTypes } from "../constants/action-types";
import axios from "axios";
import fakeStoreApi from "../../apis/fakeStoreApi";

// will put the thunk here,
export const fetchProducts =
  () =>
  // optimised version
  async (dispatch) => {
    const response = await fakeStoreApi.get(`/products`);
    console.log(response.data);
    // dispatch the action here :)
    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
  };

// will put the thunk here,
export const fetchProduct = (id) => async (dispatch) => {
  const response = await fakeStoreApi.get(`products/${id}`);
  console.log("response is:", response.data);

  dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data });
};

// the object will return to the Frontend,  it will  be returned from t he reducer,
export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

// select Product
export const selectProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

// select Product
export const removeSelectProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
