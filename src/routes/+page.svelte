<script lang="ts">
	import { name, socialLinks } from '$lib/configs';
</script>

<section class="flex h-full w-full flex-col items-center justify-center gap-4">
	<h1 class="text-8xl font-bold">{name}</h1>
	<p class="text-center text-lg font-extralight">
		Listen. Understand. Practice. Embrace imperfection to achieve progress.
	</p>
	<section class="flex flex-wrap items-center justify-center gap-3">
		{#each socialLinks as link, i (i)}
			<a
				href={link.url}
				target="_blank"
				rel="external noreferrer noopener"
				class="transition-all duration-300 hover:scale-110 hover:text-sky-600"
			>
				<link.icon title={link.title} size={32} />
			</a>
		{/each}
	</section>
</section>
