const authReducer = (state = { isLogged: false }, action) => {
  switch (action.type) {
    case "SET_USER":
      return { isLogged: !!action.user, user: action.user };
    case "SIGN_OUT":
      return { isLogged: false };
    default:
      return state;
  }
};

export default authReducer;
