<script lang="ts">
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
	import { fade } from 'svelte/transition';
	import { MoonStar, SunMedium } from 'lucide-svelte';
	import { toggleTheme } from '$lib/utils';
	import Menu from '$lib/components/Menu.svelte';

	export let data;
</script>

<div
	class="font-sans min-h-screen w-full text-[0.9rem] antialiased bg-background/30 backdrop-blur-sm transition-all"
>
	<div class="max-w-[43rem] w-full mx-auto p-6 min-h-screen">
		<div class="flex justify-between items-center pb-3 border-b pt-3 gap-3">
			<a href="/">
				<div class="font-bold text-lg">anirudtate</div>
				<div>A full stack developer who owns a computer</div>
			</a>
			<div class="flex gap-2 items-center">
				<button
					class="text-foreground hover:bg-secondary p-1.5 rounded-sm h-7 w-7 flex items-center justify-center"
					on:click={() => toggleTheme()}
				>
					<MoonStar class="dark:block hidden" />
					<SunMedium class="dark:hidden block" />
				</button>
				<Menu />
			</div>
		</div>

		{#key data.url}
			<div in:fade={{ duration: 150 }}>
				<slot />
			</div>
		{/key}

		<div class="border-t pt-2 pb-3 text-muted-foreground">
			<a
				href="https://github.com/anirudtate"
				target="_blank"
				class="text-foreground underline underline-offset-4">anirudtate</a
			>
			&copy {new Date().getFullYear()}
		</div>
	</div>
</div>
