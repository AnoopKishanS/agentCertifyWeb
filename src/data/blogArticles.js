import { seriesArticles } from './blogSeries.js';
// import { omnisightArticle } from './omnisightArticle.js';

/**
 * Live posts. When publishing Omnisight, import `omnisightArticle` above and add:
 * `'omnisight-quality-evaluation-system': omnisightArticle,`
 * before `...seriesArticles`.
 */
export const articles = {
  ...seriesArticles,
};
