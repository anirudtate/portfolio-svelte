<script lang="ts">
  import { ArrowUpRight } from "lucide-svelte";

  export const links = [
    {
      name: "Mail",
      href: "mailto:anirud.programming@gmail.com"
    },
    {
      name: "Github",
      href: "https://github.com/anirudtate"
    },
    {
      name: "Codeforces",
      href: "https://codeforces.com/profile/anirudtate"
    },
    {
      name: "Codechef",
      href: "https://www.codechef.com/users/anirudtate"
    },
    {
      name: "Twitter",
      href: "https://twitter.com/anirudtate"
    }
  ];
</script>

<div class="flex flex-col">
  {#each links as link}
    <a
      href={link.href}
      target="_blank"
      class="group flex gap-2 hover:bg-secondary/30 rounded-md py-2 px-4 -mx-4"
    >
      <div class="w-24">
        <div class="text-muted-foreground">{link.name}</div>
      </div>
      <div class="flex-1 font-semibold group-hover:underline underline-offset-4">
        {link.href}
        <ArrowUpRight class="h-4 w-4 inline" />
      </div>
    </a>
  {/each}
</div>
