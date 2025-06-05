import { Container, Box, Typography, Paper } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "#393e46",
          color: "#eeeeee",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 20px",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          {/* 제목 */}
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginBottom: "30px",
            }}
          >
            About Me
          </h1>

          {/* 본문 콘텐츠: 이미지 + 텍스트 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 10,
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            {/* 왼쪽 이미지 */}
            <Box
              component="img"
              src="/ruma.png"
              alt="code"
              sx={{
                width: "100%",
                maxWidth: { xs: "100%", sm: "400px" }, // ✅ 최대 크기 제한
                borderRadius: 2,
                boxShadow: 3,
              }}
            />

            {/* 오른쪽 텍스트 카드 */}
            <Box sx={{ width: { xs: "100%", md: "50%" } }}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                반갑습니다!
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                저는 22세의 개발자로, 현재 WEB3 풀스택 개발 과정을 이수
                중입니다. 웹 개발과 유지보수에 대한 열정을 바탕으로, 사용자
                경험(UX) 개선과 효율적인 시스템 구조 설계에 집중하며 프로젝트를
                진행하고 있습니다. 앞으로도 깊이 있는 지식 습득과 실무 경험을
                쌓아, WEB3 분야에서 전문성을 갖춘 개발자로 성장하는 것이
                목표입니다.
              </Typography>

              {/* 나이 & 훈련 카드 */}
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Paper
                  sx={{
                    flex: 1,
                    p: 2,
                    backgroundColor: "#5c6166",
                    color: "#eeeeee",
                  }}
                  elevation={3}
                >
                  <Typography fontWeight="bold">나이</Typography>
                  <Typography>22살</Typography>
                </Paper>
                <Paper
                  sx={{
                    flex: 1,
                    p: 2,
                    backgroundColor: "#5c6166",
                    color: "#eeeeee",
                  }}
                  elevation={3}
                >
                  <Typography fontWeight="bold">훈련</Typography>
                  <Typography>WEB3 풀스택 개발</Typography>
                </Paper>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </motion.div>
  );
};

export default AboutMe;
