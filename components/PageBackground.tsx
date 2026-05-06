export default function PageBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Top-right - large cool-blue halo */}
      <div
        className="absolute"
        style={{
          top: "-10%",
          right: "-5%",
          width: "55vw",
          height: "55vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--orb-1) 0%, transparent 65%)",
        }}
      />

      {/* Mid-left - deep indigo pulse */}
      <div
        className="absolute"
        style={{
          top: "30%",
          left: "-8%",
          width: "45vw",
          height: "45vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--orb-2) 0%, transparent 65%)",
        }}
      />

      {/* Center - very faint wide wash */}
      <div
        className="absolute"
        style={{
          top: "55%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "70vw",
          height: "40vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--orb-3) 0%, transparent 65%)",
        }}
      />

      {/* Bottom-right - soft blue anchor */}
      <div
        className="absolute"
        style={{
          bottom: "5%",
          right: "5%",
          width: "38vw",
          height: "38vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--orb-4) 0%, transparent 65%)",
        }}
      />
    </div>
  );
}
