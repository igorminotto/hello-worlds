import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions/counter";

export const useCounter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return {
    counter,
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
};
