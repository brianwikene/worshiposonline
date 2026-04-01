<script lang="ts">
	import type { PageData } from './$types';

	let { data } = $props<{ data: PageData }>();

	let search = $state('');
	let activeTag = $state('All');

	const allTags = $derived.by(() => {
		const seen: Record<string, true> = {};
		for (const post of data.posts) {
			for (const tag of post.tags ?? []) seen[tag] = true;
		}
		return ['All', ...Object.keys(seen).sort()];
	});

	const filtered = $derived.by(() => {
		const q = search.toLowerCase();
		return data.posts.filter((p) => {
			const matchesSearch =
				!q ||
				p.title.toLowerCase().includes(q) ||
				(p.description?.toLowerCase().includes(q) ?? false);
			const matchesTag = activeTag === 'All' || (p.tags ?? []).includes(activeTag);
			return matchesSearch && matchesTag;
		});
	});

	const featured = $derived(filtered[0] ?? null);
	const rest = $derived(filtered.slice(1));

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
	<meta name="description" content="Perspectives on pastoral leadership, worship planning, and building software that serves the church." />
</svelte:head>

<main class="mx-auto max-w-4xl px-6 py-16">

	<!-- Header -->
	<header class="mb-10">
		<h1 class="font-serif text-4xl font-bold text-foreground">Blog</h1>
		<p class="mt-3 text-lg text-muted-foreground">
			Perspectives on pastoral leadership, worship planning, and the art of noticing.
		</p>
	</header>

	<!-- Search -->
	<div class="mb-6">
		<div class="relative max-w-sm">
			<svg class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/70" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
			</svg>
			<input
				type="text"
				placeholder="Search articles..."
				bind:value={search}
				class="w-full rounded-lg border border-border bg-card py-2 pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none"
			/>
		</div>
	</div>

	<!-- Tag filters -->
	<div class="mb-10 flex flex-wrap gap-2">
		{#each allTags as tag (tag)}
			<button
				onclick={() => (activeTag = tag)}
				class="rounded-full border px-4 py-1.5 text-sm font-medium transition-colors {activeTag === tag
					? 'border-primary bg-primary text-primary-foreground'
					: 'border-border bg-card text-muted-foreground hover:border-primary hover:text-primary'}"
			>
				{tag}
			</button>
		{/each}
	</div>

	{#if filtered.length === 0}
		<p class="text-muted-foreground">No posts match your search.</p>
	{:else}

		<!-- Featured post -->
		{#if featured}
			<a href="/blog/{featured.slug}" class="group mb-8 block rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-md">
				{#if (featured.tags ?? []).length > 0}
					<p class="mb-3 text-xs font-bold uppercase tracking-widest text-primary">
						{featured.tags![0]}
					</p>
				{/if}
				<h2 class="font-serif text-3xl font-bold leading-snug text-foreground transition-colors group-hover:text-primary md:text-4xl">
					{featured.title}
				</h2>
				{#if featured.description}
					<p class="mt-3 max-w-2xl text-base text-muted-foreground">{featured.description}</p>
				{/if}
				<p class="mt-5 text-sm text-muted-foreground/70">
					{featured.author ?? 'WorshipOS Team'} · {formatDate(featured.date)}
				</p>
			</a>
		{/if}

		<!-- Post grid -->
		{#if rest.length > 0}
			<div class="grid gap-6 sm:grid-cols-2">
				{#each rest as post (post.slug)}
					<a href="/blog/{post.slug}" class="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
						{#if (post.tags ?? []).length > 0}
							<p class="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
								{post.tags![0]}
							</p>
						{/if}
						<h2 class="font-serif text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
							{post.title}
						</h2>
						{#if post.description}
							<p class="mt-2 grow text-sm text-muted-foreground">{post.description}</p>
						{/if}
						<p class="mt-4 text-xs text-muted-foreground/70">
							{post.author ?? 'WorshipOS Team'} · {formatDate(post.date)}
						</p>
					</a>
				{/each}
			</div>
		{/if}

	{/if}
</main>

<!-- Newsletter section -->
<section class="mt-8 bg-primary px-6 py-20 text-center">
	<h2 class="font-serif text-3xl font-bold text-primary-foreground">Stay thoughtful</h2>
	<p class="mx-auto mt-3 max-w-sm text-primary-foreground/70">
		Occasional reflections on worship planning, pastoral care, and building sustainable teams.
	</p>
	<form class="mx-auto mt-8 flex max-w-sm gap-2" onsubmit={(e) => e.preventDefault()}>
		<input
			type="email"
			placeholder="your@email.com"
			class="min-w-0 flex-1 rounded-lg border border-white/15 bg-white/10 px-4 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-white/30"
		/>
		<button
			type="submit"
			class="rounded-lg bg-card px-5 py-2.5 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
		>
			Subscribe
		</button>
	</form>
</section>
