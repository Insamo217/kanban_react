import React, { useState, useEffect } from "react";
import PageWrapper from "components/layout/page-wrapper/page-wrapper";
import { Route, Routes } from "react-router-dom";
import DetailPage from "components/blocks/DetailPage/DetailPage";
import GlobalStyle from "globalStyles";

function App() {
  const TasksBacklog =
    JSON.parse(window.localStorage.getItem("tasksBacklog")) || [];
  const [toDoList, setToDoList] = useState(TasksBacklog);
  const TasksReady =
    JSON.parse(window.localStorage.getItem("tasksReady")) || [];
  const [toDoListReady, setToDoListReady] = useState(TasksReady);
  const TasksProgress =
    JSON.parse(window.localStorage.getItem("tasksProgress")) || [];
  const [toDoListProgress, setToDoListProgress] = useState(TasksProgress);
  const TasksFinished =
    JSON.parse(window.localStorage.getItem("tasksFinished")) || [];
  const [toDoListFinished, setToDoListFinished] = useState(TasksFinished);

  useEffect(() => {
    window.localStorage.setItem("tasksBacklog", JSON.stringify(toDoList));
    window.localStorage.setItem("tasksReady", JSON.stringify(toDoListReady));
    window.localStorage.setItem(
      "tasksProgress",
      JSON.stringify(toDoListProgress)
    );
    window.localStorage.setItem(
      "tasksFinished",
      JSON.stringify(toDoListFinished)
    );
  }, [toDoList, toDoListReady, toDoListProgress, toDoListFinished]);

  const addTask = (userInput, description) => {
    let copyBacklog = [...toDoList];
    if (userInput) {
      copyBacklog = [
        ...copyBacklog,
        {
          id: new Date().getTime(),
          name: userInput,
          description: description,
        },
      ];
      setToDoList(copyBacklog);
    }
  };

  const addTaskReady = (value, oldId, oldDescription) => {
    let copyReady = [...toDoListReady];
    console.log(oldDescription);
    copyReady = [
      ...copyReady,
      { id: oldId, name: value, description: oldDescription },
    ];
    setToDoListReady(copyReady);
  };

  const addTaskProgress = (value, oldId, oldDescription) => {
    let copyProgress = [...toDoListProgress];
    copyProgress = [
      ...copyProgress,
      { id: oldId, name: value, description: oldDescription },
    ];
    setToDoListProgress(copyProgress);
  };

  const addTaskFinished = (value, oldId, oldDescription) => {
    let copyFinished = [...toDoListFinished];
    copyFinished = [
      ...copyFinished,
      { id: oldId, name: value, description: oldDescription },
    ];
    setToDoListFinished(copyFinished);
  };

  return (
    <Routes>
      <Route path="/">
        <Route
          index
          element={
            <>
              <GlobalStyle />
              <PageWrapper
                addTask={addTask}
                addTaskReady={addTaskReady}
                addTaskProgress={addTaskProgress}
                addTaskFinished={addTaskFinished}
                toDoList={toDoList}
                toDoListReady={toDoListReady}
                toDoListProgress={toDoListProgress}
                toDoListFinished={toDoListFinished}
              />
            </>
          }
        />
        <Route
          path="task/:id/"
          element={
            <>
              <GlobalStyle />
              <DetailPage
                toDoList={toDoList}
                toDoListReady={toDoListReady}
                toDoListProgress={toDoListProgress}
                toDoListFinished={toDoListFinished}
                setToDoList={setToDoList}
              />
            </>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
