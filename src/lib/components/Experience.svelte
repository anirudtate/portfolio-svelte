<script lang="ts">
  const experiences = [
    {
      title: "Pentagon Tapes / TagOn",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi molestiae eaque consectetur consequuntur architecto.",
      date: "May - Oct 2023",
      stack: ["React Js", "Redux", "Semantic UI"]
    }
  ];
</script>

<div class="flex flex-col gap-2">
  {#each experiences as experience}
    <div class="flex gap-2 rounded-md py-4 px-4 -mx-4">
      <div class="w-32">
        <div class="text-muted-foreground">
          {experience.date}
        </div>
      </div>
      <div class="flex-1">
        <div class="flex flex-col gap-2">
          <div class="font-semibold underline-offset-4">
            {experience.title}
          </div>
          <div class="text-muted-foreground">{experience.description}</div>
          <div class="flex gap-2 flex-wrap">
            {#each experience.stack as s}
              <div class="text-sm bg-muted text-muted-foreground rounded-md px-2 py-1 leading-3">
                {s}
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>
