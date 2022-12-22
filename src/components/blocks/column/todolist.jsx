import React from "react";
import ToDo from "./todo";
import { TaskListUlStyles } from "./styles";

const ToDoList = ({ toDoList, status }) => {
  return (
    <TaskListUlStyles>
      {toDoList.map((todo) => {
        return <ToDo todo={todo} />;
      })}
    </TaskListUlStyles>
  );
};

export default ToDoList;
