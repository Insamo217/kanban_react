import React, { useState } from "react";
import Header from "components/layout/header/header";
import Footer from "components/layout/footer/footer";
import { useParams } from "react-router-dom";

function DetailPage({
  tasksBacklog,
  tasksReady,
  tasksProgress,
  tasksFinished,
}) {
  const { id } = useParams();

  let arrColumnsTasks = [
    tasksBacklog,
    tasksReady,
    tasksProgress,
    tasksFinished,
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
    setEdit(false);
  };

  let content = null;
  if (!edit & (task !== 0)) {
    content = (
      <div>
        <h2>{task.name}</h2>
        <p>{task.description}</p>
        <button onClick={handleEdit}>Edit</button>
      </div>
    );
  } else if (edit && task !== 0) {
    content = (
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => handleName(e.target.value)}
        />{" "}
        <br />
        <textarea
          value={description}
          onChange={(e) => handleDescription(e.target.value)}
          rows="15"
          cols="23"
        ></textarea>
        <br />
        <button onClick={handleSave}>Save</button>
      </div>
    );
  } else if (task === 0) {
    content = (
      <h1>
        Task with ID <em>{id}</em> was not found
      </h1>
    );
  }
  return (
    <>
      <Header />
      {content}
      <Footer />
    </>
  );
}

export default DetailPage;
