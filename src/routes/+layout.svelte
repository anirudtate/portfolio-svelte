<script>
	import '@fontsource/inter';
	import '../app.postcss';
	import Header from './Header.svelte';
</script>

<div
	class="min-h-screen w-full text-[0.9rem] antialiased bg-background/30 backdrop-blur-sm transition-all"
>
	<div class="w-[43rem] max-w-full mx-auto p-6 min-h-screen">
		<Header />
		<slot />
	</div>
</div>
