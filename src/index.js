import React from "react";
import ReactDom from "react-dom";
import App from "./routes/App";
import reducer from "./reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";
import useInitialState from "./hooks/useInitialState";

const initialState = {
  podcast: [],
  user: {},
  myList: [],
  playing: {},
};

const store = createStore(reducer, initialState);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
