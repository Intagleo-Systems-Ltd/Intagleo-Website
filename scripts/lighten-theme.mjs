import fs from 'fs';
import path from 'path';

const root = 'C:/Users/arslan/Intagleo_2.0';

function walk(dir) {
  return fs.readdirSync(dir).flatMap(f => {
    const full = path.join(dir, f);
    if (f === 'node_modules' || f === '.next') return [];
    return fs.statSync(full).isDirectory() ? walk(full) : [full];
  });
}

const files = [
  ...walk(root + '/app'),
  ...walk(root + '/components'),
].filter(f => f.endsWith('.tsx') || f.endsWith('.css'));

// Order matters — more specific patterns first
const replacements = [
  // ternary patterns — collapse isLight conditional to bg-background
  [' ${isLight ? "bg-slate-50" : "bg-[#0a0a0a]"}', ' bg-background'],
  [' ${isLight ? "bg-white" : "bg-[#0a0a0a]"}', ' bg-background'],
  // Tailwind bg classes
  ['bg-[#0a0a0a]', 'bg-background'],
  ['bg-[#141414]', 'bg-background'],
  ['bg-[#080808]', 'bg-background'],
  // card backgrounds
  ['bg-[#0d0d0d]', 'bg-[var(--card-bg)]'],
  ['bg-[#111]', 'bg-[var(--card-bg)]'],
  ['bg-[#111111]', 'bg-[var(--card-bg)]'],
  ['hover:bg-[#0d0d10]', 'hover:bg-[var(--card-bg)]'],
  // inline style plain backgrounds
  ['background: "#0a0a0a"', 'background: "var(--background)"'],
  ['background: "#141414"', 'background: "var(--background)"'],
  ['background: "#080808"', 'background: "var(--background)"'],
  // inline style gradients — fade to/from page background
  ['linear-gradient(to bottom, transparent, #0a0a0a)', 'linear-gradient(to bottom, transparent, var(--background))'],
  ['linear-gradient(to bottom, #0a0a0a 0%, transparent 100%)', 'linear-gradient(to bottom, var(--background) 0%, transparent 100%)'],
  ['linear-gradient(to bottom, transparent, #141414)', 'linear-gradient(to bottom, transparent, var(--background))'],
  ['linear-gradient(to bottom, #141414 0%, transparent 100%)', 'linear-gradient(to bottom, var(--background) 0%, transparent 100%)'],
];

let totalChanged = 0;
for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;
  for (const [from, to] of replacements) {
    content = content.split(from).join(to);
  }
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    const rel = file.split('Intagleo_2.0\\').pop() || file.split('Intagleo_2.0/').pop();
    console.log('updated:', rel);
    totalChanged++;
  }
}
console.log('\nDone. ' + totalChanged + ' files updated.');
