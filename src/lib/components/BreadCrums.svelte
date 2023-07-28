<script lang="ts">
	import { page } from '$app/stores';
	import { ChevronRight } from 'lucide-svelte';

	const items = $page.url.pathname.split('/').slice(1);
</script>

<div class="flex items-center bg-red-500">
	{#each items as item, i}
		{#if i === items.length - 1}
			<div class="font-bold mt-[-0.1rem]">{item}</div>
		{:else}
			<div class="mt-[-0.1rem]">{item}</div>
			<ChevronRight class="h-4 w-4" />
		{/if}
	{/each}
</div>
