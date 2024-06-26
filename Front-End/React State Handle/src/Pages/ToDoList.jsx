import { useContext } from "react";
import { ToDoContext } from "../Context/ToDoProvider";


const ToDoList = () => {
    const { state, dispatch } = useContext(ToDoContext);
    console.log(state);
    return (
      <div>
        {state && state.map((item) => (
          <p className={`cursor-pointer ${item.isCompleted ? 'line-through' : ''}`} onClick={() => dispatch({ type: "taskComplete", payload:item.id })} key={item.id}>
            {item.title}
          </p>
        ))}
      </div>
    );
};

export default ToDoList;