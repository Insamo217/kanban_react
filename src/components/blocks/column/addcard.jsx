import React, { useState } from "react";
import ToDoForm from "components/blocks/column/todoform";

function Form({ isShow, addTask }) {
  return isShow ? (
    <div>
      <ToDoForm addTask={addTask} />
    </div>
  ) : null;
}

function AddCard({ addTask }) {
  const [isShow, setIsShow] = useState(true);
  return (
    <>
      <Form isShow={!isShow} addTask={addTask} />
      <button onClick={() => setIsShow(!isShow)}>Add Card</button>
    </>
  );
}

export default AddCard;
