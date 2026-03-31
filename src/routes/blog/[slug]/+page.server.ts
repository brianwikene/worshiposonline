import { error } from '@sveltejs/kit';
import { getBlogPost } from '$lib/content';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const metadata = getBlogPost(params.slug);
	if (!metadata) error(404, `Post "${params.slug}" not found`);
	return { metadata };
};
