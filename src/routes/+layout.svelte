<script>
	import '@fontsource/inter';
	import '../app.postcss';
	import Header from './Header.svelte';
</script>

<div class="min-h-screen w-full bg-background text-sm antialiased">
	<div class="w-[750px] max-w-full mx-auto p-10 min-h-screen">
		<Header />
		<slot />
	</div>
</div>
