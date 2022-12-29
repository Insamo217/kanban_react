import React from "react";
import { TitleStyles } from "./slyles";

function Title(props) {
  return <TitleStyles>{props.name}</TitleStyles>;
}

export default Title;
