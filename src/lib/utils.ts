import type { Post } from "./types";

export function toggleTheme() {
  if (localStorage.theme === "light") {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
}

export async function getPosts() {
  let posts: Post[] = [];

  const paths = import.meta.glob("/src/content/*.md", { eager: true });

  for (const path in paths) {
    const file = paths[path];
    const slug = path.split("/").at(-1)?.replace(".md", "");

    if (file && typeof file === "object" && "metadata" in file && slug) {
      const metadata = file.metadata as Omit<Post, "slug">;
      const post = { ...metadata, slug } satisfies Post;
      posts.push(post);
    }
  }

  posts = posts.sort(
    (first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
  );

  return posts;
}

export const clickOutside = (element: HTMLElement, callbackFunction: () => void) => {
  function onClick(event: MouseEvent) {
    if (!element.contains(event.target as Node)) {
      callbackFunction();
    }
  }

  document.body.addEventListener("click", onClick);

  return {
    update(newCallbackFunction: () => void) {
      callbackFunction = newCallbackFunction;
    },
    destroy() {
      document.body.removeEventListener("click", onClick);
    }
  };
};
