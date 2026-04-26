"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export default function AnimatedLogo() {
  const spokes = 20;
  const spokeAngle = 360 / spokes;

  // Memoized spoke generation for performance
  const spokes_data = useMemo(() => {
    return Array.from({ length: spokes }).map((_, i) => {
      const angle = (i * spokeAngle * Math.PI) / 180;
      const radius = 50;
      const spokeLength = 80;
      const curveAmount = 15;

      const startX = Math.cos(angle) * radius;
      const startY = Math.sin(angle) * radius;

      const endX = Math.cos(angle) * (radius + spokeLength);
      const endY = Math.sin(angle) * (radius + spokeLength);

      const controlAngle = angle + Math.PI / 2;
      const controlX = (startX + endX) / 2 + Math.cos(controlAngle) * curveAmount;
      const controlY = (startY + endY) / 2 + Math.sin(controlAngle) * curveAmount;

      return {
        index: i,
        path: `M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`,
      };
    });
  }, [spokes, spokeAngle]);

  return (
    <motion.div
      className="flex items-center justify-center w-full h-full bg-black"
      style={{
        perspective: "1200px",
      }}
    >
      <motion.div
        animate={{
          rotateZ: 360,
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          transformStyle: "preserve-3d",
          width: "300px",
          height: "300px",
        }}
      >
        {/* 3D tilted container with X-axis rotation for table-top perspective */}
        <motion.div
          style={{
            transform: "rotateX(60deg)",
            transformStyle: "preserve-3d",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            viewBox="-150 -150 300 300"
            width="300"
            height="300"
            style={{
              filter: "drop-shadow(0 0 30px rgba(59, 130, 246, 0.4))",
            }}
          >
            {/* Black background */}
            <rect x="-150" y="-150" width="300" height="300" fill="black" />

            {/* Spokes with depth-based effects */}
            <g stroke="#6366f1" fill="none" strokeLinecap="round">
              {spokes_data.map((spoke) => {
                // Calculate depth factor for this spoke
                // This creates the Z-axis depth illusion as spokes rotate
                const depthFactor = Math.sin((spoke.index / spokes) * Math.PI * 2);
                const opacity = 0.5 + depthFactor * 0.4; // 0.1 to 0.9
                const glowIntensity = 2 + depthFactor * 4; // 2 to 6
                const strokeWidth = 2 + depthFactor * 1.2; // 2 to 3.2

                return (
                  <path
                    key={`spoke-${spoke.index}`}
                    d={spoke.path}
                    opacity={opacity}
                    strokeWidth={strokeWidth}
                    style={{
                      filter: `drop-shadow(0 0 ${glowIntensity}px rgba(59, 130, 246, ${opacity * 0.8}))`,
                    }}
                  />
                );
              })}
            </g>

            {/* Central ring - primary */}
            <circle
              cx="0"
              cy="0"
              r="50"
              fill="none"
              stroke="#6366f1"
              strokeWidth="3"
              style={{
                filter: "drop-shadow(0 0 12px rgba(59, 130, 246, 0.9))",
              }}
            />

            {/* Inner ring for depth perception */}
            <circle
              cx="0"
              cy="0"
              r="45"
              fill="none"
              stroke="#6366f1"
              strokeWidth="1"
              opacity="0.35"
              style={{
                filter: "drop-shadow(0 0 6px rgba(59, 130, 246, 0.5))",
              }}
            />

            {/* Bright central core - focal point */}
            <circle
              cx="0"
              cy="0"
              r="8"
              fill="#6366f1"
              style={{
                filter: "drop-shadow(0 0 16px rgba(59, 130, 246, 1))",
              }}
            />

            {/* Outer accent ring for scale reference */}
            <circle
              cx="0"
              cy="0"
              r="130"
              fill="none"
              stroke="#6366f1"
              strokeWidth="0.5"
              opacity="0.15"
            />
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
