"use client";

/**
 * LogoSpin — continuous 3D Y-axis rotation with X-axis tilt
 * Transparent background, linear/seamless, dome perspective feel.
 */
export default function LogoSpin({
  src = "/logo2.webp",
  alt = "Intagleo icon",
  size = 42,
}: {
  src?: string;
  alt?: string;
  size?: number;
}) {
  return (
    <>
      <style>{`
        @keyframes logoSpin {
          from { transform: rotateX(-28deg) rotateY(0deg);   }
          to   { transform: rotateX(-28deg) rotateY(360deg); }
        }
        .logo-spin-wrapper {
          animation: logoSpin 4s linear infinite;
          transform-style: preserve-3d;
          will-change: transform;
        }
      `}</style>

      {/* Perspective container */}
      <div
        style={{
          perspective: "240px",
          perspectiveOrigin: "50% 50%",
          width: size,
          height: size,
          display: "inline-block",
          flexShrink: 0,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="logo-spin-wrapper"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
            background: "transparent",
          }}
        />
      </div>
    </>
  );
}
