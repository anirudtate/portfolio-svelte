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
	</div>
</Section>

<div class="border-b" />

<Section title="Projects" subTitle="Things I created with my computer.">
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
	</div>
</Section>

<div class="border-b" />

<Section title="Links" subTitle="Where to find me on a computer.">
	<div class="flex flex-col gap-4">
		<SubSection title="shadcn/ui" />
		<SubSection title="shadcn/ui" />
		<SubSection href="https://google.com" title="https://google.com" />
	</div>
</Section>
