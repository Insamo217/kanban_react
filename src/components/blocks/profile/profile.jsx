import React, { useState } from "react";
import logo from "assets/logo.png";
import { ProfileStyles, Wrapper, Links, Arrow } from "./styles";

function PopUp({ isShow }) {
  return isShow ? (
    <Wrapper>
      <Links href="/">Profile</Links>
      <Links href="/">Log Out</Links>
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
      <button
        onClick={() => {
          localStorage.clear();
          window.location.reload();
        }}
      >
        Reset
      </button>
      <ProfileStyles onClick={() => setIsShow(!isShow)}>
        <img src={logo} alt="" />
        <ArrowDir isShow={!isShow} />
      </ProfileStyles>
    </>
  );
}

export default Profile;
