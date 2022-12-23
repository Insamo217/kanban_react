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
  return (
    <Wrapper backGroundColor={"#0079BF"} as="section">
      <Column
        title="Backlog"
        taskList={<ToDoList toDoList={toDoList} column="Backlog" />}
        addCard={<AddCard addTask={addTask} />}
      />
      <Column
        title="Ready"
        taskList={<ToDoList toDoList={toDoListReady} column="Backlog" />}
        addCardBackLog={
          <AddCardBackLog
            taskListBackLog={
              <ToDoList toDoList={toDoList} addTaskReady={addTaskReady} />
            }
          />
        }
      />
      <Column title="In Progress" />
      <Column title="Finished" />
    </Wrapper>
  );
}

export default Main;
