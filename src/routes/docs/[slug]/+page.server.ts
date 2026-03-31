import { error } from '@sveltejs/kit';
import { getDoc } from '$lib/content';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const metadata = getDoc(params.slug);
	if (!metadata) error(404, `Doc "${params.slug}" not found`);
	return { metadata };
};
