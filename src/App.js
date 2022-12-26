import React from "react";
import PageWrapper from "components/layout/page-wrapper/page-wrapper";
import TaskDetail from "components/blocks/columns/TaskDetail";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<PageWrapper />} />
        <Route path="/task/:id" element={<TaskDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
