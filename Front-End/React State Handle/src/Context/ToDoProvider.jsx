import { createContext, useReducer } from "react";

export const ToDoContext = createContext(null);

const ToDoProvider = ({ children }) => {
    
  const initalState = [
    {
      id: "",
      title: "",
      isCompleted: false,
    },
  ];

  const reducer = (currentState, action) => {
    switch (action.type) {
      case "addTodo":
        return [...currentState, action.payload];
      case 'taskComplete':
        return currentState.map((item)=>item.id==action.payload ? {...item , isCompleted: !item.isCompleted} : item)
      default:
        return currentState;
    }
  };

  const [state, dispatch] = useReducer(reducer, initalState);

  const values = {
    state,
    dispatch,
  };

  //return body
  return <ToDoContext.Provider value={values}>{children}</ToDoContext.Provider>;
};

export default ToDoProvider;
