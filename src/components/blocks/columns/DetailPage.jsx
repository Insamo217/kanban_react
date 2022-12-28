import React from "react";
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

  let match = [tasksBacklog, tasksReady, tasksProgress, tasksFinished];
  let task = 0;
  match.forEach((item) => {
    item.forEach((item) => {
      if (item.id === +id) {
        task = item;
      }
    });
  });

  let content = null;
  if (task !== 0) {
    content = (
      <div>
        <h2>{task.name}</h2>
        <p>{task.description}</p>
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
