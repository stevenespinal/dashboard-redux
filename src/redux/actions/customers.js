import {
  TOTAL_CUSTOMERS_FAIL,
  TOTAL_CUSTOMERS_REQUEST,
  TOTAL_CUSTOMERS_SUCCESS,
} from "../constants/customers";
import axios from "axios";

export const getTotalCustomers = () => async (dispatch) => {
  try {
    dispatch({ type: TOTAL_CUSTOMERS_REQUEST });

    const { data } = await axios.get("https://fakestoreapi.com/users");
    dispatch({ type: TOTAL_CUSTOMERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: TOTAL_CUSTOMERS_FAIL,
      payload: new Error("Could not fetch products."),
    });
  }
};
