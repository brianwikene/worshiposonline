<script lang="ts">
	interface Props {
		title: string;
		date: string;
		description?: string;
		author?: string;
		children?: import('svelte').Snippet;
	}

	let { title, date, description, author = 'WorshipOS Team', children } = $props<Props>();

	const formatted = $derived(new Date(date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		timeZone: 'UTC'
	}));
</script>

<svelte:head>
	<title>{title} — WorshipOS Blog</title>
	{#if description}
		<meta name="description" content={description} />
		<meta property="og:description" content={description} />
	{/if}
	<meta property="og:title" content="{title} — WorshipOS Blog" />
	<meta name="twitter:title" content="{title} — WorshipOS Blog" />
	{#if description}<meta name="twitter:description" content={description} />{/if}
</svelte:head>

<main class="mx-auto max-w-3xl px-6 py-16">
	<a href="/blog" class="mb-8 inline-flex items-center gap-2 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]">
		← All posts
	</a>

	<header class="mb-12">
		<p class="mb-3 text-sm font-medium text-[var(--color-brand)]">{formatted}</p>
		<h1 class="font-serif text-4xl font-bold leading-tight text-[var(--color-ink)] md:text-5xl">
			{title}
		</h1>
		{#if description}
			<p class="mt-4 text-lg text-[var(--color-muted)]">{description}</p>
		{/if}
		<p class="mt-4 text-sm text-[var(--color-muted)]">By {author}</p>
	</header>

	<article class="prose">
		{@render children?.()}
	</article>
</main>
