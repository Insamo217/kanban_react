import React from "react";
import { TaskStyles } from "./styles";
import { Link } from "react-router-dom";

const ToDo = ({ todo, view }) => {
  if (view === "ulList") {
    if (todo.name) {
      return (
        <>
          <TaskStyles>
            <Link key={todo.id} to={`/task/${todo.id}`}>
              {todo.name}
            </Link>
          </TaskStyles>
        </>
      );
    }
  } else {
    if (todo.name) {
      return (
        <option key={todo.id} value={todo.name}>
          {todo.name}
        </option>
      );
    }
  }
};
export default ToDo;
