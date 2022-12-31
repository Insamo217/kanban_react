import styled from "styled-components";

export const ColumnStyles = styled.div`
  background-color: #ebecf0;
  padding: 10px;
  width: 20%;
  border-radius: 10px;
  position: relative;
  @media (max-width: 768px) {
    width: auto;
    margin: 10px;
  }
`;

export const TaskListDivStyles = styled.div`
  overflow: auto;
  margin: 20px 0 155px;
  min-height: 150px;
  max-height: 300px;
`;
