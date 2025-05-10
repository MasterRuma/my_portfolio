import { Box, LinearProgress, Typography } from "@mui/material";
import React from "react";

const Technique = () => {
  const cardStyle = {
    backgroundColor: "#31363F",
    padding: "20px",
    borderRadius: "10px",
    width: "300px",
    color: "white",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  };

  const getBarColor = (level) => {
    if (level === "중급") {
      return { "& .MuiLinearProgress-bar": { backgroundColor: "#FFD700" } };
    }
    return {};
  };

  const skillItem = (title, level, value) => (
    <div>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
        <Typography variant="body1">{title}</Typography>
        <Typography sx={{ fontSize: "0.9em" }}>{level}</Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={getBarColor(level)}
      />
    </div>
  );

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#222831",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "auto",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "30px" }}>Technique</h1>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          flexWrap: "wrap",
          gap: "30px",
          marginTop: "30px",
        }}
      >
        {/* Development Card */}
        <Box sx={cardStyle}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Development
          </Typography>
          {skillItem("Spring Boot", "중급", 65)}
          {skillItem("HTML, CSS", "중급", 60)}
          {skillItem("React", "중급", 50)}
          {skillItem("Thymeleaf", "초급", 45)}
          {skillItem("Python", "초급", 30)}
          {skillItem("Flutter", "초급", 20)}
          {skillItem("Twine", "초급", 10)}
        </Box>

        {/* Modeling Card */}
        <Box sx={cardStyle}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Video Editing
          </Typography>
          {skillItem("Adobe Premiere Pro", "초급", 30)}
          {skillItem("Adobe After Effect", "초급", 20)}
        </Box>

        {/* ETC Card */}
        <Box sx={cardStyle}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            ETC
          </Typography>
          {skillItem("컴퓨터 견적", "중급", 60)}
          {skillItem("Stable Diffusion Web UI", "초급", 40)}
          {skillItem("ChatGPT", "초급", 30)}
          {skillItem("Ollama", "초급", 20)}
        </Box>
      </Box>
    </div>
  );
};

export default Technique;
