import { useReducer, useState } from "react";

const initialState = {
  name: " ",
  age: " ",
  hobbies: [],
};

const reducer = (currentState, action) => {
  switch (action.type) {
    case "addName":
      return { ...currentState, name: action.payload };
    case "addAge":
      return { ...currentState, age: action.payload };

    case "addHobby":
      return {
        ...currentState,
        hobbies: [...currentState.hobbies, action.payload],
      };

    default:
      return currentState;
  }
};

const ReducerUse = () => {
  //reducer is function
  //initialState is value (obj here)
  //state is like user(obj), dispatch is like setUser
  const [state, dispatch] = useReducer(reducer, initialState);
    
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(state);
    }

  return (
    <div>
      <form onSubmit={handleOnSubmit} action="">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="name"
          onChange={(e) =>
            dispatch({ type: "addName", payload: e.target.value })
          }
        />
        <input
          type="text"
          name="age"
          id="age"
          placeholder="age"
          onChange={(e) =>
            dispatch({ type: "addAge", payload: e.target.value })
          }
        />
        <input
          type="text"
          name="hobbies"
          id="hobbies"
          placeholder="hobbies"
          onBlur={(e) =>
            dispatch({ type: "addHobby", payload: e.target.value })
          }
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReducerUse;
