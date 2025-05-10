import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      style={{
        minHeight: "100vh",
        backgroundColor: "#393e46", // 배경색
        color: "#eeeeee",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
      }}
    >
      <h1
        style={{
          fontSize: "32px",
          marginBottom: "20px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Contact
      </h1>
      <div
        style={{
          backgroundColor: "#222831", // 카드 배경색
          padding: "30px 40px",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
          width: "100%",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "10px", textAlign: "center" }}>Discord</h2>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            backgroundColor: "#393e46",
            color: "#eeeeee",
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            marginBottom: "20px",
            width: "100%",
          }}
        >
          <img
            src="https://img.icons8.com/ios-filled/24/ffffff/discord-logo.png"
            alt="Discord"
          />
          xxruma_xx
        </button>

        <h2 style={{ marginBottom: "10px", textAlign: "center" }}>Email</h2>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            backgroundColor: "#393e46",
            color: "#eeeeee",
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            width: "100%",
            marginBottom: "20px",
          }}
          onClick={() => window.open("mailto:oring2004@naver.com", "_blank")}
        >
          <img
            src="https://img.icons8.com/ios-filled/24/ffffff/new-post.png"
            alt="Email"
          />
          oring2004@naver.com
        </button>

        <h2 style={{ marginBottom: "10px", textAlign: "center" }}>GitHub</h2>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            backgroundColor: "#393e46",
            color: "#eeeeee",
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            width: "100%",
          }}
          onClick={() => window.open("https://github.com/MasterRuma", "_blank")}
        >
          <img
            src="https://img.icons8.com/ios-filled/24/ffffff/github.png"
            alt="GitHub"
          />
          MasterRuma
        </button>
      </div>
    </motion.div>
  );
};

export default Contact;
