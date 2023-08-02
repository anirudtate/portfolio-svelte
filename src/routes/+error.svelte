<script lang="ts">
  import { page } from "$app/stores";
</script>

<div class="h-40 flex items-center justify-center flex-col">
  <div class="text-3xl font-bold">2 + 2 = 5</div>
  <div>{$page.status}: {$page?.error?.message}</div>
</div>
