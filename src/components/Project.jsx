import React, { useState } from "react";
import { motion } from "framer-motion";
import "../css/Project.css";

const cardStyle = {
  backgroundColor: "#222831",
  borderRadius: "12px",
  padding: "20px",
  width: "100%",
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

const ProjectCard = ({ title, description, links, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    viewport={{ once: true }}
    style={{
      ...cardStyle,
      height: "220px",
    }}
  >
    <div>
      <h2
        style={{ fontSize: "1.1rem", fontWeight: "bold", marginBottom: "10px" }}
      >
        {title}
      </h2>
      {description && <p>{description}</p>}
    </div>
    <div
      style={{
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        marginTop: "10px",
      }}
    >
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
  </motion.div>
);

const projects = [
  {
    title: "유튜브 / 치지직",
    description:
      "풍선 타워 디펜스 6(BTD6) 관련 콘텐츠를 제작하는 한국 크리에이터입니다. 국내에서 유일하게 크리에이터 코드를 보유하고 있습니다.",
    links: [
      { label: "유튜브", url: "https://www.youtube.com/@Ruma_" },
      {
        label: "치지직",
        url: "https://chzzk.naver.com/79da067468e514afe638190172d5c42b",
      },
    ],
  },
  {
    title: "MovieMall",
    description:
      "영화 티켓과 관련 굿즈를 한 번에 구매할 수 있는 올인원 영화 쇼핑 플랫폼입니다.",
    links: [
      { label: "사이트", url: "https://moviemall.netlify.app/" },
      { label: "문서", url: "https://rebel-class-593.notion.site/Portfolio-1fa9c78b33808025874ac8b60c6abd8d" },
    ],
  },
  {
    title: "풍선타워디펜스6 영토전 관리 봇",
    description:
      "풍선타워디펜스6 ‘영토전’ 이벤트 중 점령 현황 수집을 돕는 디스코드 봇과 웹사이트",
    links: [
      { label: "사이트", url: "https://bwsd-ct-tiles-info.netlify.app/" },
      { label: "문서", url: "https://rebel-class-593.notion.site/Portfolio-1fa9c78b33808025874ac8b60c6abd8d#2079c78b338080c29195c32a1773bfa8" },
      {
        label: "봇 GitHub",
        url: "https://github.com/MasterRuma/CTTileManagerBot",
        color: "#1e40af",
      },
      {
        label: "웹 GitHub",
        url: "https://github.com/MasterRuma/BTD6_CT_Management_System_Frontend",
        color: "#1e40af",
      },
    ],
  },
  {
    title: "커뮤니티 미니게임 예측 기록기",
    description:
      "커뮤니티 미니게임의 최신 기록을 조회하고, 알고리즘을 통해 다음 결과를 예측할 수 있는 분석 웹사이트입니다.",
    links: [
      { label: "사이트", url: "http://arcapredict.kro.kr/" },
      {
        label: "문서",
        url: "https://rebel-class-593.notion.site/Portfolio-1fa9c78b33808025874ac8b60c6abd8d#1fa9c78b3380808c8ecfc2edb7e68f7f",
      },
      {
        label: "GitHub",
        url: "https://github.com/MasterRuma/arcaPredict",
        color: "#1e40af",
      },
    ],
  },
  {
    title: "풍선타워디펜스6 랜덤 뽑기",
    description:
      "BTD6 플레이어를 위한 맵, 영웅, 군사, 마법, 지원 등 다양한 요소를 무작위로 조합해주는 전략 보조 툴입니다.",
    links: [
      { label: "사이트", url: "https://btd6random-pick.netlify.app/" },
      {
        label: "문서",
        url: "https://rebel-class-593.notion.site/Portfolio-1fa9c78b33808025874ac8b60c6abd8d#1fa9c78b338080b2b06cee25b7ce02ba",
      },
      {
        label: "GitHub",
        url: "https://github.com/MasterRuma/random_btd6",
        color: "#1e40af",
      },
    ],
  },
  {
    title: "풍선타워디펜스6 고급 도전 알림 봇",
    description:
      "닌자키위 공식 API를 통해 최신 고급 도전 정보를 실시간으로 조회하고 알림을 제공하는 디스코드 봇입니다.",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/MasterRuma/BTD6-Advanced-Alert-Bot",
        color: "#1e40af",
      },
    ],
  },
  {
    title: "간단한 유튜브 다운로더",
    description:
      "링크만 입력하면 원하는 화질과 포맷으로 유튜브 영상을 다운로드할 수 있는 Android 앱입니다.",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/MasterRuma/Flutter_youtube",
        color: "#1e40af",
      },
    ],
  },
  {
    title: "DICE RPG",
    description:
      "모든 것이 운에 의해 결정되는 주사위 기반 웹 RPG 게임으로, 전투와 스토리가 확률에 따라 전개됩니다.",
    links: [{ label: "사이트", url: "https://xxrumaxx.itch.io/dicerpg" }],
  },
  {
    title: "유튜브 미러 영상 바로가기",
    description:
      "유튜브 영상 링크를 입력하면 자동으로 미러링 가능한 대체 사이트로 리다이렉션 해주는 도구입니다.",
    links: [
      { label: "사이트", url: "https://masterruma.github.io/YoutubeMirror/" },
    ],
  },
  {
    title: "버터 클리커",
    description:
      "트릭컬 리바이브의 '버터' 캐릭터를 주제로 한 웹 기반 클리커 게임입니다.",
    links: [
      { label: "사이트", url: "https://masterruma.github.io/butter_clicker/" },
    ],
  },
  {
    title: "URL 공유 형식의 메모장",
    description:
      "입력한 내용을 URL로 생성하여 타인과 쉽게 공유할 수 있는 간단한 메모장 웹앱입니다.",
    links: [
      { label: "사이트", url: "https://masterruma.github.io/simplenotepad/" },
    ],
  },
  {
    title: "전자레인지 와트 / 시간 계산기",
    description:
      "다른 전자레인지의 출력(W)에 따라 조리 시간을 계산해주는 유틸리티 웹앱입니다.",
    links: [
      { label: "사이트", url: "https://masterruma.github.io/micro_timer/" },
    ],
  },
];

const Project = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 8);

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
      <h1
        style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "30px" }}
      >
        Projects
      </h1>

      {/* ✅ Grid Layout */}
      <div className="project-grid">
        {visibleProjects.map((p, i) => (
          <ProjectCard key={i} {...p} index={i} />
        ))}
      </div>

      {/* ✅ Toggle Button */}
      {projects.length > 8 && (
        <button
          onClick={() => setShowAll(!showAll)}
          style={{
            marginTop: "30px",
            backgroundColor: "#00ADB5",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "10px 20px",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          {showAll ? "접기" : "더보기"}
        </button>
      )}
    </motion.div>
  );
};

export default Project;
