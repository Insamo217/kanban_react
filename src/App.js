import React, { useState } from "react";
import PageWrapper from "components/layout/page-wrapper/page-wrapper";
import { Route, Routes } from "react-router-dom";
import DetailPage from "components/blocks/DetailPage/DetailPage";
import GlobalStyle from "globalStyles";

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
                tasksBacklog={toDoList}
                tasksReady={toDoListReady}
                tasksProgress={toDoListProgress}
                tasksFinished={toDoListFinished}
              />
            </>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
