import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 15px 20px;
  background-color: ${(props) => props.backGroundColor};
`;
