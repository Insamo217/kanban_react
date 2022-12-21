import React from "react";
import Column from "components/blocks/column/column";
import { Wrapper } from "../page-wrapper/styles";

function Main() {
  return (
    <Wrapper backGroundColor={"#0079BF"} as="section">
      <Column title="Backlog" />
      <Column title="Ready" />
      <Column title="In Progress" />
      <Column title="Finished" />
    </Wrapper>
  );
}

export default Main;
