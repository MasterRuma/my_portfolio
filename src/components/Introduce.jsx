import { Button } from "@mui/material";
import React from "react";

const Introduce = () => {
  const gradientTextStyle = {
    backgroundImage:
      "linear-gradient(to right, rgb(150, 9, 245), rgb(95, 19, 247))",
    WebkitBackgroundClip: "text",
    color: "transparent",
    display: "inline-block",
    fontWeight: "bold",
    fontSize: "3rem",
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#222831",
        color: "white",
        padding: "20px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <h1 style={gradientTextStyle}>Ruma_</h1>
      <p style={{color: "grey"}}>Web Full Stack Developer & Streamer</p>
      <div style={{ marginTop: "10px" }}>
        <Button 
          variant="contained" 
          style={{ marginRight: "10px" }} 
          onClick={() => window.location.href = '#projects'}
        >
          Projects
        </Button>
        <Button 
          variant="outlined" 
          onClick={() => window.location.href = '#contact'}
        >
          Contact me
        </Button>
      </div>
    </div>
  );
};

export default Introduce;
