<script lang="ts">
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
			class="group text-foreground flex items-center gap-1.5 hover:gap-2 cursor-pointer transition-all"
		>
			<div class="group-hover:underline transition-all underline-offset-4">See all projects</div>
			<div>&#10140;</div>
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
			class="group text-foreground flex items-center gap-1.5 hover:gap-2 cursor-pointer transition-all"
		>
			<div class="group-hover:underline transition-all underline-offset-4">See all projects</div>
			<div>&#10140;</div>
		</div>
	</div>
</Section>

<div class="border-b" />

<Section title="Links" subTitle="Where to find me on a computer.">
	<div class="flex flex-col gap-4">
		<SubSection
			title="mailto:anirud.programming@gmail.com"
			href="mailto:anirud.programming@gmail.com"
		/>
		<SubSection title="https://github.com/anirudtate" href="https://github.com/anirudtate" />
		<SubSection
			title="https://codeforces.com/profile/anirudtate"
			href="https://codeforces.com/profile/anirudtate"
		/>
		<SubSection
			title="https://www.codechef.com/users/anirudtate"
			href="https://www.codechef.com/users/anirudtate"
		/>
		<SubSection title="https://twitter.com/anirudtate" href="https://twitter.com/anirudtate" />
	</div>
</Section>
