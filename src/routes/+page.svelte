<script lang="ts">
	import { ArrowRight } from 'lucide-svelte';
	import Section from '$lib/components/Section.svelte';
	import SubSection from '../lib/components/SubSection.svelte';
	import Posts from '$lib/components/Posts.svelte';
	import { linksConfig } from '$lib/config/linksConfig';
	export let data;
</script>

<Section title="Posts" description="Notes on things you can do on your computer.">
	<div class="flex flex-col gap-4">
		<Posts posts={data.posts} />
		<a
			href="/blog"
			class="group text-foreground flex items-center gap-1.5 hover:gap-2 cursor-pointer transition-[gap]"
		>
			<div class="group-hover:underline underline-offset-4">See all posts</div>
			<ArrowRight class="h-4 w-4" />
		</a>
	</div>
</Section>

<div class="border-b" />

<Section title="Projects" description="Things I created with my computer.">
	<div class="grid grid-cols-3 gap-4">
		<SubSection
			title="shadcn/ui"
			description="Beautifully designed components that you can copy and paste into your apps."
		/>
		<SubSection
			title="shadcn/ui"
			description="Beautifully designed components that you can copy and paste into your apps."
		/>
		<SubSection
			href="https://google.com"
			title="shadcn/ui"
			description={`Beautifully
			 designed components that you can copy and paste into youradf asdjfka adsf asdfkadsjfkadf apps.`}
		/>
		<a
			href="https://github.com/anirudtate"
			target="_blank"
			class="group text-foreground flex items-center gap-1.5 hover:gap-2 cursor-pointer transition-[gap]"
		>
			<div class="group-hover:underline underline-offset-4">See all projects</div>
			<ArrowRight class="h-4 w-4" />
		</a>
	</div>
</Section>

<div class="border-b" />

<Section title="Links" description="Where to find me on a computer.">
	<div class="flex flex-col gap-4">
		{#each linksConfig as link}
			<a href={link} target="_blank" class="underline underline-offset-4 font-semibold">{link}</a>
		{/each}
	</div>
</Section>
