import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { API2 } from "../api/api";

import FormTeacher from "./FormTeacher";

const EditTeacher = () => {
  const { id } = useParams();

  const [teacherDetails, setTeacherDetails] = useState({
    name: "",
    dept: "",
    image: "",
    salary: "",
    designation: "",
    allowance: ""
  });

  useEffect(() => {
    fetch(`${API2}/${id}`)
      .then((response) => response.json())
      .then((data) =>
        setTeacherDetails({
          name: data.name,
          dept: data.dept,
          image: data.image,
          salary: data.salary,
          designation: data.designation,
          allowance: data.allowance
        })
      );
  }, []);
  const navigate = useNavigate();
  const onEdit = (updatedData) => {
    fetch(`${API2}/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedData),
      headers: { "Content-Type": "application/json" }
    }).then(() => navigate("/teacher"));
  };
  return (
    <div>
      <FormTeacher
        type={"Edit"}
        teacherDetails={teacherDetails}
        onSubmit={onEdit}
      />
    </div>
  );
};

export default EditTeacher;
