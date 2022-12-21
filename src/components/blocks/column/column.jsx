import React from "react";
import { ColumnStyles } from "./styles";

function Column(props) {
  return (
    <ColumnStyles>
      <p>{props.title}</p>
    </ColumnStyles>
  );
}

export default Column;
