import React, { useState } from "react";
import Column from "components/blocks/columns/Column";
import { Wrapper } from "../page-wrapper/styles";
//import { testList } from "mocks/list";
import ToDoList from "components/blocks/columns/todolist";
import FormAddCard from "components/blocks/columns/FormAddCard";
import FormSelector from "components/blocks/columns/FormSelector";

function Main() {
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
  const addTaskReady = (value) => {
    let copyReady = [...toDoListReady];
    copyReady = [...copyReady, { id: toDoListReady.length + 1, task: value }];
    setToDoListReady(copyReady);
  };
  const addTaskProgress = (value) => {
    let copyProgress = [...toDoListProgress];
    copyProgress = [
      ...copyProgress,
      { id: toDoListProgress.length + 1, task: value },
    ];
    setToDoListProgress(copyProgress);
  };
  const addTaskFinished = (value) => {
    let copyFinished = [...toDoListFinished];
    copyFinished = [
      ...copyFinished,
      { id: toDoListFinished.length + 1, task: value },
    ];
    setToDoListFinished(copyFinished);
  };
  return (
    <Wrapper backGroundColor={"#0079BF"} as="section">
      <Column
        title="Backlog"
        taskList={<ToDoList toDoList={toDoList} view="ulList" />}
        formAddCard={<FormAddCard addTask={addTask} />}
      />
      <Column
        title="Ready"
        taskList={<ToDoList toDoList={toDoListReady} view="ulList" />}
        formSelector={
          <FormSelector
            taskList={
              <ToDoList
                toDoList={toDoList}
                view="selectorReady"
                addTaskReady={addTaskReady}
              />
            }
          />
        }
      />
      <Column
        title="In Progress"
        taskList={<ToDoList toDoList={toDoListProgress} view="ulList" />}
        formSelector={
          <FormSelector
            taskList={
              <ToDoList
                toDoList={toDoListReady}
                view="selectorProgress"
                addTaskProgress={addTaskProgress}
              />
            }
          />
        }
      />
      <Column
        title="Finished"
        taskList={<ToDoList toDoList={toDoListFinished} view="ulList" />}
        formSelector={
          <FormSelector
            taskList={
              <ToDoList
                toDoList={toDoListProgress}
                view="selectorFinished"
                addTaskFinished={addTaskFinished}
              />
            }
          />
        }
      />
    </Wrapper>
  );
}

export default Main;
