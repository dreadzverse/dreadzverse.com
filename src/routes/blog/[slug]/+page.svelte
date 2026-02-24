<script lang="ts">
	let { data } = $props();
</script>

<article class="grow p-8">
	<div class="mb-4">
		<h1 class="text-4xl">{data.meta.title}</h1>
		<p class="text-sm text-neutral-400"><em>Published on {data.meta.date}</em></p>
	</div>
	<data.content />
</article>
