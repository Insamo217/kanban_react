import React from "react";
import { ColumnStyles, TaskListDivStyles } from "./styles";

function Column(props) {
  return (
    <ColumnStyles>
      {props.title}
      <TaskListDivStyles>{props.taskList}</TaskListDivStyles>
      {props.taskForm}
      {props.formSelector}
      {props.formAddCard}
    </ColumnStyles>
  );
}

export default Column;