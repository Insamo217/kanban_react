import styled from "styled-components";

export const ButtonStyles = styled.button`
  width: 145px;
  color: ${(props) => props.color};
  font-size: 18px;
  background-color: white;
  border-radius: 10px;
  border: none;
  padding: 5px;
  cursor: ${(props) => props.cursor};
  :not([disabled]):hover {
    color: white;
    background-color: #0079bf;
    transition: 0.5s;
  }
`;
