import React from "react";
import { ColumnStyles, TaskListDivStyles } from "./styles";

function Column(props) {
  return (
    <ColumnStyles>
      {props.title}
      <TaskListDivStyles>{props.taskList}</TaskListDivStyles>
    </ColumnStyles>
  );
}

export default Column;
