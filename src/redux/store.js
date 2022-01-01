import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { totalProducts, randomProduct } from "./reducers/productReducer";
import { createDashboard } from "./reducers/dashboardReducer";
import { totalCustomers } from "./reducers/customerReducer";
import { allCategories } from "./reducers/categoriesReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  totalProducts,
  createDashboard,
  totalCustomers,
  allCategories,
  randomProduct,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
