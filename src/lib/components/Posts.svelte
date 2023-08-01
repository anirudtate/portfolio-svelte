<script context="module" lang="ts">
  export type post = {
    title: string;
    description: string;
    slug: string;
  };
</script>

<script lang="ts">
  export let posts: post[];
</script>

<div class="grid gap-4 grid-cols-1 sm:grid-cols-3 md:grid-cols-3">
  {#each posts as post}
    <a
      href={`/blog/${post.slug}`}
      class="flex flex-col gap-1.5 bg-card border text-secondary-foreground rounded-md p-3 hover:bg-secondary"
    >
      <div class="underline underline-offset-4 font-semibold">{post.title}</div>
      <div class="text-muted-foreground">{post.description}</div>
    </a>
  {/each}
</div>
