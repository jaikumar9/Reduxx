import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/index";



function addNewTask() {
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    const handleAddTask = () => { // Event handler to add the task
        const task = inputRef.current.value.trim();
        if (task !== "") {
            dispatch(addTodo(task));
            inputRef.current.value = "";
        }

        console.log(task)
    };


    return (
        <>
            <div className="task-component">
                <div className="add-task">
                    <input
                        type="text"
                        placeholder="Add task here..."
                        ref={inputRef}
                        className="taskInput"
                    />
                    <button onClick={handleAddTask}>
                         Add Task
                    </button>
                </div>
            </div>
        </>
    )

};

export default addNewTask



