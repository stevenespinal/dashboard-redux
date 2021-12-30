import {
  CREATE_DASHBOARD_FAIL,
  CREATE_DASHBOARD_REQUEST,
  CREATE_DASHBOARD_SUCCESS,
} from "../constants/dashboard";

export const createDashboard = (state = { dashboards: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_DASHBOARD_REQUEST:
      return { ...state, loading: true };
    case CREATE_DASHBOARD_SUCCESS:
      return {
        ...state,
        loading: false,
        dashboards: [...state.dashboards, payload],
      };
    case CREATE_DASHBOARD_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};
