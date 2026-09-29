import { readdir, readFile, writeFile } from 'node:fs/promises';
import { basename, join } from 'node:path';

const postsDirectory = join(process.cwd(), 'content', 'blog');
const outputFile = join(process.cwd(), 'blog-data.json');

function parseFrontmatter(raw) {
  const match = raw.match(/^---\s*\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};

  const data = {};
  let currentKey = '';

  for (const line of match[1].split(/\r?\n/)) {
    const field = line.match(/^([A-Za-z][\w-]*):\s*(.*)$/);
    if (field) {
      currentKey = field[1];
      data[currentKey] = field[2].trim();
      continue;
    }

    if (currentKey && /^\s+\S/.test(line)) {
      data[currentKey] = `${data[currentKey]} ${line.trim()}`.trim();
    }
  }

  for (const key of Object.keys(data)) {
    data[key] = data[key]
      .replace(/^(['"])([\s\S]*)\1$/, '$2')
      .replace(/\s+/g, ' ')
      .trim();
  }

  return data;
}

const files = (await readdir(postsDirectory))
  .filter(file => file.toLowerCase().endsWith('.md'));

const posts = await Promise.all(files.map(async file => {
  const raw = await readFile(join(postsDirectory, file), 'utf8');
  const data = parseFrontmatter(raw);

  return {
    slug: basename(file, '.md'),
    title: data.title || basename(file, '.md'),
    date: data.date || '',
    excerpt: data.excerpt || ''
  };
}));

posts.sort((a, b) => new Date(b.date) - new Date(a.date));
await writeFile(outputFile, `${JSON.stringify(posts, null, 2)}\n`, 'utf8');
console.log(`Generated ${posts.length} blog posts in blog-data.json`);
