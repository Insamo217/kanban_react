import styled from "styled-components";

export const ProfileStyles = styled.div`
  background-color: white;
  padding: 2px 8px;
  border-radius: 23px;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  padding: 10px;
  position: absolute;
  top: 80px;
  width: 120px;
  right: 10px;
  background-color: #ffffff;
  border-radius: 5px;
  z-index: 1;
`;

export const Links = styled.p`
  font-size: 14px;
  color: #000000;
  display: block;
  -webkit-text-decoration: auto;
  text-decoration: auto;
  margin: 0 0 15px;
  cursor: pointer;
  &:hover {
    color: #0061a4;
    font-weight: bold;
  }
`;

export const Arrow = styled.i`
  border: solid #ffffff;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  right: 14px;
  top: 30px;
  position: absolute;
  transform: rotate(${(props) => props.rotate});
`;
