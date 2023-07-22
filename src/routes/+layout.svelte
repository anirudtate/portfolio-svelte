<script>
	import '@fontsource/inter';
	import '../app.postcss';
	import Header from './Header.svelte';
</script>

<div class="min-h-screen w-full bg-background text-[0.9rem] antialiased">
	<div class="w-[700px] max-w-full mx-auto p-6 min-h-screen">
		<Header />
		<slot />
	</div>
</div>
