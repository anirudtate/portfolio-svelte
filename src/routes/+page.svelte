<script lang="ts">
	import { ArrowRight } from 'lucide-svelte';
	import Section from './Section.svelte';
	import SubSection from './SubSection.svelte';
</script>

<Section title="Posts" subTitle="Notes on things you can do on your computer.">
	<div class="flex flex-col gap-4">
		<SubSection
			title="shadcn/ui"
			subTitle="Beautifully designed components that you can copy and paste into your apps."
		/>
		<SubSection
			title="shadcn/ui"
			subTitle="Beautifully designed components that you can copy and paste into your apps."
		/>
		<SubSection
			href="https://google.com"
			title="shadcn/ui"
			subTitle="Beautifully designed components that you can copy and paste into your apps."
		/>
		<div
			class="group text-foreground flex items-center gap-1.5 hover:gap-2 cursor-pointer transition-[gap]"
		>
			<div class="group-hover:underline underline-offset-4">See all projects</div>
			<ArrowRight class="h-4 w-4" />
		</div>
	</div>
</Section>

<div class="border-b" />

<Section title="Projects" subTitle="Things I created with my computer.">
	<div class="flex flex-col gap-4">
		<SubSection
			title="AlgoVisual"
			subTitle="Beautifully designed components that you can copy and paste into your apps."
			href="https://algovisual3d.vercel.app"
		/>
		<SubSection
			title="Cf-ladder"
			subTitle="Beautifully designed components that you can copy and paste into your apps."
			href="https://cf-ladder.vercel.app"
		/>
		<div
			class="group text-foreground flex items-center gap-1.5 hover:gap-2 cursor-pointer transition-[gap]"
		>
			<div class="group-hover:underline underline-offset-4">See all projects</div>
			<ArrowRight class="h-4 w-4" />
		</div>
	</div>
</Section>

<div class="border-b" />

<Section title="Links" subTitle="Where to find me on a computer.">
	<div class="flex flex-col gap-4">
		<SubSection
			title="Email"
			subTitle="mailto:anirud.programming@gmail.com"
			href="mailto:anirud.programming@gmail.com"
		/>
		<SubSection
			title="Github"
			subTitle="https://github.com/anirudtate"
			href="https://github.com/anirudtate"
		/>
		<SubSection
			title="Codeforces"
			subTitle="https://codeforces.com/profile/anirudtate"
			href="https://codeforces.com/profile/anirudtate"
		/>
		<SubSection
			title="Codechef"
			subTitle="https://www.codechef.com/users/anirudtate"
			href="https://www.codechef.com/users/anirudtate"
		/>
		<SubSection
			title="Twitter"
			subTitle="https://twitter.com/anirudtate"
			href="https://twitter.com/anirudtate"
		/>
	</div>
</Section>
