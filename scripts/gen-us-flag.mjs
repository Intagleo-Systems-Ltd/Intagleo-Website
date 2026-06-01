// Generates a proper US flag SVG (50 stars, 13 stripes, official 1.9:1 ratio)
// → public/us-sled/us-flag.svg
import fs from "fs";
import path from "path";

const H = 650;           // flag height
const W = Math.round(H * 1.9); // 1235 — official ratio
const stripeH = H / 13;
const unionW = W * 0.4;        // union = 2/5 of width
const unionH = stripeH * 7;    // union = 7 stripes tall

const RED = "#B22234";
const WHITE = "#FFFFFF";
const BLUE = "#3C3B6E";

// stripes (start red at top)
let stripes = "";
for (let i = 0; i < 13; i++) {
  const color = i % 2 === 0 ? RED : WHITE;
  stripes += `<rect x="0" y="${(i * stripeH).toFixed(2)}" width="${W}" height="${stripeH.toFixed(2)}" fill="${color}"/>`;
}

// 5-pointed star polygon points for a given center + outer radius
function star(cx, cy, ro) {
  const ri = ro * 0.381966;
  const pts = [];
  for (let k = 0; k < 10; k++) {
    const r = k % 2 === 0 ? ro : ri;
    const a = (-90 + k * 36) * (Math.PI / 180);
    pts.push(`${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`);
  }
  return `<polygon points="${pts.join(" ")}" fill="${WHITE}"/>`;
}

// 50 stars: 9 rows, alternating 6 and 5 (even rows 6, odd rows 5)
const ro = H * 0.0308; // star outer radius (~0.0616 diameter of hoist)
let stars = "";
for (let row = 0; row < 9; row++) {
  const y = (unionH * (row + 1)) / 10;
  const even = row % 2 === 0;
  const count = even ? 6 : 5;
  for (let col = 0; col < count; col++) {
    const x = even
      ? (unionW * (col * 2 + 1)) / 12
      : (unionW * (col * 2 + 2)) / 12;
    stars += star(x, y, ro);
  }
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Flag of the United States">
${stripes}
<rect x="0" y="0" width="${unionW.toFixed(2)}" height="${unionH.toFixed(2)}" fill="${BLUE}"/>
${stars}
</svg>
`;

const out = path.join(process.cwd(), "public", "us-sled", "us-flag.svg");
fs.writeFileSync(out, svg);
console.log(`Wrote ${out} (${svg.length} bytes, ${W}x${H})`);
