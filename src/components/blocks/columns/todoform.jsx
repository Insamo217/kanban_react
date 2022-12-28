import React from "react";
import { FormStyles, ButtonStyles, InputStyles } from "./styles";

const ToDoForm = ({
  handleSubmit,
  isShow,
  handleChange,
  userInput,
  handleDescription,
  description,
}) => {
  return isShow ? (
    <>
      <FormStyles onSubmit={handleSubmit}>
        <InputStyles
          value={userInput}
          type="text"
          onChange={handleChange}
          placeholder="Enter task..."
        />
        <textarea
          value={description}
          placeholder="Enter description..."
          rows="5"
          cols="19"
          onChange={handleDescription}
        ></textarea>
        <ButtonStyles>Submit</ButtonStyles>
      </FormStyles>
    </>
  ) : null;
};

export default ToDoForm;
