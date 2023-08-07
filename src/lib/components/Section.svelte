<script lang="ts">
  export let title: string;
</script>

<div class="flex flex-col gap-3 pt-5 pb-7">
  <div class="text-lg font-bold">{title}</div>
  <slot />
</div>
