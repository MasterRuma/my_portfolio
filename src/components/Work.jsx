import React, { useState, useRef, createRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../css/Work.css"; // 아래 CSS를 포함하고 있어야 합니다

const videos = [
  { url: "https://www.youtube.com/watch?v=-pjBXSoB3kg", tags: ["편집"] },
  { url: "https://www.youtube.com/watch?v=zrXtsZPbNMg", tags: ["편집"] },
  {
    url: "https://www.youtube.com/watch?v=2u587JXl_Bo",
    tags: ["편집", "썸네일 제작"],
  },
  {
    url: "https://www.youtube.com/watch?v=XLyhEVONo8E",
    tags: ["편집", "썸네일 제작"],
  },
  {
    url: "https://www.youtube.com/watch?v=wSrmMf_qZPg",
    tags: ["편집", "썸네일 제작"],
  },
  {
    url: "https://www.youtube.com/watch?v=27tncV6YQog",
    tags: ["편집", "썸네일 제작"],
  },
  {
    url: "https://www.youtube.com/watch?v=1o3vp5z2Zvk",
    tags: ["편집", "썸네일 제작"],
  },
  {
    url: "https://www.youtube.com/watch?v=GjNsFLtxfa0",
    tags: ["촬영", "편집"],
  },
  { url: "https://www.youtube.com/watch?v=aW2COikhNPs", tags: ["썸네일 제작"] },
  {
    url: "https://www.youtube.com/watch?v=qtTrAYLEX_k",
    tags: ["촬영", "편집", "썸네일 제작"],
  },
  { url: "https://www.youtube.com/watch?v=ekegZ2mtxzk", tags: ["썸네일 제작"] },
  { url: "https://www.youtube.com/watch?v=24q7MyhKIvE", tags: ["인트로 제작"] },
  { url: "https://www.youtube.com/watch?v=kfUaws7wytY", tags: ["인트로 제작"] },
  { url: "https://www.youtube.com/watch?v=ExWlvu9xtRg", tags: ["인트로 제작"] },
  { url: "https://www.youtube.com/watch?v=pNCZfqtvpFM", tags: ["인트로 제작"] },
  { url: "https://www.youtube.com/watch?v=18hY5UBwpiM", tags: ["인트로 제작"] },
  { url: "https://www.youtube.com/watch?v=EJZQ3Toli2Y", tags: ["인트로 제작"] },
  {
    url: "https://www.youtube.com/watch?v=TWiEc2_AN-g",
    tags: ["인트로 제작", "썸네일 제작"],
  },
  { url: "https://www.youtube.com/watch?v=PUFFXbNL2TM", tags: ["촬영"] },
  { url: "https://www.youtube.com/shorts/s_FKy0c2QLI", tags: ["편집"] },
  { url: "https://www.youtube.com/watch?v=hG4Gg15UYUs", tags: ["촬영 지원"] },
  { url: "https://www.youtube.com/watch?v=4TFQhB1i8cU", tags: ["촬영 지원"] },
];

// 모든 태그 목록
const allTags = ["전체", ...Array.from(new Set(videos.flatMap((v) => v.tags)))];

const Work = () => {
  const [selectedTag, setSelectedTag] = useState("전체");
  // 각 비디오 카드에 대응되는 ref 배열을 하나만 생성
  const nodeRefs = useRef(videos.map(() => createRef()));

  // 선택된 태그에 따라 필터링
  const filtered = 
    selectedTag === "전체"
      ? videos
      : videos.filter((v) => v.tags.includes(selectedTag));

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#222831",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#EEEEEE",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "30px" }}>Work</h1>

      {/* 태그 버튼 */}
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            style={{
              padding: "8px 12px",
              backgroundColor: selectedTag === tag ? "#00ADB5" : "#393E46",
              color: "#EEEEEE",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* 비디오 그리드 */}
      <div
        style={{
          flex: 1,
          width: "100%",
          maxWidth: "1200px",
          overflowY: "auto",
          paddingRight: "10px",
        }}
      >
        <TransitionGroup
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {filtered.map((video) => {
            // 원본 videos 배열에서 index 찾아서 같은 ref 사용
            const idx = videos.findIndex((v) => v.url === video.url);
            const nodeRef = nodeRefs.current[idx];

            return (
              <CSSTransition
                key={video.url}
                timeout={300}
                classNames="fade"
                nodeRef={nodeRef}
              >
                <div
                  ref={nodeRef}
                  style={{
                    backgroundColor: "#393E46",
                    padding: "15px",
                    borderRadius: "10px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <iframe
                    width="100%"
                    height="200"
                    src={video.url
                      .replace("watch?v=", "embed/")
                      .replace("shorts/", "embed/")}
                    title={video.url}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div
                    style={{
                      marginTop: "10px",
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "5px",
                    }}
                  >
                    {video.tags.map((t, i) => (
                      <span
                        key={i}
                        style={{
                          backgroundColor: "#00ADB5",
                          color: "#222831",
                          padding: "4px 8px",
                          borderRadius: "4px",
                          fontSize: "12px",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </div>
    </div>
  );
};

export default Work;
