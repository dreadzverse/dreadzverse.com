import type { Post } from '$lib/types';

export const load = async () => {
	const files = import.meta.glob('$content/posts/*.md');
	const posts = await Promise.all(
		Object.entries(files).map(async ([path, resolver]) => {
			const file = (await resolver()) as { metadata: Omit<Post, 'slug'> };
			const slug = path.split('/').pop()?.slice(0, -3);
			return { ...file.metadata, slug };
		})
	);

	return {
		posts: posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
	};
};
