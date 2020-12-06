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
      <div>
        <h1>Counter {counter}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>

      <div>
        <h1>Authentication</h1>
        <button onClick={() => dispatch(signIn())}>Sign In</button>
        <button onClick={() => dispatch(signOut())}>Sign Out</button>
        {signOn ? <h3>Signed In</h3> : <h3>Signed Out</h3>}
      </div>
    </div>
  );
}

export default App;
