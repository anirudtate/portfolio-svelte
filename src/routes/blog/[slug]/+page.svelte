<script lang="ts">
	import './gruvbox.css';
	export let data;
</script>

<div class="pt-5 text-[0.9rem] prose prose-slate prose-base max-w-none dark:prose-invert">
	<svelte:component this={data.content} />
</div>
