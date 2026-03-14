<script lang="ts">
	import type { PageData } from './$types';

	let { data } = $props<{ data: PageData }>();

	function formatDate(d: string) {
		return new Date(d).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			timeZone: 'UTC'
		});
	}
</script>

<svelte:head>
	<title>Blog — WorshipOS</title>
	<meta name="description" content="Thoughts on worship planning, church technology, and building WorshipOS." />
</svelte:head>

<main class="mx-auto max-w-3xl px-6 py-16">
	<header class="mb-12">
		<h1 class="font-serif text-4xl font-bold text-[var(--color-ink)]">Blog</h1>
		<p class="mt-3 text-lg text-[var(--color-muted)]">
			Worship planning, church technology, and building in the open.
		</p>
	</header>

	{#if data.posts.length === 0}
		<p class="text-[var(--color-muted)]">No posts yet — check back soon.</p>
	{:else}
		<ol class="space-y-10">
			{#each data.posts as post (post.slug)}
				<li>
					<a href="/blog/{post.slug}" class="group block">
						<p class="mb-1 text-sm font-medium text-[var(--color-brand)]">{formatDate(post.date)}</p>
						<h2 class="font-serif text-2xl font-bold text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-brand)]">
							{post.title}
						</h2>
						{#if post.description}
							<p class="mt-2 text-[var(--color-muted)]">{post.description}</p>
						{/if}
					</a>
				</li>
			{/each}
		</ol>
	{/if}
</main>
