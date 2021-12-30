import axios from "axios";
import {
  ALL_CATEGORIES_FAIL,
  ALL_CATEGORIES_REQUEST,
  ALL_CATEGORIES_SUCCESS,
} from "../constants/categories";

export const getAllCategories = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_CATEGORIES_REQUEST });
    const { data } = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    dispatch({ type: ALL_CATEGORIES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ALL_CATEGORIES_FAIL,
      error: new Error("Could not fetch categories"),
    });
  }
};
