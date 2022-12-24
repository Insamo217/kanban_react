import React, { useState } from "react";
import { ButtonStyles } from "./styles";

//AddingList
function TaskList({ isShow, taskList }) {
  return isShow ? <>{taskList}</> : null;
}
//AddCardBackLog
function FormSelector({ taskList }) {
  const [isShow, setIsShow] = useState(true);

  return (
    <>
      <TaskList isShow={!isShow} taskList={taskList} />
      <ButtonStyles onClick={() => setIsShow(!isShow)}>+ Add Card</ButtonStyles>
    </>
  );
}

export default FormSelector;
