import { getPosts } from '$lib/utils';

export async function load() {
	return { posts: await getPosts() };
}
