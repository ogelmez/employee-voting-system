import React from "react";
import ReactDOM from "react-dom";
import App from "./components/root/App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/reducers/configureStore";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";



ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();
