import styled from "styled-components";

export const ColumnStyles = styled.div`
  background-color: #ebecf0;
  padding: 10px;
  width: 20%;
  border-radius: 10px;
  position: relative;
`;

export const TaskStyles = styled.li`
  list-style: none;
  background-color: #ffffff;
  margin-bottom: 10px;
  padding: 10px 5px;
`;

export const TaskListUlStyles = styled.ul`
  padding: 0px;
  margin: 0px 5px;
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

export const InputStyles = styled.input`
  margin-bottom: 15px;
  border: none;
  height: 20px;
  padding: 5px;
`;

export const TextAreaStyles = styled.textarea`
  margin-bottom: 15px;
  border: none;
  padding: 5px;
`;

export const SelectStyles = styled.select`
  height: 30px;
  color: black;
  font-size: 18px;
  background-color: white;
  border-radius: 10px;
  border: none;
  width: 150px;
  position: absolute;
`;
