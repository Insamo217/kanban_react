import styled from "styled-components";

export const DetailPageStyles = styled.div`
  height: 80vh;
  background-color: #0d9aec;
  padding: 5px;
`;

export const DetailPageContent = styled.div`
  margin: 10px;
  padding: 5px 30px;
  background-color: #fdfdfd;
  height: 55vh;
  border-radius: 10px;
  position: relative;
`;

export const DetailPageButton = styled.button`
  position: absolute;
  bottom: 15px;
  width: 145px;
  color: white;
  font-size: 18px;
  background-color: #0d9aec;
  border-radius: 10px;
  border: none;
  padding: 5px;
  cursor: pointer;
  border: 2px solid #0d9aec;
  :hover {
    color: #0079bf;
    background-color: white;
    transition: 0.5s;
    border: 2px solid #0d9aec;
  }
`;

export const DetailPageInput = styled.input`
  margin: 10px 0 15px;
  border: 1px solid;
  height: 20px;
  padding: 5px;
  font-family: Roboto;
  width: 200px;
`;

export const DetailPageTextArea = styled.textarea`
  margin-bottom: 15px;
  border: 1px solid;
  padding: 5px;
  font-family: Roboto;
  width: 200px;
`;

export const DetailPageSpan = styled.span`
  position: absolute;
  right: 30px;
  top: 25px;
  font-size: 25px;
  cursor: pointer;
`;
