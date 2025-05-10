import { Container, Box, Typography, Paper } from "@mui/material";
import React from "react";

const AboutMe = () => {
  return (
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
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "30px" }}>About Me</h1>

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
            src="/vite.svg"
            alt="code"
            sx={{
              width: { xs: "100%", md: "50%" },
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
              저는 22세 개발자이고, 현재 WEB3 풀스택 과정을 밟고 있습니다.
              웹 개발과 유지보수에 열정을 가지고 있으며, 
              끊임없이 지식을 심화하고자 노력하고 있습니다.
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
                <Typography>WEB3 풀스택 개발자</Typography>
              </Paper>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutMe;
