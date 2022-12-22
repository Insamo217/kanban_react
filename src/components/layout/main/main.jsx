import React, { useState } from "react";
import Column from "components/blocks/column/column";
import { Wrapper } from "../page-wrapper/styles";
import { testList } from "mocks/list";
import ToDoList from "components/blocks/column/todolist";

function Main() {
  const [toDoList, setToDoList] = useState(testList);
  return (
    <Wrapper backGroundColor={"#0079BF"} as="section">
      <Column title="Backlog" taskList={<ToDoList toDoList={toDoList} />} />
      <Column title="Ready" />
      <Column title="In Progress" />
      <Column title="Finished" />
    </Wrapper>
  );
}

export default Main;
