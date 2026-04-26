import remarkFrontmatter from 'remark-frontmatter';
import remarkLintFrontmatterSchema from 'remark-lint-frontmatter-schema';

const remarkConfig = {
  plugins: [
    remarkFrontmatter,
    [remarkLintFrontmatterSchema, {
      schemas: {
        /* blog posts */
        './schemas/blog.schema.json': ['./src/content/blog/*.md'],
        /* docs pages */
        './schemas/docs.schema.json': ['./src/content/docs/*.md'],
      }
    }]
  ]
};

export default remarkConfig;
