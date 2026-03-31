import { listBlogPosts } from '$lib/content';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return { posts: listBlogPosts() };
};
