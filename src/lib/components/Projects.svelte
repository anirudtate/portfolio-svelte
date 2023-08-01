<script context="module" lang="ts">
	export type project = {
		title: string;
		description: string;
		href: string;
	};
</script>

<script lang="ts">
	export let projects: project[];
</script>

<div class="grid gap-4 grid-cols-1 sm:grid-cols-3 md:grid-cols-3">
	{#each projects as project}
		<a
			href={project.href}
			class="flex flex-col gap-1.5 bg-card border text-secondary-foreground rounded-md p-3 hover:bg-secondary"
		>
			<div class="underline underline-offset-4 font-semibold">{project.title}</div>
			<div class="text-muted-foreground">{project.description}</div>
		</a>
	{/each}
</div>
