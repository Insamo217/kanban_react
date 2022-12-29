import React from "react";
import { TaskStyles } from "./styles";
import { Link } from "react-router-dom";

const ToDo = ({ todo, view, key }) => {
  if (view === "ulList") {
    if (todo.name) {
      return (
        <>
          <TaskStyles>
            <Link to={`/task/${todo.id}`}>{todo.name}</Link>
          </TaskStyles>
        </>
      );
    }
  } else {
    if (todo.name) {
      return <option value={todo.name}>{todo.name}</option>;
    }
  }
};
export default ToDo;
