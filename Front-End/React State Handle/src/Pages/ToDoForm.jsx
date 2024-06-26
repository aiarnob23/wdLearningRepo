import { useContext, useState } from "react";
import { ToDoContext } from "../Context/ToDoProvider";


const ToDoForm = () => {

    const { state, dispatch } = useContext(ToDoContext);
    const [task, setTask] = useState(' ');

    const handleSubmit = (e) => {
        e.preventDefault();
        const todo = {
            id: Math.random().toString(36).substring(2, 9),
            title: task,
            isComplete:false,
        }
        dispatch({ type: 'addTodo', payload: todo });
    }


    console.log(state);
  

    return (
        <div>
            <h3>Add Todo</h3>
            <form onSubmit={handleSubmit} action="">
                <label htmlFor="Todo">Task</label>
                <input type="text" name="todo" id="todo" onChange={(e)=>setTask(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ToDoForm;