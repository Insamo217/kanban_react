import styled from "styled-components";

export const ColumnStyles = styled.div`
  background-color: #ebecf0;
  padding: 10px;
  width: 20%;
  border-radius: 10px;
  font-size: 18px;
  position: relative;
`;

export const TaskStyles = styled.li`
  list-style: none;
  background-color: #ffffff;
  margin-bottom: 10px;
  padding: 10px 5px;
  font-size: 18px;
`;

export const TaskListUlStyles = styled.ul`
  padding: 0px;
  margin: 0px 5px;
`;

export const TaskListDivStyles = styled.div`
  height: 500px;
  overflow: auto;
  margin: 20px 0 40px;
`;

export const FormStyles = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  position: absolute;
  bottom: 10px;
`;

export const ButtonStyles = styled.button`
  width: 130px;
  color: #5e6c84;
  font-size: 18px;
  background-color: white;
  border-radius: 10px;
  border: none;
  padding: 5px;
  cursor: pointer;
  :hover {
    color: white;
    background-color: #0079bf;
    transition: 0.5s;
  }
`;

export const InputStyles = styled.input`
  margin-bottom: 15px;
  border: none;
  height: 20px;
`;
