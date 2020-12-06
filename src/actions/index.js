export const counter = {
  increment: () => ({ type: "increment" }),
  decrement: () => ({ type: "decrement" }),
};

export const authentication = {
  signIn: () => ({ type: "signIn" }),
  signOut: () => ({ type: "signOut" }),
};
