import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import React from "react";

import { useNavigate } from "react-router-dom";

const TeacherCard = ({ data, id, deleteTeacher }) => {
  const navigate = useNavigate();
  return (
    <Card variant="outlined" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={`${data.name}`}
        height="140"
        image={`${data.image}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Department : {`${data.dept}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          style={{ color: "red" }}
          onClick={() => deleteTeacher(id)}
          size="small"
        >
          Delete
        </Button>
        <Button onClick={() => navigate(`/teacher/view/${id}`)} size="small">
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default TeacherCard;
