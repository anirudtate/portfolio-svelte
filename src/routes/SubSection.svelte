<script lang="ts">
	export let title: string;
	export let subTitle: string | undefined = undefined;
	export let href: string = '';
</script>

<a
	{href}
	class="flex flex-col gap-1.5 bg-card/30 border transition-colors backdrop-blur-sm text-secondary-foreground rounded-md p-3 hover:bg-secondary"
>
	<div class="underline underline-offset-4 font-semibold">{title}</div>
	{#if subTitle !== undefined}
		<div class="text-muted-foreground">{subTitle}</div>
	{/if}
</a>
