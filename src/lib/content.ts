// Shared types and loaders for Markdown content in /src/content/.
// Centralizing here prevents BlogPostMetadata from drifting between
// the blog index and blog slug pages, and gives docs the same treatment.

export type BlogPostMetadata = {
	title: string;
	date: string;
	description?: string;
	author?: string;
	tags?: string[];
	draft?: boolean;
};

export type DocMetadata = {
	title: string;
	description?: string;
};

const blogModules = import.meta.glob('/src/content/blog/*.md', { eager: true, import: 'metadata' });
const docModules = import.meta.glob('/src/content/docs/*.md', { eager: true, import: 'metadata' });

export function listBlogPosts(): Array<BlogPostMetadata & { slug: string }> {
	return Object.entries(blogModules)
		.map(([path, mod]) => {
			const slug = path.replace('/src/content/blog/', '').replace('.md', '');
			return { slug, ...(mod as BlogPostMetadata) };
		})
		.filter((p) => !p.draft)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug: string): BlogPostMetadata | undefined {
	return blogModules[`/src/content/blog/${slug}.md`] as BlogPostMetadata | undefined;
}

export function getDoc(slug: string): DocMetadata | undefined {
	return docModules[`/src/content/docs/${slug}.md`] as DocMetadata | undefined;
}
