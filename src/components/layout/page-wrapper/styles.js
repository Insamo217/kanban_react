import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 15px 30px;
  background-color: ${(props) => props.backGroundColor};
  min-height: ${(props) => props.height};
`;
