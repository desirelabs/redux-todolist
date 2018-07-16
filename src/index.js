import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import counter from "./counterReducer";
import Counter from "./Counter";

import "./styles.css";

const store = createStore(counter);

const App = ({ count }) => {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Counter
        value={count}
        onIncrement={() => store.dispatch({ type: "INCREMENT" })}
        onDecrement={() => store.dispatch({ type: "DECREMENT" })}
      />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
