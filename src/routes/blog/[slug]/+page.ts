import { error } from '@sveltejs/kit';

export const load = async ({ params }: { params: { slug: string } }) => {
	try {
		const post = await import(`$content/posts/${params.slug}.md`);

		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		console.log(e);

		throw error(404, `Could not find post: ${params.slug}`);
	}
};
