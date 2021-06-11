import { GET_EMPLOYEES, GET_EMPLOYEE_ID } from "./actionTypes";

import EmployeeService from "../../api/EmployeeService";
export const getEmployees = (query) => async (dispatch) => {
  try {
    const res = await EmployeeService.getEmployees(query);

    dispatch({
      type: GET_EMPLOYEES,
      payload: res.data.data.allEmployees,
    });
    return Promise.resolve(res.data.data.allEmployees);
  } catch (error) {
    if (error.response) {
      console.log(
        "Data: " +
          error.response.data +
          "Status: " +
          error.response.status +
          "Headers: " +
          error.response.headers
      );
    } else if (error.request) {
      console.log("Request: " + error.request);
    } else {
      console.log("Error Message: ", error.message);
    }
  }
};

export const getEmployeeById = (query) => async (dispatch) => {
  try {
    const res = await EmployeeService.getEmployeeById(query);

    dispatch({
      type: GET_EMPLOYEE_ID,
      payload: res.data.data.employee,
    });
    return Promise.resolve(res.data.data.employee);
  } catch (error) {
    if (error.response) {
      console.log(
        "Data: " +
          error.response.data +
          "Status: " +
          error.response.status +
          "Headers: " +
          error.response.headers
      );
    } else if (error.request) {
      console.log("Request: " + error.request);
    } else {
      console.log("Error Message: ", error.message);
    }
  }
};

