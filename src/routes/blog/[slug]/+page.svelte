<script lang="ts">
	export let data;
</script>

<div class="prose prose-slate dark:prose-invert">
	<svelte:component this={data.content} />
</div>
