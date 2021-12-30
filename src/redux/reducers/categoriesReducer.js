import {
  ALL_CATEGORIES_FAIL,
  ALL_CATEGORIES_REQUEST,
  ALL_CATEGORIES_SUCCESS,
} from "../constants/categories";

export const allCategories = (state = { categories: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case ALL_CATEGORIES_REQUEST:
      return { loading: true };
    case ALL_CATEGORIES_SUCCESS:
      return { loading: false, categories: payload };
    case ALL_CATEGORIES_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};
