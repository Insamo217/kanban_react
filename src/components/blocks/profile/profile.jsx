import React, { useState } from "react";
import logo from "assets/logo.png";
import { ProfileStyles, Wrapper, Links, Arrow } from "./styles";

function PopUp({ isShow }) {
  return isShow ? (
    <Wrapper>
      <Links>Profile</Links>
      <Links>Log Out</Links>
      <Links
        onClick={() => {
          localStorage.clear();
          window.location.reload();
        }}
      >
        Reset board
      </Links>
    </Wrapper>
  ) : null;
}

function ArrowDir({ isShow }) {
  return isShow ? (
    <Arrow rotate={"-135deg"}></Arrow>
  ) : (
    <Arrow rotate={"45deg"}></Arrow>
  );
}

function Profile() {
  const [isShow, setIsShow] = useState(true);
  return (
    <>
      <PopUp isShow={!isShow} />
      <ProfileStyles onClick={() => setIsShow(!isShow)}>
        <img src={logo} alt="" />
        <ArrowDir isShow={!isShow} />
      </ProfileStyles>
    </>
  );
}

export default Profile;
