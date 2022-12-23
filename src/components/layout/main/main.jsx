import React, { useState } from "react";
import Column from "components/blocks/column/column";
import { Wrapper } from "../page-wrapper/styles";
import { testList } from "mocks/list";
import ToDoList from "components/blocks/column/todolist";
import AddCard from "components/blocks/column/addcard";
import AddCardBackLog from "components/blocks/column/listInBacklog";

function Main() {
  const [toDoList, setToDoList] = useState(testList);
  const addTask = (userInput) => {
    let copy = [...toDoList];
    if (userInput) {
      copy = [...copy, { id: toDoList.length + 1, task: userInput }];
      setToDoList(copy);
      console.log(copy);
    }
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
        addCardBackLog={
          <AddCardBackLog taskListBackLog={<ToDoList toDoList={toDoList} />} />
        }
      />
      <Column title="In Progress" />
      <Column title="Finished" />
    </Wrapper>
  );
}

export default Main;
