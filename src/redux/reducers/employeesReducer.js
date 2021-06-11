import {
  GET_EMPLOYEES,
  GET_EMPLOYEE_ID,
  UPDATE_STATE,
} from "../actions/actionTypes";

const initialState = [];

function employeesReducer(employees = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_EMPLOYEES:
      return { ...employees, payload };

    case GET_EMPLOYEE_ID:
      return { ...employees, payload };

    case UPDATE_STATE:
      return { ...employees, payload };

    default:
      return employees;
  }
}
export default employeesReducer;
