import {
  TOTAL_PRODUCTS_FAIL,
  TOTAL_PRODUCTS_REQUEST,
  TOTAL_PRODUCTS_SUCCESS,
  RANDOM_PRODUCT_FAIL,
  RANDOM_PRODUCT_REQUEST,
  RANDOM_PRODUCT_SUCCESS,
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

export const randomProduct = (state = { product: {} }, action) => {
  const { type, payload } = action;
  switch (type) {
    case RANDOM_PRODUCT_REQUEST:
      return { loading: true };
    case RANDOM_PRODUCT_SUCCESS:
      return { loading: false, product: payload };
    case RANDOM_PRODUCT_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};
