import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authentication } from "../actions";

const SignIn = () => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(authentication.signIn())}>Sign In</button>
  );
};
const SignOut = () => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(authentication.signOut())}>Sign Out</button>
  );
};

const Authentication = () => {
  const signOn = useSelector((state) => state.signOn);
  return <>{signOn ? <SignOut /> : <SignIn />}</>;
};

export default Authentication;
