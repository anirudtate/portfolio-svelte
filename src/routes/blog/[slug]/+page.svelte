<script lang="ts">
	export let data;
</script>

<div class="pt-5 text-[0.95rem] prose prose-slate prose-sm max-w-none dark:prose-invert">
	<svelte:component this={data.content} />
</div>
