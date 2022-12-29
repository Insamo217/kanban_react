import React from "react";
import Column from "components/blocks/Column/Column";
import { Wrapper } from "../page-wrapper/styles";
import ToDoList from "components/blocks/TaskList/TodoList";
import FormAddCard from "components/blocks/Forms/FormAddCard";
import FormSelector from "components/blocks/Forms/FormSelector";

function Main({
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
    <Wrapper backGroundColor={"#0079BF"} height={"80vh"} as="main">
      <Column
        title="Backlog"
        taskList={<ToDoList toDoList={toDoList} view="ulList" />}
        formAddCard={<FormAddCard addTask={addTask} />}
      />
      <Column
        title="Ready"
        taskList={<ToDoList toDoList={toDoListReady} view="ulList" />}
        formSelector={
          <FormSelector
            taskList={
              <ToDoList
                toDoList={toDoList}
                view="selectorReady"
                addTaskReady={addTaskReady}
              />
            }
          />
        }
      />
      <Column
        title="In Progress"
        taskList={<ToDoList toDoList={toDoListProgress} view="ulList" />}
        formSelector={
          <FormSelector
            taskList={
              <ToDoList
                toDoList={toDoListReady}
                view="selectorProgress"
                addTaskProgress={addTaskProgress}
              />
            }
          />
        }
      />
      <Column
        title="Finished"
        taskList={<ToDoList toDoList={toDoListFinished} view="ulList" />}
        formSelector={
          <FormSelector
            taskList={
              <ToDoList
                toDoList={toDoListProgress}
                view="selectorFinished"
                addTaskFinished={addTaskFinished}
              />
            }
          />
        }
      />
    </Wrapper>
  );
}

export default Main;
