import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createStore } from "redux";

// webpack will automatically check index.js from reducers
import { allReducers } from "./reducers";

// provide global state to app
import { Provider } from "react-redux";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// wrap app in provider and pass in created store as prop
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
