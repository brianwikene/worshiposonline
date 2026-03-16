<script lang="ts">
	interface Props {
		title: string;
		description?: string;
		children?: import('svelte').Snippet;
	}

	let { title, description, children }: Props = $props();
</script>

<svelte:head>
	<title>{title} — WorshipOS Docs</title>
	{#if description}
		<meta name="description" content={description} />
	{/if}
</svelte:head>

<div class="mx-auto max-w-6xl px-6 py-12 lg:flex lg:gap-12">
	<!-- Sidebar nav -->
	<aside class="mb-8 w-full shrink-0 lg:mb-0 lg:w-56">
		<nav class="sticky top-24 space-y-1 text-sm">
			<p class="mb-3 text-xs font-bold uppercase tracking-widest text-[var(--color-muted)]">Getting Started</p>
			<a href="/docs/getting-started" class="block rounded-md px-3 py-1.5 text-[var(--color-muted)] transition-colors hover:bg-[oklch(95%_0.01_240)] hover:text-[var(--color-ink)]">Overview</a>
			<a href="/docs/onboarding" class="block rounded-md px-3 py-1.5 text-[var(--color-muted)] transition-colors hover:bg-[oklch(95%_0.01_240)] hover:text-[var(--color-ink)]">Onboarding</a>

			<p class="mb-3 mt-6 text-xs font-bold uppercase tracking-widest text-[var(--color-muted)]">Modules</p>
			<a href="/docs/gatherings" class="block rounded-md px-3 py-1.5 text-[var(--color-muted)] transition-colors hover:bg-[oklch(95%_0.01_240)] hover:text-[var(--color-ink)]">Gatherings</a>
			<a href="/docs/people" class="block rounded-md px-3 py-1.5 text-[var(--color-muted)] transition-colors hover:bg-[oklch(95%_0.01_240)] hover:text-[var(--color-ink)]">People</a>
			<a href="/docs/groups" class="block rounded-md px-3 py-1.5 text-[var(--color-muted)] transition-colors hover:bg-[oklch(95%_0.01_240)] hover:text-[var(--color-ink)]">Groups</a>
			<a href="/docs/check-in" class="block rounded-md px-3 py-1.5 text-[var(--color-muted)] transition-colors hover:bg-[oklch(95%_0.01_240)] hover:text-[var(--color-ink)]">Check-In</a>
		</nav>
	</aside>

	<!-- Content -->
	<main class="min-w-0 flex-1">
		<header class="mb-8">
			<h1 class="font-serif text-3xl font-bold text-[var(--color-ink)] md:text-4xl">{title}</h1>
			{#if description}
				<p class="mt-3 text-lg text-[var(--color-muted)]">{description}</p>
			{/if}
		</header>
		<article class="prose">
			{@render children?.()}
		</article>
	</main>
</div>
