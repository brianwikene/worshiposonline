<script lang="ts">
	import { page } from '$app/state';
	import type { Component } from 'svelte';

	type MarkdownModule = {
		default: Component;
	};

	const docs = import.meta.glob<MarkdownModule>('/src/content/docs/*.md');

	const docModule = $derived.by(() => {
		const loader = docs[`/src/content/docs/${page.params.slug}.md`];
		return loader ? loader() : null;
	});
</script>

{#if docModule}
	{#await docModule then doc}
		<doc.default />
	{/await}
{/if}
