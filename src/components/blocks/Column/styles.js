import styled from "styled-components";

export const ColumnStyles = styled.div`
  background-color: #ebecf0;
  padding: 10px;
  width: 20%;
  border-radius: 10px;
  position: relative;
`;

export const TaskListDivStyles = styled.div`
  overflow: auto;
  margin: 20px 0 155px;
  min-height: 150px;
  max-height: 300px;
`;

export const FormStyles = styled.form`
  display: flex;
  flex-direction: column;
  width: 93%;
  position: absolute;
  bottom: 10px;
`;

export const InputStyles = styled.input`
  margin-bottom: 15px;
  border: none;
  height: 20px;
  padding: 5px;
  font-family: Roboto;
`;

export const TextAreaStyles = styled.textarea`
  margin-bottom: 15px;
  border: none;
  padding: 5px;
  font-family: Roboto;
`;
