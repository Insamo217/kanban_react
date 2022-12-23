import React, { useState } from "react";
import { FormStyles, ButtonStyles } from "./styles";

const ToDoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");
  const [isShow, setIsShow] = useState(true);
  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setIsShow(!isShow);
    setUserInput("");
  };
  return isShow ? (
    <FormStyles onSubmit={handleSubmit}>
      <input
        value={userInput}
        type="text"
        onChange={handleChange}
        placeholder="Enter task..."
      />
      <ButtonStyles>Submit</ButtonStyles>
    </FormStyles>
  ) : null;
};

export default ToDoForm;
