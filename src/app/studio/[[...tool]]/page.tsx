/**
 * Sanity Studio — /studio
 * 환경 변수 NEXT_PUBLIC_SANITY_PROJECT_ID 가 설정되어야 동작합니다.
 */
import { isConfigured } from "@/sanity/env";
import { StudioMount } from "./studio-mount";

export default function StudioPage() {
  if (!isConfigured) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          padding: "2rem",
          background: "#f5f0e8",
          color: "#1a1a1a",
        }}
      >
        <div style={{ maxWidth: 560 }}>
          <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            Sanity CMS 설정이 필요합니다
          </h1>
          <ol style={{ lineHeight: 1.8, fontSize: "0.95rem" }}>
            <li>
              <a href="https://www.sanity.io/manage" target="_blank" rel="noopener noreferrer">
                sanity.io/manage
              </a>{" "}
              에서 새 프로젝트를 생성합니다.
            </li>
            <li>
              프로젝트 ID를 복사한 뒤 Vercel 환경변수에 추가합니다:
              <pre
                style={{
                  background: "#fff",
                  padding: "0.75rem",
                  marginTop: "0.5rem",
                  fontSize: "0.85rem",
                  border: "1px solid #d6cdb8",
                }}
              >
{`NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxxxxx
NEXT_PUBLIC_SANITY_DATASET=production`}
              </pre>
            </li>
            <li>재배포 후 다시 /studio 로 접속합니다.</li>
          </ol>
        </div>
      </div>
    );
  }
  return <StudioMount />;
}
