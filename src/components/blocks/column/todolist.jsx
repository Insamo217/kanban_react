import React, { useState } from "react";
import ToDo from "./todo";

import { TaskListUlStyles } from "./styles";

const ToDoList = ({ addTaskReady, toDoList, column }) => {
  const [selectedClient, setSelectedClient] = useState("");

  function handleSelectChange(event) {
    setSelectedClient(event.target.value);
    addTaskReady(event.target.value);
    toDoList.forEach(function (item, i) {
      if (toDoList[i].task === event.target.value) {
        delete toDoList[i].task;
      }
    });
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
      <>
        <select value={selectedClient} onChange={handleSelectChange}>
          <option>Выбери таск</option>
          {toDoList.map((todo) => {
            return <ToDo todo={todo} column={column} />;
          })}
        </select>
      </>
    );
  }
};

export default ToDoList;
