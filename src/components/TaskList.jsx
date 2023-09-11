import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../actions/index";

const TaskList = () => {
  const {tasks} = useSelector((state) => state.task);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    console.log("Deleting task with ID:", id);
    dispatch(deleteTodo(id));
  };

  console.log("Tasks:", tasks);

  return (
    <>
      <div className="tasklist">
        <div className="display-task">
          <h3>Display Tasks:</h3>
          <ul className="tasks">
            {
              tasks?.map((task) => (
                <li className="task" key={task.id}>
                    <p> {task.text}</p>
                 
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(task.id)}
                  >
                    Delete
                  </button>
                
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TaskList;

