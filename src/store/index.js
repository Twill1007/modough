// index.js (or the entry point of your application)
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App"; // Your root component
// Correct import in index.js
import store from "./store/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
