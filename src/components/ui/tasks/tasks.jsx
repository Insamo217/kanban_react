import React from "react";
import { TasksStyles, TasksStylesSpan } from "./styles";

function Tasks(props) {
  return (
    <TasksStyles>
      <TasksStylesSpan>Active tasks:{props.active.length}</TasksStylesSpan>
      <TasksStylesSpan>Finished tasks: {props.finished.length}</TasksStylesSpan>
    </TasksStyles>
  );
}

export default Tasks;
