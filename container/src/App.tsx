import React from "react";
import ReactDOM from "react-dom";
import Counter from "counter/Counter";

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: container</div>
    <Counter />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
