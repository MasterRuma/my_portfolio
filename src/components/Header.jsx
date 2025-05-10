import React from "react";
import { motion } from "framer-motion";

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#222831",
  padding: "10px 40px",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  height: "50px",
  zIndex: 1000,
};

const navStyle = {
  display: "flex",
  gap: "20px",
  color: "#ffffff",
  fontSize: "14px",
};

const logoStyle = {
  fontWeight: "bold",
  fontSize: "16px",
  backgroundImage:
    "linear-gradient(to right, rgb(150, 9, 245), rgb(95, 19, 247))",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const linkStyle = {
  textDecoration: "none",
  color: "#ffffff",
};

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={headerStyle}
    >
      <div style={logoStyle}>Ruma_</div>
      <nav style={navStyle}>
        <a href="#home" style={linkStyle}>
          Home
        </a>
        <a href="#about" style={linkStyle}>
          About Me
        </a>
        <a href="#skills" style={linkStyle}>
          Technique
        </a>
        <a href="#projects" style={linkStyle}>
          Projects
        </a>
        <a href="#work" style={linkStyle}>
          Work
        </a>
        <a href="#contact" style={linkStyle}>
          Contact
        </a>
      </nav>
    </motion.header>
  );
};

export default Header;
