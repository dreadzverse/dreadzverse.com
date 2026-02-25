<script lang="ts">
	import { resolve } from '$app/paths';

	let { data } = $props();
</script>

<h1 class="text-6xl">Blog</h1>
<ul class="my-4">
	{#each data.posts as post, i (i)}
		<li class="rounded bg-neutral-900 p-4">
			<a href={resolve(`/blog/${post.slug}`)}>
				<h2 class="text-2xl">
					{post.title}
				</h2>
			</a>
			<p class="text-sm text-neutral-400">{post.date} - {post.description}</p>
		</li>
	{/each}
</ul>
