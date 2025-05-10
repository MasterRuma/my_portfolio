import React from 'react'
import { motion } from 'framer-motion';

const cardStyle = {
  backgroundColor: "#222831",
  borderRadius: "12px",
  padding: "20px",
  width: "300px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const buttonStyle = {
  padding: "8px 16px",
  borderRadius: "8px",
  textDecoration: "none",
  display: "inline-block",
  color: "#ffffff",
  fontSize: "0.9rem",
  backgroundColor: "#3b82f6",
};

const hoverStyle = {
  transform: "scale(1.05)",
};

const ProjectCard = ({ title, description, links }) => (
  <div
    style={{
      ...cardStyle,
      height: "220px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}
  >
    <div>
      <h2
        style={{
          fontSize: "1.1rem",
          fontWeight: "bold",
          marginBottom: "10px", // 여백 추가
        }}
      >
        {title}
      </h2>
      {description && <p>{description}</p>}
    </div>
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "10px" }}>
      {links.map((link, idx) => (
        <a
          key={idx}
          href={link.url || "#"}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...buttonStyle,
            backgroundColor: link.color || "#3b82f6",
            cursor: link.url ? "pointer" : "default",
            opacity: link.url ? 1 : 0.6,
          }}
        >
          {link.label}
        </a>
      ))}
    </div>
  </div>
);


const projects = [
  {
    title: "유튜브",
    description: "풍선타워디펜스6 한국 크리에이터 / 국내 유일 크리에이터 코드 소유",
    links: [{ label: "유튜브", url: "https://www.youtube.com/@Ruma_" }],
  },
  {
    title: "치지직",
    description: "풍선타워디펜스6 한국 크리에이터 / 국내 유일 크리에이터 코드 소유",
    links: [{ label: "치지직", url: "https://chzzk.naver.com/79da067468e514afe638190172d5c42b" }],
  },
  {
    title: "MovieMall",
    description: "영화와 굿즈를 한번에 구매할 수 있는 사이트",
    links: [{ label: "링크 예정", url: null }],
  },
  {
    title: "아카라이브 온도계 나무게임 도박 예측기록기",
    description: "최신 기록들을 조회한 후, 다음 수를 예측하는 사이트",
    links: [
      { label: "사이트", url: "http://arcapredict.kro.kr/" },
      { label: "GitHub", url: "https://github.com/MasterRuma/arcaPredict", color: "#1e40af" },
    ],
  },
  {
    title: "풍선타워디펜스6 랜덤 뽑기",
    description: "풍선타워디펜스6 맵 / 영웅 / 일차 / 군사 / 마법 / 지원 랜덤 뽑기 사이트",
    links: [
      { label: "사이트", url: "https://btd6random-pick.netlify.app/" },
      { label: "GitHub", url: "https://github.com/MasterRuma/random_btd6", color: "#1e40af" },
    ],
  },
  {
    title: "풍선타워디펜스6 고급 도전 알림 봇",
    description: "닌자키위 API를 조회한 후 최신 고급 도전의 정보를 가져다주는 디스코드 봇",
    links: [{ label: "GitHub", url: "https://github.com/MasterRuma/BTD6-Advanced-Alert-Bot", color: "#1e40af" }],
  },
  {
    title: "간단한 유튜브 다운로더",
    description: "링크만 입력한 후 본인이 원하는 설정에 따라 다운로드 할 수 있는 안드로이드 앱",
    links: [{ label: "GitHub", url: "https://github.com/MasterRuma/Flutter_youtube", color: "#1e40af" }],
  },
  {
    title: "DICE RPG",
    description: "순수 운이 있어야 되는 운빨망겜 웹게임",
    links: [{ label: "사이트", url: "https://xxrumaxx.itch.io/dicerpg" }],
  },
  {
    title: "유튜브 미러 영상 바로가기",
    description: "유튜브 링크를 입력하면 미러 영상 사이트로 리다이렉트 되는 사이트",
    links: [{ label: "사이트", url: "https://masterruma.github.io/YoutubeMirror/" }],
  },
  {
    title: "버터 클리커",
    description: "트릭컬 리바이브 중 버터의 클리커 사이트",
    links: [{ label: "사이트", url: "https://masterruma.github.io/butter_clicker/" }],
  },
  {
    title: "URL 공유 형식의 메모장",
    description: "다른 사람과의 공유가 용이하도록 URL 형식의 메모장 사이트",
    links: [{ label: "사이트", url: "https://masterruma.github.io/simplenotepad/" }],
  },
  {
    title: "전자레인지 와트 / 시간 계산기",
    description: "전자레인지의 와트를 시간으로 변환하는 사이트",
    links: [{ label: "사이트", url: "https://masterruma.github.io/micro_timer/" }],
  },
];

const Project = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      style={{
        minHeight: "100vh",
        backgroundColor: "#393e46",
        color: "#eeeeee",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 20px",
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "30px" }}>Projects</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </motion.div>
  );
};

export default Project;
