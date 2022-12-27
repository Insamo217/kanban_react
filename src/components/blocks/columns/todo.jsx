import React from "react";
import { TaskStyles } from "./styles";
import { Link } from "react-router-dom";
import TaskDetail from "./TaskDetail";

const ToDo = ({ todo, view, key }) => {
  if (view === "ulList") {
    if (todo.task) {
      return (
        <>
          <TaskStyles key={todo.id}>
            <Link to={`/task/${todo.id}`}>{todo.task}</Link>
          </TaskStyles>
        </>
      );
    }
  } else {
    if (todo.task) {
      return (
        <option key={todo.id} value={todo.task}>
          {todo.task}
        </option>
      );
    }
  }
};
export default ToDo;
