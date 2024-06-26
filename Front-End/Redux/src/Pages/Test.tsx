import React from "react";
import { decrement, increment, incrementByValue } from "../redux/features/counterSlice";
import { useAppDispatch } from "../redux/hook";
import { useSelector } from "react-redux";

const Test = () => {
  const dispatch = useAppDispatch();
  const { count } = useSelector((state) => state.counter);

  return (
    <div className="flex h-screen w-full justify-center items-center">
      <button onClick={()=>dispatch(incrementByValue(5))}>Increment by 5</button>
      <button
        onClick={() => dispatch(increment())}
        className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white"
      >
        Increment
      </button>
      <h3 className="text-3xl mx-4">{count}</h3>
      <button
        onClick={() => dispatch(decrement())}
        className="px-3 py-2 rounded-md bg-red-500 text-xl font-semibold text-white"
      >
        Decrement
      </button>
    </div>
  );
};

export default Test;
