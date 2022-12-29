import React from "react";
import { AutorStyles } from "./styles";

function Autor(props) {
  return (
    <AutorStyles>
      Kanban board by {props.name}, {props.year}
    </AutorStyles>
  );
}

export default Autor;
