<script lang="ts">
	let openFaq = $state<number | null>(null);

	const features = [
		{
			icon: '📋',
			title: 'Gathering Planning',
			body: "Build service plans with liturgy, music, production cues, and volunteer assignments — all in one place. Lock the plan before Sunday and preserve an honest record of what was prepared."
		},
		{
			icon: '👥',
			title: 'Team Scheduling',
			body: "Assign volunteers with awareness of availability and care. Send email invitations, receive confirmations, and see who said yes, who said no, and who hasn't responded — without chasing anyone."
		},
		{
			icon: '🎵',
			title: 'Song & Media Library',
			body: "Organize your song library with keys, BPM, chord charts, and training media. Musicians open their rehearsal view and see charts, key, and audio links — before they arrive."
		}
	];

	const trustItems = [
		{
			title: 'No gamification',
			body: "We don't rank volunteers, score commitment, or reward attendance streaks. People aren't metrics, and faithfulness isn't a leaderboard."
		},
		{
			title: 'Calm by design',
			body: "No red badges, no urgency theater. Information is present when you need it and quiet when you don't. The interface feels like a reliable colleague, not a dashboard alarm."
		},
		{
			title: 'Care is built in',
			body: "Pastoral notes, prayer requests, and wellbeing signals live alongside scheduling — not in a separate silo. The system that knows when someone is serving should also know when they need support."
		},
		{
			title: 'History is preserved',
			body: "Edits are tracked, not overwritten. Locked plans stay locked. Your team's record is honest and auditable — because what actually happened on Sunday matters."
		}
	];

	const faqs = [
		{
			q: 'Who is WorshipOS built for?',
			a: "WorshipOS is built for worship directors, music directors, and church administrators at churches with 1–3 campuses and 20–150 volunteers. If you're coordinating a worship team, a kids team, or any group of people who serve on a weekly rhythm, WorshipOS is designed for you."
		},
		{
			q: 'Is WorshipOS only for large churches?',
			a: "No. WorshipOS works well for a church of 50 with a dozen volunteers just as much as a church of 500 with a full production team. You can start with just a worship team and grow from there — the system does not assume you're fully staffed or technically mature on day one."
		},
		{
			q: 'How is this different from Planning Center or other tools?',
			a: "Planning Center is excellent software. WorshipOS is designed around a different premise: coordination is part of care, not an end in itself. That means no volunteer scoring, no engagement badges, no urgency theater. We also preserve honest history — locked plans stay locked, and real-world changes are recorded, not silently overwritten."
		},
		{
			q: 'What does it cost?',
			a: "WorshipOS is currently in pilot with a small group of churches. Pricing will be announced before general availability. If you would like to be part of the pilot, reach out — we would love to have you."
		}
	];
</script>

<svelte:head>
	<title>WorshipOS — Worship planning that honors the person, not just the production</title>
	<meta
		name="description"
		content="WorshipOS is calm, trustworthy software for churches that want to plan services, coordinate volunteers, and prepare musicians — without treating people like cogs."
	/>
</svelte:head>

<!-- HERO -->
<section class="px-6 pb-24 pt-20 text-center md:pt-32">
	<div class="mx-auto max-w-3xl">
		<h1 class="font-serif text-5xl font-bold leading-tight text-[var(--color-ink)] md:text-6xl lg:text-7xl">
			Worship planning that honors the person, not just the production.
		</h1>
		<p class="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-muted)]">
			WorshipOS is calm, trustworthy software for churches that want to plan services, care for
			volunteers, and coordinate teams — without the noise.
		</p>
		<div class="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
			<a
				href="https://app.worshiposonline.com/signup"
				class="rounded-xl bg-[var(--color-brand)] px-8 py-3.5 font-semibold text-white transition-colors hover:bg-[var(--color-brand-mid)]"
			>
				Get started
			</a>
			<a
				href="/docs"
				class="rounded-xl border border-[var(--color-border)] bg-white px-8 py-3.5 font-semibold text-[var(--color-ink)] transition-colors hover:bg-[var(--color-surface)]"
			>
				Explore the docs
			</a>
		</div>
	</div>
</section>

<!-- FEATURES -->
<section id="features" class="px-6 py-20">
	<div class="mx-auto max-w-5xl">
		<div class="mb-12 text-center">
			<h2 class="font-serif text-3xl font-bold text-[var(--color-ink)] md:text-4xl">
				What WorshipOS does
			</h2>
			<p class="mx-auto mt-3 max-w-lg text-[var(--color-muted)]">
				Everything your team needs to plan, coordinate, and care — in one quiet, reliable place.
			</p>
		</div>
		<div class="grid gap-5 md:grid-cols-3">
			{#each features as feature (feature.title)}
				<div class="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-7">
					<span class="mb-4 block text-2xl">{feature.icon}</span>
					<h3 class="mb-2 font-serif text-xl font-bold text-[var(--color-ink)]">{feature.title}</h3>
					<p class="text-sm leading-relaxed text-[var(--color-muted)]">{feature.body}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- TRUST — DARK SECTION -->
<section class="bg-[var(--color-brand)] px-6 py-24 text-[var(--color-dark-text)]">
	<div class="mx-auto max-w-5xl">
		<div class="mb-14 text-center">
			<p class="font-serif text-2xl font-bold italic text-[var(--color-dark-muted)]">
				Most church software optimizes for productivity.
			</p>
			<p class="mt-1 font-serif text-2xl font-bold text-[var(--color-dark-text)]">
				We optimize for trust. Here is what that means in practice.
			</p>
		</div>
		<div class="grid gap-4 sm:grid-cols-2">
			{#each trustItems as item (item.title)}
				<div class="rounded-xl bg-[var(--color-dark-card)] p-6">
					<h3 class="mb-2 font-semibold text-[var(--color-dark-text)]">{item.title}</h3>
					<p class="text-sm leading-relaxed text-[var(--color-dark-muted)]">{item.body}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- TESTIMONIAL -->
<section class="px-6 py-24 text-center">
	<div class="mx-auto max-w-2xl">
		<blockquote class="font-serif text-2xl font-medium italic leading-relaxed text-[var(--color-ink)] md:text-3xl">
			"We stopped fighting our tools and started noticing our team."
		</blockquote>
		<p class="mt-6 text-sm font-semibold text-[var(--color-ink)]">Sarah Mitchell</p>
		<p class="mt-1 text-sm text-[var(--color-muted)]">Worship Director, Grace Community Church</p>
	</div>
</section>

<!-- FAQ -->
<section class="bg-[var(--color-card)] px-6 py-20">
	<div class="mx-auto max-w-2xl">
		<h2 class="mb-10 text-center font-serif text-3xl font-bold text-[var(--color-ink)]">
			Common questions
		</h2>
		<div class="divide-y divide-[var(--color-border)]">
			{#each faqs as faq, i (faq.q)}
				<div class="py-5">
					<button
						onclick={() => (openFaq = openFaq === i ? null : i)}
						class="flex w-full items-center justify-between gap-4 text-left"
					>
						<span class="font-medium text-[var(--color-ink)]">{faq.q}</span>
						<span
							class="shrink-0 text-[var(--color-muted)] transition-transform duration-200"
							class:rotate-180={openFaq === i}
						>
							↓
						</span>
					</button>
					{#if openFaq === i}
						<p class="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{faq.a}</p>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- FINAL CTA -->
<section class="px-6 py-24 text-center">
	<div class="mx-auto max-w-xl">
		<h2 class="font-serif text-4xl font-bold text-[var(--color-ink)]">
			Ready to bring calm to your team?
		</h2>
		<p class="mx-auto mt-4 max-w-md text-[var(--color-muted)]">
			WorshipOS helps your church plan with clarity and care for the people who serve.
		</p>
		<a
			href="https://app.worshiposonline.com/signup"
			class="mt-8 inline-block rounded-xl bg-[var(--color-brand)] px-8 py-3.5 font-semibold text-white transition-colors hover:bg-[var(--color-brand-mid)]"
		>
			Get started
		</a>
	</div>
</section>
