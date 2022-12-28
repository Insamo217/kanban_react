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
    toDoList.forEach(function (item, i) {
      if (toDoList[i].name === event.target.value) {
        delete toDoList[i].name;
        let oldId = toDoList[i].id;
        let oldDescription = toDoList[i].description;
        delete toDoList[i].id;
        delete toDoList[i].description;
        addTaskReady(event.target.value, oldId, oldDescription);
      }
    });
  }

  function handleSelectChangeProgress(event) {
    setSelectedClientProgress(event.target.value);
    toDoList.forEach(function (item, i) {
      if (toDoList[i].name === event.target.value) {
        delete toDoList[i].name;
        let oldId = toDoList[i].id;
        let oldDescription = toDoList[i].description;
        delete toDoList[i].id;
        delete toDoList[i].description;
        addTaskProgress(event.target.value, oldId, oldDescription);
      }
    });
  }

  function handleSelectChangeFinished(event) {
    setSelectedClientFinished(event.target.value);
    toDoList.forEach(function (item, i) {
      if (toDoList[i].name === event.target.value) {
        delete toDoList[i].name;
        let oldId = toDoList[i].id;
        let oldDescription = toDoList[i].description;
        delete toDoList[i].id;
        delete toDoList[i].description;
        addTaskFinished(event.target.value, oldId, oldDescription);
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
          {toDoList.map((todo, i) => {
            return <ToDo key={i} todo={todo} view={view} />;
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
