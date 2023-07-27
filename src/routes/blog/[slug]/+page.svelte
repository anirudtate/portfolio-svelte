<script lang='ts'>
    export let data;
</script>

<div class="prose prose-slate">
    <svelte:component this={data.content} />
</div>