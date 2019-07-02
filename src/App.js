import React from "react";
import { useSelector } from "react-redux";
import { increment } from "./actions/index";

const App = () => {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);

  return (
    <div>
      <h1>Counter {counter}</h1>
      <button>+</button>
      <button>-</button>
      {isLogged ? <h3>Private information for the user</h3> : ""}
    </div>
  );
};

export default App;
