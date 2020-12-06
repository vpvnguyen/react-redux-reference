import React from "react";
import { useSelector, useDispatch } from "react-redux";

// import actions
import { increment, decrement, signIn, signOut } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const signOn = useSelector((state) => state.signOn);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>

      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>

      <div>
        <button onClick={() => dispatch(signIn())}>Sign In</button>
        <button onClick={() => dispatch(signOut())}>Sign Out</button>
      </div>

      {signOn ? <h3>Signed In</h3> : <h3>Signed Out</h3>}
    </div>
  );
}

export default App;
