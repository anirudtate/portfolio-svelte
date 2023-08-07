<script lang="ts">
  import { ArrowRight, ArrowUpRight } from "lucide-svelte";

  const projects = [
    {
      title: "AlgoVisual",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi molestiae eaque consectetur consequuntur architecto.",
      date: "2023",
      href: "https://algovisual3d.vercel.app",
      stack: ["Next Js", "Three Js", "React three fiber", "Tailwindcss"]
    },
    {
      title: "Cf-ladder",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi molestiae eaque consectetur consequuntur architecto.",
      date: "2022",
      href: "https://cf-ladder.vercel.app",
      stack: ["Next Js", "Tailwindcss", "Axios"]
    },
    {
      title: "Portfolio",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi molestiae eaque consectetur consequuntur architecto.",
      date: "2023",
      href: "/",
      stack: ["Svelte", "Tailwindcss"]
    }
  ];
</script>

<div class="flex flex-col gap-2">
  {#each projects as project}
    <a
      href={project.href}
      class="group flex gap-2 hover:bg-secondary/50 rounded-md py-4 px-4 -mx-4"
    >
      <div class="w-16">
        <div class="text-muted-foreground">
          {project.date}
        </div>
      </div>
      <div class="flex-1">
        <div class="flex flex-col gap-2">
          <div class="font-semibold group-hover:underline underline-offset-4">
            {project.title}
            {#if project.href}
              <ArrowUpRight class="h-4 w-4 inline" />
            {/if}
          </div>
          <div class="text-muted-foreground">{project.description}</div>
          <div class="flex gap-2 flex-wrap">
            {#each project.stack as s}
              <div class="text-sm bg-muted text-muted-foreground rounded-md px-2 py-1 leading-3">
                {s}
              </div>
            {/each}
          </div>
        </div>
      </div>
    </a>
  {/each}
</div>
<div class="p-2" />
<a
  href="https://github.com/anirudtate?tab=repositories"
  target="_blank"
  class="group text-foreground flex items-center gap-1.5 hover:gap-2 cursor-pointer transition-[gap] mt-[-1rem]"
>
  <div class="group-hover:underline underline-offset-4">See all projects</div>
  <ArrowRight class="h-4 w-4" />
</a>
