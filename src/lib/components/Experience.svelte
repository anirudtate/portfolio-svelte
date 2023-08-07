<script lang="ts">
  import { ArrowUpRight } from "lucide-svelte";

  const experiences = [
    {
      title: "Pentagon Tapes / TagOn",
      description: "A 3D algorithm visualizer.",
      date: "May - Oct 2023",
      href: "https://algovisual3d.vercel.app",
      stack: ["React Js", "Redux", "Semantic UI"]
    }
  ];
</script>

<div class="flex flex-col gap-2">
  {#each experiences as experience}
    <a
      href={experience.href}
      class="group flex gap-2 hover:bg-secondary/30 rounded-md py-4 px-4 -mx-4"
    >
      <div class="w-32">
        <div class="text-muted-foreground">
          {experience.date}
        </div>
      </div>
      <div class="flex-1">
        <div class="flex flex-col gap-2">
          <div class="font-semibold group-hover:underline underline-offset-4">
            {experience.title}
            {#if experience.href}
              <ArrowUpRight class="h-4 w-4 inline" />
            {/if}
          </div>
          <div class="text-muted-foreground">{experience.description}</div>
          <div class="flex gap-2 flex-wrap">
            {#each experience.stack as s}
              <div class="text-sm bg-secondary rounded-3xl px-2 py-1 leading-3">{s}</div>
            {/each}
          </div>
        </div>
      </div>
    </a>
  {/each}
</div>
