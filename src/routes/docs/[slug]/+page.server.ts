import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

type DocMetadata = {
	title: string;
	description?: string;
	layout?: string;
};

const docs = import.meta.glob('/src/content/docs/*.md', { eager: true, import: 'metadata' });

export const load: PageServerLoad = async ({ params }) => {
	const metadata = docs[`/src/content/docs/${params.slug}.md`] as DocMetadata | undefined;
	if (!metadata) error(404, `Doc "${params.slug}" not found`);
	return { metadata };
};
