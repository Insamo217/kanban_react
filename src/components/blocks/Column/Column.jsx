import React from "react";
import { ColumnStyles, TaskListDivStyles } from "./styles";

function Column({ title, taskList, taskForm, formAddCard, formSelector }) {
  return (
    <ColumnStyles>
      {title}
      <TaskListDivStyles>{taskList}</TaskListDivStyles>
      {taskForm}
      {formSelector}
      {formAddCard}
    </ColumnStyles>
  );
}

export default Column;
