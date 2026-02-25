<script lang="ts">
	let { data } = $props();
</script>

<article class="mx-auto max-w-xl py-4">
	<div class="mb-4">
		<h1 class="text-4xl font-bold">{data.meta.title}</h1>
		<p class="text-sm text-neutral-400">Published on {data.meta.date}</p>
	</div>
	<div class="text-lg leading-8 font-extralight">
		<data.content />
	</div>
</article>
