import {
  TOTAL_PRODUCTS_FAIL,
  TOTAL_PRODUCTS_REQUEST,
  TOTAL_PRODUCTS_SUCCESS,
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
