import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { API2 } from "../api/api";

import FormTeacher from "./FormTeacher";

const AddTeacher = () => {
  const [teacherDetails, setTeacherDetails] = useState({
    name: "",
    dept: "",
    image: "",
    salary: "",
    designation: "",
    allowance: ""
  });
  const navigate = useNavigate();
  const onAdd = (newTeacher) => {
    fetch(`${API2}`, {
      method: "POST",
      body: JSON.stringify(newTeacher),
      headers: { "Content-Type": "application/json" }
    }).then(() => navigate("/teacher"));
  };
  return (
    <div>
      <FormTeacher
        type={"Add"}
        teacherDetails={teacherDetails}
        onSubmit={onAdd}
      />
    </div>
  );
};

export default AddTeacher;
