import React, { useState } from "react";
import ToDo from "./todo";

import { TaskListUlStyles } from "./styles";

const ToDoList = ({
  addTaskReady,
  addTaskProgress,
  addTaskFinished,
  toDoList,
  view,
}) => {
  const [selectedClientReady, setSelectedClientReady] = useState("");
  const [selectedClientProgress, setSelectedClientProgress] = useState("");
  const [selectedClientFinished, setSelectedClientFinished] = useState("");

  function handleSelectChangeReady(event) {
    setSelectedClientReady(event.target.value);
    addTaskReady(event.target.value);
    toDoList.forEach(function (item, i) {
      if (toDoList[i].task === event.target.value) {
        delete toDoList[i].task;
      }
    });
  }

  function handleSelectChangeProgress(event) {
    setSelectedClientProgress(event.target.value);
    addTaskProgress(event.target.value);
    toDoList.forEach(function (item, i) {
      if (toDoList[i].task === event.target.value) {
        delete toDoList[i].task;
      }
    });
  }

  function handleSelectChangeFinished(event) {
    setSelectedClientFinished(event.target.value);
    addTaskFinished(event.target.value);
    toDoList.forEach(function (item, i) {
      if (toDoList[i].task === event.target.value) {
        delete toDoList[i].task;
      }
    });
  }

  if (view === "ulList") {
    return (
      <TaskListUlStyles>
        {toDoList.map((todo) => {
          return <ToDo todo={todo} view={view} />;
        })}
      </TaskListUlStyles>
    );
  } else if (view === "selectorReady") {
    return (
      <>
        <select value={selectedClientReady} onChange={handleSelectChangeReady}>
          <option>Backlog list</option>
          {toDoList.map((todo) => {
            return <ToDo todo={todo} view={view} />;
          })}
        </select>
      </>
    );
  } else if (view === "selectorProgress") {
    return (
      <>
        <select
          value={selectedClientProgress}
          onChange={handleSelectChangeProgress}
        >
          <option>Ready list</option>
          {toDoList.map((todo) => {
            return <ToDo todo={todo} view={view} />;
          })}
        </select>
      </>
    );
  } else if (view === "selectorFinished") {
    return (
      <>
        <select
          value={selectedClientFinished}
          onChange={handleSelectChangeFinished}
        >
          <option>In progress list</option>
          {toDoList.map((todo) => {
            return <ToDo todo={todo} view={view} />;
          })}
        </select>
      </>
    );
  }
};

export default ToDoList;
