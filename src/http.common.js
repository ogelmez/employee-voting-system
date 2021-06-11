import axios from "axios";

const employees = axios.create({
  baseURL: "http://localhost:9002/graphql",
  headers: {
    "Content-type": "application/json",
  }
});

export { employees };
