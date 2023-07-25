<script lang="ts">
	export let title: string;
	export let subTitle: string | undefined = undefined;
	export let href: string | undefined = undefined;
</script>

{#if href !== undefined}
	<a {href}>
		<div class="flex flex-col gap-1.5">
			<div class="underline underline-offset-4 font-semibold">{title}</div>
			{#if subTitle !== undefined}
				<div class="text-muted-foreground">{subTitle}</div>
			{/if}
		</div>
	</a>
{:else}
	<div class="flex flex-col gap-1.5">
		<div class="underline underline-offset-4 font-semibold">{title}</div>
		{#if subTitle !== undefined}
			<div class="text-muted-foreground">{subTitle}</div>
		{/if}
	</div>
{/if}
