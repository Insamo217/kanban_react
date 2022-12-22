import React, { useState } from "react";
import Column from "components/blocks/column/column";
import { Wrapper } from "../page-wrapper/styles";
import { testList } from "mocks/list";
import ToDoList from "components/blocks/column/todolist";
import AddCard from "components/blocks/column/addcard";

function Main() {
  const [toDoList, setToDoList] = useState(testList);
  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput }];
    setToDoList(copy);
  };
  return (
    <Wrapper backGroundColor={"#0079BF"} as="section">
      <Column
        title="Backlog"
        taskList={<ToDoList toDoList={toDoList} />}
        addCard={<AddCard addTask={addTask} />}
      />
      <Column title="Ready" />
      <Column title="In Progress" />
      <Column title="Finished" />
    </Wrapper>
  );
}

export default Main;
