import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

import { Provider } from "react-redux";
import App from "./contaners/App";

const middleWares = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleWares));

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
