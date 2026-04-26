import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

const errors = [];

const SCHEMAS = {
  blog: {
    dir: 'src/content/blog',
    required: ['title', 'date', 'description', 'author', 'layout'],
    rules: {
      layout: v => v === 'blog' || 'must be "blog"',
      date:   v => /^\d{4}-\d{2}-\d{2}$/.test(v) || 'must be YYYY-MM-DD',
    }
  },
  docs: {
    dir: 'src/content/docs',
    required: ['title', 'description', 'layout'],
    rules: {
      layout: v => v === 'docs' || 'must be "docs"',
    }
  }
};

function parseFrontmatter(content, file) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) {
    errors.push(`${file}: no frontmatter found`);
    return null;
  }
  const fm = {};
  for (const line of match[1].split('\n')) {
    const [key, ...rest] = line.split(':');
    if (key && rest.length) fm[key.trim()] = rest.join(':').trim();
  }
  return fm;
}

for (const [, schema] of Object.entries(SCHEMAS)) {
  const files = readdirSync(schema.dir).filter(f => f.endsWith('.md'));

  for (const filename of files) {
    const filepath = join(schema.dir, filename);
    const content = readFileSync(filepath, 'utf-8');
    const fm = parseFrontmatter(content, filepath);
    if (!fm) continue;

    for (const field of schema.required) {
      if (!fm[field]) errors.push(`${filepath}: missing required field "${field}"`);
    }

    for (const [field, validate] of Object.entries(schema.rules)) {
      if (fm[field]) {
        const result = validate(fm[field]);
        if (result !== true) errors.push(`${filepath}: "${field}" ${result}`);
      }
    }
  }
}

if (errors.length) {
  console.error('\n❌ Content lint failed:\n');
  errors.forEach(e => console.error('  ' + e));
  process.exit(1);
} else {
  console.log('✅ Content lint passed');
}
