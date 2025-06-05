import { Button } from "@mui/material";
import React from 'react'
import { motion } from 'framer-motion';

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
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
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
    </motion.div>
  );
};

export default Introduce;
