import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import React, { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import { API2 } from "../api/api";

import SalaryTable from "./SalaryTable";

const ViewTeacher = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [teacher, setTeacher] = useState([]);
  useEffect(() => {
    fetch(`${API2}/${id}`)
      .then((res) => res.json())
      .then((data) => setTeacher(data));
  }, [id]);
  const amount = {
    salary: teacher.salary,
    allowance: teacher.allowance
  };
  const totalPackage = amount
    ? Object.values(amount).reduce((acc, sum) => acc + sum, 0)
    : 0;

  if (!teacher.name)
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  return (
    <Card
      variant="outlined"
      className="view"
      sx={{ maxWidth: 600, maxHeight: 700 }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={teacher.image}
          alt={teacher.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            {teacher.name}
          </Typography>
          <Typography gutterBottom variant="h6" color="text.secondary">
            Department : {teacher.dept}
          </Typography>
          <Typography gutterBottom variant="h6" color="dark">
            Total Salary : {totalPackage}
          </Typography>
          <SalaryTable amount={amount} />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          className="edit"
          onClick={() => navigate(`/teacher/edit/${id}`)}
          size="small"
          color="primary"
        >
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};

export default ViewTeacher;
