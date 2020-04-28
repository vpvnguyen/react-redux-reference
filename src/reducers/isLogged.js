export const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case "signIn":
      return true;
    default:
      return state;
  }
};
