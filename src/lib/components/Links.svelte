<script lang="ts">
  import { ArrowUpRight } from "lucide-svelte";

  export const links = [
    "mailto:anirud.programming@gmail.com",
    "https://github.com/anirudtate",
    "https://codeforces.com/profile/anirudtate",
    "https://www.codechef.com/users/anirudtate",
    "https://twitter.com/anirudtate"
  ];
</script>

<div class="flex flex-col gap-4">
  {#each links as link}
    <a href={link} target="_blank" class="font-semibold hover:underline underline-offset-4"
      >{link}
      <ArrowUpRight class="h-4 w-4 inline" />
    </a>
  {/each}
</div>
