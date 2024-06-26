
import OldUseState from "./OldUseState";
import ReducerUse from "./ReducerUse";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";


const Home = () => {

    return (
        <div>
            <h4>Old Use State</h4>
            <OldUseState></OldUseState>
            <br/>
            <h4>Use Reducer</h4>
            <ReducerUse></ReducerUse>
            <h4>TOdo FOrm</h4>
            <ToDoForm></ToDoForm>
            <h2>ToDoList:</h2>
            <ToDoList></ToDoList>
        </div>
    );
}

export default Home;