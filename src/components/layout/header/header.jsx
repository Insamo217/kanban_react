import React from "react";
import Title from "./title/title";
import Profile from "components/blocks/Profile/Profile";
import { Wrapper } from "../page-wrapper/styles";

function Header() {
  return (
    <Wrapper backGroundColor={"#0067A3"} as="header">
      <Title name="Awesome Kanban Board" />
      <Profile />
    </Wrapper>
  );
}

export default Header;
