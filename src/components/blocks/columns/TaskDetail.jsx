import React from "react";
import Header from "components/layout/header/header";
import Footer from "components/layout/footer/footer";
import { Link, useParams } from "react-router-dom";

function TaskDetail() {
  const params = useParams();
  const prodId = params.id;

  return (
    <>
      <Header />
      <h2>Id: {prodId}</h2>
      <Link to="/">Back</Link>
      <Footer />
    </>
  );
}

export default TaskDetail;
