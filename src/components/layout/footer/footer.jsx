import React from "react";
import { Wrapper } from "../page-wrapper/styles";

import Tasks from "components/layout/footer/tasks/tasks";
import Autor from "components/layout/footer/autor/autor";

function Footer({ toDoList, toDoListFinished }) {
  return (
    <Wrapper backGroundColor={"#0067A3"} as="footer">
      <Tasks active={toDoList} finished={toDoListFinished} />
      <Autor name="Alex Bolibok" year={2022} />
    </Wrapper>
  );
}

export default Footer;
