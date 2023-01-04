import React from "react";
import { AutorStyles } from "./styles";

function Autor({ name, year }) {
  return (
    <AutorStyles>
      Kanban board by {name}, {year}
    </AutorStyles>
  );
}

export default Autor;
