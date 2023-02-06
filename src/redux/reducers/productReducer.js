import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
};

// The only place have access to the state,
// connect product reducer with Action, based ont he action things will  move forward.
// from the frontend -> Action -> reducer, it will get the  {type , payload}  from the action, based on that it will return the data
// type will be SET_PRODUCTS, and for state it should passed the new state (plus)  the new data (payload)
export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.FETCH_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
