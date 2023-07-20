<script lang="ts">
	export let title: string;
	export let subTitle: string;
</script>

<div class="flex flex-col gap-2 border-b pb-7 mb-5">
	<div class="text-lg font-bold">{title}</div>
	<div class="text-muted-foreground">{subTitle}</div>
	<slot />
</div>
