import {
  TOTAL_PRODUCTS_FAIL,
  TOTAL_PRODUCTS_REQUEST,
  TOTAL_PRODUCTS_SUCCESS,
} from "../constants/products";

export const totalProducts = (state = { products: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOTAL_PRODUCTS_REQUEST:
      return { loading: true };
    case TOTAL_PRODUCTS_SUCCESS:
      return { loading: false, products: payload };
    case TOTAL_PRODUCTS_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};
