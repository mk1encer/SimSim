import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
=======
import "./index.css";
>>>>>>> 3457dc6a78d81957766d31741043c3eb501c2429
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
