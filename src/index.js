import React from "react";
import App from "./App";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./components/Auth/store/store";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
