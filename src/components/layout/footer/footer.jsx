import React from "react";
import { Wrapper } from "../page-wrapper/styles";

import Tasks from "components/ui/tasks/tasks";
import Autor from "components/ui/autor/autor";

function Footer({ toDoList, toDoListFinished }) {
  return (
    <Wrapper backGroundColor={"#0067A3"} as="footer">
      <Tasks active={toDoList} finished={toDoListFinished} />
      <Autor name="Alex" year={2022} />
    </Wrapper>
  );
}

export default Footer;
