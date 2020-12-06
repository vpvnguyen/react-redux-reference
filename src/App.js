import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { counter, authentication } from "./actions";

function App() {
  const count = useSelector((state) => state.counter);
  const signOn = useSelector((state) => state.signOn);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <h1>Counter {count}</h1>
        <button onClick={() => dispatch(counter.increment())}>+</button>
        <button onClick={() => dispatch(counter.decrement())}>-</button>
      </div>

      <div>
        <h1>Authentication</h1>
        <button onClick={() => dispatch(authentication.signIn())}>
          Sign In
        </button>
        <button onClick={() => dispatch(authentication.signOut())}>
          Sign Out
        </button>
        {signOn ? <h3>Signed In</h3> : <h3>Signed Out</h3>}
      </div>
    </div>
  );
}

export default App;
