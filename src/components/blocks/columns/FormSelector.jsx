import React, { useState } from "react";
import { ButtonStyles } from "./styles";

function TaskList({ isShow, taskList }) {
  console.log("test" + { taskList });
  return isShow ? <>{taskList}</> : null;
}

function FormSelector({ taskList }) {
  const [isShow, setIsShow] = useState(true);

  if (taskList.props.toDoList.length !== 0) {
    return (
      <>
        <TaskList isShow={!isShow} taskList={taskList} />
        <ButtonStyles onClick={() => setIsShow(!isShow)}>
          + Add Card
        </ButtonStyles>
      </>
    );
  } else if (taskList.props.toDoList.length === 0) {
    return (
      <>
        <TaskList isShow={!isShow} />
        <ButtonStyles disabled>No Task</ButtonStyles>
      </>
    );
  }
}

export default FormSelector;
