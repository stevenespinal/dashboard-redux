import {
  CREATE_DASHBOARD_FAIL,
  CREATE_DASHBOARD_REQUEST,
  CREATE_DASHBOARD_SUCCESS,
} from "../constants/dashboard";

export const createDashboards = (payload) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_DASHBOARD_REQUEST });
    dispatch({ type: CREATE_DASHBOARD_SUCCESS, payload });
  } catch (error) {
    console.error(error);
    dispatch({
      type: CREATE_DASHBOARD_FAIL,
      payload: new Error("Could not fetch dashboards."),
    });
  }
};
