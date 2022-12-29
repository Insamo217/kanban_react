import React, { useState } from "react";
import ToDoForm from "components/blocks/Forms/TodoForm";
import { ButtonStyles } from "./styles";

function Form({
  isShow,
  addTask,
  handleSubmit,
  handleChange,
  handleDescription,
  userInput,
  description,
}) {
  return isShow ? (
    <div>
      <ToDoForm
        addTask={addTask}
        isShow={isShow}
        userInput={userInput}
        handleDescription={handleDescription}
        description={description}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </div>
  ) : null;
}

function FormAddCard({ addTask }) {
  const [isShow, setIsShow] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [description, setdescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput, description);
    setIsShow(!isShow);
    setUserInput("");
  };
  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };
  const handleDescription = (e) => setdescription(e.currentTarget.value);
  return (
    <>
      <Form
        isShow={!isShow}
        addTask={addTask}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleDescription={handleDescription}
      />
      <ButtonStyles cursor={"pointer"} onClick={() => setIsShow(!isShow)}>
        + Add Card
      </ButtonStyles>
    </>
  );
}

export default FormAddCard;
