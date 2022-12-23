import React, { useState } from "react";
import { ButtonStyles } from "./styles";

function AddingList({ isShow, taskListBackLog }) {
  return isShow ? <>{taskListBackLog}</> : null;
}

function AddCardBackLog({ taskListBackLog }) {
  const [isShow, setIsShow] = useState(true);

  return (
    <>
      <AddingList isShow={!isShow} taskListBackLog={taskListBackLog} />
      <ButtonStyles onClick={() => setIsShow(!isShow)}>+ Add Card</ButtonStyles>
    </>
  );
}

export default AddCardBackLog;
