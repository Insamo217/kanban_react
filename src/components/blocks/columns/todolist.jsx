import React, { useState } from "react";
import ToDo from "./todo";

import { TaskListUlStyles, SelectStyles } from "./styles";

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
        delete toDoList[i].id;
      }
    });
  }

  function handleSelectChangeProgress(event) {
    setSelectedClientProgress(event.target.value);
    addTaskProgress(event.target.value);
    toDoList.forEach(function (item, i) {
      if (toDoList[i].task === event.target.value) {
        delete toDoList[i].task;
        delete toDoList[i].id;
      }
    });
  }

  function handleSelectChangeFinished(event) {
    setSelectedClientFinished(event.target.value);
    addTaskFinished(event.target.value);
    toDoList.forEach(function (item, i) {
      if (toDoList[i].task === event.target.value) {
        delete toDoList[i].task;
        delete toDoList[i].id;
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
        <SelectStyles
          value={selectedClientReady}
          onChange={handleSelectChangeReady}
        >
          <option>Backlog list</option>
          {toDoList.map((todo) => {
            return <ToDo todo={todo} view={view} />;
          })}
        </SelectStyles>
      </>
    );
  } else if (view === "selectorProgress") {
    return (
      <>
        <SelectStyles
          value={selectedClientProgress}
          onChange={handleSelectChangeProgress}
        >
          <option>Ready list</option>
          {toDoList.map((todo) => {
            return <ToDo todo={todo} view={view} />;
          })}
        </SelectStyles>
      </>
    );
  } else if (view === "selectorFinished") {
    return (
      <>
        <SelectStyles
          value={selectedClientFinished}
          onChange={handleSelectChangeFinished}
        >
          <option>In progress list</option>
          {toDoList.map((todo) => {
            return <ToDo todo={todo} view={view} />;
          })}
        </SelectStyles>
      </>
    );
  }
};

export default ToDoList;
