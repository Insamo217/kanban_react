import React, { useState } from "react";
import ToDoForm from "components/blocks/column/todoform";
import { ButtonStyles } from "./styles";

function Form({ isShow, addTask, handleSubmit, handleChange, userInput }) {
  return isShow ? (
    <div>
      <ToDoForm
        addTask={addTask}
        isShow={isShow}
        userInput={userInput}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </div>
  ) : null;
}

function AddCard({ addTask }) {
  const [isShow, setIsShow] = useState(true);
  const [userInput, setUserInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setIsShow(!isShow);
    setUserInput("");
  };
  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };
  return (
    <>
      <Form
        isShow={!isShow}
        addTask={addTask}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <ButtonStyles onClick={() => setIsShow(!isShow)}>+ Add Card</ButtonStyles>
    </>
  );
}

export default AddCard;
