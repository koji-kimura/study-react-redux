import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer);

console.log(store);

// subscribeはイベントリスナー
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: "PLUS", payload: { num: 1 } });
store.dispatch({ type: "MINUS", payload: { num: 1 } });
store.dispatch({ type: "PLUS", payload: { num: 10 } });

// import React from "react";
// import ReactDOM from "react-dom";

// import "./styles.css";

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
