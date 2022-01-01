import {
  TOTAL_PRODUCTS_FAIL,
  TOTAL_PRODUCTS_REQUEST,
  TOTAL_PRODUCTS_SUCCESS,
  RANDOM_PRODUCT_FAIL,
  RANDOM_PRODUCT_REQUEST,
  RANDOM_PRODUCT_SUCCESS,
} from "../constants/products";
import axios from "axios";

export const getTotalProducts = () => async (dispatch) => {
  try {
    dispatch({ type: TOTAL_PRODUCTS_REQUEST });

    const { data } = await axios.get("https://fakestoreapi.com/products");
    dispatch({ type: TOTAL_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: TOTAL_PRODUCTS_FAIL,
      payload: new Error("Could not fetch products."),
    });
  }
};

export const getRandomProduct = () => async (dispatch) => {
  try {
    dispatch({ type: RANDOM_PRODUCT_REQUEST });
    const { data } = await axios.get("https://fakestoreapi.com/products");

    const randomProduct = data[Math.floor(Math.random() * data.length)];
    dispatch({ type: RANDOM_PRODUCT_SUCCESS, payload: randomProduct });
  } catch (error) {
    dispatch({
      type: RANDOM_PRODUCT_FAIL,
      payload: new Error("Could not fetch random product."),
    });
  }
};
