import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

const docs = import.meta.glob('/content/docs/*.md');

export const load: PageLoad = async ({ params }) => {
	const loader = docs[`/content/docs/${params.slug}.md`];
	if (!loader) error(404, `Doc "${params.slug}" not found`);
	const doc = (await loader()) as { default: unknown; metadata: Record<string, string> };
	return { content: doc.default, metadata: doc.metadata };
};
