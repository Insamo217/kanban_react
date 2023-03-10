import React from "react";
import { ButtonStyles } from "./styles";
import { FormStyles, InputStyles, TextAreaStyles } from "./styles";

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
        <TextAreaStyles
          value={description}
          placeholder="Enter description..."
          rows="5"
          onChange={handleDescription}
        ></TextAreaStyles>
        <ButtonStyles>Submit</ButtonStyles>
      </FormStyles>
    </>
  ) : null;
};

export default ToDoForm;
