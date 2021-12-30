import {
  TOTAL_CUSTOMERS_FAIL,
  TOTAL_CUSTOMERS_REQUEST,
  TOTAL_CUSTOMERS_SUCCESS,
} from "../constants/customers";

export const totalCustomers = (state = { customers: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOTAL_CUSTOMERS_REQUEST:
      return { loading: true };
    case TOTAL_CUSTOMERS_SUCCESS:
      return { loading: false, customers: payload };
    case TOTAL_CUSTOMERS_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};
