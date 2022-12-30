import React, { useState } from "react";
import ToDo from "./Todo";

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
        let oldId = toDoList[i].id;
        delete toDoList[i].id;
        let oldDescription = toDoList[i].description;
        let myIndex = toDoList.indexOf(toDoList[i]);
        if (myIndex !== -1) {
          toDoList.splice(myIndex, 1);
        }
        addTaskReady(event.target.value, oldId, oldDescription);
      }
    });
  }

  function handleSelectChangeProgress(event) {
    setSelectedClientProgress(event.target.value);
    toDoList.forEach(function (item, i) {
      if (toDoList[i].name === event.target.value) {
        let oldId = toDoList[i].id;
        delete toDoList[i].id;
        let oldDescription = toDoList[i].description;
        let myIndex = toDoList.indexOf(toDoList[i]);
        if (myIndex !== -1) {
          toDoList.splice(myIndex, 1);
        }
        addTaskProgress(event.target.value, oldId, oldDescription);
      }
    });
  }

  function handleSelectChangeFinished(event) {
    setSelectedClientFinished(event.target.value);
    toDoList.forEach(function (item, i) {
      if (toDoList[i].name === event.target.value) {
        let oldId = toDoList[i].id;
        delete toDoList[i].id;
        let oldDescription = toDoList[i].description;
        let myIndex = toDoList.indexOf(toDoList[i]);
        if (myIndex !== -1) {
          toDoList.splice(myIndex, 1);
        }
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
          <option key={2}>Backlog list</option>
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
          <option key={3}>Ready list</option>
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
          <option key={4}>In progress list</option>
          {toDoList.map((todo) => {
            return <ToDo todo={todo} view={view} />;
          })}
        </SelectStyles>
      </>
    );
  }
};

export default ToDoList;