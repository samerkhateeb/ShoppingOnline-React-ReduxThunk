import { applyMiddleware, compose, createStore } from "redux";

import reducers from "./reducers/index";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// connect store with  the main reducer
const store = createStore(
  reducers,

  composeEnhancers(applyMiddleware(thunk))
);

export default store;
