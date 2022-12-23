import React from "react";
import { TaskStyles } from "./styles";

const ToDo = ({ todo, column }) => {
  if (column === "Backlog") {
    return <TaskStyles>{todo.task}</TaskStyles>;
  } else {
    return <option value={todo.task}>{todo.task}</option>;
  }
};

export default ToDo;
