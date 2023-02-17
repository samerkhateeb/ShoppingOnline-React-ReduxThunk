import { ActionTypes } from "../constants/action-types";
import axios from "axios";
import fakeStoreApi from "../../apis/fakeStoreApi";

// will put the thunk here,
export const fetchProducts =
  () =>
  // optimised version
  async (dispatch) => {
    const response = await fakeStoreApi.get(`/products`);
    // const response = await axios.get(`https://fakestoreapi.com/products`);
    console.log("response.data", response.data);
    // dispatch the action here :)
    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });

    // Afterthunk -> now like this and before optimization:
    // return async function (dispatch, getState) {
    //   const response = await fakeStoreApi.get("/products");
    //   // dispatch the action here :)
    //   dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
    // };

    //  it was like  this, before adding thunk
    // const response = await axios.get("/products");
    // console.log(response);

    // return {
    //   type: ActionTypes.SET_PRODUCTS,
    //   payload: response,
    // };
  };

// will put the thunk here,
export const fetchProduct = (id) => async (dispatch) => {
  const response = await fakeStoreApi.get(`products/${id}`);
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
