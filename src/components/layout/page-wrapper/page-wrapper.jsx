import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Main from "../main/main";

function PageWrapper({
  addTask,
  addTaskReady,
  addTaskProgress,
  addTaskFinished,
  toDoList,
  toDoListReady,
  toDoListProgress,
  toDoListFinished,
}) {
  return (
    <>
      <Header />
      <Main
        addTask={addTask}
        addTaskReady={addTaskReady}
        addTaskProgress={addTaskProgress}
        addTaskFinished={addTaskFinished}
        toDoList={toDoList}
        toDoListReady={toDoListReady}
        toDoListProgress={toDoListProgress}
        toDoListFinished={toDoListFinished}
      />
      <Footer />
    </>
  );
}

export default PageWrapper;
