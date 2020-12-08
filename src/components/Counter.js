import React from "react";
import { useDispatch } from "react-redux";
import { counter } from "../actions";

const Counter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(counter.increment())}>+</button>
      <button onClick={() => dispatch(counter.decrement())}>-</button>
    </>
  );
};

export default Counter;
