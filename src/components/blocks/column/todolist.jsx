import React, { useState } from "react";
import ToDo from "./todo";

import { TaskListUlStyles } from "./styles";

const ToDoList = ({ addTaskReady, toDoList, column }) => {
  const [selectedClient, setSelectedClient] = useState("");

  function handleSelectChange(event) {
    setSelectedClient(event.target.value);
    addTaskReady(event.target.value);

    // console.log(toDoList);
    // console.log(event.target.value);
    // let myIndex = toDoList.indexOf(event.target.value);
    // console.log(myIndex);
    // if (myIndex !== -1) {
    //   toDoList.splice(myIndex, 1);
    // }
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
          {toDoList.map((todo) => {
            return <ToDo todo={todo} column={column} />;
          })}
        </select>
      </>
    );
  }
};

export default ToDoList;
