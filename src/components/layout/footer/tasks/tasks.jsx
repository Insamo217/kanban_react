import React from "react";
import { TasksStyles, TasksStylesSpan } from "./styles";

function Tasks({ active, finished }) {
  return (
    <TasksStyles>
      <TasksStylesSpan>Active tasks:{active.length}</TasksStylesSpan>
      <TasksStylesSpan>Finished tasks: {finished.length}</TasksStylesSpan>
    </TasksStyles>
  );
}

export default Tasks;
