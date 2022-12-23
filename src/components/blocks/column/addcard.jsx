import React, { useState } from "react";
import ToDoForm from "components/blocks/column/todoform";
import { ButtonStyles } from "./styles";

function Form({ isShow, addTask }) {
  return isShow ? (
    <div>
      <ToDoForm addTask={addTask} isShow={isShow} />
    </div>
  ) : null;
}

function AddCard({ addTask }) {
  const [isShow, setIsShow] = useState(true);
  return (
    <>
      <Form isShow={!isShow} addTask={addTask} />
      <ButtonStyles onClick={() => setIsShow(!isShow)}>Add Card</ButtonStyles>
    </>
  );
}

export default AddCard;
