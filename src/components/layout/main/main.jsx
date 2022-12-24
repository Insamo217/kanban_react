import React, { useState } from "react";
import Column from "components/blocks/column/column";
import { Wrapper } from "../page-wrapper/styles";
import { testList } from "mocks/list";
import ToDoList from "components/blocks/column/todolist";
import AddCard from "components/blocks/column/addcard";
import AddCardBackLog from "components/blocks/column/listInBacklog";

function Main() {
  const [toDoList, setToDoList] = useState(testList);
  const [toDoListReady, setToDoListReady] = useState([]);
  const [toDoListProgress, setToDoListProgress] = useState([]);
  const [toDoListFinished, setToDoListFinished] = useState([]);
  const addTask = (userInput) => {
    let copy = [...toDoList];
    if (userInput) {
      copy = [...copy, { id: toDoList.length + 1, task: userInput }];
      setToDoList(copy);
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
        addCard={<AddCard addTask={addTask} />}
      />
      <Column
        title="Ready"
        taskList={<ToDoList toDoList={toDoListReady} view="ulList" />}
        addCardBackLog={
          <AddCardBackLog
            taskListBackLog={
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
        addCardBackLog={
          <AddCardBackLog
            taskListBackLog={
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
        addCardBackLog={
          <AddCardBackLog
            taskListBackLog={
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
