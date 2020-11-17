import React from "react";
import ReactDom from "react-dom";
import App from "./routes/App";
import reducer from "./reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = {
  user: {},
};

ReactDom.render(<App />, document.getElementById("app"));
