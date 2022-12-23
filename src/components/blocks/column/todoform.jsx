import React from "react";
import { FormStyles, ButtonStyles, InputStyles } from "./styles";

const ToDoForm = ({ handleSubmit, isShow, handleChange, userInput }) => {
  return isShow ? (
    <FormStyles onSubmit={handleSubmit}>
      <InputStyles
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
