import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

type BlogPostMetadata = {
	title: string;
	date: string;
	description?: string;
	author?: string;
	draft?: boolean;
	layout?: string;
};

const posts = import.meta.glob('/src/content/blog/*.md', { eager: true, import: 'metadata' });

export const load: PageServerLoad = async ({ params }) => {
	const metadata = posts[`/src/content/blog/${params.slug}.md`] as BlogPostMetadata | undefined;
	if (!metadata) error(404, `Post "${params.slug}" not found`);
	return { metadata };
};
