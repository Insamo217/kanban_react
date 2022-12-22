import React from "react";
import { ColumnStyles, TaskListDivStyles } from "./styles";

function Column(props) {
  return (
    <ColumnStyles>
      {props.title}
      <TaskListDivStyles>{props.taskList}</TaskListDivStyles>
      {props.taskForm}
    </ColumnStyles>
  );
}

export default Column;
