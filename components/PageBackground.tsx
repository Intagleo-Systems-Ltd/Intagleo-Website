/**
 * Subtle ambient gradient layer for the homepage.
 * Fixed-position so the orbs stay anchored as you scroll — giving
 * a sense of depth without overpowering the content.
 * All colours are the existing site blues (#050914 family) at very low opacity.
 */
export default function PageBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Top-right — large cool-blue halo */}
      <div
        className="absolute"
        style={{
          top: "-10%",
          right: "-5%",
          width: "55vw",
          height: "55vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(20,60,180,0.13) 0%, transparent 65%)",
        }}
      />

      {/* Mid-left — deep indigo pulse */}
      <div
        className="absolute"
        style={{
          top: "30%",
          left: "-8%",
          width: "45vw",
          height: "45vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(10,35,130,0.11) 0%, transparent 65%)",
        }}
      />

      {/* Center — very faint wide wash */}
      <div
        className="absolute"
        style={{
          top: "55%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "70vw",
          height: "40vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(8,25,90,0.09) 0%, transparent 65%)",
        }}
      />

      {/* Bottom-right — soft blue anchor */}
      <div
        className="absolute"
        style={{
          bottom: "5%",
          right: "5%",
          width: "38vw",
          height: "38vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(15,50,160,0.11) 0%, transparent 65%)",
        }}
      />
    </div>
  );
}
