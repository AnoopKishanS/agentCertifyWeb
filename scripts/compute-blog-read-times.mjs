/**
 * Blog read-time helper — run from repo root:
 *   npm run blog:read-times
 *
 * Counts words in each article's `sections` only (body copy).
 * Formula: minutes = max(1, ceil(words / WPM)), default WPM = 200 (typical web nonfiction).
 * After changing copy, run this and paste `readTime` into blogSeries.js / BlogPage.jsx / omnisightArticle.js.
 */

import { seriesArticles } from '../src/data/blogSeries.js';
import { omnisightArticle } from '../src/data/omnisightArticle.js';

const DEFAULT_WPM = 200;

function countWords(val) {
  if (val == null) return 0;
  if (typeof val === 'string') {
    return val.trim().split(/\s+/).filter(Boolean).length;
  }
  if (Array.isArray(val)) {
    return val.reduce((n, x) => n + countWords(x), 0);
  }
  if (typeof val === 'object') {
    return Object.values(val).reduce((n, x) => n + countWords(x), 0);
  }
  return 0;
}

function minutesForWords(words, wpm = DEFAULT_WPM) {
  return Math.max(1, Math.ceil(words / wpm));
}

function formatReadTime(mins) {
  return `${mins} min read`;
}

console.log(`Blog read times (body = sections only, ${DEFAULT_WPM} wpm, ceil)\n`);
console.log('slug'.padEnd(45), 'words'.padStart(6), '  readTime string');
console.log('-'.repeat(72));

for (const [slug, art] of Object.entries(seriesArticles)) {
  const w = countWords(art.sections);
  const m = minutesForWords(w);
  console.log(slug.padEnd(45), String(w).padStart(6), ' ', formatReadTime(m));
}

const omniW = countWords(omnisightArticle.sections);
const omniM = minutesForWords(omniW);
console.log('omnisightArticle (draft)'.padEnd(45), String(omniW).padStart(6), ' ', formatReadTime(omniM));
console.log('\nUpdate readTime in: src/data/blogSeries.js, src/pages/BlogPage.jsx, src/data/omnisightArticle.js');
