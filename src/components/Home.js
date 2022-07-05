import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { API } from "../api/api";
import { API2 } from "../api/api";

export function Home() {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);

  function getStudents() {
    fetch(`${API}`, {
      method: "GET"
    }).then((res) => res.json().then((data) => setStudents(data)));
  }
  useEffect(() => {
    getStudents();
  }, []);

  function getTeachers() {
    fetch(`${API2}`, {
      method: "GET"
    }).then((res) => res.json().then((data) => setTeachers(data)));
  }
  useEffect(() => {
    getTeachers();
  }, []);

  return (
    <div className="homecard">
      <Card sx={{ maxWidth: 345 }} style={{ width: 300 }}>
        <CardActionArea>
          <CardMedia
            style={{ height: 300 }}
            component="img"
            height="140"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoNIAvwy7XHEcjdj5h-0hguaxPf0agN4joBw&usqp=CAU"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Teachers
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <b> No. of teachers : {`${teachers.length}`}</b>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            onClick={() => navigate(`/teacher`)}
            size="small"
            color="primary"
          >
            View Details
          </Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345 }} style={{ width: 300 }}>
        <CardActionArea>
          <CardMedia
            style={{ height: 300 }}
            component="img"
            height="140"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbo2O0IPk83DYZ5IEfkXbzg3TLMqgcxSADYA&usqp=CAU"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Students
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <b> No. of Students :{`${students.length}`}</b>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            onClick={() => navigate(`/student`)}
            size="small"
            color="primary"
          >
            View Details
          </Button>
        </CardActions>
      </Card>
      <br />
    </div>
  );
}
