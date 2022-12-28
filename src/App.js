import React, { useState } from "react";
import PageWrapper from "components/layout/page-wrapper/page-wrapper";
import { Route, Routes } from "react-router-dom";
import DetailPage from "components/blocks/columns/DetailPage";

function App() {
  const [toDoList, setToDoList] = useState(
    JSON.parse(localStorage.getItem("tasksBacklog")) || []
  );

  const [toDoListReady, setToDoListReady] = useState(
    JSON.parse(localStorage.getItem("tasksReady")) || []
  );
  const [toDoListProgress, setToDoListProgress] = useState(
    JSON.parse(localStorage.getItem("tasksProgress")) || []
  );
  const [toDoListFinished, setToDoListFinished] = useState(
    JSON.parse(localStorage.getItem("tasksFinished")) || []
  );

  localStorage.setItem("tasksBacklog", JSON.stringify(toDoList));
  localStorage.setItem("tasksReady", JSON.stringify(toDoListReady));
  localStorage.setItem("tasksProgress", JSON.stringify(toDoListProgress));
  localStorage.setItem("tasksFinished", JSON.stringify(toDoListFinished));

  const addTask = (userInput) => {
    let copyBacklog = [...toDoList];
    if (userInput) {
      copyBacklog = [
        ...copyBacklog,
        { id: toDoList.length + 1, task: userInput },
      ];
      setToDoList(copyBacklog);
    }
  };

  const addTaskReady = (value, oldId) => {
    let copyReady = [...toDoListReady];
    copyReady = [...copyReady, { id: oldId, task: value }];
    setToDoListReady(copyReady);
  };

  const addTaskProgress = (value, oldId) => {
    let copyProgress = [...toDoListProgress];
    copyProgress = [...copyProgress, { id: oldId, task: value }];
    setToDoListProgress(copyProgress);
  };

  const addTaskFinished = (value, oldId) => {
    let copyFinished = [...toDoListFinished];
    copyFinished = [...copyFinished, { id: oldId, task: value }];
    setToDoListFinished(copyFinished);
  };

  return (
    <Routes>
      <Route path="/">
        <Route
          index
          element={
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
          }
        />
        <Route
          path="task/:id"
          element={
            <DetailPage
              tasksBacklog={toDoList}
              tasksReady={toDoListReady}
              tasksProgress={toDoListProgress}
              tasksFinished={toDoListFinished}
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
