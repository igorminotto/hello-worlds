const authReducer = (state = { isLogged: false }, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { isLogged: true };
    case "SIGN_OUT":
      return { isLogged: false };
    default:
      return state;
  }
};

export default authReducer;
