import type { PageServerLoad } from './$types';

type BlogPostMetadata = {
	title: string;
	date: string;
	description?: string;
	author?: string;
	tags?: string[];
	draft?: boolean;
};

export const load: PageServerLoad = async () => {
	const modules = import.meta.glob('/src/content/blog/*.md', { eager: true, import: 'metadata' });

	const posts = Object.entries(modules)
		.map(([path, mod]) => {
			const slug = path.replace('/src/content/blog/', '').replace('.md', '');
			return { slug, ...(mod as BlogPostMetadata) };
		})
		.filter((p) => !p.draft)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return { posts };
};
