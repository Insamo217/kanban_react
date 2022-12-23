import React from "react";
import { TaskStyles } from "./styles";

const ToDo = ({ todo, column }) => {
  if (column === "Backlog") {
    return <TaskStyles>{todo.task}</TaskStyles>;
  } else {
    return <option value={todo.id + "val"}>{todo.task}</option>;
  }
};

export default ToDo;
