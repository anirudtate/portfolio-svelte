<script>
	import '@fontsource/inter/100.css';
	import '@fontsource/inter/200.css';
	import '@fontsource/inter/300.css';
	import '@fontsource/inter/400.css';
	import '@fontsource/inter/500.css';
	import '@fontsource/inter/600.css';
	import '@fontsource/inter/700.css';
	import '@fontsource/inter/800.css';
	import '@fontsource/inter/900.css';
	import '../app.postcss';
	import Header from '$lib/components/Header.svelte';
</script>

<div
	class="font-sans min-h-screen w-full text-[0.9rem] antialiased bg-background/30 backdrop-blur-sm transition-all"
>
	<div class="max-w-[43rem] w-full mx-auto p-6 min-h-screen">
		<Header />
		<slot />
	</div>
</div>
