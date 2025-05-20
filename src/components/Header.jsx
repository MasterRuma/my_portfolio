import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  cursor: "pointer",
};

const mobileMenuStyle = {
  backgroundColor: "#222831",
  width: "100%",
  padding: "40px 20px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const hamburgerStyle = {
  fontSize: "24px",
  color: "#ffffff",
  cursor: "pointer",
  display: "none",
};

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const links = (
    <>
      <a
        href="#home"
        style={linkStyle}
        onClick={(e) => handleLinkClick(e, "#home")}
      >
        Home
      </a>
      <a
        href="#about"
        style={linkStyle}
        onClick={(e) => handleLinkClick(e, "#about")}
      >
        About Me
      </a>
      <a
        href="#skills"
        style={linkStyle}
        onClick={(e) => handleLinkClick(e, "#skills")}
      >
        Technique
      </a>
      <a
        href="#projects"
        style={linkStyle}
        onClick={(e) => handleLinkClick(e, "#projects")}
      >
        Projects
      </a>
      <a
        href="#contact"
        style={linkStyle}
        onClick={(e) => handleLinkClick(e, "#contact")}
      >
        Contact
      </a>
    </>
  );

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={headerStyle}
    >
      <div style={logoStyle}>Ruma_</div>

      {!isMobile && <nav style={navStyle}>{links}</nav>}

      {isMobile && (
        <>
          <div
            style={{ ...hamburgerStyle, display: "block" }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                key="mobileMenu"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3 }}
                style={{
                  ...mobileMenuStyle,
                  position: "fixed",
                  top: "50px",
                  right: 0,
                  height: "100vh",
                  zIndex: 999,
                }}
              >
                <button
                  onClick={() => setMenuOpen(false)}
                  style={{
                    alignSelf: "flex-end",
                    background: "none",
                    border: "none",
                    color: "#eeeeee",
                    fontSize: "20px",
                    cursor: "pointer",
                    marginBottom: "20px",
                  }}
                >
                  ✕
                </button>
                {links}
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </motion.header>
  );
};

export default Header;
