import React from "react";
import { TaskStyles } from "./styles";

const ToDo = ({ todo }) => {
  return <TaskStyles>{todo.task}</TaskStyles>;
};

export default ToDo;
