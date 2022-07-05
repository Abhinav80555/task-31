import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

import React from "react";

import { useNavigate } from "react-router-dom";

const Header = ({ mode, setMode }) => {
  const navigate = useNavigate();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button onClick={() => navigate("/")} color="inherit">
            Home
          </Button>
          <Button onClick={() => navigate("/add")} color="inherit">
            Add Student
          </Button>
          <Button onClick={() => navigate("/addteacher")} color="inherit">
            Add Teacher
          </Button>
          <Button
            style={{ marginLeft: "auto" }}
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            color="inherit"
          >
            {mode === "light" ? "dark" : "light"} Theme
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
