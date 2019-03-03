import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import reducer from "./reducer";

import { Provider } from "react-redux";

import App from "./containers/App";

const store = createStore(reducer);

console.log(store);

// subscribeはイベントリスナー
store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({ type: "PLUS", payload: { num: 1 } });
// store.dispatch({ type: "MINUS", payload: { num: 1 } });
// store.dispatch({ type: "PLUS", payload: { num: 10 } });

// import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
