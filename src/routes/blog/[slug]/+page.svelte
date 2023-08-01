<script lang="ts">
  import "./gruvbox.css";
  export let data;
</script>

<div
  class="pt-5 pb-5 text-[0.9rem] prose prose-zinc prose-base max-w-none dark:prose-invert prose-h1:mt-0 prose-h2:mt-0 prose-p:mt-0 prose-h1:mb-2 prose-h2:mb-2 prose-p:mb-2 prose-hr:mb-6 prose-hr:mt-6 prose-hr:border-border"
>
  <svelte:component this={data.content} />
</div>
