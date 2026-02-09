<script lang="ts">
	import type { Component } from 'svelte';

	import {
		SiBluesky,
		SiGithub,
		SiInstagram,
		SiRumble,
		SiThreads,
		SiTiktok,
		SiTwitch,
		SiX,
		SiYoutube
	} from '@icons-pack/svelte-simple-icons';

	type Icon = Component<{
		color?: string | undefined;
		size?: number | undefined;
		title?: string | undefined;
	}>;

	type Link = {
		url: string;
		title: string;
		icon: Icon;
	};

	const links: Link[] = [
		{
			url: 'https://twitch.tv/dreadzverse',
			title: 'Twitch',
			icon: SiTwitch as unknown as Icon
		},
		{
			url: 'https://youtube.com/@dreadzverse',
			title: 'YouTube',
			icon: SiYoutube as unknown as Icon
		},
		{
			url: 'https://tiktok.com/@dreadzverse',
			title: 'TikTok',
			icon: SiTiktok as unknown as Icon
		},
		{
			url: 'https://instagram.com/dreadzverse',
			title: 'Instagram',
			icon: SiInstagram as unknown as Icon
		},
		{
			url: 'https://threads.com/dreadzverse',
			title: 'Threads',
			icon: SiThreads as unknown as Icon
		},
		{
			url: 'https://x.com/@dreadzverse',
			title: 'X',
			icon: SiX as unknown as Icon
		},
		{
			url: 'https://bsky.app/profile/dreadzverse.bsky.social',
			title: 'Bluesky',
			icon: SiBluesky as unknown as Icon
		},
		{
			url: 'https://rumble.com/user/dreadzverse',
			title: 'Rumble',
			icon: SiRumble as unknown as Icon
		},
		{
			url: 'https://github.com/dreadzverse',
			title: 'Github',
			icon: SiGithub as unknown as Icon
		}
	];
</script>

<main class="grow">
	<section class="flex h-full w-full flex-col items-center justify-center gap-4">
		<h1 class="text-8xl font-bold">Dreadz</h1>
		<p class="text-center text-lg font-extralight">
			Listen. Understand. Practice. Embrace imperfection to achieve progress.
		</p>
		<section class="flex flex-wrap items-center justify-center gap-3">
			{#each links as link, i (i)}
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
</main>
