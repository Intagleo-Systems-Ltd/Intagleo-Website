import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = 'C:/Users/arslan/Intagleo_2.0';

const replacements = [
  // footer_CTA multi-line WITH grayscale
  [
    `        {/* eslint-disable-next-line @next/next/no-img-element */}\n        <img\n          src="/footer_CTA.gif"\n          alt=""\n          className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale-[20%] opacity-50"\n        />`,
    `        <video autoPlay loop muted playsInline aria-hidden="true" className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale-[20%] opacity-50">\n          <source src="/footer_CTA.webm" type="video/webm" />\n          <source src="/footer_CTA.mp4" type="video/mp4" />\n        </video>`
  ],
  // footer_CTA multi-line WITHOUT grayscale
  [
    `        {/* eslint-disable-next-line @next/next/no-img-element */}\n        <img\n          src="/footer_CTA.gif"\n          alt=""\n          className="absolute inset-0 w-full h-full object-cover pointer-events-none"\n        />`,
    `        <video autoPlay loop muted playsInline aria-hidden="true" className="absolute inset-0 w-full h-full object-cover pointer-events-none">\n          <source src="/footer_CTA.webm" type="video/webm" />\n          <source src="/footer_CTA.mp4" type="video/mp4" />\n        </video>`
  ],
  // footer_CTA single-line WITH grayscale + eslint comment
  [
    `        {/* eslint-disable-next-line @next/next/no-img-element */}\n        <img src="/footer_CTA.gif" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale-[20%] opacity-50" />`,
    `        <video autoPlay loop muted playsInline aria-hidden="true" className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale-[20%] opacity-50">\n          <source src="/footer_CTA.webm" type="video/webm" />\n          <source src="/footer_CTA.mp4" type="video/mp4" />\n        </video>`
  ],
  // footer_CTA single-line WITHOUT grayscale + eslint comment
  [
    `        {/* eslint-disable-next-line @next/next/no-img-element */}\n        <img src="/footer_CTA.gif" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />`,
    `        <video autoPlay loop muted playsInline aria-hidden="true" className="absolute inset-0 w-full h-full object-cover pointer-events-none">\n          <source src="/footer_CTA.webm" type="video/webm" />\n          <source src="/footer_CTA.mp4" type="video/mp4" />\n        </video>`
  ],
  // Footer.tsx single-line with aria-hidden, deeper indent
  [
    `          {/* eslint-disable-next-line @next/next/no-img-element */}\n          <img src="/footer_CTA.gif" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale-[20%] opacity-50" aria-hidden="true" />`,
    `          <video autoPlay loop muted playsInline aria-hidden="true" className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale-[20%] opacity-50">\n            <source src="/footer_CTA.webm" type="video/webm" />\n            <source src="/footer_CTA.mp4" type="video/mp4" />\n          </video>`
  ],
  // AIStrategySection.tsx multi-line
  [
    `            {/* eslint-disable-next-line @next/next/no-img-element */}\n            <img\n              src="/AI.gif"\n              alt="AI Circuit Chip"\n              className="absolute inset-0 w-full h-full object-cover grayscale-[20%] opacity-50"\n            />`,
    `            <video autoPlay loop muted playsInline aria-hidden="true" className="absolute inset-0 w-full h-full object-cover grayscale-[20%] opacity-50">\n              <source src="/AI.webm" type="video/webm" />\n              <source src="/AI.mp4" type="video/mp4" />\n            </video>`
  ],
  // CTABanner.tsx multi-line
  [
    `            {/* eslint-disable-next-line @next/next/no-img-element */}\n            <img\n              src="/cta-bg.gif"\n              alt=""\n              className="absolute inset-0 w-full h-full object-cover grayscale-[20%] opacity-50"\n            />`,
    `            <video autoPlay loop muted playsInline aria-hidden="true" className="absolute inset-0 w-full h-full object-cover grayscale-[20%] opacity-50">\n              <source src="/cta-bg.webm" type="video/webm" />\n              <source src="/cta-bg.mp4" type="video/mp4" />\n            </video>`
  ],
  // mobile-dev hero.gif single-line
  [
    `            {/* eslint-disable-next-line @next/next/no-img-element */}\n            <img src="/hero.gif" alt="" className="absolute inset-0 w-full h-full object-cover object-center grayscale-[20%] opacity-50" />`,
    `            <video autoPlay loop muted playsInline aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-center grayscale-[20%] opacity-50">\n              <source src="/hero.webm" type="video/webm" />\n              <source src="/hero.mp4" type="video/mp4" />\n            </video>`
  ],
  // custom-software footer_CTA single-line WITHOUT grayscale (has comment above)
  [
    `        {/* footer_CTA.gif background */}\n        {/* eslint-disable-next-line @next/next/no-img-element */}\n        <img src="/footer_CTA.gif" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />`,
    `        <video autoPlay loop muted playsInline aria-hidden="true" className="absolute inset-0 w-full h-full object-cover pointer-events-none">\n          <source src="/footer_CTA.webm" type="video/webm" />\n          <source src="/footer_CTA.mp4" type="video/mp4" />\n        </video>`
  ],
];

function walk(dir) {
  return fs.readdirSync(dir).flatMap(f => {
    const full = path.join(dir, f);
    if (f === 'node_modules') return [];
    return fs.statSync(full).isDirectory() ? walk(full) : [full];
  });
}

const files = [
  ...walk(root + '/app').filter(f => f.endsWith('.tsx') && !f.includes('HeroSection')),
  ...walk(root + '/components').filter(f => f.endsWith('.tsx') && !f.includes('HeroSection')),
];

let totalChanged = 0;
for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  const hasCRLF = content.includes('\r\n');
  content = content.replace(/\r\n/g, '\n');
  const original = content;
  for (const [from, to] of replacements) {
    content = content.split(from).join(to);
  }
  if (content !== original) {
    const out = hasCRLF ? content.replace(/\n/g, '\r\n') : content;
    fs.writeFileSync(file, out, 'utf8');
    console.log('updated:', file.split('/').slice(-2).join('/'));
    totalChanged++;
  }
}
console.log('Done. ' + totalChanged + ' files updated.');
