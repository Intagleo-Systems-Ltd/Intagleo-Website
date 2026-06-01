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
].filter(f => f.endsWith('.tsx') || f.endsWith('.css') || f.endsWith('.ts'));

let totalChanged = 0;
for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;
  content = content.split('#0a0a0a').join('#141414');
  content = content.split('#080808').join('#141414');
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    const rel = file.split('Intagleo_2.0/').pop() || file.split('Intagleo_2.0\\').pop();
    console.log('updated:', rel);
    totalChanged++;
  }
}
console.log('Done. ' + totalChanged + ' files updated.');
