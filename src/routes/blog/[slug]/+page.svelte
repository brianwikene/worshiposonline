<script lang="ts">
	import type { PageData } from './$types';

	let { data } = $props<{ data: PageData }>();
</script>

<!-- The MDsveX layout (BlogPost.svelte) wraps the content automatically via the layout key in svelte.config.js -->
<data.content />
