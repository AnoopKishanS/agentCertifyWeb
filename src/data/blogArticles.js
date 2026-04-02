import { seriesArticles } from './blogSeries.js';
// import { omnisightArticle } from './omnisightArticle.js';

/**
 * Live posts. When publishing Omnisight, import `omnisightArticle` above and add:
 * `'omnisight-quality-evaluation-system': omnisightArticle,`
 * before `...seriesArticles`.
 *
 * Read times: run `npm run blog:read-times` after changing article bodies.
 */
export const articles = {
  ...seriesArticles,
};
