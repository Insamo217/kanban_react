import React, { useState } from "react";
import Header from "components/layout/header/header";
import Footer from "components/layout/footer/footer";
import { Link } from "react-router-dom";
import {
  DetailPageStyles,
  DetailPageContent,
  DetailPageButton,
  DetailPageTextArea,
  DetailPageInput,
  DetailPageSpan,
} from "./styles";

import { useParams } from "react-router-dom";

function DetailPage({
  toDoList,
  toDoListReady,
  toDoListProgress,
  toDoListFinished,
  setToDoList,
}) {
  const { id } = useParams();

  let arrColumnsTasks = [
    toDoList,
    toDoListReady,
    toDoListProgress,
    toDoListFinished,
  ];
  let task = 0;
  arrColumnsTasks.forEach((element) => {
    element.forEach((element) => {
      if (element.id === +id) {
        task = element;
      }
    });
  });

  const [edit, setEdit] = useState(false);
  const [description, setDescription] = useState(task.description);
  const [name, setName] = useState(task.name);

  const handleDescription = (description) => {
    setDescription(description);
  };
  const handleName = (name) => {
    setName(name);
  };
  const handleEdit = () => {
    setEdit(true);
  };

  const handleSave = () => {
    task.description = description;
    task.name = name;
    setToDoList([...toDoList]);
    setEdit(false);
  };

  let content = null;
  if (!edit & (task !== 0)) {
    if (task.description) {
      content = (
        <div>
          <h2>{task.name}</h2>
          <p>{task.description}</p>
          <DetailPageButton onClick={handleEdit}>Edit</DetailPageButton>
        </div>
      );
    } else {
      content = (
        <div>
          <h2>{task.name}</h2>
          <p>This task has no description</p>
          <DetailPageButton onClick={handleEdit}>Edit</DetailPageButton>
        </div>
      );
    }
  } else if (edit && task !== 0) {
    content = (
      <>
        <span>Title:</span>
        <br />
        <DetailPageInput
          type="text"
          value={name}
          onChange={(e) => handleName(e.target.value)}
        />
        <br />
        <span>Description:</span>
        <br />
        <DetailPageTextArea
          value={description}
          onChange={(e) => handleDescription(e.target.value)}
          rows="8"
        ></DetailPageTextArea>
        <br />
        <DetailPageButton onClick={handleSave}>Save</DetailPageButton>
      </>
    );
  } else if (task === 0) {
    content = <h2>404</h2>;
  }
  return (
    <>
      <Header />
      <DetailPageStyles>
        <DetailPageContent>
          {content}
          <Link to="/">
            <DetailPageSpan>✖</DetailPageSpan>
          </Link>
        </DetailPageContent>
      </DetailPageStyles>
      <Footer toDoList={toDoList} toDoListFinished={toDoListFinished} />
    </>
  );
}

export default DetailPage;
