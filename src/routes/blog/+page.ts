import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	// Glob all markdown posts from content/blog/
	const modules = import.meta.glob('/content/blog/*.md', { eager: true });

	const posts = Object.entries(modules)
		.map(([path, mod]) => {
			const slug = path.replace('/content/blog/', '').replace('.md', '');
			const { metadata } = mod as { metadata: Record<string, string> };
			return { slug, ...metadata };
		})
		.filter((p) => !p.draft)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return { posts };
};
