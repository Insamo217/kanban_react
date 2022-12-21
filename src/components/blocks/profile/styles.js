import styled from "styled-components";

export const ProfileStyles = styled.div`
  background-color: white;
  padding: 2px 8px;
  border-radius: 23px;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  padding: 5px;
  position: fixed;
  top: 80px;
  width: 135px;
  right: 20px;
  background-color: #ffffff;
  border-radius: 5px;
`;

export const Links = styled.a`
  font-size: 14px;
  line-height: 16px;
  color: #000000;
  display: block;
  text-decoration: auto;
  margin-bottom: 5px;
  &:hover {
    color: #0061a4;
  }
`;

export const Arrow = styled.i`
  border: solid #ffffff;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  right: 15px;
  top: 36px;
  position: absolute;
  transform: rotate(${(props) => props.rotate});
`;
