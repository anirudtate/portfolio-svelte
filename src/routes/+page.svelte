<script>
	import { toggleTheme } from "$lib/utils";
</script>

<div class="text-foreground">Welcome to SvelteKit</div>
<div class="text-foreground">Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</div>
<button class="bg-background border border-border rounded-sm p-2" on:click={()=>toggleTheme()}>Light</button>
