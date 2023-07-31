<script>
	import Posts from '$lib/components/Posts.svelte';
	import Section from '$lib/components/Section.svelte';
	export let data;
</script>

<Section title="Posts" description="Notes on things you can do on your computer.">
	<div class="flex flex-col gap-4">
		<Posts posts={data.posts} />
	</div>
</Section>
