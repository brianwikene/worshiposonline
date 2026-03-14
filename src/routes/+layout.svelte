<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Lora:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<header class="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-surface)]/90 backdrop-blur-sm">
	<div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
		<a href="/" class="font-serif text-lg font-bold tracking-tight text-[var(--color-ink)]">WorshipOS</a>
		<nav class="hidden items-center gap-7 text-sm font-medium text-[var(--color-muted)] md:flex">
			<a href="/#features" class="transition-colors hover:text-[var(--color-ink)]">Product</a>
			<a href="/docs" class="transition-colors hover:text-[var(--color-ink)]">Docs</a>
			<a href="/blog" class="transition-colors hover:text-[var(--color-ink)]">Blog</a>
			<a href="/#about" class="transition-colors hover:text-[var(--color-ink)]">About</a>
		</nav>
		<div class="flex items-center gap-3">
			<a href="https://app.worshiposonline.com/login" class="text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]">
				Log in
			</a>
			<a
				href="https://app.worshiposonline.com/signup"
				class="rounded-lg bg-[var(--color-brand)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-brand-mid)]"
			>
				Get started
			</a>
		</div>
	</div>
</header>

{@render children()}

<footer class="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
	<div class="mx-auto max-w-6xl px-6 py-14">
		<div class="grid grid-cols-2 gap-10 md:grid-cols-4">
			<!-- Brand -->
			<div class="col-span-2 md:col-span-1">
				<p class="font-serif text-base font-bold text-[var(--color-ink)]">WorshipOS</p>
				<p class="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
					Worship planning that honors the person, not just the production.
				</p>
			</div>
			<!-- Product -->
			<div>
				<p class="mb-3 text-xs font-bold uppercase tracking-widest text-[var(--color-subtle)]">Product</p>
				<ul class="space-y-2 text-sm text-[var(--color-muted)]">
					<li><a href="/#features" class="hover:text-[var(--color-ink)]">Features</a></li>
					<li><a href="/docs" class="hover:text-[var(--color-ink)]">Docs</a></li>
					<li><a href="/blog" class="hover:text-[var(--color-ink)]">Blog</a></li>
					<li><a href="https://app.worshiposonline.com/signup" class="hover:text-[var(--color-ink)]">Get Started</a></li>
				</ul>
			</div>
			<!-- Company -->
			<div>
				<p class="mb-3 text-xs font-bold uppercase tracking-widest text-[var(--color-subtle)]">Company</p>
				<ul class="space-y-2 text-sm text-[var(--color-muted)]">
					<li><a href="/#about" class="hover:text-[var(--color-ink)]">About</a></li>
					<li><a href="mailto:hello@worshiposonline.com" class="hover:text-[var(--color-ink)]">Contact</a></li>
				</ul>
			</div>
			<!-- Resources -->
			<div>
				<p class="mb-3 text-xs font-bold uppercase tracking-widest text-[var(--color-subtle)]">Resources</p>
				<ul class="space-y-2 text-sm text-[var(--color-muted)]">
					<li><a href="/docs/getting-started" class="hover:text-[var(--color-ink)]">Getting Started Guide</a></li>
					<li><a href="/docs" class="hover:text-[var(--color-ink)]">Help Center</a></li>
				</ul>
			</div>
		</div>
		<div class="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[var(--color-border)] pt-6 text-xs text-[var(--color-subtle)] md:flex-row">
			<p>© {new Date().getFullYear()} WorshipOS. All rights reserved.</p>
			<div class="flex gap-5">
				<a href="/docs/privacy" class="hover:text-[var(--color-muted)]">Privacy</a>
				<a href="/docs/terms" class="hover:text-[var(--color-muted)]">Terms</a>
			</div>
		</div>
	</div>
</footer>
