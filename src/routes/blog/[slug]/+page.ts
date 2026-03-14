import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

const posts = import.meta.glob('/content/blog/*.md');

export const load: PageLoad = async ({ params }) => {
	const loader = posts[`/content/blog/${params.slug}.md`];
	if (!loader) error(404, `Post "${params.slug}" not found`);
	const post = (await loader()) as { default: unknown; metadata: Record<string, string> };
	return { content: post.default, metadata: post.metadata };
};
