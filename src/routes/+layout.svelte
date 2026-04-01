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
	<!-- Default OG tags — overridden per-page via <svelte:head> in child routes -->
	<meta property="og:site_name" content="WorshipOS" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://www.getworshipos.com/og-image.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://www.getworshipos.com/og-image.png" />
</svelte:head>

<header class="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
	<div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
		<a href="/" class="font-serif text-lg font-bold tracking-tight text-foreground">WorshipOS</a>
		<nav class="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
			<a href="/#features" class="transition-colors hover:text-foreground">Product</a>
			<a href="/docs" class="transition-colors hover:text-foreground">Docs</a>
			<a href="/blog" class="transition-colors hover:text-foreground">Blog</a>
			<a href="/#about" class="transition-colors hover:text-foreground">About</a>
		</nav>
		<div class="flex items-center gap-3">
			<a href="https://worship-os.com/login" class="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
				Log in
			</a>
			<a
				href="https://worship-os.com/interest"
				class="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-secondary"
			>
				Get started
			</a>
		</div>
	</div>
</header>

{@render children()}

<footer class="border-t border-border bg-background">
	<div class="mx-auto max-w-6xl px-6 py-14">
		<div class="grid grid-cols-2 gap-10 md:grid-cols-4">
			<!-- Brand -->
			<div class="col-span-2 md:col-span-1">
				<p class="font-serif text-base font-bold text-foreground">WorshipOS</p>
				<p class="mt-2 text-sm leading-relaxed text-muted-foreground">
					Worship planning that honors the person, not just the production.
				</p>
			</div>
			<!-- Product -->
			<div>
				<p class="mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground/70">Product</p>
				<ul class="space-y-2 text-sm text-muted-foreground">
					<li><a href="/#features" class="hover:text-foreground">Features</a></li>
					<li><a href="/docs" class="hover:text-foreground">Docs</a></li>
					<li><a href="/blog" class="hover:text-foreground">Blog</a></li>
					<li><a href="https://worship-os.com/interest" class="hover:text-foreground">Get Started</a></li>
				</ul>
			</div>
			<!-- Company -->
			<div>
				<p class="mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground/70">Company</p>
				<ul class="space-y-2 text-sm text-muted-foreground">
					<li><a href="/#about" class="hover:text-foreground">About</a></li>
					<li><a href="mailto:hello@getworshipos.com" class="hover:text-foreground">Contact</a></li>
				</ul>
			</div>
			<!-- Resources -->
			<div>
				<p class="mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground/70">Resources</p>
				<ul class="space-y-2 text-sm text-muted-foreground">
					<li><a href="/docs/getting-started" class="hover:text-foreground">Getting Started Guide</a></li>
					<li><a href="/docs" class="hover:text-foreground">Help Center</a></li>
				</ul>
			</div>
		</div>
		<div class="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground/70 md:flex-row">
			<p>© {new Date().getFullYear()} WorshipOS. All rights reserved.</p>
			<div class="flex gap-5">
				<a href="https://worship-os.com/legal/privacy" class="hover:text-muted-foreground">Privacy</a>
				<a href="https://worship-os.com/legal/terms" class="hover:text-muted-foreground">Terms</a>
			</div>
		</div>
	</div>
</footer>
