import React, { useState } from "react";
import { ButtonStyles } from "./styles";

function TaskList({ isShow, taskList }) {
  return isShow ? <>{taskList}</> : null;
}

function FormSelector({ taskList }) {
  const [isShow, setIsShow] = useState(true);

  if (taskList.props.toDoList.length !== 0) {
    return (
      <>
        <TaskList isShow={!isShow} taskList={taskList} />
        <ButtonStyles
          cursor={"pointer"}
          color={"black"}
          onClick={() => setIsShow(!isShow)}
        >
          + Add Card
        </ButtonStyles>
      </>
    );
  } else if (taskList.props.toDoList.length === 0) {
    return (
      <>
        <TaskList isShow={isShow} />
        <ButtonStyles color={"#5e6c84"} disabled cursor={"auto"}>
          No tasks to add
        </ButtonStyles>
      </>
    );
  }
}

export default FormSelector;
