import axios from "axios";

export const login = () => {
  return function (dispatch) {
    dispatch({ type: "SET_USER", user: undefined });

    return axios
      .get("http://localhost:3001/users/1")
      .then((response) => dispatch(setUser(response.data)));
  };
};

export const setUser = (user) => {
  return { type: "SET_USER", user };
};

export const logout = () => {
  return { type: "SIGN_OUT" };
};
