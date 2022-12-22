import React from "react";
import ToDo from "./todo";
import { TaskListUlStyles } from "./styles";

const ToDoList = ({ toDoList }) => {
  return (
    <TaskListUlStyles>
      {toDoList.map((todo) => {
        return <ToDo todo={todo} />;
      })}
    </TaskListUlStyles>
  );
};

export default ToDoList;
