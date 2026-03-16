<script lang="ts">
	import { page } from '$app/state';
	import type { Component } from 'svelte';

	type MarkdownModule = {
		default: Component;
	};

	const posts = import.meta.glob<MarkdownModule>('/src/content/blog/*.md');

	const postModule = $derived.by(() => {
		const loader = posts[`/src/content/blog/${page.params.slug}.md`];
		return loader ? loader() : null;
	});
</script>

{#if postModule}
	{#await postModule then post}
		<post.default />
	{/await}
{/if}
