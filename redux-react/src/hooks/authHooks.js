import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../actions/auth";

export const useAuth = () => {
  const user = useSelector((state) => state.auth.user);
  const isLogged = useSelector((state) => state.auth.isLogged);
  const dispatch = useDispatch();

  return {
    user,
    isLogged,
    login: () => dispatch(login()),
    logout: () => dispatch(logout()),
  };
};
