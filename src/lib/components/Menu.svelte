<script>
  import { menuConfig } from "$lib/config/menuConfig";
  import { clickOutside } from "$lib/utils";
  import { Menu } from "lucide-svelte";
  import { fade, slide } from "svelte/transition";

  let open = false;
</script>

<div
  class="relative"
  use:clickOutside={() => {
    open = false;
  }}
>
  <button
    class={"text-foreground p-1.5 rounded-sm h-7 w-7 flex items-center justify-center leading-4" +
      (open ? "" : " hover:bg-secondary")}
    on:click={() => (open = !open)}
  >
    <Menu /></button
  >
  {#if open}
    <span in:fade={{ duration: 100 }}>
      <div
        class="absolute border rounded-sm p-1 top-full right-0 bg-background flex flex-col items-start w-24"
        in:slide={{ duration: 150 }}
      >
        {#each menuConfig as item}
          <a
            href={item.href}
            class="w-full rounded-sm hover:bg-secondary px-2 py-0.5"
            on:click={() => (open = false)}
          >
            {item.name}
          </a>
        {/each}
      </div>
    </span>
  {/if}
</div>
