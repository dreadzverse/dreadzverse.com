<script lang="ts">
	import { socialLinks } from '$lib/configs';
	import { SiDiscord } from '@icons-pack/svelte-simple-icons';
</script>

<section class="flex h-full w-full flex-col items-center justify-center gap-4">
	<section
		class="mx-auto flex max-w-md flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/3 px-6 py-5 text-center shadow-lg shadow-black/10 backdrop-blur-sm"
	>
		<p class="text-sm font-light tracking-wide text-zinc-400 uppercase">
			🍻 Passa per la taverna big bro 🍻
		</p>

		<a
			href="https://links.dreadzverse.com/discord"
			target="_blank"
			rel="external noreferrer noopener"
			class="group flex w-full items-center gap-4 rounded-xl border border-sky-600/10 bg-sky-600/6 p-4 text-left transition-all duration-300 hover:scale-[1.02] hover:border-sky-600/30 hover:bg-sky-600/10 hover:shadow-lg hover:shadow-sky-600/10"
		>
			<div
				class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#5865F2] text-white shadow-lg shadow-[#5865F2]/20 transition-transform duration-300 group-hover:rotate-3"
			>
				<SiDiscord title="Discord" size={28} />
			</div>

			<div class="min-w-0 flex-1">
				<p class="font-medium text-zinc-100">La Taverna Del Dreadz</p>

				<p class="mt-0.5 text-sm font-light text-zinc-400">Entra nella community</p>
			</div>

			<span
				class="text-xl text-zinc-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-sky-600"
				aria-hidden="true"
			>
				→
			</span>
		</a>
	</section>
	<p class="text-center text-lg font-extralight">Ecco dove puoi trovarmi</p>
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
