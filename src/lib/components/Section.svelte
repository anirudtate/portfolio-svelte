<script lang="ts">
  export let title: string;
  export let description: string;
</script>

<div class="flex flex-col gap-1.5 pt-5 pb-7">
  <div class="text-lg font-bold">{title}</div>
  <div class="text-muted-foreground mb-2">{description}</div>
  <slot />
</div>
