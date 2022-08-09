import React, { useState } from "react";
import TodoArea from "./TextArea";
import { ImCross } from "react-icons/im";
import { VscCircleLargeOutline } from "react-icons/vsc";
import { AiOutlineCheckCircle } from "react-icons/ai";
import "./Todo.css";

function Todo({ todos, completeTodo, deleteTodo, updatedTodo, show }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  const handleUpdate = (value) => {
    updatedTodo(edit.id, value);
    setEdit({                 //resetting id and value
      id: null,
      value: "",
    });
  };
  const styleComplete = {
    display: show === 1 ? "none" : "block",  // filtering todos 
  };
  const styleIncomplete = {
    display: show === 2 ? "none" : "block",
  };
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
      style={todo.isComplete ? styleComplete : styleIncomplete}
    >
      <div className="todo-container" key={todo.id}>
        <div className="div-contents">
          {!todo.isComplete?(<VscCircleLargeOutline
            onClick={() => completeTodo(todo.id)}
          ></VscCircleLargeOutline>):
          <AiOutlineCheckCircle onClick={() => completeTodo(todo.id)}></AiOutlineCheckCircle>}
          <div
            className="todo-div"
            onDoubleClick={() => setEdit({ id: todo.id, value: todo.text })}
          >
            {edit.id === todo.id ? (     // update todo                         
              <TodoArea edit={edit} onSubmit={handleUpdate} />
            ) : (
              <div className={todo.isComplete?"complete":""}>{todo.text}</div>
            )}
          </div>
          <ImCross
            className="todo-icon"
            onClick={() => deleteTodo(todo.id)}
          ></ImCross>
        </div>
      </div>
    </div>
  ));
}

export default Todo;
