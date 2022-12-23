import React, { useState } from "react";
import ToDo from "./todo";
import { TaskListUlStyles } from "./styles";

const ToDoList = ({ toDoList, column }) => {
  const [selectedClient, setSelectedClient] = useState("");
  function handleSelectChange(event) {
    setSelectedClient(event.target.value);
  }
  if (column === "Backlog") {
    return (
      <TaskListUlStyles>
        {toDoList.map((todo) => {
          return <ToDo todo={todo} column={column} />;
        })}
      </TaskListUlStyles>
    );
  } else {
    return (
      <select value={selectedClient} onChange={handleSelectChange}>
        {toDoList.map((todo) => {
          return <ToDo todo={todo} column={column} />;
        })}
      </select>
    );
  }
};

export default ToDoList;
