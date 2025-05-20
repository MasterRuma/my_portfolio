import { Box, LinearProgress, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      style={{
        minHeight: "100vh", // ✅ 화면 최소 높이 확보
        height: "auto", // ✅ 내용 길이에 따라 늘어남
        backgroundColor: "#222831",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "auto",
        padding: "20px",
      }}
    >
      <h1
        style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "30px" }}
      >
        Technique
      </h1>

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
            FrontEnd
          </Typography>
          {skillItem("HTML, CSS, JS", "중급", 60)}
          {skillItem("React", "중급", 50)}
          {skillItem("Thymeleaf", "초급", 45)}
          {skillItem("Bootstrap", "초급", 30)}
          {skillItem("Flutter", "초급", 20)}
        </Box>

        {/* Modeling Card */}
        <Box sx={cardStyle}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            BackEnd
          </Typography>
          {skillItem("Spring Boot", "중급", 65)}
          {skillItem("JPA", "중급", 50)}
          {skillItem("MySQL", "중급", 50)}
          {skillItem("Python", "초급", 30)}
          {skillItem("Oracle Cloud", "초급", 30)}
          {skillItem("Redis", "초급", 20)}
          {skillItem("Go", "초급", 10)}
          {skillItem("Twine", "초급", 10)}
          {skillItem("Oracle DB", "초급", 5)}
        </Box>

        {/* ETC Card */}
        <Box sx={cardStyle}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            ETC
          </Typography>
          {skillItem("컴퓨터 견적", "중급", 60)}
          {skillItem("Stable Diffusion Web UI", "초급", 40)}
          {skillItem("ChatGPT", "초급", 30)}
          {skillItem("Adobe Premiere Pro", "초급", 30)}
          {skillItem("Adobe After Effect", "초급", 20)}
          {skillItem("Ollama", "초급", 20)}
        </Box>
      </Box>
    </motion.div>
  );
};

export default Technique;
