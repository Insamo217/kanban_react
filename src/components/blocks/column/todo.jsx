import React from "react";
import { TaskStyles } from "./styles";

const ToDo = ({ todo, column }) => {
  if (column === "Backlog") {
    if (todo.task) {
      return <TaskStyles>{todo.task}</TaskStyles>;
    }
  } else {
    if (todo.task) {
      return <option value={todo.task}>{todo.task}</option>;
    }
  }
};
export default ToDo;
