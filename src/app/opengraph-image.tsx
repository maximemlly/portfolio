import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Maxime Maillary — Développeur Fullstack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#0b0d12",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "80px",
        fontFamily: "sans-serif",
      }}
    >
      {/* Bordure accent en haut */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "#ef4444",
        }}
      />

      {/* Badge */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "rgba(239,68,68,0.1)",
          border: "1px solid rgba(239,68,68,0.2)",
          borderRadius: "9999px",
          padding: "6px 16px",
          marginBottom: "32px",
        }}
      >
        <span style={{ color: "#fca5a5", fontSize: "14px", fontWeight: 500 }}>
          Développeur Fullstack
        </span>
      </div>

      {/* Nom */}
      <div
        style={{
          fontSize: "72px",
          fontWeight: 700,
          color: "#f1f5f9",
          lineHeight: 1.1,
          marginBottom: "24px",
          letterSpacing: "-2px",
        }}
      >
        Maxime
        <span style={{ color: "#ef4444" }}> Maillary</span>
      </div>

      {/* Description */}
      <div
        style={{
          fontSize: "24px",
          color: "#94a3b8",
          marginBottom: "48px",
          maxWidth: "700px",
          lineHeight: 1.5,
        }}
      >
        Node.js · Express · MySQL · Next.js · TypeScript
      </div>

      {/* URL */}
      <div
        style={{
          position: "absolute",
          bottom: "80px",
          right: "80px",
          fontSize: "16px",
          color: "#475569",
        }}
      >
        maxime-maillary.fr
      </div>
    </div>,
    { ...size },
  );
}
