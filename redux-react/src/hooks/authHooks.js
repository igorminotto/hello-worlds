import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../actions/auth";

export const useAuth = () => {
  const isLogged = useSelector((state) => state.auth.isLogged);
  const dispatch = useDispatch();

  return {
    isLogged,
    login: () => dispatch(login()),
    logout: () => dispatch(logout()),
  };
};
