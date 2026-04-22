import fs from 'fs';

const files = ['index.html', 'vite.config.ts'];
const dirs = ['src'];

files.forEach(f => {
  if (fs.existsSync(f)) fs.unlinkSync(f);
});

dirs.forEach(d => {
  if (fs.existsSync(d)) fs.rmSync(d, { recursive: true, force: true });
});
