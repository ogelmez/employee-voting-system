import * as http from "../http.common";

const getEmployees = (query) => {
  return http.employees
    .get(
      `?query=${query}`
    )
    .catch(function (error) {
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
    });
};

const getEmployeeById = (query) => {
  return http.employees
    .get(
      `?query=${query}`
    )
    .catch(function (error) {
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
    });
};

const EmployeeService = {
  getEmployees,
  getEmployeeById
};

export default EmployeeService;
