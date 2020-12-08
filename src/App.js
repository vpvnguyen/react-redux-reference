import React from "react";
import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import Authentication from "./components/Authentication";

const App = () => {
  const count = useSelector((state) => state.counter);
  const signOn = useSelector((state) => state.signOn);

  return (
    <div className="App">
      <div>
        <h1>Counter {count}</h1>
        <Counter />
      </div>

      <div>
        <h1>Authentication: {signOn ? "Signed In" : "Signed Out"}</h1>
        <Authentication />
      </div>
    </div>
  );
};

export default App;
