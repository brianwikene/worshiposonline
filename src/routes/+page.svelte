<script lang="ts">
	let openFaq = $state<number | null>(null);

	const features = [
		{
			icon: '📋',
			title: 'Worship Flow',
			body: 'Build and lock your order of worship with calm edits, audibles, and preserved history.'
		},
		{
			icon: '🎵',
			title: 'Songs',
			body: 'Keep charts, keys, and arrangement notes in one place so rehearsal stays prepared.'
		},
		{
			icon: '👥',
			title: 'Volunteer Scheduling',
			body: 'Assign by role, honor availability, and send clear invites without pressure language.'
		},
		{
			icon: '🤲',
			title: 'Care Notes',
			body: 'Capture important context quietly so leaders can respond pastorally, not reactively.'
		},
		{
			icon: '🏘️',
			title: 'Groups',
			body: 'See teams and households clearly, with roles and relationships that stay easy to maintain.'
		},
		{
			icon: '🧒',
			title: 'Kids Check-In',
			body: 'Secure check-in/check-out workflows built for safety, accountability, and parent confidence.'
		}
	];

	const differences = [
		{
			pressure: 'URGENT: You\'re short again.',
			calm: 'Two positions are still open. Invite backups or review blockouts.'
		},
		{
			pressure: 'Volunteer Health Score dropped 28%.',
			calm: 'Jeff has served five straight Sundays. Consider a rest week.'
		},
		{
			pressure: 'No response from team members.',
			calm: '4 responses are still pending. Send one gentle reminder.'
		}
	];

	const beliefs = [
		'We believe trust is the feature that matters most.',
		'We believe history should be preserved, not rewritten.',
		'We believe software should reduce anxiety, not manufacture urgency.',
		'We believe leaders need clarity, not noise.'
	];

	const faqs = [
		{
			q: 'Will this create more work during setup?',
			a: 'Most churches are up and running in an afternoon. You can import your songs, add your team, and build your first plan before the week is out. We designed onboarding to meet you where you are — not to require a fully staffed setup project.'
		},
		{
			q: 'Our volunteers resist new tools. Will this be hard to adopt?',
			a: 'Volunteers only see what is relevant to them: their schedule, their assignments, and their rehearsal materials. There is no app to download, no account to create for basic responses. The interface is calm by design — it does not demand attention.'
		},
		{
			q: 'We already use Planning Center. Why switch?',
			a: 'Planning Center is excellent software. WorshipOS is designed around a different premise: coordination is part of care, not an end in itself. That means no volunteer scoring, no engagement badges, no urgency theater. We also preserve honest history — locked plans stay locked, and real-world changes are recorded, not silently overwritten.'
		},
		{
			q: 'Does the system auto-schedule people?',
			a: 'No. WorshipOS surfaces availability and history so you can make a good decision — it does not make the decision for you. Scheduling is a pastoral act, and we think it should stay that way.'
		},
		{
			q: 'Can this handle multiple services and split teams?',
			a: 'Yes. You can define multiple service times per gathering, assign volunteers to specific times, and see the full schedule matrix at a glance. Split teams, rotating roles, and per-service assignments are all supported.'
		},
		{
			q: 'Is kids check-in secure enough for real ministry use?',
			a: 'Check-in generates unique family codes, tracks guardian pickup, and keeps a complete attendance record. It is designed for the real accountability needs of a children\'s ministry — not as an afterthought.'
		},
		{
			q: 'Will private care context be exposed to everyone?',
			a: 'No. Care notes are access-controlled separately from scheduling. A volunteer coordinator can see schedules without ever seeing pastoral care context. The system is designed so that sensitive information stays with the people who need it.'
		},
		{
			q: 'Can we migrate gradually instead of all at once?',
			a: 'Yes. You can start with just worship planning and add scheduling, check-in, or care tools as your team is ready. Nothing requires a big-bang cutover.'
		},
		{
			q: 'What happens when people do not respond to invites?',
			a: 'WorshipOS shows you clearly who has responded and who has not — without sending automated pressure reminders on your behalf. You decide when and how to follow up. The system supports that decision; it does not make it for you.'
		},
		{
			q: 'What if we need help on a Sunday morning?',
			a: 'We offer direct support via email and are building a growing help center. We are a small team that cares about the churches we work with — you will not be routed through a chatbot.'
		}
	];
</script>

<svelte:head>
	<title>WorshipOS — Worship planning that honors the person, not just the production</title>
	<meta
		name="description"
		content="WorshipOS is calm, trustworthy software for churches that want to plan services, coordinate volunteers, and prepare musicians — without treating people like cogs."
	/>
	<meta property="og:title" content="WorshipOS — Worship planning that honors the person, not just the production" />
	<meta property="og:description" content="WorshipOS is calm, trustworthy software for churches that want to plan services, coordinate volunteers, and prepare musicians — without treating people like cogs." />
	<meta property="og:url" content="https://getworshipos.com" />
	<meta name="twitter:title" content="WorshipOS — Worship planning that honors the person, not just the production" />
	<meta name="twitter:description" content="Calm, trustworthy worship planning software for churches. Plan services, coordinate volunteers, prepare musicians." />
</svelte:head>

<!-- HERO -->
<section class="px-6 pb-24 pt-20 text-center md:pt-32">
	<div class="mx-auto max-w-3xl">
		<p class="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
			Calm church operations
		</p>
		<h1 class="font-serif text-5xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl">
			A calm place to plan, schedule, and shepherd your people.
		</h1>
		<p class="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
			WorshipOS helps your team carry real ministry responsibility without drowning in spreadsheets,
			urgency alerts, and fragmented tools.
		</p>
		<div class="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
			<a
				href="https://worship-os.com/interest"
				class="rounded-xl bg-primary px-8 py-3.5 font-semibold text-primary-foreground transition-colors hover:bg-secondary"
			>
				Request early access
			</a>
			<a
				href="/docs"
				class="rounded-xl border border-border bg-card px-8 py-3.5 font-semibold text-foreground transition-colors hover:bg-muted"
			>
				Explore the docs
			</a>
		</div>
	</div>
</section>

<!-- WEIGHT YOU CARRY -->
<section class="bg-card px-6 py-20">
	<div class="mx-auto max-w-2xl text-center">
		<h2 class="font-serif text-3xl font-bold text-foreground md:text-4xl">
			We understand the weight you carry.
		</h2>
		<p class="mt-6 text-lg leading-relaxed text-muted-foreground">
			You are not just organizing people. You are stewarding trust, protecting volunteers from
			burnout, and helping every Sunday feel cared for.
		</p>
		<p class="mt-4 text-lg leading-relaxed text-muted-foreground">
			That work deserves software that lowers noise and makes decisions clearer.
		</p>
	</div>
</section>

<!-- THE DIFFERENCE -->
<section class="px-6 py-20">
	<div class="mx-auto max-w-4xl">
		<div class="mb-10 text-center">
			<h2 class="font-serif text-3xl font-bold text-foreground md:text-4xl">
				The difference
			</h2>
			<p class="mt-3 text-muted-foreground">
				Most church software shouts. WorshipOS observes, clarifies, and helps leaders decide.
			</p>
		</div>
		<div class="overflow-hidden rounded-2xl border border-border">
			<div class="grid grid-cols-2">
				<div class="border-b border-r border-border bg-red-50 px-6 py-3">
					<p class="text-xs font-bold uppercase tracking-widest text-red-400">Pressure language</p>
				</div>
				<div class="border-b border-border bg-background px-6 py-3">
					<p class="text-xs font-bold uppercase tracking-widest text-primary">Calm operational language</p>
				</div>
			</div>
			{#each differences as row (row.pressure)}
				<div class="grid grid-cols-2">
					<div class="border-b border-r border-border bg-red-50 px-6 py-5">
						<p class="text-sm text-red-700">{row.pressure}</p>
					</div>
					<div class="border-b border-border bg-card px-6 py-5">
						<p class="text-sm text-foreground">{row.calm}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- FEATURES -->
<section id="features" class="bg-card px-6 py-20">
	<div class="mx-auto max-w-5xl">
		<div class="mb-12 text-center">
			<h2 class="font-serif text-3xl font-bold text-foreground md:text-4xl">
				What it does
			</h2>
			<p class="mx-auto mt-3 max-w-lg text-muted-foreground">
				Everything your team needs to plan, coordinate, and care — in one quiet, reliable place.
			</p>
		</div>
		<div class="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
			{#each features as feature (feature.title)}
				<div class="rounded-2xl border border-border bg-background p-7">
					<span class="mb-4 block text-2xl">{feature.icon}</span>
					<h3 class="mb-2 font-serif text-xl font-bold text-foreground">{feature.title}</h3>
					<p class="text-sm leading-relaxed text-muted-foreground">{feature.body}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- MANIFESTO — DARK SECTION -->
<section class="bg-primary px-6 py-24 text-primary-foreground">
	<div class="mx-auto max-w-4xl">
		<div class="mb-14 text-center">
			<h2 class="font-serif text-3xl font-bold text-primary-foreground md:text-4xl">
				Manifesto
			</h2>
			<p class="mt-3 text-primary-foreground/70">
				Software for the church should preserve dignity, protect context, and keep people human.
			</p>
		</div>
		<div class="grid gap-4 sm:grid-cols-2">
			{#each beliefs as belief (belief)}
				<div class="rounded-xl border border-white/15 bg-white/10 px-7 py-5">
					<p class="font-medium text-primary-foreground">{belief}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- FOUNDATIONAL COMMITMENTS -->
<section class="px-6 py-24">
	<div class="mx-auto max-w-3xl text-center">
		<h2 class="font-serif text-3xl font-bold text-foreground md:text-4xl">
			Foundational commitments
		</h2>
		<p class="mx-auto mt-4 max-w-lg text-muted-foreground">
			These are not features. They are the promises we hold ourselves to as we build.
		</p>
		<div class="mt-10 grid gap-4 text-left sm:grid-cols-2">
			{#each beliefs as belief (belief)}
				<div class="rounded-xl border border-border bg-card px-7 py-5">
					<p class="font-medium leading-relaxed text-foreground">{belief}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- FAQ -->
<section class="bg-card px-6 py-20">
	<div class="mx-auto max-w-2xl">
		<h2 class="mb-10 text-center font-serif text-3xl font-bold text-foreground">
			Common objections
		</h2>
		<div class="divide-y divide-border">
			{#each faqs as faq, i (faq.q)}
				<div class="py-5">
					<button
						onclick={() => (openFaq = openFaq === i ? null : i)}
						class="flex w-full items-center justify-between gap-4 text-left"
					>
						<span class="font-medium text-foreground">{faq.q}</span>
						<span
							class="shrink-0 text-muted-foreground transition-transform duration-200"
							class:rotate-180={openFaq === i}
						>
							↓
						</span>
					</button>
					{#if openFaq === i}
						<p class="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- FINAL CTA -->
<section class="px-6 py-24 text-center">
	<div class="mx-auto max-w-xl">
		<h2 class="font-serif text-4xl font-bold text-foreground">
			A calm place to hold the life of your church.
		</h2>
		<p class="mx-auto mt-4 max-w-md text-muted-foreground">
			Move from reactive coordination to steady shepherding, one gathering at a time.
		</p>
		<div class="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
			<a
				href="https://worship-os.com/interest"
				class="rounded-xl bg-primary px-8 py-3.5 font-semibold text-primary-foreground transition-colors hover:bg-secondary"
			>
				Request early access
			</a>
			<a
				href="https://worship-os.com/login"
				class="rounded-xl border border-border bg-card px-8 py-3.5 font-semibold text-foreground transition-colors hover:bg-muted"
			>
				Sign in
			</a>
		</div>
	</div>
</section>
